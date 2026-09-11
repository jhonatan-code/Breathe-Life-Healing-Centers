import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The blog is the one part of this site that uses Astro's content layer —
 * everywhere else stays 100% hand-authored .astro per CLAUDE.md convention.
 * It's isolated here because listing, pagination, category archives, and
 * "articles by this author" all need to *query* the set of posts, which
 * hand-authored page files can't do.
 *
 * Two kinds of entries live in this one collection:
 *  - Legacy posts (the 18 real Tier A articles already published at their
 *    original root-level URLs, kept there for SEO/backlink equity per
 *    docs/11-REDIRECTS-GAPFILL.md) carry `externalPath` and no body content.
 *    They exist here only so they can appear in /blog/ listings, category
 *    archives, and an author's article grid — the actual page still lives
 *    at its real .astro file and URL.
 *  - New posts (going forward) have real MDX/MD body content and get
 *    rendered at /blog/{slug}/ by src/pages/blog/[...slug].astro.
 *
 * `author` references a slug in src/data/home.ts `team` or
 * src/data/team-roster.ts `roster` — never invent an author. Leave it unset
 * for institutional/press-style posts with no real named byline (see
 * src/lib/blog.ts `getAuthor`).
 *
 * No fabricated publish dates: the 18 legacy posts' real original publish
 * dates aren't known (they weren't preserved from the old WordPress export),
 * so `publishDate` is optional and legacy entries sort by the manual `order`
 * field instead — see src/lib/blog.ts. Replace with real dates if the client
 * ever supplies them. New posts should always carry a real `publishDate`.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['understanding-addiction', 'understanding-trauma', 'for-the-family', 'news']),
    author: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    order: z.number().optional(),
    readingTime: z.number().optional(),
    draft: z.boolean().default(false),
    externalPath: z.string().optional(),
  }),
});

export const collections = { blog };
