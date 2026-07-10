**Card** — the default content container. White surface, hairline border, soft shadow, 14px radius. Structure comes from the border; keep shadows light.

```jsx
<Card>
  <Eyebrow>Security audit</Eyebrow>
  <h3>Point-in-time review</h3>
  <p>Scope-limited findings with prioritised fixes.</p>
</Card>
<Card interactive tone="warm">…</Card>
```

Tones: `default | warm | sunken | brand`. Set `interactive` for clickable cards (adds a subtle lift on hover).
