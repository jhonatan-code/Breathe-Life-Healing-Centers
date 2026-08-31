/**
 * Homepage copy. Sourced from the approved content brief
 * (docs/content/Breathe_Life_Homepage_Full_Content_Brief.docx) and the client
 * profile. The design comp is authority on layout only, never on facts
 * (.elev8/system/standards/design-system.md §10).
 *
 * Kept out of the markup so components stay copy-free (components.md §13).
 */

export const hero = {
  eyebrow: "LGBTQ+-affirming treatment · Los Angeles",
  h1: "LGBTQ+-Affirming Addiction & Mental Health Treatment in Los Angeles",
  sub: "Residential, detox, PHP, and IOP care built for the LGBTQ+ community first — open to anyone ready to live differently.",
  points: [
    "You don’t have to hide who you are, who you love, or how you identify to get well here.",
    "Gender-affirming care and chosen family are part of treatment, not an accommodation.",
    "A clinical team that already understands the LGBTQ+ experience — you won’t be explaining it.",
  ],
  primaryCta: { label: "Start your treatment", href: "/admissions/" },
};

export const trust = {
  insurers: [
    { name: "Aetna", src: "/Asset/Insurances/Aetna.svg" },
    { name: "Anthem Blue Cross", src: "/Asset/Insurances/Anthem.svg" },
    { name: "Blue Cross Blue Shield", src: "/Asset/Insurances/BlueCross.svg" },
    { name: "Cigna", src: "/Asset/Insurances/Cigna.svg" },
    { name: "Beacon Health Options", src: "/Asset/Insurances/beacon-logo%201.svg" },
    { name: "Carelon Behavioral Health", src: "/Asset/Insurances/Carelon.svg" },
  ],
};

export const belonging = {
  eyebrow: "Belonging",
  h2: "Whoever you are, you belong here",
  body: [
    "Every human being was born with worth that can’t be earned, destroyed, or taken — no matter what’s happened to you, or what you’ve done to survive it.",
    "Recovery takes enough energy without also managing how you’re perceived. Whether you’re out to everyone, out to no one, or still figuring it out — whether the people supporting you are the family you were born into or the one you chose — nothing about who you are needs to be hidden, minimized, or explained here.",
  ],
};

export const facility = {
  eyebrow: "The setting",
  h2: "Our Laurel Canyon campus",
  body: "A private, inclusive space to recover, set in the quiet hills of Laurel Canyon — natural light, outdoor space, and room to breathe, minutes from West Hollywood. Every photograph here is the actual campus, not a stand-in.",
  photos: [
    { src: "/Asset/Facility/facility-06-guest-house-exterior.jpg", alt: "Guest house exterior at the Laurel Canyon campus" },
    { src: "/Asset/Facility/facility-17-living-room-lounge.jpg", alt: "Living room lounge with soft seating" },
    { src: "/Asset/Facility/facility-07-pool-waterfall-grotto.jpg", alt: "Pool with a waterfall grotto" },
    { src: "/Asset/Facility/facility-14-community-kitchen.jpg", alt: "Community kitchen" },
    { src: "/Asset/Facility/facility-22-garden-entrance-path.jpg", alt: "Garden entrance path" },
    { src: "/Asset/Facility/facility-15-pool-deck-canyon-view.jpg", alt: "Pool deck with a canyon view" },
  ],
};

export const whatWeTreat = {
  eyebrow: "What we treat",
  h2: "Substance use, mental health, or both",
  body: "For many LGBTQ+ people, addiction and mental health are tangled up with rejection, minority stress, or trauma. We treat the whole picture, not just the symptom.",
  substances: [
    { label: "Alcohol", href: "/what-we-treat/alcohol/" },
    { label: "Methamphetamine", href: "/what-we-treat/methamphetamine/" },
    { label: "Cocaine", href: "/what-we-treat/cocaine/" },
    { label: "Opioids", href: "/what-we-treat/opioids/" },
    { label: "Xanax", href: "/what-we-treat/xanax/" },
    { label: "Benzodiazepines", href: "/what-we-treat/benzodiazepines/" },
    { label: "Kratom", href: "/what-we-treat/kratom/" },
    { label: "Marijuana", href: "/what-we-treat/marijuana/" },
  ],
  conditions: [
    { label: "Depression", href: "/conditions/depression/" },
    { label: "Anxiety", href: "/conditions/anxiety/" },
    { label: "Complex Trauma / C-PTSD", href: "/conditions/complex-trauma/" },
    { label: "Dual Diagnosis", href: "/conditions/dual-diagnosis/" },
    { label: "Co-Occurring Eating Disorders", href: "/what-we-treat/eating-disorders/", note: "Treated alongside substance use — the reason many families call us first." },
  ],
};

