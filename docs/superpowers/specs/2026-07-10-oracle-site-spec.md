# PROMPT + SPEC: Personal consulting website for Henry Franks

You are building a personal consulting website. Read this entire brief before writing any code. The brief is opinionated and the positioning decisions in it are final — do not "improve" the positioning, tone, or copy strategy. Where copy is marked FINAL, use it verbatim. Where marked DRAFT, you may lightly polish for rhythm but not change meaning or register. Where marked SLOT, build the structure with a clearly-labelled placeholder — the real content is being produced separately and will be dropped in later.

## 1. Who this site is for and what it must do

The primary visitor is someone who has just been given Henry's name by a person they trust — an investor, a founder, a board member — and is visiting for about 90 seconds to decide whether to reply to the intro email. The site's job is confirmation, not acquisition. It must answer three questions fast:

- Is this the right kind of person for my problem?
- Is he genuinely a singular thinker, or just another consultant?
- What happens if I get in touch?

The positioning is what we call the oracle frame: people should hire Henry because they want his judgement specifically, not because they need a qualified expert. Critical consequence: uniqueness must be demonstrated, never claimed. The words "unique", "expert", "world-class", "leading", "trusted" must not appear anywhere on the site as self-description. The confidence lives in what is shown (writing, models, biography-as-fact); the copy itself is quiet, plain, and short. Think "understated 'I'm a fucking expert'" — the visitor concludes it; the site never says it.

## 2. The person (context for tone, not for publication verbatim)

Henry Franks: London-based. PhD from Warwick in multi-agent systems — trust, reputation, cooperation and convention-emergence in open systems of autonomous agents. Fifteen-plus years as startup founder/CTO, principal engineer, data scientist, chief architect across energy, insurance/data, and climate-policy AI. Currently Chief Architect at a climate-policy AI non-profit. Guest lectures annually on responsible AI at King's College London and the University of Notre Dame. Deep hands-on: full-stack, cloud (AWS), data/ML, GenAI in production, system design.

The differentiating tension in his profile: most responsible-AI voices haven't shipped production systems; most people shipping GenAI wave away the responsibility part. Henry is the intersection — responsible and pragmatic. That pairing should be felt throughout.

## 3. Voice and register (applies to every word on the site)

- Plain, declarative, first person singular. "I review the architecture" not "we provide architecture review services."
- Short sentences. No marketing cadence, no triads-for-rhythm, no rhetorical questions.
- Facts do the bragging. Biography stated flatly ("PhD in trust in autonomous systems; fifteen years as a startup CTO") does the work adjectives would fake.
- No exclamation marks. No emoji. No "Let's talk!" energy. Sentence case everywhere, including headings and buttons.
- Dry is fine. Mild wit is fine if it's in the writing, not the chrome.
- Banned words as self-description: unique, expert, world-class, leading, trusted, passionate, cutting-edge, innovative, seamless, bespoke, holistic, solutions.
- Banned patterns: testimonial placeholders ("[Client testimonials coming soon]"), fake client logos, invented stats, stock-photo energy of any kind, "As featured in", generic hero illustrations of nodes-and-lines AI slop.

## 4. Sitemap

Five pages only. Do not add more.

- Home (/)
- Work with me (/work) — the three engagement types
- Writing (/writing) — index page + individual essay template
- About (/about)
- Contact (/contact)

Global nav: those five items, with "Async Forest" as the wordmark/home link. Henry's name appears in the hero and About — the brand is the practice, the voice is the person (see §4a).

Footer (every page) — this is a legal requirement, not decoration. It must carry the Companies Act disclosure line:

> Async Forest Ltd, registered in England and Wales, company no. [COMPANY NUMBER SLOT]. Registered office: [REGISTERED OFFICE SLOT].

Plus one line above it: "Async Forest is the consulting practice of Henry Franks. Engagements are contracted with Async Forest Ltd." "Technical observations, not legal advice" appears only on /work, not the footer. No social wall — a single LinkedIn link and email (on the asyncforest domain, SLOT) is enough.

## 4a. Entity vs. person — get this exactly right

The brand relationship, which every page must respect:

- The person is the product; the company is the counterparty. Copy speaks in Henry's first person ("I review the architecture") — that is the positioning and it stays. But wherever the site touches anything contractual or transactional — engagement, scoping, pricing, reports, the contact flow — the entity named is Async Forest Ltd, never Henry personally.
- Never use phrasing that implies Henry personally contracts, personally guarantees, or personally assumes liability for the work. "I put my name to the conclusion" is voice; "reports are issued by Async Forest Ltd" is the legal fact — the site needs both, in their proper places.
- Do not invent taglines like "Henry Franks Consulting" anywhere; the practice name is Async Forest, full stop.

