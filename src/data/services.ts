// The three productised offers. Prices are indicative, from docs/research.md —
// confirm before launch.
export interface Service {
  slug: string;
  eyebrow: string;
  name: string;
  short: string;
  price: string;
  turnaround: string;
  intro: string;
  forWho: string[];
  deliverables: string[];
  outOfScope: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'technical-due-diligence',
    eyebrow: 'For investors and acquirers',
    name: 'Technical & AI due diligence',
    short:
      'An independent read on a target before you commit — architecture, code, security posture, and the AI-specific risks most reviews miss.',
    price: 'From £8,000',
    turnaround: '5–10 working days',
    intro:
      "You're about to put money behind a technical team, and the pitch deck won't tell you whether the codebase can carry the plan. I read the architecture, the code, the infrastructure, and the engineering practices, then tell you plainly what would worry me and what wouldn't. Where the target leans on AI — most now do — I look at the parts generalist reviews skip: model and data governance, LLM cost and failure behaviour under load, and how much of the product is AI-generated code nobody has verified.",
    forWho: [
      'VC and PE firms running diligence on a Series A to growth-stage target',
      'Corporate acquirers who need an independent technical read before a term sheet',
      'Founders preparing to raise, who want the problems found before the investor does',
    ],
    deliverables: [
      'A red/amber/green risk matrix across architecture, code quality, security posture, scalability, engineering practices, and AI-specific risk',
      'A two-page summary written for your investment committee — no computer science degree needed',
      'Prioritised findings, each with an estimate of remediation effort',
      'Deal-breaker flags called out explicitly, if there are any',
      'A 60-minute debrief call once you have read the report',
    ],
    outOfScope: [
      'Legal, financial, or commercial due diligence',
      'A CREST-accredited penetration test — I can refer one if the deal needs it',
      'Fixing the findings (though the report tells you what to fix first)',
    ],
    faq: [
      {
        q: 'How do you get access to the code?',
        a: "Read-only repository access under NDA, plus a short written questionnaire for the target's technical lead. I never need write access to anything.",
      },
      {
        q: 'What if the codebase is very large or unusual?',
        a: 'The fixed price covers most venture-stage codebases. For something unusually large or unfamiliar I quote a capped time-and-materials figure up front — the cap is in the statement of work before I start.',
      },
      {
        q: 'Can the target tell you what to look at?',
        a: 'They can point things out; they cannot steer the conclusion. The report is addressed to you, and I stand behind it.',
      },
    ],
  },
  {
    slug: 'ai-readiness-review',
    eyebrow: 'For teams shipping AI',
    name: 'AI-in-production readiness review',
    short:
      'A fixed-scope review of your AI integration before you press go — failure modes, cost under load, evaluation, and the exposure you might not have priced in.',
    price: 'From £6,000',
    turnaround: '5–10 working days',
    intro:
      "Getting an LLM feature to work in a demo is easy. Knowing what it will do at 3am under real traffic, with a provider outage, a hostile user, and a cost meter running — that's the part teams tend to discover in production. I review your AI integration as a system: where it fails, what it costs at scale, whether you can tell when quality drops, and where it exposes you that a lawyer or regulator might one day care about. You get a written report with fixes in priority order, so the week after the review is spent hardening, not debating.",
    forWho: [
      'Startups and scaleups about to move an LLM feature from pilot to production',
      'Teams whose AI feature is live but wobbling — cost spikes, quality drift, silent failures',
      'CTOs who want an independent check before signing off a launch',
    ],
    deliverables: [
      'A written review of your AI integration: failure modes, retries and fallbacks, concurrency, rate limits, and provider risk',
      'A cost model for realistic load, not demo load',
      'An assessment of your evaluation and monitoring — whether you would notice quality dropping before your users do',
      'Data-handling and responsible-AI observations, mapped to where they create exposure (UK GDPR and related regimes) — technical observations, not legal advice',
      'Prioritised fixes with effort estimates, and a 60-minute debrief',
    ],
    outOfScope: [
      'Building or fixing the integration itself',
      'Formal certification (ISO/IEC 42001 or similar) — I can advise on the path to it',
      'Legal advice on regulatory compliance',
    ],
    faq: [
      {
        q: 'Which stacks do you cover?',
        a: 'Provider APIs (Anthropic, OpenAI and peers), open-weight models you host yourself, and the orchestration around them. If your stack is unusual, say so when you get in touch and I will tell you honestly whether I am the right reviewer.',
      },
      {
        q: 'Do you need production access?',
        a: 'No. Read-only code access, your architecture notes, and metrics exports are enough. Anything sensitive stays under NDA.',
      },
      {
        q: 'We already have evals. Is this still useful?',
        a: 'Usually, yes — most eval suites test the happy path of the model and none of the system around it. The review covers both, and if your setup is genuinely solid the report says so, which has its own value before a launch or a raise.',
      },
    ],
  },
  {
    slug: 'ai-code-audit',
    eyebrow: 'For AI-built products',
    name: 'AI-built app hardening audit',
    short:
      'You built it fast with AI. Before it carries customers, payments, or your raise, have one accountable human read what the tools wrote.',
    price: 'From £4,000',
    turnaround: '5 working days',
    intro:
      "AI coding tools are genuinely good at getting a product working. They are measurably bad at getting it safe: recent large-scale studies found roughly half of AI-generated code samples carry OWASP top-ten class vulnerabilities, and public scans of AI-built apps keep turning up exposed secrets, open databases, and personal data reachable from a browser. None of that means you built the wrong way — it means the last step is a human read. I go through the codebase the way a careful staff engineer would: authentication and authorisation, secrets, injection paths, data exposure, and whether the architecture will survive its first ten thousand users.",
    forWho: [
      'Founders who shipped with Cursor, Claude Code, Lovable, Replit, or similar and now have real users arriving',
      'Teams adopting an internally vibe-coded tool that has quietly become important',
      'Anyone whose investor, customer, or own conscience has asked "has a human actually read this?"',
    ],
    deliverables: [
      'A security review of the codebase: authentication, authorisation, secrets handling, injection paths, and data exposure',
      'A production-readiness read: error handling, data integrity, scaling assumptions, dependency risk',
      'A maintainability assessment — whether the next engineer (human or AI) can safely change this code',
      'Findings ranked by severity, each with a concrete fix, so you know exactly what to do first',
      'A short plain-English summary you can share with investors or customers',
    ],
    outOfScope: [
      'A CREST-accredited penetration test — this is an expert code and architecture review, and I refer formal pen tests to a CREST partner',
      'Rewriting the app',
      'Ongoing monitoring — the report is point-in-time by design',
    ],
    faq: [
      {
        q: 'Will you judge us for how it was built?',
        a: 'No. Building fast with AI is a rational choice in 2026. The audit exists because the tools have known, measured blind spots — not because using them was a mistake.',
      },
      {
        q: 'How is the price tiered?',
        a: 'By codebase size. From £4,000 for a typical early product; I confirm the exact figure after seeing the repository size and stack — before you commit to anything.',
      },
      {
        q: 'What do you need from us?',
        a: 'Read-only repo access under NDA, a five-minute walkthrough of what the product does, and a note of anything you already worry about. No meetings beyond the debrief unless you want them.',
      },
    ],
  },
];