export const levels = {
  eyebrow: "Your path to recovery",
  h2: "Levels of Care",
  body: "Recovery isn’t one-size-fits-all. We move with you through as many levels of care as you need.",
  cards: [
    { title: "Medical Detox", href: "/programs/medical-detox/", text: "Safe, medically supervised withdrawal — the first full breath of the process." },
    { title: "Residential Treatment", href: "/programs/residential-treatment/", text: "Live-in care with 24/7 support and daily therapy for both addiction and mental health.", flag: "Flagship" },
    { title: "PHP — Partial Hospitalization", href: "/programs/php/", text: "Full-day clinical care while you sleep somewhere that isn’t a hospital." },
    { title: "Intensive Outpatient (IOP)", href: "/programs/intensive-outpatient/", text: "Structured treatment that flexes around a life you’re already rebuilding." },
    { title: "Outpatient Rehab", href: "/programs/outpatient-rehab/", text: "Ongoing support at a lighter touch, for the next stage of recovery." },
    { title: "Enhanced Sober Living", href: "/programs/sober-living/", text: "A stable, substance-free home base as you find your footing." },
  ],
};

export const signature = {
  eyebrow: "Signature services",
  h2: "What makes Breathe different",
  body: "Built for the LGBTQ+ community first. These are the programs generic treatment doesn’t have language for.",
  cards: [
    {
      title: "Chemsex & Sexualized Drug Use Treatment",
      href: "/signature-services/chemsex-treatment/",
      text: "A dedicated program most rehabs don’t offer, treating the connection between substances, intimacy, and attachment — without shame, without euphemism. One of the few built specifically around this in the country.",
    },
    {
      title: "LGBTQ+ Treatment",
      href: "/signature-services/lgbtq/",
      text: "Every clinician here understands minority stress, gender-affirming practice, and the specific weight of coming out, coming in, or coming home.",
    },
    {
      title: "Flight Attendant Program",
      href: "/signature-services/flight-attendant-program/",
      text: "A program built around the realities of airline schedules, union benefits, and a workforce we know well.",
    },
  ],
};

export const why = {
  eyebrow: "Why Breathe",
  h2: "More than a rehab — a place you don’t have to explain yourself",
  items: [
    { icon: "users", title: "Staff who’ve lived it", text: "Every person here, from the front desk to clinical leadership, has personal recovery experience. You’re not being treated by someone who studied your experience from the outside." },
    { icon: "heart", title: "A real chemsex treatment track", text: "Crystal meth, GHB, and other substances used in sexual contexts are treated here as their own clinical issue — not a moral failing, not folded into general sex addiction treatment." },
    { icon: "shield", title: "Sexual health as part of care", text: "STI testing, HIV status support, hormone continuity, and PrEP-aware language — built into treatment, not bolted on." },
    { icon: "compass", title: "Gender-affirming care, woven in", text: "Correct names, correct pronouns, gender-appropriate facilities, and a clinical team trained in the minority stress model — the default here, not a specialty add-on." },
    { icon: "users", title: "Chosen family, welcomed", text: "Family therapy doesn’t assume blood relationships. Partners, chosen family, and community are valid participants in your recovery." },
    { icon: "healing", title: "The hard stuff, taken seriously", text: "Religious trauma, discrimination, minority stress, and collective grief are treated with the same clinical weight as any other presenting issue — never background noise." },
  ],
};

/** Leadership. Beck Gee is confirmed. Founder / co-founder positioning
 *  (Brad Lamm, Deb Hughes) is an OPEN client decision — the approved sitemap
 *  removes the Brad Lamm bio — so only the confirmed entry is shown here.
 *  See docs/00-INVENTORY.md items 8 + 10. */
export const team = {
  eyebrow: "Leadership",
  h2: "The people behind Breathe",
  body: "Every bio here opens with recovery experience where the person has it — not credentials first.",
  people: [
    {
      name: "Beck Gee",
      credential: "CADC-II, AMFT",
      role: "Chief Executive Officer",
      photo: "/Asset/Our%20Team/Beck-Gee.jpg",
      bio: "A trans man in recovery, leading Breathe’s clinical and operational vision day to day.",
    },
  ],
  fullTeamHref: "/about/our-team/",
};

export const steps = {
  eyebrow: "Getting started",
  h2: "Four simple steps",
  items: [
    { n: "01", title: "Call us", text: "Speak confidentially with our admissions team, 24/7, about your situation." },
    { n: "02", title: "Verify insurance", text: "We contact your insurer directly and explain exactly what’s covered." },
    { n: "03", title: "Get assessed", text: "A clinical assessment determines the right level of care for you." },
    { n: "04", title: "Begin treatment", text: "Start your personalized program at our Laurel Canyon campus." },
  ],
};

/** Featured reviews — the pre-curated homepage set from the reviews compilation
 *  (none centre Brad Lamm). Reviewer words unchanged (components.md §5). */