## 5. Page-by-page structure and copy

### 5.1 Home

Block 1 — Hero. No image. Type only.

FINAL headline:

> I help companies and investors make high-stakes decisions about software and AI — the kind you want to get right the first time.

DRAFT sub-line (one sentence, biographical fact, no adjectives):

> Fifteen years as a startup CTO and chief architect; a PhD in trust in autonomous systems; guest lecturer on responsible AI at King's College London and Notre Dame.

FINAL CTA button: Tell me about the decision you're facing → links to /contact.

Block 2 — The problem. One short paragraph, no heading needed (or a very quiet one). DRAFT:

> GenAI has made it cheap to build and expensive to be wrong. Demos ship in a weekend; the failures — cost blowouts, security holes, regulatory exposure, architectures that can't scale — surface after the money is committed. Internal teams grade their own homework, and AI tools tell you what you want to hear. At some point you need someone independent to actually look.

Block 3 — Three doors. Three short entries, each framed as the question the buyer is holding. Each links to the corresponding section on /work. DRAFT copy:

> "Is it sound?" Independent review of a system, codebase, or AI integration — a scope-limited written report with prioritised findings and a clear conclusion. For investors, boards, and anyone who needs verification rather than reassurance.
>
> "What should we do?" A time-boxed advisory sprint built around one decision: GenAI architecture, build-vs-buy, scale readiness, pre-raise technical narrative. Options, trade-offs, and a written recommendation with reasons.
>
> "Keep us honest." Ongoing counsel for teams putting AI into production — a standing session, written answers to hard questions, an independent voice before the board meeting.

Block 4 — Selected writing. Pull the 2–3 most recent/pinned essays from /writing, title + one-line standfirst each. SLOT: build with 3 placeholder entries clearly marked [ESSAY SLOT — title TBD]. This block is first-class: it should sit high on the page (directly after the three doors), not in a footer ghetto. The writing IS the proof; design it that way.

Block 5 — Quiet close. One line + the same CTA. DRAFT: "If you're facing one of these decisions, the fastest way to start is to tell me about it." Button repeats: Tell me about the decision you're facing.

There is NO separate proof/credentials/testimonial block on the homepage. The sub-line, the writing block, and the About page carry proof.

### 5.2 Work with me

Terse by design — in this positioning, elaborate selling undermines the effect. Structure:

