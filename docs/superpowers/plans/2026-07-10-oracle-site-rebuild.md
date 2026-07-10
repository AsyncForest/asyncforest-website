# Async Forest oracle-frame site rebuild — implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Async Forest site to the new five-page "oracle frame" spec — new sitemap, new copy, Markdown essay collection, RSS/sitemap, legal footer, and visibly-marked SLOT placeholders inventoried in TODO.md.

**Architecture:** Astro 5 static site, zero client-side JS. Essays live in a content collection (`src/content/essays/*.md`, glob loader) with `title/date/standfirst/pinned/draft` frontmatter. Pages are `.astro` files inheriting one `Base.astro` layout; all styling stays on the existing locked design system (STYLESEED.md: ink monochrome, `#234a8f` accent, Hanken Grotesk + JetBrains Mono, offset-block elevation). Fonts move from the Google Fonts CDN to self-hosted Fontsource packages (privacy + performance; keeps "no cookie banner needed" true by construction).

**Tech Stack:** Astro 5, `@astrojs/rss`, `@astrojs/sitemap`, `@fontsource-variable/hanken-grotesk`, `@fontsource/jetbrains-mono`. No React, no CMS, no analytics in v1.

**Verification (in place of unit TDD):** This is a content site with no runtime logic beyond a `getCollection` sort. The regression net is:
1. `npm run build` must pass after every task.
2. `node scripts/check-copy.mjs` — greps `dist/` for banned self-description words (`unique`, `expert`, `world-class`, `leading`, `trusted`, `passionate`, `cutting-edge`, `innovative`, `seamless`, `bespoke`, `holistic`, `solutions`), banned patterns ("As featured in", "testimonials coming soon"), and exclamation marks in body copy; and verifies every `[… SLOT …]` token found in `src/` is listed in `TODO.md`. Written first (Task 2) so every later task runs under it.

