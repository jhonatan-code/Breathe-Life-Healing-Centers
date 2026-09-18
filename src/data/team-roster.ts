import { team } from "./home";

/**
 * Full staff roster, sourced directly from the official live site's own
 * "Our Team" page (breathelifehealingcenters.com/about/our-team/, checked
 * 2026-09-02) — same department grouping the client uses on their own tabs.
 * No bio prose exists for any of these people on the source site, only
 * name / credentials / role / photo, so that's all this file adds — nothing
 * invented. Photos downloaded to /Asset/Our%20Team/; anyone the source site
 * itself shows with its own generic "B" placeholder (no real headshot
 * uploaded) uses that same placeholder here rather than a fabricated photo.
 *
 * Single source of truth — shared by /about/our-team/ (tabs + carousels) and
 * every individual /about/our-team/{slug}/ profile page (department eyebrow
 * + "More from this department" strip via TeamProfile.astro, added
 * 2026-09-15). Do not duplicate this array anywhere else.
 */
export const roster: { dept: string; people: { name: string; role: string; photo: string; slug: string; bio?: string }[] }[] = [
  {
    dept: "Medical Team",
    people: [
      { name: "Stacy Cohen, MD", role: "Medical Director", photo: "/Asset/Our%20Team/stacy-cohen.webp", slug: "stacy-cohen" },
      { name: "Mayra Lopez, LVN", role: "Lead Nurse", photo: "/Asset/Our%20Team/mayra-lopez.jpg", slug: "mayra-lopez" },
    ],
  },
  {
    dept: "Clinical Team",
    people: [
      { name: "Emily Wessel, LPCC, CET2, CCTP-II", role: "Clinical Director", photo: "/Asset/Our%20Team/emily-wessel.jpg", slug: "emily-wessel" },
      { name: "Mark S. DeRosa, CADC-III, ICADC, ASAT", role: "Residential Program Director", photo: "/Asset/Our%20Team/mark-derosa.jpg", slug: "mark-derosa" },
      { name: "Christine Wolf, CADC-II, ICADC", role: "IOP Program Manager", photo: "/Asset/Our%20Team/christine-wolf.jpg", slug: "christine-wolf" },
      { name: "Valerio Iovino, PsyD, LAADC, ASAT", role: "Primary Therapist", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "valerio-iovino" },
      { name: "Iza Kiacz, MA, AMFT", role: "Therapist", photo: "/Asset/Our%20Team/iza-kiacz.jpg", slug: "iza-kiacz" },
      { name: "Sarah Johnson, MA, AMFT", role: "Therapist", photo: "/Asset/Our%20Team/sarah-johnson.jpg", slug: "sarah-johnson" },
      { name: "Shoshana Katz, LMFT", role: "Therapist", photo: "/Asset/Our%20Team/shoshana-katz.jpg", slug: "shoshana-katz", bio: "Brings a relational, trauma-informed approach to individual, adolescent, and family therapy." },
      { name: "Rachel Aiono, ASW", role: "Therapist", photo: "/Asset/Our%20Team/rachel-aiono.jpg", slug: "rachel-aiono" },
      { name: "Vivian Rubio, CADC-II", role: "Counselor", photo: "/Asset/Our%20Team/vivian-rubio.jpg", slug: "vivian-rubio" },
      { name: "Blake Dinger, CADC", role: "Counselor", photo: "/Asset/Our%20Team/blake-dinger.jpg", slug: "blake-dinger" },
    ],
  },
  {
    dept: "Admissions & Case Management",
    people: [
      { name: "Cristina Meadows, CADC-II", role: "Director of Admissions", photo: "/Asset/Our%20Team/cristina-meadows.jpg", slug: "cristina-meadows" },
      { name: "Kate Chappell", role: "Admissions Manager", photo: "/Asset/Our%20Team/kate-chappell.jpg", slug: "kate-chappell" },
      { name: "Wayne Nathan", role: "Admissions Counselor", photo: "/Asset/Our%20Team/wayne-nathan.jpg", slug: "wayne-nathan" },
      { name: "Emily Salas", role: "Admissions Counselor", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "emily-salas" },
      { name: "Kayla Radin", role: "Lead Case Manager", photo: "/Asset/Our%20Team/kayla-radin.jpg", slug: "kayla-radin" },
      { name: "Forever Peru", role: "Case Manager", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "forever-peru" },
    ],
  },
  {
    dept: "Marketing, Business Development, & Alumni",
    people: [
      { name: "Emmy Olea", role: "Director of Marketing & Business Development", photo: "/Asset/Our%20Team/emmy-olea.jpg", slug: "emmy-olea" },
      { name: "Brian Whisenant", role: "National Clinical Outreach Coordinator", photo: "/Asset/Our%20Team/brian-whisenant.jpg", slug: "brian-whisenant" },
    ],
  },
  {
    dept: "Operations",
    people: [
      { name: "Miguel Palacios", role: "Director of Operations", photo: "/Asset/Our%20Team/miguel-palacios.jpg", slug: "miguel-palacios" },
      { name: "Keegan Halupowski", role: "Operations Manager", photo: "/Asset/Our%20Team/keegan-halupowski.jpg", slug: "keegan-halupowski" },
      { name: "Jeremy Hanes", role: "Utilization Review Director", photo: "/Asset/Our%20Team/jeremy-hanes.jpg", slug: "jeremy-hanes" },
      { name: "Keone Holt", role: "Head Chef", photo: "/Asset/Our%20Team/keone-holt.jpg", slug: "keone-holt" },
      { name: "Ivis Gutierrez-Lopez", role: "Behavioral Health Technician Shift Lead", photo: "/Asset/Our%20Team/ivis-gutierrez-lopez.jpg", slug: "ivis-gutierrez-lopez" },
      { name: "Wes Werbeck", role: "Behavioral Health Technician Shift Lead", photo: "/Asset/Our%20Team/wes-werbeck.jpg", slug: "wes-werbeck" },
      { name: "Hassan Olton", role: "Behavioral Health Technician Shift Lead", photo: "/Asset/Our%20Team/hassan-olton.jpg", slug: "hassan-olton" },
      { name: "Nick Michalski", role: "Behavioral Health Technician Shift Lead", photo: "/Asset/Our%20Team/nick-michalski.jpg", slug: "nick-michalski" },
      { name: "Esmeralda Sandoval", role: "Behavioral Health Technician Shift Lead", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "esmeralda-sandoval" },
      { name: "Duran Visek", role: "Behavioral Health Technician Shift Lead", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "duran-visek" },
      { name: "Rox Varela", role: "Behavioral Health Technician Shift Lead", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "rox-varela" },
      { name: "Velsanard Beavers", role: "Behavioral Health Technician Shift Lead", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "velsanard-beavers" },
    ],
  },
  {
    dept: "Adjunct Professionals",
    people: [
      { name: "Angie S. Wang", role: "Group Facilitator", photo: "/Asset/Our%20Team/angie-wang.jpg", slug: "angie-wang" },
      { name: "Megan Ethridge, LPCC", role: "Group Facilitator", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "megan-ethridge" },
      { name: "Anna Limina, MT-BC", role: "Group Facilitator", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "anna-limina" },
      { name: "Sue Dinner", role: "Group Facilitator", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "sue-dinner" },
      { name: "Sarah Sitt, CADC-II", role: "Art Group Facilitator", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "sarah-sitt" },
      { name: "Bill Reilly, CADC-II", role: "Group Facilitator", photo: "/Asset/Our%20Team/bill-reilly.png", slug: "bill-reilly" },
      { name: "Hannah Ayers, LMFT", role: "Group Facilitator", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "hannah-ayers" },
      { name: "Christina Beck", role: "Group Facilitator", photo: "/Asset/Our%20Team/no-photo.jpg", slug: "christina-beck" },
    ],
  },
];

export const deptSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// One group per department, Executive Leadership first — mirrors the
// official site's own tab structure.
export const tabGroups: { dept: string; people: { name: string; role: string; photo: string; slug: string; badge?: string }[] }[] = [
  { dept: "Executive Leadership", people: team.map((p) => ({ name: p.name, role: p.role, photo: p.photo, slug: p.slug, badge: p.badge as string | undefined })) },
  ...roster,
];

// Real, derivable fact only — no invented statistics.
export const totalPeople = team.length + roster.reduce((sum, g) => sum + g.people.length, 0);

/**
 * A person's department + up to `count` other real teammates from that same
 * department, for the "More from [Department]" strip on their individual
 * profile page (TeamProfile.astro). Returns null if the slug isn't in any
 * group (shouldn't happen for a real profile page).
 */
export function getTeamContext(slug: string, count = 4) {
  for (const group of tabGroups) {
    if (!group.people.some((p) => p.slug === slug)) continue;
    return {
      dept: group.dept,
      deptSlugValue: deptSlug(group.dept),
      peers: group.people.filter((p) => p.slug !== slug).slice(0, count),
    };
  }
  return null;
}
