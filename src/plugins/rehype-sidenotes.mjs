// Relocates GFM footnotes next to their references so they can render as
// Tufte-style sidenotes (wide viewports) or expand-in-place notes (narrow),
// instead of the jump-to-endnotes-and-back pattern. The CSS and the tiny
// toggle script live in src/pages/writing/[slug].astro — the three pieces
// work together.
//
// Per reference, <sup><a data-footnote-ref>N</a></sup> becomes:
//   <sup class="fn-marker">N</sup>     — static marker (no-JS and wide viewports)
//   <button class="fn-toggle">N</button> — toggle, shown only on narrow + JS
//   <span class="fn-note" role="note">…</span> — the note, in reading order
//
// Only notes made of paragraphs can be inlined (they become display:block
// spans, keeping the surrounding <p> valid). A note containing lists, code
// blocks etc. stays in the end-of-document footnotes section as a fallback;
// the section is removed once every note has been relocated.

import { SKIP, visit } from 'unist-util-visit';

const isElement = (node, tagName) =>
  node?.type === 'element' && (!tagName || node.tagName === tagName);

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children ?? []).map(textOf).join('');
}

const clone = (node) => JSON.parse(JSON.stringify(node));

// A note is inlineable when every element child is a plain paragraph.
const isInlineable = (li) =>
  li.children.every((c) => isElement(c, 'p') || (c.type === 'text' && !c.value.trim()));

// Turn the note <li>'s paragraphs into block spans, dropping the ↩ backrefs.
function inlineNoteChildren(li) {
  const out = [];
  for (const child of li.children) {
    if (!isElement(child, 'p')) continue;
    const p = clone(child);
    p.children = p.children.filter(
      (c) => !(isElement(c, 'a') && c.properties?.dataFootnoteBackref !== undefined)
    );
    const last = p.children[p.children.length - 1];
    if (last?.type === 'text') last.value = last.value.replace(/\s+$/, '');
    out.push({
      type: 'element',
      tagName: 'span',
      properties: { className: ['fn-note-p'] },
      children: p.children,
    });
  }
  return out;
}

export default function rehypeSidenotes() {
  return (tree) => {
    let section = null;
    visit(tree, 'element', (node) => {
      if (isElement(node, 'section') && node.properties?.dataFootnotes !== undefined) {
        section = node;
        return false;
      }
    });
    if (!section) return;
    const list = section.children.find((c) => isElement(c, 'ol'));
    if (!list) return;

    const notes = new Map();
    for (const li of list.children) {
      if (isElement(li, 'li') && li.properties?.id != null) {
        notes.set(String(li.properties.id), li);
      }
    }

    const relocated = new Set();

    visit(tree, 'element', (node, index, parent) => {
      if (node === section) return SKIP;
      if (!isElement(node, 'sup') || !parent || index === undefined) return;
      const a = node.children?.find(
        (c) => isElement(c, 'a') && c.properties?.dataFootnoteRef !== undefined
      );
      if (!a) return;
      const href = String(a.properties.href ?? '');
      if (!href.startsWith('#')) return;
      const noteId = decodeURIComponent(href.slice(1));
      const li = notes.get(noteId);
      if (!li || !isInlineable(li)) return;

      const label = textOf(a) || '?';
      const refId = a.properties.id ? String(a.properties.id) : `fnref-${noteId}`;
      const noteDomId = `note-${refId}`;

      const marker = {
        type: 'element',
        tagName: 'sup',
        properties: { className: ['fn-marker'], ariaHidden: 'true' },
        children: [{ type: 'text', value: label }],
      };
      const toggle = {
        type: 'element',
        tagName: 'button',
        properties: {
          type: 'button',
          className: ['fn-toggle'],
          id: refId,
          ariaExpanded: 'false',
          ariaControls: noteDomId,
          ariaLabel: `Note ${label}`,
        },
        children: [{ type: 'text', value: label }],
      };
      const note = {
        type: 'element',
        tagName: 'span',
        properties: { className: ['fn-note'], id: noteDomId, role: 'note' },
        children: [
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['fn-note-label'], ariaHidden: 'true' },
            children: [{ type: 'text', value: label }],
          },
          ...inlineNoteChildren(li),
        ],
      };

      parent.children.splice(index, 1, marker, toggle, note);
      relocated.add(noteId);
      return index + 3;
    });

    list.children = list.children.filter(
      (li) => !(isElement(li, 'li') && relocated.has(String(li.properties?.id ?? '')))
    );
    if (!list.children.some((c) => isElement(c, 'li'))) {
      tree.children = tree.children.filter((n) => n !== section);
    }
  };
}
