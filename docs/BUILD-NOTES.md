# Homepage build — notes, deviations & TODOs

_v2 — **design-faithful port** of `Breathe Life Homepage.dc.html`, 2026-08-31._
_Homepage + its scroll nav + footer only. Local build; not pushed to GitHub._

The homepage is now a close reproduction of the approved Claude Design comp: same
section order, same layout, same inline styling, same fonts
(**Instrument Sans headings, Montserrat body**), same section backgrounds, same
carousels/marquee/accordion. Ported to Astro; the DC component runtime was
re-implemented as vanilla JS.

## Where things live

| Path | What |
|---|---|
| `src/pages/index.astro` | the whole page — design markup + inline styles + ported behavior script |
| `src/data/home.ts` | content arrays (gallery, treat cards, levels, signature, why, steps, reviews, FAQ, insurers) |
| `src/config/site.ts` | client facts — the one place the phone number lives |
| `src/styles/global.css` | the design's 3 KB of global CSS (reveal, carousel, accordion) + CTA hover states + fonts |
| `src/components/Icon.astro` | inline-SVG social glyphs (replaces the comp's Font Awesome) |
| `src/components/Schema.astro` | JSON-LD (Organization + MedicalBusiness + BreadcrumbList + FAQPage) |
| `src/layouts/Layout.astro` | `<head>`, canonical, OG, Google Fonts incl. Material Symbols |

`npm run dev` → http://localhost:4321 · `npm run build` passes.

## Content fixes applied to the design (as agreed)

| Design | This build |
|---|---|
| "The people behind Breathe" — Brad Lamm (Founder), Beck Gee, Deb Hughes | **Beck Gee only** + "Meet the full team →". Brad Lamm's bio is removed in the approved sitemap; founder positioning is an open client decision. |
| "Why Breathe" card 8 — "Founder in Long-Term Recovery / Brad Lamm, in recovery since 2003" | replaced with **"Staff Who've Lived It"** (lived-experience pillar, no name). Same icon/layout. |
| Hero: "Since 2013, we've built care around one fact:" | "We've built care around one fact:" — founding year unverified. |
| Facility: "three residential homes… Twenty-two rooms and views across three homes" | "residential homes set in the quiet hills of Laurel Canyon" / "Slide through and tap any frame…" — no room/home counts (`what-not-to-publish.md §1`). |
| Phone `(877) 516-2604` throughout | `(877) 239-8684` from the content brief. One constant in `site.ts`. **Confirm the real DNI number.** |
| Review carousel — 8 embellished quotes | 8 **verbatim** quotes from `Breathe_Life_Reviews_Compilation` (`components.md §5` — a rewritten review is a fabricated one). Same card design; avatar = coloured initial. |
| FAQ: "most people who call sound exactly like that" | "and that is a very common place to be starting from" (`content-specificity.md §3` — don't quantify the source). |
| FAQ: "Residential stays commonly run 30 to 90 days" | reworded to "shaped around your progress… varies by level of care and by what a plan authorises" (`what-not-to-publish.md §2` — no length-of-stay presented as standard). |
| Insurance form: name / phone / carrier only | added **email**, **date of birth** (required), member ID + carrier optional, separate unchecked SMS opt-in (`components.md §11`). |
| Footer socials: Font Awesome `<i>` from a CDN | inline-SVG `Icon.astro`, same 8 accounts, no external dependency. |

## Design elements reproduced 1:1

Sticky scroll-nav header (7 anchor links + phone button) · hero with entrance-drive
photo + gradient + bullet list + white insurance card · facility main-image +
2-row thumbnail scroller with counter · belonging 2-up with photo cluster · What We
Treat — two horizontal card scrollers (15 substances + 5 conditions) with ‹ ›
buttons · Levels of Care — photo + bordered list, "Flagship" tag · Signature
Services — dark band, auto-scrolling marquee (pauses on hover/focus) · Why Breathe
8-card grid · Four Steps on navy · Reviews — infinite drag/keyboard carousel with
dots · Insurance logo row · Location — Google Maps embed + hover-reveal panel ·
FAQ — sticky intro + 3 groups of `<details>` accordions · Final CTA with bg photo ·
dark footer with accreditation badges.

## 🔴 Still blocked / not wired

| Item | Why | Standard |
|---|---|---|
| Insurance form submission | No verified PHI destination. Validates, then tells the user to call. | `forms-ctm.md` 🔴, `phi-data-handling.md` |
| SMS opt-in wording | Placeholder; needs counsel. | `privacy-consent.md` 🔴 |
| Analytics / tracking / DNI | None on the page. | `tracking.md` 🔴 |
| CWV / performance | Raw JPEGs, no `<Image>` optimisation; Material Symbols + Google Fonts are render-blocking. No agreed thresholds. | `technical-seo-performance.md` 🔴 |
| Social profile URLs | 8 icons link to `#footer`. | `social-media.md` 🔴 |
| Accreditation verification URLs | Footer badges are images only, not linked to the issuer's record. | `components.md §4`, `navigation.md §6` |
| "As seen on" (GMA / Oprah / Today) | In the brief; no logos or article URLs. Not in the design; omitted. | `components.md §6` |
| OG image | `Layout.astro` references `/og-default.jpg` — not created. | `seo-page-requirements.md §6` |
| Real site navigation | The design's header is a single-page **scroll nav** (`#treat`, `#levels`…). The real ≤6-item wayfinding nav with mega menus and links to other pages is a separate task. | `navigation.md` |
| Mobile | The comp is desktop-first (1440). Sections use `flex-wrap` / `auto-fit` so they reflow, but there's no dedicated mobile nav or a persistent mobile contact bar. | `design-system.md §9`, `navigation.md §2` |
| FAQ accordion | Answers are in the DOM on load (schema-safe), but hidden behind `<details>`; `components.md §7` prefers visible answers. Kept collapsed to match the comp. |
| "What We Treat" cards | Display-only in the design (not links). Left as-is; several (Heroin, Fentanyl, Amphetamine…) don't map 1:1 to the approved sitemap. |
| Google Maps `<iframe>` | Third-party embed — revisit against `phi-data-handling.md` / privacy-consent before launch. |
| Design tokens | This port uses the comp's inline literals, not a token system. Reconcile with the full brand book. | `design-system.md §1–2` |

## Open client questions this build touches

Founder / co-founder positioning (Brad Lamm, Deb Hughes) · reviews that centre Brad
Lamm · verified SAMHSA stat (not used here) · confirmed production domain · final
name for "Sero Mental Health".
