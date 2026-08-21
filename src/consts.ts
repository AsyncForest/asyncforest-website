// Site-wide constants. Single source of truth for values reused across pages.

// Every "book a call" CTA points at the on-site booking page, which hosts the
// scheduler embed. Keeping it internal means the widget loads inside the site
// chrome instead of throwing people out onto a third-party domain mid-decision.
export const BOOKING_PATH = '/book/';

// Google Calendar appointment scheduling (replaced Plutio, 2026-08-21).
// `gv=true` is the flag that makes Google serve the bare embed rather than the
// full calendar.google.com page, so it is only on the iframe URL. The same
// schedule without the flag is the standalone page we offer as a fallback when
// the iframe is blocked.
const GOOGLE_SCHEDULE =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZwPdmuzYCWabj1Nf-f2urIyOfQIC8RuWBoug7ekx3L0CsvB-wwb3MGUXZhe0-Gv3aoucsnSyW';
export const BOOKING_EMBED_URL = `${GOOGLE_SCHEDULE}?gv=true`;
export const BOOKING_DIRECT_URL = GOOGLE_SCHEDULE;

// Newsletter provider not yet chosen (likely Buttondown or Kit).
// TODO-CONFIG: set to the provider's hosted subscribe page (plain link) or
// form action URL. While empty, the subscribe affordance falls back to RSS.
export const NEWSLETTER_URL = '';

// Privacy-friendly, cookie-less analytics (GoatCounter — no consent banner
// needed). TODO-CONFIG: set the GoatCounter site code to enable; empty
// disables the script entirely. Dev builds never load it either way.
export const GOATCOUNTER_CODE = '';
