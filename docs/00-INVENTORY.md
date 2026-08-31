# Breathe Website — Document Inventory & Gap Review

_Last reviewed: 2026-08-31. Source: `docs/_inbox/` (now sorted into the folders below)._
_Update 2026-08-31: the approved sitemap arrived — see `context/Breathe_Life_Sitemap_v12.xlsx` and `context/Breathe_Life_FINAL_Sitemap_for_Approval.docx`. Gap #4 below is now closed._

This is a review of everything supplied so far, what it gives us, and what's still
missing before build. **Nothing is being built yet** — this is the context pass.

---

## Folder map

| Folder | What's in it |
|---|---|
| `brand/` | Brand manual PDF (8pp), Brand Brief, primary logo (JPG) |
| `content/` | Full page-copy briefs: Homepage, Alcohol, Family Program, Reviews compilation |
| `context/` | **BLHC Content Client Profile** (authoritative source) + **approved Sitemap** (`v12.xlsx` annotated, `FINAL_..._for_Approval.docx` clean) |
| `design/` | `v1-landing-page-full-screenshot.png` — full-page render of the existing v1 landing page |
| `seo/` | Old-site sitemap, Semrush organic (positions + pages), backlinks, GSC performance, CallTrackingMetrics call export |
| `_text/` subfolders | Plain-text conversions of every `.docx` / PDF, for quick diffing and reference |

---

## ✅ What we have

### Brand
- **Core idea**: "breath — held, released, shared." Steady not soft, warm not sentimental, peer not authority. The one-line test: _if it doesn't help someone take a fuller breath, it isn't ours._
- **Logo**: brush-script "Breathe" + wide-tracked "Life Healing Centers". Primary is **`#33679C`** blue on white; reversed is white knockout on a dark navy ("Deep Still"). Favicon = the "B" mark only. `brand/logo-breathe-primary.jpg` is the color lockup (JPG only — **need vector**).
- **Voice & tone**: fully specified in both the Brand Brief and the Client Profile — Always/Never lists, real intake-call quotes for register, explicit banned words ("lifestyle"), no conflating chemsex with sex addiction.
- **Photography direction**: real people, real gender diversity, candid West Hollywood light. Avoid stock "sad addict" / "triumphant recovery" / hands-in-a-circle.
- **Audience order** (stated, without apology): gay/bi/queer men → trans men → trans women → nonbinary/GNC → lesbian/queer women → aligned cis-het.
- **Six differentiators** (the strategic spine): lived experience at every level · chemsex track · sexual health in care · gender-affirming care woven in · chosen family in family therapy · systemic barriers as clinical material.

### Content (page copy)
- **Homepage** — complete section-by-section copy: header/nav, hero + lead form, trust bar, empathy statement, Why Breathe (6), Levels of Care (8 cards), Signature Services (3), Location, Leadership, Reviews, Insurance, FAQ (9), Final CTA, Footer.
- **`/what-we-treat/alcohol/`** — complete copy, incl. the ranking phrase "los angeles day alcohol detox" to preserve.
- **`/programs/family-program/`** — complete copy; consolidates 3 old URLs (Family Programs hub + 3-Day Workshop + Family Intensive Services) into one page.
- **Reviews** — 22 client + professional reviews compiled, Google Business Profile (155 reviews, 4.1 avg). A homepage-featured subset is pre-curated.

### Design
- One artifact: the **v1 landing page** full-page screenshot. Structure closely tracks the homepage brief (hero w/ insurance form, Laurel Canyon facility, "Whoever you are", What we treat, Levels of Care, Signature Services, "More than a rehab", People Behind Breathe, Four Simple Steps, reviews, insurers, location, FAQ, final CTA). Useful as a reference for what's already live.

