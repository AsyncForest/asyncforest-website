# TODO — placeholder slots

Every `[… SLOT …]` token in the built site, per the spec's rule that nothing
placeholder ships silently as if final. `npm run verify` (build + copy lint)
fails if a file containing a slot token is missing from this list.

## Legal / company (blocks launch)

- `src/components/SiteFooter.astro:20` — `[COMPANY NUMBER SLOT]` — Companies Act disclosure, company number.
- `src/components/SiteFooter.astro:20` — `[REGISTERED OFFICE SLOT]` — registered office address.

## Contact details

- `src/components/SiteFooter.astro:16` — `[EMAIL SLOT]` — visible email text; mailto href provisionally `henry@asyncforest.co.uk`, confirm the real address on the asyncforest domain.
- `src/components/SiteFooter.astro:14` — `[LINKEDIN SLOT]` — LinkedIn profile URL (href is currently a placeholder and broken by design).
- `src/pages/contact.astro:3,21` — `[EMAIL SLOT]` — same address as the footer; update `EMAIL` const and visible link text.

## Pricing (Work with me)

- `src/pages/work.astro:32` — `[PRICE SLOT — assurance]` — "from" price for assurance & due diligence.
- `src/pages/work.astro:45` — `[PRICE SLOT — sprint]` — "from" price for advisory sprints.
- `src/pages/work.astro:57` — `[PRICE SLOT — counsel]` — monthly "from" price for ongoing counsel.

## About

- `src/pages/about.astro:13` — `[THESIS SLOT — being written]` — 2–3 sentence through-line paragraph; a factual interim paragraph is in place beneath the marker.
- `src/pages/about.astro:23` — `[PHOTO SLOT — headshot]` — single professional-casual headshot.
- `src/pages/about.astro:48` — `[SCHOLAR LINK SLOT]` — Google Scholar (or DBLP) profile URL.

## Writing

- `src/content/essays/essay-slot-1.md` — `[ESSAY SLOT 1]` — title, standfirst, body (pinned).
- `src/content/essays/essay-slot-2.md` — `[ESSAY SLOT 2]` — title, standfirst, body.
- `src/content/essays/essay-slot-3.md` — `[ESSAY SLOT 3]` — title, standfirst, body.
- `src/pages/writing/index.astro:20-25` — `[MODEL SLOT 1]`, `[MODEL SLOT 2]` — named frameworks/mental models with one-line descriptions.

## Non-slot follow-ups

- Replace the slot essay files with real essays (`title`, `date`, `standfirst`, `pinned`, `draft` frontmatter; filename becomes the slug).
- Decide analytics: none in v1, or Plausible behind a config flag (spec allows either; currently none).
