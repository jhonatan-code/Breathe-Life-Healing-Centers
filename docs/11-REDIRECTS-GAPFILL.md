# Blog decision — a proposal (not a decision)

_2026-09-11. Answers `docs/00-INVENTORY.md` item 6 ("the blog decision") and item 4 of
"Suggested next deliverables." This is a **proposal for review**, built from data — it is
not the client-facing decision itself. Per `CLAUDE.md`, an open/blocked decision doesn't
get invented an answer here; this gives whoever does decide something concrete to react to._

**Source data:** `seo/gsc-performance-2026-09-11.xlsx` (6-month Search Console export, 415
pages) — cross-checked against the 12-month export already in this folder; the same posts
lead in both, so this isn't a seasonal blip. Full row-by-row output:
`seo/blog-redirect-proposal-2026-09-11.csv` (264 rows — every blog/standalone URL, its
6-month clicks/impressions/position, proposed tier, and proposed redirect target). This doc
summarizes that CSV; treat the CSV as the working file if anyone wants to re-sort or
override individual rows.

## The four tiers

| Tier | Rule | Posts | 6-mo clicks | 6-mo impressions |
|---|---|--:|--:|--:|
| **A — Keep live, same URL** | ≥15 clicks in 6 months — proven, current demand | 23 | 2,880 | 218,420 |
| **B — Keep for brand strategy** | Chemsex / LGBTQ+ / flight-attendant topic, even where traffic is still low | 13 | 44 | 21,876 |
| **C — Redirect, consolidate** | Topic overlaps an already-approved new-site page; fold the old post's ranking signal into that page via 301 rather than losing it | 138 | 298 | 137,550 |
| **D — Redirect to homepage** | No topical match and negligible traffic (celebrity-news filler, lifestyle filler, near-zero clicks/impressions) | 90 | 88 | 74,427 |

Tiers A+B (36 posts) keep ~2,924 of the blog's 3,344 six-month clicks, **87% of blog
traffic from 14% of the URLs**. Tiers C+D (228 posts) are worth 426 clicks combined — real,
but small next to what a 301 into a stronger, already-optimized page can recover.

## Tier A — keep live as-is (23 posts, top 15 by clicks)

No redirect. These are working; don't touch the URL.

| Post | Clicks | Impr. | Position |
|---|--:|--:|--:|
| `/can-you-have-an-eating-disorder-and-not-realize-it/` | 1,297 | 29,539 | 8.7 |
| `/toxic-codependency-looks-like/` | 471 | 28,319 | 7.4 |
| `/sex-addiction-drug-addiction/` | 201 | 18,541 | 7.2 |
| `/drug-induced-psychosis/` | 126 | 28,374 | 9.0 |
| `/mackenzie-phillips-joins-breathe-as-addiction-counselor/` | 120 | 8,349 | 5.0 |
| `/vicious-cycle-addiction/` | 93 | 16,539 | 13.2 |
| `/5-weird-things-alcohol-withdrawal/` | 91 | 3,106 | 11.2 |
| `/hookah-smoking-smoking-tobacco/` | 74 | 18,397 | 6.1 |
| `/hand-mouth/` | 59 | 8,123 | 7.3 |
| `/can-you-force-someone-to-go-to-rehab/` | 47 | 5,864 | 14.4 |
| `/abuse-c-ptsd-complex-post-traumatic-stress-disorder/` | 42 | 6,578 | 23.5 |
| `/smoking-suicide/` | 35 | 3,417 | 8.3 |
| `/prevent-failure-launch-children/` | 28 | 3,541 | 22.1 |
| `/skillful-vs-unskillful-love/` | 25 | 3,464 | 7.6 |
| `/chemsex-what-is-it-and-why-is-it-dangerous/` | 22 | 4,585 | 36.9 |

