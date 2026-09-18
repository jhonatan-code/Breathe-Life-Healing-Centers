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
  /**
   * CallTrackingMetrics FormReactor — provided directly by the client
   * 2026-09-11, unblocking forms-ctm.md (was BLOCKED on
   * decisions/ctm-integration-sop.md). Powers VerifyInsuranceForm.astro
   * only: this key is tied to that form's specific custom fields
   * (insurance_carrier, membership_policy_id) on the CTM side. `targetNumber`
   * is the number CTM bridges the caller to on submission — it's configured
   * on CTM's end, not displayed anywhere in this site's markup.
   */
  ctm: {
    formReactorUrl:
      "https://api.calltrackingmetrics.com/api/v1/formreactor/FRT472ABB2C5B9B141A2DBE35A5E3D5774F914733AE689B0F4FE6D6B5F4D06D178B",
    formReactorKey: "SiXBFeH8R9fkUciJsXRy8tYCQY-2Wim_ynhSQjWhV2DJhkAG",
    targetNumber: "(888) 362-5576",
  },
  // Google Tag Manager container. Corrected 2026-09-14 to GTM-MRQRGDN9 after
  // independent verification: fetched breathelifehealingcenters.com directly
  // (raw HTML, not a relayed claim) and confirmed this exact ID rendered
  // consistently across multiple live pages. The prior value, GTM-N9GP4KF,
  // did not appear on any live page checked and has been replaced.
  // Installed sitewide in Layout.astro (head snippet + body noscript), per
  // Google's own install instructions — no other page should embed this.
  gtmContainerId: "GTM-MRQRGDN9",
  // Rating as supplied by the reviews compilation at build time. Owned number —
  // update when a fresh export is taken (see components.md §5/§10).
  google: { rating: 4.1, count: 155 },
} as const;

/** Primary navigation — client-confirmed top-level items, About first
 *  (Breathe_Life_Header_Navigation.docx, confirmed 2026-09-01). Exceeds this
 *  agency's own navigation.md §3 ceiling of ~6 top-level items — flagged to
 *  the client, who confirmed proceeding as specced anyway; not overridden
 *  here on our own judgment. Targets are real URLs from the approved sitemap
 *  (Breathe_Life_Sitemap_v12.xlsx).
 *
 *  Careers (/about/careers/) deliberately removed from this dropdown per
 *  user instruction 2026-09-10 — the page still exists and is linked from
 *  SiteFooter.astro's "Explore" column instead.
 *
 *  Resources moved from its own top-level item into the About dropdown per
 *  user instruction 2026-09-11 — /resources/ and /resources/media/ still
 *  exist as real pages, just no longer a top-level nav entry. */
export const primaryNav = [
  {
    label: "About",
    href: "/about/",
    groups: [
      {
        heading: "About Breathe",
        links: [
          { label: "Our Team", href: "/about/our-team/" },
          { label: "Testimonials", href: "/about/testimonials/" },
          { label: "Sero Mental Health", href: "/about/sero-mental-health/" },
        ],
      },
      {
        heading: "See the campus",
        links: [
          { label: "Campus Photos", href: "/about/campus-photos/" },
          { label: "Outpatient Photos", href: "/about/outpatient-photos/" },
          { label: "Video Tour", href: "/about/video-tour/" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Blog", href: "/blog/" },
          { label: "Media / Press", href: "/resources/media/" },
        ],
      },
    ],
  },
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
          { label: "Case Management", href: "/programs/case-management/" },
          { label: "Medication-Assisted Treatment", href: "/programs/medication-assisted-treatment/" },
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
          { label: "Kratom", href: "/what-we-treat/kratom/" },
          { label: "Marijuana", href: "/what-we-treat/marijuana/" },
          { label: "Designer / Synthetic Drugs", href: "/what-we-treat/designer-drugs/" },
          { label: "Inhalants", href: "/what-we-treat/inhalants/" },
          { label: "Co-Occurring Eating Disorders", href: "/what-we-treat/eating-disorders/" },
        ],
      },
    ],
  },
  {
    label: "Conditions",
    href: "/conditions/",
    groups: [
      {
        heading: "Conditions",
        links: [
          { label: "Depression", href: "/conditions/depression/" },
          { label: "Anxiety", href: "/conditions/anxiety/" },
          { label: "Complex Trauma / C-PTSD", href: "/conditions/complex-trauma/" },
          { label: "Trauma", href: "/conditions/trauma/" },
          { label: "Dual Diagnosis", href: "/conditions/dual-diagnosis/" },
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
    label: "Therapies",
    href: "/therapies/",
    groups: [
      {
        heading: "Therapies",
        links: [
          { label: "Cognitive Behavioral Therapy (CBT)", href: "/therapies/cbt/" },
          { label: "Dialectical Behavior Therapy (DBT)", href: "/therapies/dbt/" },
          { label: "Acceptance & Commitment Therapy (ACT)", href: "/therapies/act/" },
          { label: "Somatic Therapy", href: "/therapies/somatic-therapy/" },
          { label: "Motivational Interviewing", href: "/therapies/motivational-interviewing/" },
          { label: "Trauma-Focused Therapy", href: "/therapies/trauma-focused-therapy/" },
        ],
      },
      {
        heading: "Holistic & experiential",
        links: [
          { label: "Gender-Affirming Care", href: "/therapies/gender-affirming-care/" },
          { label: "Yoga & Mindfulness", href: "/therapies/yoga-mindfulness/" },
          { label: "Art Therapy", href: "/therapies/art-therapy/" },
          { label: "Music Therapy", href: "/therapies/music-therapy/" },
          { label: "Holistic Therapy", href: "/therapies/holistic-therapy/" },
          { label: "Experiential Therapies", href: "/therapies/experiential-therapies/" },
        ],
      },
    ],
  },
  {
    label: "Areas We Service",
    href: "/areas-we-service/",
    groups: [
      {
        heading: "Areas We Service",
        links: [
          { label: "Los Angeles", href: "/areas-we-service/los-angeles/" },
          { label: "West Hollywood", href: "/areas-we-service/west-hollywood/" },
          { label: "Beverly Hills", href: "/areas-we-service/beverly-hills/" },
          { label: "Santa Monica", href: "/areas-we-service/santa-monica/" },
          { label: "Santa Barbara", href: "/areas-we-service/santa-barbara/" },
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
          { label: "Contact Us", href: "/contact-us/" },
        ],
      },
    ],
  },
] as const;

/** Footer social set — navigation.md §6 requires at least eight represented.
 *  hrefs are placeholders until the real / created profiles are collected
 *  (asset-standards.md Phase 3, social-media.md is 🔴 BLOCKED). */
export const socials = [
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/BreatheRehab/" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/breatherehab/" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/breathe-life-healing-centers" },
  { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/channel/UCeGKT0JY3MlpuHDQRaXlNiQ" },
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@breathelife" },
  { label: "X", icon: "x-twitter", href: "https://x.com/breatherehab" },
  { label: "Bluesky", icon: "bluesky", href: "https://bsky.app/profile/breathelhc.bsky.social" },
  { label: "Pinterest", icon: "pinterest", href: "https://www.pinterest.com/breathelhc/" },
] as const;
