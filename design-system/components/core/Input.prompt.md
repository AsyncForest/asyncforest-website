**Input** — single-line text field. Wrap in `Field` for a label, hint, and error message.

```jsx
<Field label="Work email" hint="I'll only use this to reply.">
  <Input type="email" placeholder="you@company.com" />
</Field>
```

Sizes `sm | md | lg`. Set `invalid` to show the error border.
