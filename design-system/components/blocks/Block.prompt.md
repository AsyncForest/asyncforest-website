**Block** — a tactile 3D "block" control with a hard, blur-free offset shadow that visibly depresses when hovered/pressed. Adapted from [blocks.css](https://github.com/thesephist/blocks.css) (@thesephist, MIT), themed to the monochrome palette.

Use for playful, high-tactility moments — a standout CTA, a toggle, a fun 404 — **not** as the default button (that's the refined `Button`). Reach for it deliberately.

```jsx
<Block variant="accent" onClick={start}>Start a conversation</Block>
<Block shape="round">Read a sample</Block>
<Block size="inline" fixed>PI insured</Block>
```

- `variant`: `default` (ink outline) · `accent` (filled ink, light text)
- `shape`: `default` · `round` (pill) — `size`: `default` · `inline` (small chip)
- `fixed`: static, non-interactive label
- Theme per-instance with the `--block-*` custom properties; on dark surfaces wrap in an element with `className="block-on-dark"`.

Requires the global stylesheet (`styles.css` / `_ds_bundle` CSS) — the press mechanics live in CSS pseudo-elements.
