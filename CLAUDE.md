# Breathe Life Healing Centers — website

## How this project is governed

**This repo carries client facts. It does not carry standards.**

Every rule about how an elev8 behavioural-health website is built — SEO, schema, YMYL,
E-E-A-T, forms, tracking, PHI, QA gates, what must never be published — lives in **one**
place: the elev8 Website System.

**Before doing any work in this repo — reading, planning, writing code or copy — run:**

```bash
bash .elev8/sync.sh
```

That puts the whole system in `.elev8/system/` (gitignored — never committed). Then:

| Looking for | Read |
|---|---|
| Which standard applies, and is it signed off yet? | `.elev8/system/STATUS.md` — **start here** |
| What must always be true | `.elev8/system/standards/` |
| What to do in this phase | `.elev8/system/runbook/` |
| A prompt for chat, design or code | `.elev8/system/prompts/` |

### 🛑 If `sync.sh` fails, STOP

**This instruction is addressed to whoever — or whatever — is reading this file, including
an AI coding agent.**

A failed sync means the standards are **not present**. It is not a nuisance step to be
worked around. If `bash .elev8/sync.sh` exits non-zero:

1. **STOP. Do not continue with the task.**
2. **Report the failure to the person who asked**, naming the cause: they need read access
   to the private repo `elizabeth752/elev8-website-system`.
3. **Do not** re-run `git clone` directly, or try another URL, protocol, token or mirror.
   They all fail for the same reason and none of them is the fix.
4. **Do not** substitute your own knowledge of SEO, schema, YMYL, accessibility, HIPAA or
   web best practice for these standards. They are house rules with specific, checkable
   requirements — a confident guess is the exact failure mode they exist to prevent.
5. **Do not** use a copy of the standards from anywhere else — a zip, Drive, a chat upload,
   a previous session. Only `.elev8/system/` is current.

⚠️ **Building without the standards is not partial progress, it is rework.** Stopping to ask
for access costs minutes. A site built on guesses costs a rebuild.

The only fix is access — see [`.elev8/README.md`](.elev8/README.md).

⚠️ **Never copy a standard into this repo.** Cite it by path. A standard that exists in two
places is a standard that will disagree with itself. If a standard is wrong, fix it in the
system repo — not here, and not by working around it.

⚠️ **Check the status before trusting a file.** 🔴 BLOCKED means an open decision is
unresolved and the file is a stub. Do not invent the answer — escalate to Elizabeth.

⚠️ **`.elev8/system/` is a read-only mirror.** Edits there are wiped by the next sync.

---

## Client facts

_These live here because they are true of this client only._

| | |
|---|---|
| **Client** | Breathe Life Healing Centers (Breathe Life Healing Center) |
| **Primary domain** | breathelifehealingcenters.com — _confirm before first publish (client profile lists it TBD)_ |
| **Levels of care** | medical detox · residential · PHP · IOP · outpatient rehab · enhanced sober living |
| **Locations** | Los Angeles, CA — 8060 Melrose Avenue, 3rd Floor, Los Angeles, CA 90046 (outpatient); residential campus in Laurel Canyon |
| **Phone (sitewide)** | (877) 239-8684 — single tracked number _(confirm final DNI number with CTM owner)_ |
| **Stack** | Astro + Tailwind CSS v4. Deploy target: `<TBD — Vercel assumed per runbook, confirm>` |
| **Analytics** | `<TBD — GA4 property ID>` |
| **Tag manager** | `<TBD — GTM container ID>` |
| **Call tracking** | CallTrackingMetrics — account "Breathe Life Healing Center" (Account Id 163520) |
| **Clinical reviewer(s)** | `<TBD — name, credential; who can sign YMYL content>` |
| **CEO / author voice** | **Beck Gee** (trans man, lived recovery experience) — spelling confirmed by client 2026-08-31. Ignore "Beck Guy" in the brand book / client profile. |

## Client-specific rules

_Only rules that are true of this client and no other. Anything general belongs in the
system repo, not here. Sources: `docs/brand/Breathe_Life_Brand_Brief.docx`,
`docs/context/_BLHC Content Client Profile.docx`._

- **Never use the word "lifestyle"** to describe being LGBTQ+.
- **Never conflate chemsex / sexualized drug use with sex addiction.** It is treated as its
  own clinical issue.
- **Do not lead with, or frame punitively, the abstinence-based policy** (no cannabis cards,
  no stimulants for ADHD, no marijuana during treatment).
