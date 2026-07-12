// Rasterise the Async Forest fir mark (public/favicon.svg) into a PNG asset
// pack at public/brand/. Headless Chrome is the renderer because the mark uses
// <mask>, <pattern> and a prefers-color-scheme <style> block — a browser is the
// only thing guaranteed to render it identically to the live favicon.
//
// We strip the SVG's own <style> (which carries the dark-mode media query) and
// inject fills ourselves, so each variant is deterministic regardless of the
// machine's colour scheme. Per STYLESEED.md the mark keeps the accent ramp on
// light backgrounds and goes near-white on dark ones.
//
// Usage: node scripts/gen-logo-assets.mjs
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, rmSync, renameSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'public', 'favicon.svg');
const OUT = join(root, 'public', 'brand');

const SIZES = [16, 32, 48, 64, 128, 256, 512, 1024];
const VARIANTS = {
  // filename suffix -> class fills (matches favicon.svg's light + dark states)
  '':        { b1: '#234a8f', b2: '#1b3c76', b3: '#142c58', bt: '#cdd9ee' },
  '-on-dark': { b1: '#f4f6fb', b2: '#f4f6fb', b3: '#f4f6fb', bt: '#52565e' },
};

function findChrome() {
  const candidates = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser'];
  for (const c of candidates) {
    try { execFileSync('which', [c], { stdio: 'pipe' }); return c; } catch { /* keep looking */ }
  }
  throw new Error('No Chrome/Chromium binary found (tried: ' + candidates.join(', ') + ')');
}

// Strip the SVG's <style>…</style> so our injected fills fully control colour.
function bareSvg(raw) {
  return raw.replace(/<style[\s\S]*?<\/style>/, '').trim();
}

function pageHtml(svg, size, fills) {
  // The root <svg> has a viewBox but no width/height; setting them to the box
  // size makes it scale-to-fit (preserveAspectRatio meet) and centre itself.
  const sized = svg.replace(/<svg /, `<svg width="${size}" height="${size}" `);
  return `<!doctype html><meta charset="utf-8"><style>
    html,body{margin:0;padding:0;background:transparent}
    .b1{fill:${fills.b1}}.b2{fill:${fills.b2}}.b3{fill:${fills.b3}}.bt{fill:${fills.bt}}
  </style>${sized}`;
}

const chrome = findChrome();
const svg = bareSvg(readFileSync(SRC, 'utf8'));
mkdirSync(OUT, { recursive: true });
const work = join(tmpdir(), 'af-logo-assets');
mkdirSync(work, { recursive: true });

let count = 0;
for (const [suffix, fills] of Object.entries(VARIANTS)) {
  for (const size of SIZES) {
    const html = join(work, `page-${size}${suffix}.html`);
    writeFileSync(html, pageHtml(svg, size, fills));
    const out = join(OUT, `logo-${size}${suffix}.png`);
    execFileSync(chrome, [
      '--headless=new', '--disable-gpu', '--no-sandbox',
      '--force-device-scale-factor=1', '--default-background-color=00000000',
      '--hide-scrollbars', `--window-size=${size},${size}`,
      `--screenshot=${out}`, `file://${html}`,
    ], { stdio: 'pipe' });
    if (!existsSync(out)) throw new Error(`Chrome produced no output for ${out}`);
    count++;
    process.stdout.write(`  logo-${size}${suffix}.png\n`);
  }
}
rmSync(work, { recursive: true, force: true });
console.log(`\nWrote ${count} PNGs to public/brand/`);
