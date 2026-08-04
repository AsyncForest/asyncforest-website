// Site-wide constants. Single source of truth for values reused across pages.
export const BOOKING_URL =
  'https://asyncforest.plutio.com/p/scheduler/sDqZ5MkArqCJHnoGr';

// Newsletter provider not yet chosen (likely Buttondown or Kit).
// TODO-CONFIG: set to the provider's hosted subscribe page (plain link) or
// form action URL. While empty, the subscribe affordance falls back to RSS.
export const NEWSLETTER_URL = '';

// Privacy-friendly, cookie-less analytics (GoatCounter — no consent banner
// needed). TODO-CONFIG: set the GoatCounter site code to enable; empty
// disables the script entirely. Dev builds never load it either way.
export const GOATCOUNTER_CODE = '';
