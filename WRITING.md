# Publishing a post

Add one markdown file, push to `master`. GitHub Actions builds and deploys.

## Adding a post

Create `src/content/writing/<slug>.md`. The filename becomes the URL:
`/writing/<slug>/`. **Slugs are permanent once published** — the site is the
canonical home for cross-posted essays, so never rename a published file
(there is an optional `slug` frontmatter override if a filename must differ).

```markdown
---
title: The iteration paradox
description: One to two sentences, 50–160 characters. Used for the meta description, social cards, and the listing page.
pubDate: 2026-08-04
---

Body starts here. First heading level in the body is `##`.
```

Invalid frontmatter (missing title, description out of range, bad date)
fails the build with a zod error naming the field.

Optional fields:

- `updatedDate: 2026-09-01` — shows "Updated" on the post and sets
  `dateModified`/`article:modified_time`.
- `draft: true` — visible in `npm run dev`, excluded from production builds,
  the listing, RSS, and the sitemap. Flip to `false` (or delete) to publish.
- `tags: [ai, software]` — stored but unused for now (no tag pages yet).
- `ogImage: /path/to/card.png` — overrides the generated social card.

## Footnotes

Standard markdown syntax: `[^label]` in the text, `[^label]: Note text.` on
its own line anywhere below. They render as sidenotes on wide screens and
tap-to-expand notes on phones — no "jump to bottom" links. Keep each note to
plain paragraphs (text and links); a note containing lists or code blocks
falls back to an end-of-post section.

## Images

Put images next to the post (or in `src/assets/`) and reference them
relatively so Astro's pipeline optimises them and adds dimensions. **Alt text
is required** — describe what the image shows; use `![](...)` only for pure
decoration.

## Preview

```sh
npm run dev      # http://localhost:4321, drafts visible
npm run verify   # production build + copy lint — run before pushing
```
