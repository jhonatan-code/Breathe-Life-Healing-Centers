/**
 * Single source of truth for client facts used across the build.
 * Client facts live here, never inside components (see .elev8/system/standards/components.md §13).
 *
 * ⚠️ PHONE: the content brief gives (877) 239-8684; the design comp and the PPC
 * call-tracking exports show (877) 516-2604. Per design-system.md §10 the brief
 * wins on facts. Confirm the real sitewide DNI number with the CTM owner before
 * launch, then change it here only. No phone number is hard-coded anywhere else.
 */
export const site = {
  name: "Breathe Life Healing Centers",
  shortName: "Breathe",
  // Display + dial forms of the one sitewide tracked number.
  phoneDisplay: "(877) 239-8684",
  phoneHref: "tel:+18772398684",
  email: "Admissions@BreatheLHC.org",
  emailHref: "mailto:Admissions@BreatheLHC.org",
  address: {
    line1: "8060 Melrose Avenue, 3rd Floor",
    city: "Los Angeles",
    region: "CA",
    postalCode: "90046",
    country: "US",
  },
  // Residential campus address is shared privately at admissions — never published.
  campusArea: "Laurel Canyon",
  domain: "https://breathelifehealingcenters.com", // confirm before first publish
  licenses: [
    { number: "190788AP", expires: "2026-09-30" },
    { number: "190788BP", expires: "2027-09-30" },
  ],
  // Rating as supplied by the reviews compilation at build time. Owned number —
  // update when a fresh export is taken (see components.md §5/§10).
  google: { rating: 4.1, count: 155 },
} as const;

/** Primary navigation — 6 top-level items max (navigation.md §3). Money pages first.
 *  Targets are real URLs from the approved sitemap (Breathe_Life_Sitemap_v12.xlsx);
 *  they 404 until those pages are built — this is a homepage-only evaluation build. */
export const primaryNav = [
  {
    label: "Programs",
    href: "/programs/",
    groups: [
      {
        heading: "Levels of care",
        links: [
          { label: "Medical Detox", href: "/programs/medical-detox/" },
          { label: "Residential Treatment", href: "/programs/residential-treatment/" },
          { label: "PHP — Day Treatment", href: "/programs/php/" },
          { label: "Intensive Outpatient (IOP)", href: "/programs/intensive-outpatient/" },
          { label: "Outpatient Rehab", href: "/programs/outpatient-rehab/" },
          { label: "Enhanced Sober Living", href: "/programs/sober-living/" },
          { label: "Family Program", href: "/programs/family-program/" },
          { label: "Alumni Program", href: "/programs/alumni-program/" },
        ],
      },
    ],
  },
  {
    label: "What We Treat",
    href: "/what-we-treat/",
    groups: [
      {
        heading: "Substances",
        links: [
          { label: "Alcohol", href: "/what-we-treat/alcohol/" },
          { label: "Methamphetamine", href: "/what-we-treat/methamphetamine/" },
          { label: "Cocaine", href: "/what-we-treat/cocaine/" },
          { label: "Opioids", href: "/what-we-treat/opioids/" },
          { label: "Benzodiazepines", href: "/what-we-treat/benzodiazepines/" },
          { label: "Xanax", href: "/what-we-treat/xanax/" },
        ],
      },
      {
        heading: "Conditions",
        links: [
          { label: "Depression", href: "/conditions/depression/" },
          { label: "Anxiety", href: "/conditions/anxiety/" },
          { label: "Complex Trauma / C-PTSD", href: "/conditions/complex-trauma/" },
          { label: "Dual Diagnosis", href: "/conditions/dual-diagnosis/" },
          { label: "Co-Occurring Eating Disorders", href: "/what-we-treat/eating-disorders/" },
        ],
      },
    ],
  },
  {
    label: "Signature Services",
    href: "/signature-services/",
    groups: [
      {
        heading: "Built for our community",
        links: [
          { label: "Chemsex & Sexualized Drug Use Treatment", href: "/signature-services/chemsex-treatment/" },
          { label: "LGBTQ+ Treatment", href: "/signature-services/lgbtq/" },
          { label: "Flight Attendant Program", href: "/signature-services/flight-attendant-program/" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about/",
    groups: [
      {
        heading: "About Breathe",
        links: [
          { label: "Our Team", href: "/about/our-team/" },
          { label: "Careers", href: "/about/careers/" },
          { label: "Testimonials", href: "/about/testimonials/" },
          { label: "Campus Photos", href: "/about/campus-photos/" },
          { label: "Media / Press", href: "/resources/media/" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions/",
    groups: [
      {
        heading: "Admissions",
        links: [
          { label: "Verify Your Insurance", href: "/admissions/insurance/" },
          { label: "For Families", href: "/admissions/for-families/" },
          { label: "What to Bring", href: "/admissions/what-to-bring/" },
          { label: "Professional Referral", href: "/admissions/professional-referral/" },
          { label: "Self-Assessment", href: "/admissions/self-assessment/" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact-us/" },
] as const;

/** Footer social set — navigation.md §6 requires at least eight represented.
 *  hrefs are placeholders until the real / created profiles are collected
 *  (asset-standards.md Phase 3, social-media.md is 🔴 BLOCKED). */
export const socials = [
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
  { label: "TikTok", icon: "tiktok", href: "#" },
  { label: "X", icon: "x-twitter", href: "#" },
  { label: "Bluesky", icon: "bluesky", href: "#" },
  { label: "Pinterest", icon: "pinterest", href: "#" },
] as const;