### Sitemap / IA (NEW — approved)
- **`context/Breathe_Life_Sitemap_v12.xlsx`** — the approved new site structure, ~75 pages across 11 sections, each row marked `CONFIRMED` / `RECOMMENDED` / `NEW` / `OPTIMIZE` / `CLARIFY` with consolidation notes. Key decisions baked in:
  - **Programs** `/programs/*` (11 pages) — replaces old `/breathe-services/*` and `/therapies/<level>/`. Alumni Program sourced from old `/breathe-services/breatheout/`.
  - **What We Treat** `/what-we-treat/*` (renamed from "Substances We Treat") — Opioids absorbs heroin/fentanyl/prescription; Methamphetamine absorbs amphetamines; Eating Disorders absorbs 12 old service-page redirects and is framed as co-occurring body-image, **not** a standalone ED program.
  - **Conditions** `/conditions/*` (5) — Depression & Anxiety flagged OPTIMIZE (title/meta rewrite); Trauma must include a video.
  - **Signature Services** `/signature-services/*` (3) — LGBTQ+ moved here from its own menu.
  - **Areas We Service** `/areas-we-service/*` (4) — West Hollywood confirmed; Beverly Hills / Santa Monica / Santa Barbara NEW, justified by CTM call counts.
  - **Therapies** `/therapies/*` (12) — all NEW pages to build except Experiential Therapies.
  - **About** `/about/*` — absorbs old Locations hub, **Mission & Vision** and **Accreditations & Memberships** merged into `/about/` (no longer separate URLs; also kills the `/joint-commission/` duplicate). Sero Mental Health kept, moved under About. **Brad Lamm bio page: REMOVED (confirmed).**
  - **Removed / redirected:** standalone `/faq/` → homepage; `/drug-rehab/` → `/what-we-treat/`; Brad's Books → `/resources/`; `/test/`, `/test-page/`, `/breathe-services-old/` → deleted; `/latest-news/` and a stray `/sero-mental-health/` → homepage (CLARIFY).
- Clean list also in `context/Breathe_Life_FINAL_Sitemap_for_Approval.docx`.

