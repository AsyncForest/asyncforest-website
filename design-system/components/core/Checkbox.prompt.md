**Checkbox** — custom checkbox with a forest fill and inline label. Controlled via `checked`/`onChange`.

```jsx
<Checkbox id="nda" checked={agreed} onChange={e => setAgreed(e.target.checked)}
  label="This engagement may be covered by an NDA." />
```
