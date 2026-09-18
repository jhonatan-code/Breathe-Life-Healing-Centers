/**
 * Anchor text for the levels-of-care "ladder" (and outpatient-rehab's
 * "fork" variant) used across the 6 /programs/* detail pages. One phrase
 * per destination, reused everywhere that destination is linked from,
 * rather than varying by which page links to it -- consistent anchor
 * text to the same URL is the stronger SEO practice, and each phrase is
 * still distinct from that destination's own page heading (Elizabeth,
 * 2026-09-18, approved list).
 */
export const LEVEL_CTA: Record<string, string> = {
  "/programs/medical-detox/": "See What Medical Detox Involves",
  "/programs/residential-treatment/": "What Residential Treatment Includes",
  "/programs/php/": "See How PHP Day Treatment Works",
  "/programs/intensive-outpatient/": "What IOP Treatment Involves",
  "/programs/outpatient-rehab/": "See How Outpatient Rehab Works",
  "/programs/sober-living/": "See How Sober Living Works",
};
