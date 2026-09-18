import { getCollection, type CollectionEntry } from 'astro:content';
import { team } from '../data/home';
import { roster } from '../data/team-roster';

export type BlogEntry = CollectionEntry<'blog'>;

export const CATEGORY_LABELS: Record<BlogEntry['data']['category'], string> = {
  'understanding-addiction': 'Understanding Addiction',
  'understanding-trauma': 'Understanding Trauma',
  'for-the-family': 'For the Family',
  news: 'News',
  lgbtqia: 'LGBTQIA+',
};

/** Category slug ↔ label are the same string with spaces/case normalized —
 *  kept as one map so a new category only needs adding here. */
export const CATEGORY_SLUGS = Object.keys(CATEGORY_LABELS) as BlogEntry['data']['category'][];

/**
 * Real photo background for the post banner, per category — matches
 * CLAUDE.md's Hero rule ("must always use a real photo... never an
 * illustration, SVG graphic, or other abstract visual") once the client
 * asked for the banner to match the rest of the site's page heroes. All
 * four are already-in-use real assets from public/Asset/Facility/, not
 * stock photography, chosen for mood: a calm lounge for general recovery
 * content, a quiet reading nook for trauma content, a shared outdoor table
 * for family content, and the facility entrance for institutional/news
 * posts (the same photo alcohol.astro's hero already uses).
 */
export const CATEGORY_PHOTOS: Record<BlogEntry['data']['category'], string> = {
  'understanding-addiction': '/Asset/Facility/facility-17-living-room-lounge.jpg',
  'understanding-trauma': '/Asset/Facility/facility-21-quiet-reading-nook.jpg',
  'for-the-family': '/Asset/Facility/facility-19-outdoor-dining-deck.jpg',
  news: '/Asset/Facility/facility-16-facility-entrance-drive.jpg',
  lgbtqia: '/Asset/Facility/facility-24-residence-lounge-deck.jpg',
};

/**
 * A post is visible in production once it isn't a draft. Drafts render in
 * `astro dev` (so a new post can be reviewed at its real URL before
 * publishing) but are excluded from `astro build` output entirely — no
 * static page, no listing appearance.
 */
export function isVisible(entry: BlogEntry): boolean {
  return !entry.data.draft || import.meta.env.DEV;
}

/** All non-draft posts (or all posts, in dev), sorted newest first. Legacy
 *  posts with no known real publishDate fall back to the manual `order`
 *  field (lower = older) rather than a fabricated date — see
 *  src/content.config.ts. */
export async function getVisiblePosts(): Promise<BlogEntry[]> {
  const all = await getCollection('blog', isVisible);
  return all.sort((a, b) => {
    const aTime = a.data.publishDate?.getTime() ?? -(a.data.order ?? 0);
    const bTime = b.data.publishDate?.getTime() ?? -(b.data.order ?? 0);
    return bTime - aTime;
  });
}

export async function getPostsByCategory(category: string): Promise<BlogEntry[]> {
  const all = await getVisiblePosts();
  return all.filter((p) => p.data.category === category);
}

export async function getPostsByAuthor(authorSlug: string): Promise<BlogEntry[]> {
  const all = await getVisiblePosts();
  return all.filter((p) => p.data.author === authorSlug);
}

/** Up to `count` other posts sharing the same category, most relevant first
 *  (same fallback ordering as getVisiblePosts). */
export async function getRelatedPosts(entry: BlogEntry, count = 3): Promise<BlogEntry[]> {
  const sameCategory = await getPostsByCategory(entry.data.category);
  return sameCategory.filter((p) => p.id !== entry.id).slice(0, count);
}

/** The real URL for a post — its own /blog/{slug}/ page, or the legacy
 *  root-level URL it was kept at for SEO if this is a metadata-only entry. */
export function postHref(entry: BlogEntry): string {
  return entry.data.externalPath ?? `/blog/${entry.id}/`;
}

export interface AuthorInfo {
  name: string;
  role: string;
  photo: string;
  slug: string;
  badge?: string;
  /** One real sentence, from the person's own team/roster entry — the
   *  "About the author" card on a post uses this (not `authorBio`, which
   *  runs several paragraphs and is meant for a fuller bio elsewhere). */
  bio?: string;
  /** Short first-person bio for the "About the author" card at the bottom
   *  of a post — only set for staff with one on file (see `team` in
   *  src/data/home.ts). Absent for most roster entries. */
  authorBio?: string;
}

/** Looks a post's `author` slug up in the site's one real staff roster
 *  (src/data/home.ts `team` + src/data/team-roster.ts `roster`) — never a
 *  fabricated byline. Returns null for posts with no named author (most
 *  institutional/press-style posts), which the UI renders as "Breathe Team"
 *  with no individual photo. */
export function getAuthor(authorSlug: string | undefined): AuthorInfo | null {
  if (!authorSlug) return null;
  const fromTeam = team.find((p) => p.slug === authorSlug);
  if (fromTeam) {
    return {
      name: fromTeam.name,
      role: fromTeam.role,
      photo: fromTeam.photo,
      slug: fromTeam.slug,
      badge: fromTeam.badge as string | undefined,
      bio: (fromTeam as { bio?: string }).bio,
      authorBio: (fromTeam as { authorBio?: string }).authorBio,
    };
  }
  for (const group of roster) {
    const person = group.people.find((p) => p.slug === authorSlug);
    if (person) return { name: person.name, role: person.role, photo: person.photo, slug: person.slug, bio: (person as { bio?: string }).bio };
  }
  return null;
}

const WORDS_PER_MINUTE = 200;

/** Real posts with body content compute their own reading time from the
 *  rendered word count; legacy metadata-only entries carry a manual
 *  `readingTime` computed once from their actual .astro file (see
 *  docs/13-BLOG-SYSTEM.md) since there's no body here to count. */
export function readingTimeMinutes(entry: BlogEntry, renderedText?: string): number {
  if (entry.data.readingTime) return entry.data.readingTime;
  if (renderedText) return Math.max(1, Math.ceil(renderedText.trim().split(/\s+/).length / WORDS_PER_MINUTE));
  return 1;
}
