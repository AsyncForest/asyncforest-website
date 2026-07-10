# Async Forest Advisory — Design System

A brand + UI design system for **Async Forest Advisory Ltd.**, a solo, independent
UK technical consultancy. This system powers marketing pages, written advisory
reports, proposals, decks, and light product/tool UIs — all sharing one voice:
**warm, friendly, crisp, and credible.**

> **Sources.** This system was built from a written brief only — no codebase,
> Figma, or existing brand assets were supplied. Visual direction was informed by
> reference sites the founder cited: Optimizely Analytics, VerifyPayments, uxfol.io,
> Zajno, and (most of all) the *RawBlock* / *Marblecrest* studies on designmd.ai —
> taking their **structural clarity and editorial calm**, but deliberately warm and
> polished rather than brutalist. The neutral gray scale was supplied verbatim by
> the founder. **There is no supplied logo** — see *Iconography & Brand Mark*.

---

## 1. Company context

**Async Forest Advisory Ltd.** is a UK limited company: a solo, independent
technical consultancy run by an experienced startup founder/CTO, principal
engineer, data scientist, and architect.

- **Core proposition (evolving):** portfolio/diverse, centred on **independent,
  accountable technical assurance** — a qualified expert who does their own
  verification and *stands behind the conclusion*, as opposed to internal or
  AI-generated self-assessment. Deliverables are **point-in-time, scope-limited
  written reports** with prioritised, actionable fixes.
- **North star (TBC):** startup consultancy; architecture; AI-supported products;
  AI in production; responsible & practical ML; GenAI quality drivers.
