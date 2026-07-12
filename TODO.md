# TODO — placeholder slots

Every `[… SLOT …]` token in the built site, per the spec's rule that nothing
placeholder ships silently as if final. `npm run verify` (build + copy lint)
fails if a file containing a slot token is missing from this list.

## Legal / company (deferred until Async Forest Ltd is registered)

- `src/components/SiteFooter.astro:19` — `[COMPANY NUMBER SLOT]` — Companies Act disclosure, company number.
- `src/components/SiteFooter.astro:19` — `[REGISTERED OFFICE SLOT]` — registered office address.

## Follow-ups

- Fill the two legal slots above once the company is registered. The Companies Act
  disclosure is legally required, and the raw slot tokens should not be visible on the
  public `asyncforest.com` site — fill or remove them before pointing DNS at production.
- Writing/essays + RSS were removed for the lean launch (booking-first). Restore from git
  history when real essays exist.