- One-paragraph intro. DRAFT: "Three ways to work with me. All of them produce written judgement: what I looked at, what I concluded, and why. Everything is scoped in an itemised statement of work before we start, and engagements are contracted with Async Forest Ltd."
- Assurance & due diligence. Expand the "Is it sound?" door: point-in-time, scope-limited, written report, prioritised and actionable findings, retest available. Audience: investors (technical due diligence, portfolio reviews), boards, universities/institutions, founders pre-raise. Include a "from" price. SLOT: from £[X] — leave a clearly-marked placeholder token.
- Advisory sprints. Expand "What should we do?": time-boxed (typically 2–4 weeks), organised around one named decision, deliverable is a decision memo — the question, the options, the trade-offs, a recommendation and the reasoning. SLOT: from £[X].
- Ongoing counsel. Expand "Keep us honest.": cadence-based (a standing fortnightly session plus async written answers), quarterly deep-dive, renewable terms. Priced as "structured engagements from £[X]/month" — no menu, no tiers. SLOT for the number.
- How I work (short, factual list — this is the boundaries section and it must survive edits):
  - Engagements are point-in-time and scope-limited; the report speaks to what I examined, when.
  - Deliverables are written. Meetings are for decisions, not status.
  - Regulatory findings (UK GDPR, Children's Code, Online Safety Act, EU AI Act) are technical observations, not legal advice; where legal interpretation is needed I'll say so.
  - I'm not a CREST penetration-testing provider; where a formal pen test is required I refer to accredited partners and can scope and interpret it for you.
  - Capped time-and-materials on unfamiliar codebases; fixed scope where the ground is known.
  - Engagements are contracted with, and reports issued by, Async Forest Ltd, which carries professional indemnity insurance.

### 5.3 Writing

Index page: reverse-chronological list, title + date + one-line standfirst. No categories/tags in v1. Support a "pinned" flag so 2–3 cornerstone essays stay on top. Build 3–5 SLOT entries.

Essay template: generous measure (roughly 65–75ch), strong typographic hierarchy, footnote/aside support, no comments, no reading-time gimmicks, no social share buttons. A quiet end-of-essay block: one line ("If this is the kind of question you're working through, get in touch.") + the standard CTA button.

Also build (nav-hidden, linked from Writing and About) a Models page or section: a home for named frameworks/mental models with a short description each. SLOT: 2 placeholder model entries marked [MODEL SLOT]. If it's cleaner, this can be a pinned section at the top of /writing rather than its own page — your call structurally, but the slot must exist.

### 5.4 About

An intellectual biography, not a CV. Structure:

- Opening: SLOT for a 2–3 sentence "through-line" paragraph — the thesis that connects PhD → CTO career → responsible-AI teaching → this practice. Mark it [THESIS SLOT — being written] and put a serviceable factual interim in place: "I've spent my career building and architecting production software and AI systems — as a founder, CTO, and chief architect — and teaching the responsible-AI side of the field at King's College London and Notre Dame. My doctoral research was on trust and cooperation in open systems of autonomous agents."
- Career, told as a short narrative paragraph or two, not a timeline widget. Facts, flatly stated.
- Research: thesis topic in one plain-English sentence, publications line (~140 citations, AAMAS/Springer), link to Google Scholar or DBLP.
- Teaching and speaking: one short paragraph.
- A short "the practice" paragraph near the close. DRAFT: "Async Forest Ltd is the company through which I consult — a UK limited company with professional indemnity insurance. The judgement is mine; the engagement is with the company."
- A photo: single, professional-casual headshot slot. No parallax, no hero-image treatment.
- Close with the standard CTA.

### 5.5 Contact

Minimal friction, async-first (deliberate — do not add a calendar-booking widget):

- One line: "The fastest way to start is to tell me about the decision you're facing — a few sentences is plenty."
- Either a mailto link (to an address on the asyncforest domain — SLOT) with a suggested subject, or a short form: name, email, one textarea labelled "What's the decision?" Nothing else — no phone field, no company-size dropdown, no budget selector.
- Expectation-setter: "I reply to everything within two working days."

## 6. Design direction

Read this as a design lead would: the client has explicitly rejected anything that looks templated, and the subject matter is judgement, writing, and rigour — so the site should feel like a well-set essay collection or a serious journal, not a SaaS landing page.

- Typography-led. Type is the design. Choose a characterful display/heading face paired with a highly readable body face — make a deliberate pairing you can justify for THIS brief, not defaults. Set a real type scale. The essay reading experience is the flagship surface; design it first and let the rest of the site inherit from it.
- Palette: restrained, high contrast, close to monochrome with ONE accent used sparingly (links, the CTA). Deliberately avoid the current AI-generated-site clichés: warm-cream + terracotta serif combo, near-black + acid-green, and faux-broadsheet hairline-rule maximalism. Choose something quieter and specific.
- No imagery except the About headshot. No icons for the three doors — the questions in quotes ARE the visual device; set them typographically.
- One signature element only. Suggestion: the treatment of the three quoted questions ("Is it sound?" / "What should we do?" / "Keep us honest.") as large, quiet typographic objects. Spend the boldness there; keep everything else disciplined.
- Motion: essentially none. Respect prefers-reduced-motion. A subtle hover state on links/buttons is the ceiling.
- Quality floor without announcing it: responsive to mobile, visible keyboard focus, semantic HTML, WCAG AA contrast, fast.

## 7. Technical constraints

- Static site. Prefer Astro (content collections for essays in Markdown) or plain HTML/CSS if simpler; NO React/SPA framework for a content site, no CMS, no client-side JS beyond trivial enhancement. The owner is a principal engineer optimising for low admin: adding an essay must be "drop a .md file, commit, deploy."
- Essays authored in Markdown with frontmatter: title, date, standfirst, pinned (bool), draft (bool).
- No analytics in v1, or privacy-respecting only (e.g. Plausible) behind a single config flag. No cookie banner should be necessary — design so none is required.
- SEO basics: per-page titles/descriptions, OpenGraph, RSS feed for /writing, sitemap. No blog-spam schema tricks.
- Performance budget: no web-font bloat (two families max, subset), Lighthouse 95+ across the board.
- Every SLOT in this brief must appear in the built site as a visibly-marked placeholder (e.g. [THESIS SLOT]) AND be listed in a TODO.md at the repo root with file/line references, so nothing placeholder ships silently as if final.
