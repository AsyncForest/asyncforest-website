# Website UI kit — Async Forest Advisory

A high-fidelity, interactive recreation of the Async Forest Advisory marketing
site: a single-page scrolling site that establishes the founder's credibility and
explains the *independent technical assurance* proposition.

## Run it
Open `index.html`. It links the design system (`../../styles.css` + `../../_ds_bundle.js`),
loads React + Babel + Lucide from CDN, then composes the screen modules below.

## Screens / sections (all in this folder)
- `Header.jsx` — sticky, translucent header; wordmark, desktop nav, and a mobile
  menu toggle (`AFHeader`).
- `Hero.jsx` — headline + sub + CTAs, with a dark "report you can show a board"
  card (`AFHero`).
- `Services.jsx` — four service cards (assurance, architecture/AI, security/scale,
  regulatory exposure) with `Badge` tags (`AFServices`).
- `Process.jsx` — warm-band 4-step "how it works" (`AFProcess`).
- `Sample.jsx` — dark band showing a fictional report excerpt built from `Callout`s
  (`AFSample`).
- `Contact.jsx` — working contact form that transitions to a thank-you state
  (`AFContact`).
- `Footer.jsx` — dark footer with wordmark + link columns (`AFFooter`).

## Interactions
- Nav links + footer links smooth-scroll to sections; CTAs jump to Contact.
- Mobile menu opens/closes below ~860px.
- The contact form validates required fields and, on submit, swaps to a confirmation.

## Composition notes
- Screens **compose the design-system primitives** (`Button`, `Card`, `Field`,
  `Input`, `Textarea`, `Select`, `Checkbox`, `Badge`, `Eyebrow`, `Callout`,
  `IconButton`) from `window.AsyncForestDesignSystem_6656fd` — they are not
  re-implemented here.
- Icons are **Lucide** via the shared `window.AFIco` helper (stroke 1.75).
- Each module exports its component to `window.AF*` (Babel scripts don't share scope);
  style objects are uniquely named (`afHeroStyles`, etc.) to avoid collisions.
