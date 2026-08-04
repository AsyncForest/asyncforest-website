// Copy lint for the oracle-frame spec (docs/superpowers/specs/2026-07-10-oracle-site-spec.md).
// Checks built HTML for banned self-description words/patterns and exclamation
// marks, and cross-checks that every file containing a [... SLOT ...] token is
// listed in TODO.md. Run after `astro build`.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const distDir = join(root, 'dist');
const srcDir = join(root, 'src');

const BANNED_WORDS = [
  'unique', 'expert', 'world-class', 'leading', 'trusted', 'passionate',
  'cutting-edge', 'innovative', 'seamless', 'bespoke', 'holistic', 'solutions',
];
const BANNED_PHRASES = [
  'as featured in', 'coming soon', "let's talk", 'testimonial',
];

function walk(dir, ext) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p, ext));
    else if (ext.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

// Visible text only: drop script/style/code/pre bodies, then all tags.
function visibleText(html) {
  return html
    .replace(/<(script|style|code|pre)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(amp|lt|gt|quot|#39);/g, ' ');
}

const problems = [];

if (!existsSync(distDir)) {
  console.error('dist/ not found — run `astro build` first.');
  process.exit(1);
}

for (const file of walk(distDir, ['.html'])) {
  const rel = relative(root, file);
  // Essay pages carry the author's editorial voice, not oracle-frame site
  // copy — exclamation marks and quoted "banned" words are legitimate there.
  // The listing page and site chrome (checked on every other page) still get
  // the full register rules, and the SLOT inventory below still scans src/.
  if (/^dist\/writing\/[^/]+\/index\.html$/.test(rel)) continue;
  const text = visibleText(readFileSync(file, 'utf8'));
  for (const word of BANNED_WORDS) {
    const re = new RegExp(`\\b${word.replace('-', '[- ]')}\\b`, 'i');
    const m = text.match(re);
    if (m) problems.push(`${rel}: banned word "${m[0]}"`);
  }
  for (const phrase of BANNED_PHRASES) {
    if (text.toLowerCase().includes(phrase)) {
      problems.push(`${rel}: banned pattern "${phrase}"`);
    }
  }
  if (text.includes('!')) {
    problems.push(`${rel}: exclamation mark in visible copy`);
  }
}

// SLOT cross-check: every src file containing a slot token must be listed in TODO.md.
const slotRe = /\[[^\]\n]*SLOT[^\]\n]*\]/g;
const slotFiles = new Map();
for (const file of walk(srcDir, ['.astro', '.md', '.mdx', '.ts', '.js'])) {
  const matches = readFileSync(file, 'utf8').match(slotRe);
  if (matches) slotFiles.set(relative(root, file), matches);
}

const todoPath = join(root, 'TODO.md');
if (slotFiles.size > 0 && !existsSync(todoPath)) {
  problems.push('TODO.md missing but SLOT tokens exist in src/');
} else if (slotFiles.size > 0) {
  const todo = readFileSync(todoPath, 'utf8');
  for (const [file, tokens] of slotFiles) {
    if (!todo.includes(file)) {
      problems.push(`TODO.md does not reference ${file} (has ${tokens.length} slot token(s))`);
    }
  }
}

if (problems.length) {
  console.error(`copy check FAILED (${problems.length}):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`copy check passed — ${slotFiles.size} file(s) with slots, all inventoried in TODO.md.`);
