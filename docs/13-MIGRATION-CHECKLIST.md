# Migration checklist: current WP site → new site

Pages on the current WordPress site that need a specific check when the domain switches
to the new build. One row per page. Add to this list whenever a WP page gets a one-off fix
that the new site has to match.

Sitewide phone number on the new site: **(877) 239-8684**, set once in
`src/config/site.ts` (`phoneDisplay` / `phoneHref`). No page hard-codes a number.

| # | Current WP URL | What was done on WP | New-site handling | Status |
|---|---|---|---|---|
| 1 | `/the-whole-person-approach-why-holistic-alcohol-rehab-is-taking-over-los-angeles/` (post 3182) | 2026-10-14: hard-coded `877-401-2510` in the closing CTA replaced with `877-239-8684`. Verified live. | Not migrated as a post. 301 → `/what-we-treat/alcohol/` (Tier C, `astro.config.mjs`). The target uses the sitewide number. | ✅ WP fixed · ✅ redirect in place |
| 2 | `/drug-rehab/` (page 2395, Beaver Builder) | 2026-10-14: replace `(877) 835-2061` (Google Ads tracking number) with `(877) 239-8684` in the "Call Us" button and the CTA button group (text and `tel:` link). **On hold:** the page has unpublished Beaver Builder draft changes from someone else; publishing would push them live. | 301 → `/areas-we-service/los-angeles/` (decided 2026-10-14). It's a Google Ads landing page (19 organic impressions, 2 backlinks, 7 tracked calls Jan to Aug 2026); the LA page has the same "drug rehab" intent and, per the keyword map, targets "rehab centers los angeles" with the H1 "Drug & Alcohol Rehab in Los Angeles". | ⏸ WP: user to publish in Beaver Builder · ✅ redirect in place |

## Before launch

- [x] `/drug-rehab/`: 301 to `/areas-we-service/los-angeles/` added in `astro.config.mjs` and `public/_redirects`.
- [ ] `/drug-rehab/` on WP: swap `(877) 835-2061` for `(877) 239-8684` in Beaver Builder and publish (includes the existing drafts, approved 2026-10-14).
- [ ] Apply the keyword-map title/H1 for `/areas-we-service/los-angeles/` so the redirect lands on a "Drug & Alcohol Rehab" page.
- [ ] `/drug-rehab/`: confirm with PPC that ad final URLs are updated or covered by the redirect.
- [ ] Re-check both URLs on the new domain after DNS switch (status code, final URL, phone number shown).
