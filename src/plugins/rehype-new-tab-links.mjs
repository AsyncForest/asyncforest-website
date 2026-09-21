// Content links open in a new tab so readers keep their place in the essay.
// In-page fragment links (heading anchors, footnote fallback backrefs) must
// keep navigating the current tab, so anything starting with '#' is skipped.
import { visit } from 'unist-util-visit';

export default function rehypeNewTabLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a') return;
      const href = String(node.properties?.href ?? '');
      if (!href || href.startsWith('#')) return;
      node.properties.target = '_blank';
      node.properties.rel = ['noopener'];
    });
  };
}
