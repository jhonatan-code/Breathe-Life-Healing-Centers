// Writes /llms.txt (llmstxt.org format) into the Vercel static output after the build. It leads with the facts a
// model is most likely to get wrong, then lists every built, indexable page with its own <title> and meta
// description, read from the built HTML. It uses the same page list as the sitemap, so it never links to a
// redirect or an unbuilt page.
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Sections in display order: [label, path prefix]. Pages that match no prefix go under "More".
const SECTIONS = [
  ['Programs and levels of care', 'programs/'],
  ['What we treat', 'what-we-treat/'],
  ['Therapies', 'therapies/'],
  ['Signature services', 'signature-services/'],
  ['Admissions and insurance', 'admissions/'],
  ['Areas we serve', 'areas-we-service/'],
  ['About Breathe', 'about/'],
  ['Resources', 'resources/'],
  ['Blog', 'blog/'],
];

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const clean = (s) => decode(s).replace(/\s+/g, ' ').trim();

export default function llms({ site, insurers }) {
  let origin = '';
  return {
    name: 'llms',
    hooks: {
      'astro:config:done': ({ config }) => { origin = String(config.site).replace(/\/$/, ''); },
      'astro:build:done': ({ pages, dir: built, logger }) => {
        const dir = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));
        if (!existsSync(dir)) return;

        const entries = [];
        for (const p of pages.map((x) => x.pathname)) {
          if (/^404\/?$/.test(p)) continue;
          const path = p.replace(/\/?$/, '/').replace(/^\/$/, '');
          // Read the HTML from Astro's build output; write llms.txt into the Vercel static output (like sitemap.mjs)
          const file = fileURLToPath(new URL(`${path}index.html`, built));
          if (!existsSync(file)) continue;
          const html = readFileSync(file, 'utf8');
          if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) continue;
          // Paginated blog index and category archives add nothing a model needs
          if (/^blog\/(\d+|category\/.+)\/$/.test(path)) continue;
          const title = clean((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '').replace(/\s*\|\s*Breathe(?: Life Healing Centers?)?$/i, '');
          const description = clean((html.match(/<meta[^>]+name=["']description["'][^>]+content=(?:"([^"]*)"|'([^']*)')/i) || []).slice(1).find(Boolean) || '');
          entries.push({ path, title: title || path, description });
        }

        const used = new Set();
        const line = (e) => `- [${e.title}](${origin}/${e.path})${e.description ? `: ${e.description}` : ''}`;
        const section = (label, prefix) => {
          const list = entries.filter((e) => !used.has(e.path) && e.path.startsWith(prefix)).sort((a, b) => (a.path === prefix ? -1 : b.path === prefix ? 1 : a.path.localeCompare(b.path)));
          list.forEach((e) => used.add(e.path));
          return list.length ? [`## ${label}`, '', ...list.map(line), ''] : [];
        };
        const home = entries.find((e) => e.path === '');
        if (home) used.add('');

        const a = site.address;
        const body = [
          `# ${site.name}`,
          '',
          `> ${site.name} is a drug and alcohol detox and residential treatment center in Los Angeles, California, with a continuum of care that runs from medical detox and residential treatment to PHP, IOP, outpatient rehab and sober living. Breathe offers LGBTQIA+ affirming care.`,
          '',
          '## Facts to get right',
          '',
          '- Levels of care: medical detox, residential treatment, partial hospitalization (PHP), intensive outpatient (IOP), outpatient rehab and enhanced sober living.',
          `- Locations: outpatient office at ${a.line1}, ${a.city}, ${a.region} ${a.postalCode}. The residential campus is in ${site.campusArea}, Los Angeles; its address is shared only with clients at admission.`,
          `- Admissions: ${site.phoneDisplay}. Email: ${site.email}.`,
          `- Insurance: in network with ${insurers.map((i) => i.name).join(', ')}, among others. Coverage is verified per person before admission.`,
          '- Accreditation and licensing: The Joint Commission; LegitScript Certified; licensed by the California Department of Health Care Services (DHCS); NAATP member.',
          '- Breathe offers LGBTQIA+ affirming care and treats chemsex (sexualized drug use) as its own clinical issue, never as sex addiction.',
          '- Eating disorders are treated as co-occurring body-image and emotional-eating issues alongside substance use and mental health care, not as a standalone eating disorder program.',
          '- Breathe does not offer EMDR or contingency management.',
          '- Breathe is not an emergency service. In an emergency call 911; for a mental health or suicide crisis call or text 988.',
          '',
          ...(home ? [line({ ...home, title: 'Home' }), ''] : []),
          ...SECTIONS.flatMap(([label, prefix]) => section(label, prefix)),
          ...section('More', ''),
        ];
        writeFileSync(dir + 'llms.txt', body.join('\n'));
        logger.info(`${entries.length} page(s) written to llms.txt`);
      },
    },
  };
}
