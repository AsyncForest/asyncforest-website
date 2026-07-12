# Logo asset pack

PNG exports of the Async Forest fir mark, generated from the vector source
[`public/favicon.svg`](../favicon.svg). Transparent background, mark only (no
wordmark). Served at `/brand/…`.

Regenerate after changing the mark:

```
node scripts/gen-logo-assets.mjs
```

## Files

| Variant | Files | Use on |
| --- | --- | --- |
| Accent (default) | `logo-16.png` … `logo-1024.png` | light backgrounds |
| On dark | `logo-16-on-dark.png` … `logo-1024-on-dark.png` | dark backgrounds |

Sizes: 16, 32, 48, 64, 128, 256, 512, 1024 px (square, mark centred).

The two variants mirror the favicon's own light/dark states (per `STYLESEED.md`):
the accent ramp `#234a8f → #1b3c76 → #142c58` with a `#cdd9ee` tint tree behind
on light, going near-white (`#f4f6fb`) on dark. Pick the file to match the
surface — these are static rasters and don't adapt on their own like the SVG.
