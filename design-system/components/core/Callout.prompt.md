**Callout** — a hairline note block with a left rule, for observations, caveats, and findings in pages and reports. Brand-specific; carries the editorial "technical observation" voice.

```jsx
<Callout tone="note" title="Observation">
  Retries are unbounded on the payment path — a single downstream stall can amplify load.
</Callout>
<Callout tone="risk" title="Priority 1">…</Callout>
```

Tones: `note | warm | caution | risk`.