**Spec:** The authoritative brief lives in the conversation; positioning/copy decisions marked FINAL are verbatim, DRAFT may be lightly polished, SLOT must appear as visible placeholders. Design lock: `STYLESEED.md` (obeyed; the brief's §6 palette/typography direction is satisfied by the existing lock — near-monochrome + one accent, two font families, character carried by scale/weight rather than a novelty display face).

**Structural decisions locked here:**
- Models = a `#models` section on `/writing` (spec allows this instead of a sixth page; keeps "five pages only" strictly true). Linked from About as `/writing/#models`.
- Contact = mailto (no form backend on a static site; async-first per spec). Address is a SLOT.
- Header: wordmark "Async Forest" (drop the "Advisory" descriptor everywhere — the entity is "Async Forest Ltd") + four nav links (Work with me, Writing, About, Contact). No nav CTA button — the CTAs live in page bodies with the FINAL copy.
- Footer: light/quiet (not the current dark three-column block): practice line, LinkedIn + email, Companies Act line with `[COMPANY NUMBER SLOT]` and `[REGISTERED OFFICE SLOT]`. "Technical observations, not legal advice" moves out of the footer and onto /work only.
- Signature element: the three quoted questions on Home set as large quiet type. Everything else disciplined.
- Delete `/services/*`, `/how-it-works`, `src/data/services.ts`, old `writing.astro`.

---

### Task 1: Git init + baseline commit

**Files:** create `.gitignore`

- [ ] `git init` in `/home/henry/code/consulting/website`
- [ ] `.gitignore`: `node_modules/`, `dist/`, `.astro/`
- [ ] `git add -A && git commit` — "chore: baseline before oracle-frame rebuild"

### Task 2: Copy-lint script (the failing test)

**Files:** create `scripts/check-copy.mjs`

- [ ] Write the script (see Verification above). It scans `dist/**/*.html` for banned words as self-description (word-boundary, case-insensitive; skip `<code>` blocks), bans `!` inside `<p>`/`<h1..3>` text, and cross-checks SLOT tokens in `src/` + `TODO.md`.
- [ ] Add `"check": "node scripts/check-copy.mjs"` and `"verify": "astro build && node scripts/check-copy.mjs"` to package.json scripts.
- [ ] Run `npm run verify` — expect FAIL (current site has no TODO.md; old copy may trip bans). This is the red state.
- [ ] Commit.

### Task 3: Dependencies + config

**Files:** modify `package.json`, `astro.config.mjs`

- [ ] `npm install @astrojs/rss @astrojs/sitemap @fontsource-variable/hanken-grotesk @fontsource/jetbrains-mono` (if the registry is unreachable, keep the Google Fonts import and note it in TODO.md).
- [ ] astro.config.mjs: add `sitemap()` integration; keep `site: 'https://asyncforest.co.uk'`.
- [ ] Commit.

### Task 4: Content collection + slot essays

**Files:** create `src/content.config.ts`, `src/content/essays/essay-slot-1.md` … `essay-slot-3.md`

- [ ] Collection `essays`: glob loader over `src/content/essays`, zod schema `{ title: string, date: coerce.date, standfirst: string, pinned: boolean default false, draft: boolean default false }`.
- [ ] Three slot essays, titles `[ESSAY SLOT 1 — title TBD]` etc., one pinned, standfirsts marked as slots, body a short placeholder paragraph marked `[ESSAY SLOT — body being written]`.
- [ ] Build passes. Commit.

### Task 5: Base layout — SEO/OG + fonts

**Files:** modify `src/layouts/Base.astro`, `src/styles/global.css`

- [ ] Base.astro: add OpenGraph tags (`og:title`, `og:description`, `og:type`, `og:url`), `<link rel="alternate" type="application/rss+xml">`, drop Google Fonts preconnects.
- [ ] global.css: replace the `@import url(fonts.googleapis…)` with Fontsource imports (moved to Base.astro frontmatter imports); keep every token unchanged.
- [ ] Build passes. Commit.

### Task 6: Header + footer

**Files:** modify `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`, `src/components/Logo.astro`

- [ ] Logo: drop the "Advisory" descriptor; wordmark reads "Async Forest".
- [ ] Header links: Work with me `/work/`, Writing `/writing/`, About `/about/`, Contact `/contact/`. Remove CTA button.
- [ ] Footer (quiet, light): line 1 "Async Forest is the consulting practice of Henry Franks. Engagements are contracted with Async Forest Ltd." · LinkedIn link + email `[EMAIL SLOT]` · legal line "Async Forest Ltd, registered in England and Wales, company no. [COMPANY NUMBER SLOT]. Registered office: [REGISTERED OFFICE SLOT]." No "not legal advice" line here.
- [ ] Build passes. Commit.

### Task 7: Home page

**Files:** rewrite `src/pages/index.astro`

Blocks in order, copy per spec §5.1 (headline + CTA FINAL verbatim; sub-line/problem/doors DRAFT):
- [ ] Hero: type only, FINAL headline, biographical sub-line, CTA "Tell me about the decision you're facing" → `/contact/`.
- [ ] Problem paragraph (quiet, no heading).
- [ ] Three doors as the signature typographic objects — large quoted questions, short body, each linking to `/work/#assurance`, `/work/#sprints`, `/work/#counsel`.
- [ ] Selected writing: `getCollection('essays')` filter `!draft`, sort pinned-first then date desc, top 3; title + standfirst each, link to `/writing/`.
- [ ] Quiet close: one line + same CTA.
- [ ] No proof/testimonial block. Build passes. Commit.

### Task 8: Work with me

**Files:** create `src/pages/work.astro`; delete `src/pages/services/`, `src/pages/how-it-works.astro`, `src/data/services.ts`

- [ ] Intro paragraph (spec DRAFT). Three sections with ids `assurance`, `sprints`, `counsel`, each expanding its door per spec §5.2, each with `from £[PRICE SLOT — …]`.
- [ ] "How I work" boundaries list — all six items verbatim-in-meaning, including the "technical observations, not legal advice" line and the Async Forest Ltd/PI-insurance line.
- [ ] Delete old service pages/data. Build passes. Commit.

### Task 9: Writing index + essay template + models section

**Files:** create `src/pages/writing/index.astro`, `src/pages/writing/[slug].astro`, `src/pages/rss.xml.js`; delete `src/pages/writing.astro`

- [ ] Index: pinned essays on top, then reverse-chronological; title + date + standfirst; no tags. `#models` section at the bottom of the page with heading "Models" and 2 `[MODEL SLOT]` entries (name + one-line description placeholders).
- [ ] Essay template: prose measure ~68ch (existing `--container-prose`), heading hierarchy, aside/footnote styling via `.prose` classes; end-of-essay block: "If this is the kind of question you're working through, get in touch." + standard CTA. No share buttons, no reading time.
- [ ] RSS at `/rss.xml` from the collection (non-draft).
- [ ] Build passes; `/writing/`, three essay pages, and `/rss.xml` in `dist/`. Commit.

### Task 10: About

**Files:** rewrite `src/pages/about.astro`

- [ ] `[THESIS SLOT — being written]` marker + the interim factual paragraph (spec verbatim).
- [ ] Career narrative (short, flat facts: founder/CTO/principal engineer/chief architect across energy, insurance/data, climate-policy AI; currently chief architect at a climate-policy AI non-profit).
- [ ] Research: thesis in one plain sentence; "~140 citations, AAMAS/Springer"; link to Google Scholar `[SCHOLAR LINK SLOT]`.
- [ ] Teaching paragraph (KCL + Notre Dame, annual, responsible AI).
- [ ] "The practice" paragraph (spec DRAFT). Photo: `[PHOTO SLOT — headshot]` placeholder box, no hero treatment. Models link → `/writing/#models`. Standard CTA close.
- [ ] Build passes. Commit.

### Task 11: Contact + 404

**Files:** rewrite `src/pages/contact.astro`, touch `src/pages/404.astro`

- [ ] One line ("…a few sentences is plenty."), mailto link with suggested subject, visible `[EMAIL SLOT]` marking, expectation-setter "I reply to everything within two working days." No calendar widget, no extra fields.
- [ ] 404: one quiet line + link home; check copy register.
- [ ] Build passes. Commit.

### Task 12: TODO.md + green verify

**Files:** create `TODO.md`

- [ ] Inventory every SLOT with file:line references (company number, registered office, email ×(footer, contact), 3 essay slots, 2 model slots, 3 price slots, thesis slot, photo slot, scholar link, LinkedIn URL if placeholder).
- [ ] `npm run verify` — build + copy-lint must PASS (green state).
- [ ] Commit.

### Task 13: Final review pass

- [ ] Banned-word sweep is green; SLOT inventory matches; check Lighthouse-relevant basics (no render-blocking third-party, fonts subset/woff2, semantic landmarks, focus visible, AA contrast per tokens).
- [ ] Run dev server, fetch each page, eyeball rendered HTML for register violations (marketing cadence, title case, exclamation marks).
- [ ] styleseed-design-review skill pass over the new pages; fix what it flags that doesn't conflict with the spec.
- [ ] Commit any fixes.