export const reviews = {
  eyebrow: "In their words",
  h2: "What people actually say",
  disclaimer: "Individual results may vary. Recovery is not guaranteed.",
  items: [
    { quote: "They were patient enough with me... most of the staff are extremely empathetic towards everyone, not just people within the LGBTQ community.", name: "Zahara Nakia R." },
    { quote: "Breathe Life Healing Center was the only treatment center that said they would do this — treat my family member’s eating disorder and alcoholism simultaneously.", name: "Babbi Anderson" },
    { quote: "I have brought LGBTQ clients and straight or cisgender clients and both are welcomed equally and given the same overwhelming amount of love and acceptance.", name: "Stephen Timmer", detail: "Interventionist" },
    { quote: "I was able to process my trauma from issues I faced growing up as a gay boy in the 1980’s... The trauma and shame that I grew up with fueled my lack of self worth.", name: "Matt Berg" },
  ],
  moreHref: "/about/testimonials/",
};

export const insurance = {
  eyebrow: "Cost & coverage",
  h2: "Treatment shouldn’t wait on a phone call you’re dreading",
  body: "We’re in-network with most major insurance providers, including Anthem Blue Cross, Aetna, Blue Cross Blue Shield, Cigna, Beacon Health Options, and Carelon Behavioral Health. Our admissions team verifies your benefits for you — usually within minutes, always before you commit to anything.",
  exclusion: "We do not accept Medi-Cal or Medicare at this time. If that’s your coverage, we’ll tell you honestly and help point you somewhere that can.",
  cta: { label: "Verify my insurance", href: "#verify" },
};

export const location = {
  eyebrow: "Find us",
  h2: "Our location",
  body: "A secluded campus in the heart of Laurel Canyon — close enough to reach, private enough to heal.",
  office: {
    label: "Admissions office",
    lines: ["8060 Melrose Avenue, 3rd Floor", "Los Angeles, CA 90046"],
  },
  campusNote: "Residential campus in Laurel Canyon — the exact address is shared privately at admissions, about 15 minutes from the Melrose office.",
  travelNote: "Arriving from out of state? LAX and Burbank pickups are arranged by our team, 24/7.",
  areasServed: ["West Hollywood", "Beverly Hills", "Santa Monica", "Santa Barbara"],
};

export const faq = {
  eyebrow: "Questions",
  h2: "The questions people really ask",
  groups: [
    {
      heading: "Before you call",
      items: [
        {
          q: "Is Breathe Life only for LGBTQ+ people?",
          a: "No. We’re built for the LGBTQ+ community first, and that shapes everything about how we treat people — but our doors are open to anyone whose values align with how we operate.",
        },
        {
          q: "What is chemsex, and how is it different from what other rehabs treat?",
          a: "Chemsex is the use of substances like crystal meth, GHB, or mephedrone in sexual contexts — common in gay and queer men’s communities and rarely addressed as its own clinical issue. We treat it as exactly that: not a moral failing, and not the same thing as sex addiction.",
        },
        {
          q: "I’ve tried treatment before and it didn’t work. Is it worth calling?",
          a: "That doesn’t disqualify you from anything here. A lot of the people we treat have tried before. That’s part of the story, not a reason to turn you away.",
        },
      ],
    },
    {
      heading: "While you’re here",
      items: [
        {
          q: "Do you offer gender-affirming care during treatment?",
          a: "Yes — correct names, correct pronouns, gender-appropriate facilities, and clinical staff trained specifically in gender-affirming practice. It’s built into the program, not an add-on.",
        },
        {
          q: "Can my family be involved in my treatment?",
          a: "Yes — and we don’t assume family means blood relatives. Partners, chosen family, and close community are welcome participants in our Family Program.",
        },
        {
          q: "Will my information be confidential?",
          a: "Yes. Your privacy is protected under federal law, and we never share your information without your consent.",
        },
        {
          q: "How long does treatment take?",
          a: "It depends on the level of care and your individual needs. Most stays start with a 30-day minimum and are shaped around your progress, not a fixed calendar.",
        },
      ],
    },
    {
      heading: "After, and what it costs",
      items: [
        {
          q: "What happens after I finish treatment?",
          a: "Our Alumni Program includes ongoing support groups and community — recovery doesn’t end at discharge, and neither do we.",
        },
        {
          q: "Do you accept my insurance?",
          a: "Most likely, yes. We’re in-network with most major providers. Our team verifies your specific benefits before you commit to anything — usually within minutes. We do not accept Medi-Cal or Medicare.",
        },
      ],
    },
  ],
};

export const finalCta = {
  h2: "You don’t have to hide who you are to heal",
  body: "Whoever you love, however you identify, whatever your chosen family looks like — our admissions team is available 24/7, and they already understand what you’re calling about.",
};
