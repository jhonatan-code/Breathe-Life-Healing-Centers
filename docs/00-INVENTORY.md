# Breathe Website — Document Inventory & Gap Review

_Last reviewed: 2026-08-31. Source: `docs/_inbox/` (now sorted into the folders below)._

This is a review of everything supplied so far, what it gives us, and what's still
missing before build. **Nothing is being built yet** — this is the context pass.

---

## Folder map

| Folder | What's in it |
|---|---|
| `brand/` | Brand manual PDF (8pp), Brand Brief, primary logo (JPG) |
| `content/` | Full page-copy briefs: Homepage, Alcohol, Family Program, Reviews compilation |
| `context/` | **BLHC Content Client Profile** — the authoritative source doc; everything defers to it |
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

### SEO / analytics (for the sitemap + redirect work)
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
4. **No new-site sitemap yet.** We have the *old* sitemap and the homepage nav (which implies the new IA), but no consolidated new URL structure. → **deliverable to produce:** `10-SITEMAP.md` — proposed new IA, page-by-page, with which old URLs each new page absorbs.
5. **Only 3 of ~25+ pages are briefed.** Homepage, Alcohol, Family Program have full copy. The nav calls for: 8 more "What We Treat" pages (Meth, Cocaine, Opioids, Xanax, Benzo, Kratom, Marijuana, Co-occurring Eating Disorders), 5 Conditions pages, 6 more Program pages, 3 Signature Services pages, Therapies, About/Team/Careers, Admissions x3, Contact, Areas-We-Service x4. → need briefs or a decision on launch scope (which pages ship v1).

### Redirects
6. **No redirect map yet.** This is buildable now from `seo/` data. → **deliverable to produce:** `11-REDIRECTS.md` — every indexed/linked old URL → its new destination (301), prioritised by the organic-pages + backlinks + GSC data so we don't drop traffic or link equity. Special cases already visible: `/about/-our-team/` (double dash, has traffic), the `?utm_source=gmb…` homepage variants, the consolidated Family URLs, 216 blog posts (keep paths / map to new blog), Team member URLs (`/our-team/*` vs `/about/our-team/`).

### Content decisions (flagged inside the briefs — not ours to decide)
7. **CEO name spelling: "Beck Guy" vs "Beck Gee".** Brand manual and Client Profile say **Beck Guy**; the v1 landing screenshot says "Beck Gee". Needs one answer.
8. **Founder positioning: Brad Lamm / Deb Hughes.** v1 landing shows all three under "The People Behind Breathe". Client Profile names Beck Guy as CEO and an earlier decision removed Brad Lamm's bio page — but Brad Lamm is the subject of the site's strongest backlinks (Wikipedia, NYT, Vanity Fair) and older Google reviews are signed by him as owner. Leadership section and reviews strategy are **blocked** on this.
9. **SAMHSA statistic** for the Alcohol page LGBTQ+ disparity — needs a verified figure + citation before publish.
10. **Reviews strategy** — how to handle the reviews that centre Brad Lamm (feature only others / add context / address the transition).
11. **Confirmed domain** — Client Profile lists Website as "TBD / confirm before first publish."

---

## Suggested next deliverables (in `docs/`, still not touching `src/`)

1. `10-SITEMAP.md` — proposed new IA + old→new page consolidation.
2. `11-REDIRECTS.md` — 301 map from `seo/` data, traffic-prioritised.
3. `12-BRAND-TOKENS.md` — a working design-token set (color, type, spacing) inferred from the manual + v1 site, to be confirmed against the missing brand-manual pages.
4. A decision log capturing answers to items 7–11 above.