Full 23 in the CSV. Two worth flagging on sight:
- `/abuse-c-ptsd-complex-post-traumatic-stress-disorder/` and `/chemsex-what-is-it-and-why-is-it-dangerous/` are getting real clicks **despite ranking at position 23.5 and 36.9** — page 3+. If these get a content refresh on the new site (not just a lift-and-shift), position has a lot of room to improve, which likely multiplies clicks, not just preserves them.
- `/mackenzie-phillips-joins-breathe-as-addiction-counselor/` carries real editorial backlinks (BuzzFeed, Vanity Fair, Daily Mail per the backlinks export) — keep the exact URL, don't let it become a 301 target that dilutes that link equity.

## Tier B — keep despite low current traffic, because of brand strategy (13 posts)

None of these clear the 15-click bar. All 13 sit inside the site's own stated
differentiators (chemsex track, LGBTQ+-first audience, gender-affirming care — see
`docs/brand/Breathe_Life_Brand_Brief.docx`). Cutting them would mean the new site has *less*
topical coverage of Breathe's actual specialty than the old one, right as `/signature-services/`
is being built out. Recommend keeping the URLs live and folding them into the
`/signature-services/chemsex-treatment/` and `/signature-services/lgbtq/` content plan as
supporting pages, rather than orphaning them.

| Post | Clicks | Impr. | Position | Maps toward |
|---|--:|--:|--:|---|
| `/lgbt-drug-rehab-in-los-angeles-inclusive-and-compassionate-care/` | 14 | 8,835 | 40.5 | `/signature-services/lgbtq/` |
| `/addiction-treatment-for-gay-men/` | 13 | 3,000 | 32.2 | `/signature-services/lgbtq/` |
| `/gay-rehab-centers-in-los-angeles-tailored-support-for-the-lgbtq-community/` | 6 | 6,499 | 18.5 | `/signature-services/lgbtq/` |
| `/transgender-treatment-for-addiction-in-los-angeles-inclusive-and-understanding-care/` | 6 | 874 | 19.2 | `/signature-services/lgbtq/` |
| `/grindr-hookup-culture-and-substance-use-what-queer-men-should-know/` | 2 | 130 | 9.0 | `/signature-services/chemsex-treatment/` |
| `/breathe-life-healing-centers-welcomes-transgender-people/` | 2 | 89 | 9.3 | `/signature-services/lgbtq/` |
| `/gay-addiction-treatment-in-los-angeles/` | 1 | 1,036 | 63.3 | `/signature-services/lgbtq/` |
| `/gay-rehab-centers-in-los-angeles-addressing-unique-needs-in-recovery/` | 0 | 1,277 | 38.6 | `/signature-services/lgbtq/` |
| `/how-minority-stress-drives-substance-use-in-lgbtq-communities/` | 0 | 44 | — | `/signature-services/lgbtq/` |
| `/chemsex-addiction/` | 0 | 35 | — | `/signature-services/chemsex-treatment/` |
| `/why-queer-people-deserve-treatment-that-actually-sees-them/` | 0 | 29 | — | `/signature-services/lgbtq/` |
| `/lgbtqia-affirming-addiction-treatment-in-los-angeles-finding-the-right-support/` | 0 | 27 | — | `/signature-services/lgbtq/` |
| `/celebrating-national-lgbt-history-month/` | 0 | 1 | — | `/signature-services/lgbtq/` |

Note the pattern: several of these rank at position 30–60+ (page 3+ of results) despite
directly matching the brand's own stated audience. That's not a traffic problem, it's a
content/SEO problem worth fixing on the new site rather than a reason to cut them.

## Tier C — redirect and consolidate (138 posts)

Topically covered by a page already in the approved sitemap. A 301 keeps whatever ranking
signal the old post has, instead of the new site starting that topic from zero. Grouped by
destination (see the CSV for the full 138):