### SEO / analytics (for the redirect work)
- **Old-site sitemap** (`seo/sitemap_urls.csv`) — 374 URLs: 82 Pages, 216 Posts, 43 Team, 19 Category, plus Author/Gallery/Members.
- **Semrush organic positions** (`seo/organic-positions.xlsx`) — 1,937 ranking keywords with URL, position, volume.
- **Semrush organic pages** (`seo/organic-pages.xlsx`) — 155 URLs by traffic share. Top earners: `/addiction-treatment-program/drug-addiction-treatment/` (eating-disorder LA cluster, #1), `/sex-addiction-drug-addiction/`, homepage, `/addiction-treatment-program/meth-addiction-treatment/`, `/addiction-treatment-program/alcohol-rehab/`, `/toxic-codependency-looks-like/`, `/prevent-failure-launch-children/`.
- **GSC performance** (`seo/gsc-performance.xlsx`) — 12 mo: ~13.7k clicks / 1.7M impressions. Top pages incl. `/can-you-have-an-eating-disorder-and-not-realize-it/` (1,991 clicks), `/toxic-codependency-looks-like/` (935), `/about/our-team/` (487). Mostly branded + informational blog traffic.
- **Backlinks** (`seo/backlinks.xlsx`) — 5,531 rows. Real editorial links worth protecting: Wikipedia (Brad Lamm), NYT, Vanity Fair, BuzzFeed, einpresswire, MT.gov — mostly to `/`, `/about/our-team/`, and specific blog posts. Lots of blogspot spam too.
- **Call export** (`seo/calls-export-*.csv`) — 9,800 tracked calls Jan–Aug 2026, with transcripts/summaries. Confirms real caller language ("methamphetamine use related to sex", chemsex demand, insurance-first questions).

---

## ⚠️ Gaps & things still needed before build

### Brand
1. **Brand manual is partial.** The PDF is 8 pages and stops after §05 (The Logo). Its own contents list §06 Color, §07 Typography, §08 breath-layout system, §09 Photography, §10 Graphic elements, §13 Digital UI kit, §15 Accessibility — **none of those pages are in the file.** We have one hex (`#33679C`) and visual inference (geometric sans for headings, a serif for body, monospace for labels/eyebrows), but **no defined palette, no type families/scale, no spacing system, no component specs.**
2. **No vector logo.** Only `logo-breathe-primary.jpg`. Need SVG/EPS for primary, reversed (white), and one-color. (Note: `src/` in the sibling landing-page project has `Logo Breathe.svg`, `White Logo.svg` — may be reusable.)
3. **No favicon "B" mark** as a standalone asset.

### Sitemap / IA
4. ~~No new-site sitemap yet.~~ **RESOLVED 2026-08-31** — approved sitemap received (`context/Breathe_Life_Sitemap_v12.xlsx`). Still open within it: the `CLARIFY` row for `/latest-news/` + stray `/sero-mental-health/`, and final page name for "Sero Mental Health".
5. **Only 3 of ~75 pages are briefed.** Homepage, Alcohol, Family Program have full copy. The approved sitemap defines ~75 URLs — the other ~72 (all Therapies pages, most What-We-Treat, all Conditions, Signature Services, Areas We Service, About, Admissions, Resources) have **no copy yet**. → need briefs, or a decision on **launch scope** (which pages ship in v1 vs. follow later).

### Redirects
6. **No redirect map yet.** Now buildable — we have both endpoints (old `seo/sitemap_urls.csv` + the approved new structure). → **deliverable to produce:** `11-REDIRECTS.md` — every indexed/linked old URL → its new 301 destination, prioritised by `organic-pages` + `backlinks` + `gsc-performance`. Known special cases: `/about/-our-team/` (double dash, has traffic), the `?utm_source=gmb…` homepage variants, the 3→1 Family consolidation, 12 old service pages → `/what-we-treat/eating-disorders/`, `/breathe-services/*` → `/programs/*`, `/therapies/<level-of-care>/` → `/programs/<level>/`, 216 blog posts (keep paths / map to new blog), 43 Team URLs (`/our-team/*` → `/about/our-team/#…` or per-person), `/joint-commission/` → `/about/`.

### Content decisions (flagged inside the briefs — not ours to decide)
7. **CEO name spelling: "Beck Guy" vs "Beck Gee".** Brand manual and Client Profile say **Beck Guy**; the v1 landing screenshot says "Beck Gee". Needs one answer.
8. **Founder positioning: Brad Lamm / Deb Hughes.** v1 landing shows all three under "The People Behind Breathe". Client Profile names Beck Guy as CEO and an earlier decision removed Brad Lamm's bio page — but Brad Lamm is the subject of the site's strongest backlinks (Wikipedia, NYT, Vanity Fair) and older Google reviews are signed by him as owner. Leadership section and reviews strategy are **blocked** on this.
9. **SAMHSA statistic** for the Alcohol page LGBTQ+ disparity — needs a verified figure + citation before publish.
10. **Reviews strategy** — how to handle the reviews that centre Brad Lamm (feature only others / add context / address the transition).
11. **Confirmed domain** — Client Profile lists Website as "TBD / confirm before first publish."

---

## Suggested next deliverables (in `docs/`, still not touching `src/`)

1. `11-REDIRECTS.md` — 301 map: old URLs → approved new URLs, traffic-prioritised from `seo/` data.
2. `12-BRAND-TOKENS.md` — a working design-token set (color, type, spacing) inferred from the manual + v1 site, to be confirmed against the missing brand-manual pages.
3. `13-LAUNCH-SCOPE.md` — which of the ~75 approved pages ship in v1 (proposal: Homepage + the 3 briefed pages + section overviews + Admissions + Contact + legal; everything else stubbed with redirects until briefed).
4. A decision log capturing answers to items 7–11 above.

_(`10-SITEMAP.md` no longer needed — the approved `context/` sitemap is the source of truth.)_
