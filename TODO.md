# TODO — placeholder slots

Every `[… SLOT …]` token in the built site, per the spec's rule that nothing
placeholder ships silently as if final. `npm run verify` (build + copy lint)
fails if a file containing a slot token is missing from this list.

## Legal / company

- ~~`[COMPANY NUMBER SLOT]`~~ — filled 2026-07-21: Async Forest Ltd, company no. 17351665,
  registered in England and Wales.
- Registered office address deliberately omitted from the footer for now (Henry's home
  address; he is moving the registered office to the accountant's address via AD01).
  The Trading Disclosures Regulations 2015 require it on the website, so **add the
  registered office line to `SiteFooter.astro` as soon as the AD01 change is filed.**

## Follow-ups

- Writing/essays + RSS were removed for the lean launch (booking-first). Restore from git
  history when real essays exist.