| Destination | Posts | Combined clicks |
|---|--:|--:|
| `/what-we-treat/eating-disorders/` | ~20 | ~60 |
| `/what-we-treat/methamphetamine/` | ~7 | ~20 |
| `/what-we-treat/opioids/` (heroin + opioids + fentanyl) | ~12 | ~15 |
| `/what-we-treat/alcohol/` | ~5 | ~5 |
| `/conditions/complex-trauma/` | ~9 | ~10 |
| `/conditions/trauma/` (PTSD-specific) | ~6 | ~5 |
| `/conditions/depression/` | ~5 | ~2 |
| `/conditions/anxiety/` (incl. OCD — no dedicated OCD page exists) | ~6 | ~18 |
| `/conditions/dual-diagnosis/` | ~4 | ~4 |
| `/admissions/for-families/` (intervention, family support) | ~8 | ~10 |
| `/resources/media/` (team/company news not already in Tier A) | ~10 | ~4 |
| everything else (detox, residential, PHP, IOP, sober living, MAT — old
  service-page duplicates of pages this rebuild already has) | ~10 | ~5 |
| `/what-we-treat/` hub (nicotine/vaping — no dedicated substance page exists for this) | ~5 | ~2 |
| `/programs/alumni-program/` (relapse, support groups) | ~5 | ~10 |
| rest, thin/scattered topics | ~31 | ~130 |

One open question this raises rather than answers: **there's no dedicated OCD or
trichotillomania page in the approved sitemap**, but 5 old posts on those topics pull
real impressions (`/what-is-ocd/`: 1,668 impr; `/living-with-someone-who-has-ocd/`: 16
clicks/5,571 impr). Redirecting them into `/conditions/anxiety/` is a reasonable fallback,
not a real fix — worth a look if OCD content is worth its own page later.

## Tier D — redirect to homepage, no topical home (90 posts)

Two flavors, same recommendation (301 to `/`):

- **Off-brand celebrity/news filler** — `/phillip-seymour-hoffman-dead-actor-dies-46/`
  (7 clicks but a startling 52,850 impressions at position 2.6 — ranks well for the
  celebrity's name, has nothing to do with Breathe's services), `/michael-phelps/`,
  `/robin-williams-fame-self-shame/`, `/josh-duggars-rehab-welcome-to-the-dark-ages/`.
  Recommend 301 rather than keep-live even for the high-impression one — that traffic
  isn't converting today (0.01% CTR) and won't convert on a rebuilt site either; it's
  the wrong audience.
- **Generic lifestyle filler with no addiction/mental-health angle** — sleep hygiene,
  "how to be the sober life of the party," summer activities, workplace humor pieces,
  etc. Zero-to-negligible traffic, no topical match, no brand relevance.

Full 90 in the CSV. Caveat: a handful of these (`/most-addictive-substances/` — 13 clicks,
`/internal-family-systems-and-its-role-in-restoring-balance/` — 10 clicks,
`/finding-freedom-through-the-dance-of-liberation/` — 10 clicks) have real, non-trivial
clicks and aren't celebrity/lifestyle filler — they just didn't match a keyword rule and
sit under the 15-click Tier A bar. Worth a human glance rather than trusting the
rule-based cut here specifically. One of them is worth a second look for a different
reason too: an article *about* internal family systems reads differently than a claim that
Breathe *offers* IFS, but the client profile has already flagged IFS as excluded — if this
post stays live in any form, it should be read against that same rule.

## What this doesn't decide

This is a traffic-and-topic read of the data, not a publishing decision. It doesn't answer:
- Whether Breathe keeps running an active blog going forward (new posts), only what to do
  with the 264 that already exist.
- Whether Tier A/B posts get a content refresh before relaunch or ship as-is.
- Who owns writing the actual 301 rules once tiers are approved (this project's existing
  `Breathe_Life_Redirect_Map_v6_FINAL.xlsx` format, presumably).

That's the client/team call `00-INVENTORY.md` item 6 already flags as open. This proposal
exists so that conversation has real numbers in front of it instead of "keep the blog or
not."
