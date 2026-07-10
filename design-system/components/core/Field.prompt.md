**Field** — wraps a single form control with a label, optional hint, and optional error. Brand-specific addition used across forms and report inputs.

```jsx
<Field label="Work email" hint="I'll only use this to reply." required htmlFor="email">
  <Input id="email" type="email" />
</Field>
```

`error` replaces the hint and colours the message danger.
