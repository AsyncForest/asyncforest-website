**Button** — the primary interactive control; use for any click action. Ink-filled `primary` for the main action per view, `secondary` (hairline) for alternatives, `ghost`/`subtle` for low-emphasis, `accent` (amber) only for a single rare warm highlight.

```jsx
<Button variant="primary" size="md">Start a conversation</Button>
<Button variant="secondary" iconRight={<ArrowRight size={16} />}>See how it works</Button>
<Button variant="ghost">Read the sample report</Button>
```

Variants: `primary | secondary | ghost | subtle | accent`. Sizes: `sm | md | lg`. Supports `iconLeft`/`iconRight`, `fullWidth`, `disabled`, and `href` (renders an `<a>`). Sentence case labels, plain verbs — never Title Case.
