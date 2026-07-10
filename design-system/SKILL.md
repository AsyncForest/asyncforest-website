---
name: async-forest-design
description: Use this skill to generate well-branded interfaces and assets for Async Forest Advisory Ltd. (a solo, independent UK technical consultancy), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Voice is warm, friendly, crisp, and credible.
user-invocable: true
---

# Async Forest Advisory — design skill

Read `readme.md` in this skill first — it is the full design guide (company context,
content fundamentals / voice, visual foundations, iconography, and a file index).
Then explore the other files.

## What's here
- `styles.css` — the single CSS entry point. Link this (it `@import`s every token +
  font file under `tokens/`). Consumers only need this one file.
- `tokens/` — colors, typography, spacing, radii, shadows, fonts as CSS custom
  properties. Reference the **semantic aliases** (`--brand`, `--surface-card`,
  `--text-body`, …), not raw scales, wherever possible.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — reusable React primitives: Button, IconButton, Input,
  Textarea, Select, Checkbox, Field, Badge, Tag, Card, Eyebrow, Callout. Each has a
  `.prompt.md` with usage. In built HTML, load `_ds_bundle.js` and read them from
  `window.AsyncForestDesignSystem_6656fd`.
- `ui_kits/website/` — an interactive recreation of the marketing site; a good
  reference for layout, rhythm, and how the primitives compose.
- `assets/wordmark.html` — the type-set wordmark (no logo was supplied).

## How to use it
If you're making **visual artifacts** (slides, mocks, throwaway prototypes), copy the
assets and tokens you need into your output and produce **static/self-contained HTML**
the user can open. If you're working on **production code**, read the rules here and
reference the tokens + components directly to become an expert in the brand.

## Non-negotiables (see readme.md for detail)
- **Voice:** warm, crisp, credible. Sentence case everywhere; the reader is "you",
  the practice is "I" / "Async Forest". **No emoji.** Honest, scope-limited claims —
  "technical observations, not legal advice", never absolute guarantees.
- **Type:** **sans-only** — Hanken Grotesk for display (600, tight tracking) and
  body/UI, JetBrains Mono for uppercase eyebrows/labels/code. **No serif.**
- **Color:** **monochrome** — cool-crisp gray neutrals with near-black ink for
  actions/links/dark blocks. A single **deep blue** (`--accent`, `#234a8f`) is the
  one rare, opt-in accent; forest-green survives only as the functional success hue.
  No teal, no second accent, no purple/blue SaaS gradients.
- **Elevation:** a subtle, consistent **tactile block** — a solid blur-free offset
  shadow (adapted from blocks.css) that presses in on hover/click, on buttons, cards,
  and inputs. `Block` is its boldest form. Not soft drop shadows.
- **Icons:** Lucide (stroke 1.75). Never hand-roll SVG icons or use emoji as icons.
- **Structure:** borders and whitespace do the work; soft low shadows; crisp-but-soft
  radii; calm fades (no bounce). Always show a visible focus ring.

## If invoked with no other guidance
Ask what the user wants to build or design, ask a few focused questions (audience,
surface, fidelity, variations), then act as an expert brand designer and output HTML
artifacts *or* production code as appropriate.

> **Flagged substitutions:** fonts (Google Fonts), icons (Lucide), and logo
> (type-set wordmark placeholder) are stand-ins — no brand-supplied versions exist yet.

## Anti-slop guardrails (mandatory)
Every surface must pass the **break-the-default-aesthetic** rubric — see the
"Anti-slop guardrails" section of `readme.md` and the **Guardrails** card. In short:
**ink is the primary action colour** (a single deep blue `--accent` is the rare
accent, never teal, never a second accent); **no animated status dots**; **container nesting ≤ 2, no card-on-card**;
**sans-only Hanken Grotesk** (never Inter/Roboto/Arial); **no 3-column feature grid in
the hero/section 2** and **no "Get Started / Learn More" pair**; the **coloured
left-rule is severity-only** (Callout); **one icon family (Lucide)**; palette-only
imagery; **purposeful motion only**; **product-specific, verb-first copy**. After
generating, self-audit and redo any region that FAILs.
