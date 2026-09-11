# `/what-we-treat/alcohol/` build — notes

_2026-09-01. First interior page. Built from `docs/content/Breathe_Life_Alcohol_Page_Brief.docx`
(full section-by-section copy), visual language carried over from the homepage
(`src/pages/index.astro`) rather than a dedicated design comp — none exists yet
for interior pages._

## What's new vs. the homepage build

| File | What |
|---|---|
| `src/pages/what-we-treat/alcohol.astro` | the page |
| `src/components/SiteHeader.astro` | **new** — real multi-page sticky header (`primaryNav` from `site.ts`), same `.site-hdr`/`.hdr-*` classes as the homepage so all existing mobile CSS applies unchanged. Homepage keeps its own bespoke single-page scroll-nav header (`#treat`, `#levels`…) — this component is for every other page. |
| `src/components/SiteFooter.astro` | **new** — same footer visual as the homepage, "Explore" links point at real section-overview URLs instead of `#`-anchors. |
| `src/styles/global.css` | added `.link-card` hover state (used for the therapy/condition cross-link chips). |

The reveal-on-scroll and insurance-marquee scripts are duplicated inline on the
page rather than shared — worth extracting once a 3rd page exists.

## Content decisions made while building (not in the brief verbatim)

- Added a compact **Insurance** section (logo marquee + CTA) — not in the brief,
  but supports the FAQ answer about verifying benefits and reuses the homepage's
  insurer list/marquee.
- **Clinical Approach** and **Co-occurring Conditions**: the brief lists therapy
  names and condition names with no page-level copy — rendered as link cards to
  their approved sitemap URLs (`/therapies/*`, `/conditions/*`). Those pages
  don't exist yet, so these currently 404 until built.
- **How We Treat** cards link to `/programs/medical-detox/`,
  `/programs/residential-treatment/`, `/programs/php/`,
  `/programs/medication-assisted-treatment/` — same situation, 404 until built.
- Final CTA and hero "Start Your Treatment" / "Send Us a Message" point to
  `/admissions/` and `/contact-us/` — not yet built.
- "Los Angeles day alcohol detox" (the brief's #1-ranked phrase) kept verbatim
  in the How-We-Treat intro and the PHP & IOP card, plus the meta description.

## 🔴 Still open

- **SAMHSA disparity figure** — the "Alcohol use in the LGBTQ+ community"
  section is intentionally qualitative (no invented percentage). Insert the
  verified stat + citation before publish (brief's own COPY NOTE).
- All linked-to pages above (`/programs/*`, `/therapies/*`, `/conditions/*`,
  `/admissions/*`, `/contact-us/`) are 404s until built — this page is ahead of
  its own internal links.
- Same sitewide blockers as the homepage: no verified DNI phone number, no
  analytics/tracking, PHI/forms destination, CWV budget — see
  `docs/BUILD-NOTES.md`.