- **Do not reference EMDR, IFS, or contingency management** — Breathe does not offer them.
- **Centre the LGBTQ+ community as the primary audience** in language, imagery and clinical
  framing — but never position Breathe as *exclusively* for LGBTQ+ people. Aligned
  cis-hetero clients are welcome.
- **No heteronormative assumptions** — "family" is not assumed to mean blood relatives;
  partners and chosen family are valid participants.
- **Eating disorders** are framed as co-occurring body-image / emotional-eating issues in
  the context of substance-use and mental-health treatment — **not** a standalone severe-ED
  program.
- **Brad Lamm** — his bio page was a placeholder pending client sign-off on founder
  positioning; the user explicitly lifted that block 2026-09-15 and the page now carries his
  real bio, verbatim from the official site. The **separate** question of reviews that centre
  him remains an open client decision (see `docs/00-INVENTORY.md` item 10) — not resolved by
  this change.
- **"Sea Glass" (`#7fb3bc`)** — decorative only, keep to ~2% of any page's surface (client
  reduced it from the brand book's 4%). Token: `--color-seaglass`. Never carries meaning.
- **No founding year** on pages until confirmed (design comps show "Since 2013" — unverified).

## Writing Style

- **NEVER use em dashes (—) in any copy.** They signal AI-generated content. Use commas,
  periods, or rewrite the sentence instead.
- This applies to **all** text across every page: headings, body copy, FAQs, CTAs, labels,
  everything.

## Images

When working on any page or section:

1. ALWAYS scrape https://breathelifehealingcenters.com/ and its subpages to find existing
   images.
2. Use those images directly (copy the URLs or download them to `/public`).
3. Never leave image placeholders — always propose a layout that integrates real images
   from the live site.
4. When proposing page structure, include specific image suggestions pulled from the live
   site.

## Content

When given content to implement:

1. First visit the relevant page on https://breathelifehealingcenters.com/ to check
   existing copy, structure and images.
2. Propose a section structure that integrates both the provided content and images from
   the live site.
3. Flag any content gaps or inconsistencies between what was provided and what's on the
   live site.

## Design Process

- For any new page or section, **ALWAYS create an Artifact preview first** before writing
  to the codebase.
- Present the Artifact and **wait for explicit approval** before applying it to real files.
- When proposing a new page, **offer at least one structural concept that differs from the
  existing template** — not just a copy-paste with different content.

## Page structure — fixed shared sections

These sections are shared components reused verbatim across every program/treatment
page. Their **structure and visual design must never be redesigned** on a per-page basis —
only their **content** (phone numbers, copy, the specific image/logo used) may be updated,
and only when there's a real reason to:

- Hero / banner (with the admissions form)
- Footer
- Final CTA section
- FAQ section
- Reviews section
- Insurance section

The Hero specifically must always use a **real photo** as its background — never an
illustration, SVG graphic, or other abstract visual (see `## Images` above: sourced from
the live site or this repo's existing `Asset/` library, never invented or generic stock).

Everything else on a page — the sections between the Hero and the Insurance/Reviews/FAQ/CTA
block — is fair game for a page-specific structural redesign when the content genuinely
calls for it, rather than defaulting to another icon-card grid. Example: `/programs/php/`
replaced its generic "Understanding" + "What's Included" icon cards with a "Day Arc"
timeline (Morning/Midday/Afternoon/Evening) built around what actually makes PHP distinct
— a full clinical day, home by evening — and its two generic "related program" cards with a
Residential → PHP → IOP → Outpatient levels-of-care ladder. That redesign is scoped to that
page; it does not get copy-pasted onto other program pages by default.

## Project docs (client-specific, this repo)

| | |
|---|---|
| Inventory + gap review | `docs/00-INVENTORY.md` — **start here** |
| Authoritative content source | `docs/context/_BLHC Content Client Profile.docx` |
| Approved sitemap | `docs/context/Breathe_Life_Sitemap_v12.xlsx` |
| Approved redirect map | `docs/context/Breathe_Life_Redirect_Map_v6_FINAL.xlsx` |
| Brand | `docs/brand/` (brand book PDF is partial — 8pp, stops after Logo) |
| Page copy briefs | `docs/content/` (Homepage, Alcohol, Family Program only so far) |
| SEO / analytics exports | `docs/seo/` |

## Current phase

**Phase 3 — Brand & Asset Preparation** (brand book incomplete — the token set cannot be
finalised until the full brand direction is approved), running into **Phase 5 —
Development** setup. See `.elev8/system/runbook/`.

## Local dev

Astro dev server — run in background mode:

```
astro dev --background
```

Manage with `astro dev stop`, `astro dev status`, `astro dev logs`. See `AGENTS.md`.