- **Emerging service lines:** security audits; load/scalability testing;
  AI-integration concurrency / resilience / cost; and operational + regulatory
  *exposure flagging* (UK GDPR / Children's Code, Online Safety Act, EU AI Act) —
  framed as **technical observations, not legal advice.**
- **Founder profile:** deep hands-on full-stack, cloud (AWS-first), data/ML, system
  design; lectures on responsible & ethical AI. Strong technically; early-stage on
  the commercial side. **AuDHD** — excels at deep technical work; strongly prefers
  low-admin, low-context-switch tools and clear, structured processes. *The brand
  and this system should feel calm, uncluttered, and structured — never noisy.*

### Products / surfaces in this system
1. **Marketing website** — the primary surface. Establishes credibility and explains
   the assurance proposition. See `ui_kits/website/`.
2. **Foundations & components** — tokens + reusable primitives for reports, proposals,
   decks, and any light tooling. See `tokens/`, `components/`.

---

## 2. Content fundamentals — how we write

The voice is that of a **senior, trustworthy expert who is plain-spoken and warm** —
never salesy, never hypey, never jargon-for-its-own-sake. It reads like a good
technical advisor talking to a founder: direct, generous, precise.

- **Person.** Address the reader as **"you"**; refer to the practice as **"I"**
  (it is one person) or **"Async Forest"**. Never the royal "we".
- **Casing.** **Sentence case everywhere** — headings, buttons, nav. The only
  uppercase is the **mono eyebrow/label** treatment (letter-spaced, small), used to
  tag sections and metadata. Never Title Case UI.
- **Tone.** Warm + crisp. Confident without bravado. Comfortable saying what is
  *not* offered ("technical observations, not legal advice"). Favours concrete
  nouns and active verbs.
- **Sentences.** Short to medium. One idea per sentence. Prefers the em dash and the
  colon for structured asides — fitting for a mind that likes clear structure.
- **Numbers & claims.** Specific and honest. Prefer "point-in-time, scope-limited"
  over absolute guarantees. No invented stats or vanity metrics (no data-slop).
- **Emoji.** **None.** Not part of the brand.
- **Jargon.** Technical terms are fine with the right audience (founders/engineers),
  but always earn their place; never stacked for effect.

**Examples of voice:**
- Eyebrow: `INDEPENDENT TECHNICAL ASSURANCE`
- Headline: *"An expert who verifies it themselves — and stands behind the answer."*
- Sub: *"Point-in-time, scope-limited reports with prioritised, actionable fixes.
  Technical observations, not legal advice."*
- CTA: `Start a conversation` · `See how it works` (sentence case, plain verbs)
- Reassurance: *"You'll know exactly what was in scope, what I found, and what to fix first."*

---

## 3. Visual foundations

The look is **calm, structural, and monochrome**: lots of whitespace, a clear grid,
hairline rules, a single clean sans, and near-black ink on a crisp cool-gray neutral
scale. Think "well-set advisory report / high-end studio site", not "SaaS dashboard".

### Colour
- **Neutrals (supplied):** a cool, very slightly blue-tinted gray scale
  (`--gray-50 … --gray-950`) — crisp and clean. Carries text, borders, and app
  chrome.
- **Monochrome by default.** The brand is ink-on-paper: the neutral gray scale does
  almost all the work. Colour is the exception, not the rule.
- **Brand / actions — Ink** (`--brand` = `--gray-900`, hover `--gray-950`, active
  `#000`): near-black carries primary buttons, links, brand fills, and the dark
  hero/footer blocks (`--surface-dark` = `--gray-950`).
- **Accent — Deep blue** (`--accent`, `#234a8f` + `-hover`/`-active`/`-soft`/`-border`):
  the one chromatic action colour, **rare and opt-in only** — e.g. a single hero
  underline, an accent Badge/Button. Desaturated to sit with the cool grays. Never
  default UI, never a wall of blue, never a second accent. The forest-green scale
  survives only as the functional **success** hue.
- **Neutral "warm" surfaces:** `--surface-warm` / `--surface-warm-2` (now
  `--gray-100` / `--gray-200`) alternate sections against white without adding colour.
- **Imagery vibe:** natural, softly lit — matte, not glossy; a hint of grain welcome.
  Muted, never neon. **Black & white / duotone** portraits are the most on-brand.

### Typography (sans-only — no serif)
- **Display / headings:** **Hanken Grotesk** at 600 with tight tracking
  (`--tracking-tight`). Hierarchy comes from **size + weight**, not a serif face.
- **Body / UI:** **Hanken Grotesk** (400–500) — clean, friendly, highly legible.
- **Eyebrows / labels / code:** **JetBrains Mono** — uppercase, letter-spaced
  (`--tracking-eyebrow`) for section tags & metadata; also code and technical tags.
  The mono is the "engineer's fingerprint" that keeps things credible.
- `--font-serif` is kept only as a **legacy alias** that now resolves to the sans
  family — there is no serif in the brand.
- These are **selected substitutes** (Google Fonts) — no brand fonts were supplied.
  **Flagged for the founder to confirm or replace.**

### Spacing & layout
- **4px base grid** (`--space-*`). Rhythm is **generous** — the design breathes.
- Content max `--container: 1200px`; long-form prose capped at `--container-prose:
  68ch` for readability. Section rhythm via `--section-y` (clamped, responsive).
- **Mobile-responsive and mobile-first** in spirit: single-column stacks, fluid
  `--gutter`, nothing that requires a wide viewport.

### Borders, radii, shadows
- **Borders do the structural work** (echoing the RawBlock influence) — hairline
  rules (`--border-subtle/-default`) separate and organise — doubly important now the
  palette is monochrome.
- **Radii:** soft but crisp. Buttons/inputs `--radius-md` (10px); cards `--radius-lg`
  (14px); large media up to `--radius-2xl`. Never fully sharp, never over-rounded.
- **Shadows — tactile blocks.** Elevation is a **solid, blur-free offset shadow**
  (adapted from blocks.css) applied consistently but subtly: raised buttons, cards,
  and inputs sit on a small gray offset (`3–4px`, `--gray-200/300/400`) and **press
  into it** on hover/click. This is the system's shared depth language — not soft
  drop shadows. The `Block` component is its boldest expression. (Legacy soft
  `--shadow-*` tokens remain for rare non-tactile needs.)
  cards usually sit on a **hairline border + faint shadow**, not a heavy drop.
- **Cards** = white surface, `--radius-lg`, `1px --border-subtle`, and a subtle solid
  offset block shadow (presses in when interactive).
  On hover (interactive cards): border → `--border-strong`, shadow → `--shadow-md`,
  a 1–2px lift. No color fill change unless it's a selectable card.

### Motion
- **Calm and confident.** Fades and gentle position shifts; `--ease-out` for entrances,
  `--duration-normal` (200ms). **No bounce, no spring, no infinite loops.** Respect
  `prefers-reduced-motion`.
- **Hover:** buttons darken (`--brand → --brand-hover`); links deepen + underline;
  cards lift subtly.
- **Press:** slight darken to `--brand-active` + `translateY(1px)` (never a big shrink).
- **Focus:** always visible — `--shadow-ring` (neutral gray, ~30% alpha). Never remove outlines.

### Transparency & blur
- Used lightly: sticky header may use a translucent white + `backdrop-filter: blur`.
  "Protection" gradients only over imagery behind text; otherwise avoid gradients as
  decoration (**no purple/blue SaaS gradients**).

---

## 4. Iconography & brand mark

- **Brand mark:** **none was supplied.** Per brand policy we do **not** invent or draw
  a logo. Wherever a mark would go, render the **wordmark in Hanken Grotesk** —
  *"Async Forest"* set tight in ink, optionally with the mono descriptor *"ADVISORY"* — see
  `assets/wordmark.html` and the Brand cards. Founder to supply a real mark to replace it.
- **Icons:** **Lucide** (https://lucide.dev), loaded from CDN. Chosen for its
  **thin, calm, 1.5–2px stroke, rounded-join** style that matches the crisp-but-warm
  tone. Used at 18–24px, `currentColor`, `stroke-width: 1.75`. This is a **substitute
  choice** (no brand icon set supplied) — flagged for confirmation.
- **No emoji.** No unicode-glyph icons. No hand-drawn/bespoke SVG icons in place of the
  real set — always use Lucide (or a founder-supplied set) so stroke weight stays
  consistent.
- **Illustration:** the brand leans on **type, whitespace, and warm photography**
  rather than spot illustration. If diagrams are needed (architecture, assurance
  flow), draw them with the same hairline-border + mono-label language as the UI.

---

## 5. Index / manifest

**Root**
- `styles.css` — single entry point (consumers link this). `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible usage guide.

**Tokens** (`tokens/`) — all `@import`ed by `styles.css`
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radii.css` · `shadows.css`

**Foundation cards** (`guidelines/`) — specimen HTML for the Design System tab
(Colors, Type, Spacing, Brand groups).

**Components** (`components/core/`) — reusable React primitives:
Button, IconButton, Input, Textarea, Select, Checkbox, Badge, Tag, Card, Eyebrow,
Callout, Field. Each has `.jsx` + `.d.ts` + `.prompt.md`; one card HTML for the group.
Plus **Block** (`components/blocks/`) — a tactile 3D block control.

**Blocks** (`components/blocks/`) — `blocks.css` + the `Block` component. A hard,
blur-free offset-shadow element that presses in on interaction, **adapted from
[blocks.css](https://github.com/thesephist/blocks.css) by Linus Lee (@thesephist),
MIT License**. This tactile offset-shadow is the **system-wide elevation language**:
`Button`, `Card`, and the inputs all carry a lighter version of the same solid
offset and press-on-interaction. `Block` is its **boldest** expression (2px border,
larger offset) — reach for it for a standout CTA or toggle; the everyday control
stays the refined `Button`. Themed via the `--block-*` custom properties; ships
globally through `styles.css`.

**UI kit** (`ui_kits/website/`) — high-fidelity marketing-site recreation
(home, how-it-works, services, contact) as an interactive click-through.

**Assets** (`assets/`) — wordmark lockup HTML (no logo supplied).

### Intentional additions
Since no source defined a component inventory, a standard from-scratch set was
authored (see Components). **Eyebrow**, **Callout**, and **Field** are brand-specific
additions: the mono eyebrow and the hairline callout are core to this brand's
editorial voice; Field is a label+input+hint wrapper used throughout forms/reports.
**Block** is an external incorporation (blocks.css, MIT — attributed above).

### Substitutions flagged for the founder
1. **Fonts** — Hanken Grotesk + JetBrains Mono (Google Fonts, sans-only) stand in
   for unspecified brand fonts.
2. **Icons** — Lucide (CDN) stands in for an unspecified brand icon set.
3. **Logo** — none; wordmark-in-type used as a placeholder.

---

## Anti-slop guardrails — break the default aesthetic

Every surface built in this system must pass the checklist below **before it ships**.
These rules exist so the brand stays distinctive and never collapses into the generic
"AI-slop" default. Adapted from the community *break-default-aesthetic* prompt
(github.com/rohitg00/awesome-claude-design) and bound to this brand's tokens. The
full rubric is on the **Guardrails** card (`guidelines/guardrails.html`).

**Reject (unless explicitly asked):**
1. **Accent.** No teal, no second accent. **Ink (`--brand`) is the primary action
   colour**; the deep blue (`--accent`) is a single rare highlight; status hues are
   functional only, never brand accents.
2. **Status.** No animated dots, pulsing orbs, or "live" badges — status is a static
   glyph + explicit text (use `Badge`).
3. **Container nesting ≤ 2.** No card-on-card. Separate with a `--border-*` hairline
   or a tonal surface shift, not another wrapper.
4. **Type.** Sans-only Hanken Grotesk; never Inter/Roboto/Arial/system-ui as the
   primary face; heading weight + tracking always come from tokens.
5. **Layout.** No three-column feature grid in the hero/section 2; no
   "Get Started / Learn More" CTA pair; don't force heterogeneous data into identical
   cards.
6. **Left rules.** The coloured left-rule is reserved for **one semantic role —
   severity** (the `Callout` tones). Never decorative.
7. **Icons.** Exactly one family — **Lucide, stroke 1.75** — never mixed; prefer
   type/structure over decorative icons.
8. **Imagery.** Only the declared palette; no purple-pink gradients, no glass/frosted
   hero stacks.
9. **Motion.** Purposeful only (state, hierarchy, spatial relationship); always
   respect `prefers-reduced-motion`.
10. **Copy.** Product-specific and verb-first; no "Welcome to {Product}" / "Built for
   teams" filler.

**Self-audit after generating — any FAIL, redo that region:** teal accent · animated
status dot · 3+ nested containers · Inter/Roboto/Arial primary face · 3-col feature
grid in section 2 · decorative coloured left-rules · off-palette imagery.
