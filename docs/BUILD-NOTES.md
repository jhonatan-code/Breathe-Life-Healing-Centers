# Homepage build — notes, deviations & TODOs

_v1 evaluation build, 2026-08-31. Homepage + header + footer only._

Built from: the approved content brief (`docs/content/…Homepage…`), the client
profile, and the Claude Design comp (`Breathe Life Homepage (standalone).html`,
layout only — not a fact source, per `design-system.md §10`).

## Stack / where things live

| | |
|---|---|
| Framework | Astro 7 + Tailwind v4 (`@theme` in `src/styles/global.css`) |
| Design tokens | `src/styles/global.css` — colour by role, type scale, spacing, radii, breakpoints, motion |
| Client facts | `src/config/site.ts` (phone, email, address, nav model, socials) — **single source** |
| Homepage copy | `src/data/home.ts` — kept out of components |
| Components | `Header`, `Footer`, `Button`, `Icon`, `InsuranceForm`, `Schema` |
| Page | `src/pages/index.astro` (sections inline, copy from `home.ts`) |

Run: `npm install && npm run dev` → http://localhost:4321 · `npm run build` passes.

## Decisions applied

- **CEO name: "Beck Gee"** (confirmed by client 2026-08-31). Updated everywhere.
- **Sea Glass (`#7fb3bc`)** is now used for **one thing only** — the short rule on
  section eyebrows — plus a single accent border on the insurance exclusion note.
  Well under the 2% the client asked for (down from the brand book's 4%). Token:
  `--color-seaglass`, decorative only.
- **Phone number** — used `(877) 239-8684` from the content brief. The design comp
  and the PPC call-tracking exports show `(877) 516-2604`. One constant in
  `site.ts`; **confirm the real sitewide DNI number with the CTM owner.**
- **Nav consolidated to 6 top-level items** (`navigation.md §3` ceiling): Programs ·
  What We Treat · Signature Services · About · Admissions · Contact. Conditions fold
  under What We Treat; Therapies / Areas We Service / Resources are in the mega
  panels or footer. The content brief listed 10 top-level items — not compliant.
- **Leadership section shows only Beck Gee.** Brad Lamm / Deb Hughes founder
  positioning is an open client decision and the approved sitemap removes the Brad
  Lamm bio — so the design's 3-person leadership row (with "Founder in Long-Term
  Recovery – Brad Lamm") was **not** carried over. The "Why Breathe" differentiator
  became "Staff who've lived it" (brand pillar #1) instead of naming a founder.
- **No room / bed counts.** The design's "twenty-two rooms / three residential
  homes" is a census figure — `what-not-to-publish.md §1`. Campus is described by
  character, not numbers.
- **No founding year.** The design's "Since 2013" isn't in the brief or profile;
  omitted pending confirmation (`design-system.md §10`).
- **FAQ answers are visible** (not an accordion) and appear verbatim in the DOM, so
  the `FAQPage` schema matches (`schema.md` rule 2). 9 questions from the brief.
- **Schema**: `Organization` + `MedicalBusiness` + `BreadcrumbList` + `FAQPage`.
  `medicalSpecialty: https://schema.org/Psychiatric` (there is no addiction member).
  `aggregateRating` 4.1 / 155 from the reviews compilation — owned number, refresh
  on the next export.
- **Reviews**: the four pre-curated homepage quotes from the reviews compilation
  (none centre Brad Lamm), verbatim, Google-yellow stars, "individual results may
  vary" disclaimer.
- **Icons** are inline SVG (`Icon.astro`) — no Font Awesome / Material Symbols
  dependency from the comp.

## 🔴 Blocked / not wired (need decisions or later phases)

| Item | Why | Standard |
|---|---|---|
| **Insurance form submission** | No verified PHI destination. Form renders + validates, then tells the user to call. Do **not** set `action` without the CTM SOP. | `forms-ctm.md` 🔴, `phi-data-handling.md` |
| **SMS opt-in wording** | Placeholder TCPA-style text; needs counsel sign-off. | `privacy-consent.md` 🔴 |
| **Analytics / tracking** | No GA4 / GTM / DNI. No tracking layer on the page yet. | `tracking.md` 🔴 |
| **CWV / performance targets** | No agreed thresholds; images are raw JP(no `<Image>` optimisation yet). | `technical-seo-performance.md` 🔴 |
| **Social profile URLs** | 8 icons render with `href="#"`. Real/created profiles to be collected. | `social-media.md` 🔴, `asset-standards.md` |
| **Accreditation verification URLs** | Footer badges link to each issuer's general lookup, not the Breathe-specific record. Collect exact URLs in asset prep. | `components.md §4` |
| **"As seen on" (GMA / Oprah / Today)** | In the brief; no logos or article/segment URLs supplied. Omitted — an unlinked publication logo isn't allowed. | `components.md §6` |
| **OG image** | `Layout.astro` references `/og-default.jpg` — not created yet. | `seo-page-requirements.md §6` |
| **Vector logo** | Using the existing `White Logo.svg` / `Logo Breathe.svg` from the v1 project. Confirm these are the approved brand-book lockups. | `design-system.md §1` |
| **Nav / footer links** | Point at real sitemap URLs that 404 until those pages exist. Fine for this eval; every link must resolve before launch. | `internal-linking.md §4` |
| **Design tokens** | Provisional — inferred from the comp + one brand hex. Reconcile with the full brand book (colour/type/spacing sections are missing from the 8-page PDF). | `design-system.md §1–2` |
| **Clinical reviewer byline** | Homepage doesn't strictly need one; note it for program/condition pages. | `medical-clinical-review.md` |

## Open client questions this build touched

- Founder / co-founder positioning (Brad Lamm, Deb Hughes) — see `00-INVENTORY.md #8`.
- Reviews that centre Brad Lamm — strategy still open (`#10`).
- Verified SAMHSA stat — not used on the homepage.
- Confirmed production domain — `site.ts` has `breathelifehealingcenters.com` as a placeholder for canonicals.
