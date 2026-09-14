/**
 * Homepage content for the design-faithful port of Breathe Life Homepage.dc.html.
 * Copy is the design's, with these client fixes applied (see docs/BUILD-NOTES.md):
 *  - no "Since 2013", no room/home counts
 *  - phone from the content brief
 *  - review quotes verbatim from docs/content/Breathe_Life_Reviews_Compilation
 *
 * Leadership: Beck Gee (CEO), Brad Lamm (Founder), and Deb Hughes
 * (Co-founder, Strategic Relations) are all shown, per the client's request
 * (2026-08-31) restoring Brad Lamm and Deb Hughes, and per Jasmine's direct
 * confirmation (Breathe_Life_Claude_Code_Instructions.docx, 2026-09-14) that
 * Brad Lamm may be credited as founder wherever leadership is named, with
 * Beck Gee confirmed alongside as current CEO. See the `team` array below.
 *
 * `levels` (Detox/PHP/IOP/Sober Living/Outpatient) and `signature`'s Case
 * Management + MAT descriptions were fleshed out per
 * Breathe_Life_Programs_Page_Complete_Brief.docx (2026-09-11) — this data
 * feeds the homepage, /programs/, and each level's own detail page, so the
 * update applies everywhere at once rather than per page.
 */

export const galleryImg = (file: string) => `/Asset/Facility/${file}`;

/** Facility carousel — design's 22-image set mapped to the repo's facility photos. */
export const gallery = [
  { file: "facility-07-pool-waterfall-grotto.jpg", cap: "Pool & Waterfall Grotto" },
  { file: "facility-06-guest-house-exterior.jpg", cap: "Guest House" },
  { file: "facility-08-poolside-grotto-overlook.jpg", cap: "Poolside Grotto" },
  { file: "facility-09-twin-bedroom-suite.jpg", cap: "Twin Bedroom Suite" },
  { file: "facility-10-fitness-center.jpg", cap: "Fitness Center" },
  { file: "facility-11-clinical-building-exterior.jpg", cap: "Clinical Building" },
  { file: "facility-12-residence-exterior.jpg", cap: "Residence Exterior" },
  { file: "facility-13-ensuite-bath-balcony.jpg", cap: "Ensuite Bath with Balcony" },
  { file: "facility-14-community-kitchen.jpg", cap: "Community Kitchen" },
  { file: "facility-17-living-room-lounge.jpg", cap: "Living Room Lounge" },
  { file: "facility-18-great-room.jpg", cap: "Great Room" },
  { file: "facility-19-outdoor-dining-deck.jpg", cap: "Outdoor Dining Deck" },
  { file: "facility-20-estate-entrance-gate.jpg", cap: "Estate Entrance Gate" },
  { file: "facility-21-quiet-reading-nook.jpg", cap: "Quiet Reading Nook" },
  { file: "facility-23-kitchen-common-area.jpg", cap: "Kitchen & Common Area" },
  { file: "facility-01-private-suite-entry.jpg", cap: "Private Suite" },
  { file: "facility-02-shared-bedroom-blue.jpg", cap: "Shared Bedroom" },
  { file: "facility-04-community-dining-lounge.jpg", cap: "Community Dining & Lounge" },
  { file: "facility-05-spa-bathroom-suite.jpg", cap: "Spa Bathroom Suite" },
  { file: "facility-22-garden-entrance-path.jpg", cap: "Garden Entrance Path" },
  { file: "facility-15-pool-deck-canyon-view.jpg", cap: "Pool Deck" },
  { file: "facility-16-facility-entrance-drive.jpg", cap: "Facility Entrance" },
];

export const substances = [
  ["liquor", "Alcohol Addiction", "Support for withdrawal, cravings, and long-term sobriety."],
  ["science", "Meth Addiction", "Structured care for stimulant use and recovery."],
  ["vaccines", "Heroin Addiction", "Medical detox and support for opioid dependence."],
  ["emergency", "Fentanyl Addiction", "Specialized care for high-risk synthetic opioid use."],
  ["medication", "Opioids & Opiates", "Comprehensive treatment for prescription and street opioids."],
  ["eco", "Kratom", "Guidance for kratom dependence and withdrawal."],
  ["local_pharmacy", "Prescription Drug Addiction", "Help stepping away from prescribed medication misuse."],
  ["medication_liquid", "Benzodiazepine Addiction", "Medically supervised benzo taper and recovery."],
  ["bolt", "Amphetamine Addiction", "Care for stimulant use disorders and their effects."],
  ["grain", "Cocaine Addiction", "Support for cocaine use and co-occurring issues."],
  ["pill", "Xanax Addiction", "Targeted care for Xanax dependence and withdrawal."],
  ["grass", "Marijuana Addiction", "Help for cannabis dependence at any level of use."],
  ["air", "Inhalant Addiction", "Care for inhalant use and its health effects."],
  ["biotech", "Designer Drug Addiction", "Treatment for synthetic and novel substance use."],
  ["favorite", "Chemsex", "Compassionate, judgment-free chemsex recovery support — one of the few dedicated programs in the country."],
] as const;

export const mentalHealth = [
  ["psychology", "Anxiety", "Tools to calm the mind and manage daily stress.", false],
  ["sentiment_dissatisfied", "Depression", "Support to rebuild energy, hope, and connection.", false],
  ["healing", "Complex Trauma / PTSD", "Trauma-informed care for deep and lasting healing.", false],
  ["hub", "Dual Diagnosis", "Integrated care for co-occurring mental health and addiction.", false],
  ["restaurant", "Eating Disorders", "Treated alongside substance use, simultaneously — the reason many families call us first.", false],
] as const;

export const levels = [
  { title: "Residential Treatment", flag: "Flagship", text: "Our most structured, primary level of care. Clients live on-site with 24/7 supervision, daily therapy, and psychiatric care for both addiction and mental health." },
  { title: "Detox", text: "A safe, clinically monitored start. Our team manages withdrawal around the clock, so your body can safely let go of what it has been depending on before treatment begins in earnest." },
  { title: "PHP — Day Treatment (SUD, MH)", text: "Full clinical days without a residential stay. The same intensity of care as residential treatment, with evenings spent at home or in transitional living." },
  { title: "IOP — Intensive Outpatient (SUD, MH)", text: "Structured treatment that flexes around a life you are already rebuilding. Real clinical support without stepping away from work, school, or family." },
  { title: "Transitional Living / Enhanced Sober Living", text: "A stable, substance-free home base as you find your footing. Structure and community support while you build toward full independence." },
  { title: "Outpatient (OP)", text: "The lightest touch level of care, built for ongoing support once you are stable. A natural step down after residential, PHP, or IOP." },
] as const;

export const signature = [
  ["diversity_3", "LGBTQIA+ Therapy Services", "Identity- and gender-affirming care woven into every level of treatment — never a separate track.", "Individual, group, and identity-focused therapy"],
  ["favorite", "Chemsex Treatment", "One of the few dedicated programs in the country for substance use and sex, treated together.", "Judgment-free, clinically specialised"],
  ["healing", "Complex Trauma Treatment", "Trauma-informed care for the wounds underneath the substance use, not just the symptoms.", "Somatic and grief work"],
  ["support_agent", "Individual Case Management", "One dedicated person who knows your file, your history, and your name for the entire stay, coordinating care across every level so nothing falls through the cracks.", "Assigned on day one"],
  ["family_restroom", "Family Therapy Programs", "A Family Class and a 3-Day Family Workshop, with room for chosen family as well as family of origin.", "Partners and chosen family welcome"],
  ["flight", "Flight Attendant Program", "Treatment shaped around airline rosters, union benefits, and a workforce we know well.", "Schedule- and union-aware"],
  ["medication", "Medication-Assisted Treatment", "Medical support available where it is clinically appropriate, always paired with therapy and psychiatric oversight, never offered as treatment on its own.", "Prescriber on staff"],
] as const;

export const why = [
  ["diversity_3", "#33679C", "LGBTQIA+-Affirming Care at Every Level", "Gender-affirming, identity-affirming clinical care — clinicians who understand minority stress and staff who use your pronouns without being asked twice."],
  ["join_inner", "#33679C", "Addiction and Mental Health, Treated Together", "Integrated dual-diagnosis approach — we don't treat substance use in isolation from anxiety, depression, or trauma."],
  ["favorite", "#478694", "Dedicated Chemsex Treatment", "One of the few centers in the country with a program addressing substance use and sex together."],
  ["healing", "#33679C", "Trauma-Informed Approach", "Care built around how trauma actually shows up, for deep and lasting healing."],
  ["cottage", "#33679C", "Residential, Whole-Person Care", "A private, inclusive, and affirming space to live and heal on our Laurel Canyon campus — not just a bed and a schedule."],
  ["lock", "#33679C", "Your Privacy, Protected", "Confidentiality built into every part of how we operate — care that respects who knows you're here, on your terms."],
  ["family_restroom", "#33679C", "Chosen Family Welcome in Programming", "Family therapy, Family Class, and a 3-Day Family Workshop, with room for chosen family, not only family of origin."],
  ["volunteer_activism", "#478694", "Staff Who've Lived It", "Every person here, from the front desk to clinical leadership, has personal recovery experience — you're not being treated by someone who studied it from the outside."],
] as const;

export const steps = [
  ["01", "Call us", "Speak confidentially with our admissions team, 24/7, about your situation."],
  ["02", "Verify insurance", "We contact your insurer directly and explain exactly what's covered."],
  ["03", "Get assessed", "A clinical assessment determines the right level of care for you."],
  ["04", "Begin treatment", "Start your personalized program at our Laurel Canyon facility."],
] as const;

/** Verbatim from the Google Business Profile via the reviews compilation. */
export const reviews = [
  { name: "Zahara Nakia", avatar: "/Asset/Image%20reviews/Zahara%20Nakia.svg",
    quote: "This is pretty awesome. The staff for the most part is great. And the thing is liked about this place the most is they were patient enough with me the first time I was here. They allowed me to land emotionally the second time not so much but I left 5 stars because the CM's were very kind as well as the nursing staff. Blake is my spirit is amazing and most of the staff are extremely empathetic towards everyone not just people within the LGBTQ community." },
  { name: "Edil Visli", avatar: "/Asset/Image%20reviews/Edil%20Visli.svg",
    quote: "My experience with Breathe was amazing and truly life-changing. The therapists are highly educated and helped me explore my issues deeply. Kathleen, the clinical director, is remarkable, and her group sessions are among my favorite memories. The campus is beautiful and serene, and the food was excellent. The alumni program keeps me connected, and I've made some lifelong friends there. I would absolutely recommend Breathe to anyone who is struggling." },
  { name: "Martin Warne", avatar: "/Asset/Image%20reviews/Martin%20Warne.svg",
    quote: "80 days sober today! 🎉 I have been at Breathe since May 5th, 2025 and this has been a life changing experience. I will grieve this experience when I leave at the of this month. I discharge on the 25th and I feel I've been equipped with all the tools needed to stay sober. The staff are empathetic, compassionate and well educated on addiction recovery. I'm going to cherish all the memories I have at Breathe. I have met some of the most amazing people — friends I will hold dear to my heart for the rest of my life. If you're struggling with addiction or an eating disorder, come be apart of the Breathe community. It will be tough but so worth it. I've unpacked 40 years of trauma here; leaving Breathe with freedom, healing and self compassion. I'm looking forward to a life free of substances and binge eating. Thank you, Breathe for saving my life!" },
  { name: "Dustin Dudley", avatar: "/Asset/Image%20reviews/Dustin%20Dudley.svg",
    quote: "My experience with Breathe was amazing. It truly changed my life. The therapists are well educated and they helped me dig deep. Kathleen the clinical director is remarkable. Her groups were one of my favorite memories. The campus is beautiful and serene and the food was so good. The alumni program keeps me plugged in too. I've made some life-long friends there and would absolutely recommend Breathe to anyone who is struggling." },
  { name: "Troy Eaton", avatar: "/Asset/Image%20reviews/Troy%20Eaton.svg",
    quote: "I spent 90 days at Breathe just about a year ago and it changed my life. The staff there guided me through dealing with some underlying emotional issues I had been overlooking for years. The care I received from the entire staff on campus and at the clinic was amazing. Their alumni program is incredible as they are big on following up and supporting former patients even after they leave the facility. I would highly recommend Breathe to anyone who is struggling with addiction issues." },
  { name: "Stephen Timmer", avatar: "/Asset/Image%20reviews/Stephen%20Timmer.svg",
    quote: "As an interventionist, I have brought several people to Breathe for substance abuse treatment and co-occurring issues. I love this program. I have had great success with the individuals I brought here because of the clinical services provided, the environment, the quality of the treatment team and the fact that it is owned by individuals who are passionate about recovery. I have a bias against chain programs and prefer those that are owned and operated by people who are in this field to help others. That is what Breathe does!!! I have brought LGBTQ clients and straight or cis gender clients and both are welcomed equally and given the same overwhelming amount of love and acceptance. Highly recommended!!!!" },
  { name: "Babbi Anderson", avatar: "/Asset/Image%20reviews/Babbi%20Anderson.svg",
    quote: "Several years ago a family member was struggling with an eating disorder as well as alcoholism. My loved one needed to address both issues simultaneously. I called all over the country and at that time Breathe Life Healing Center was the only treatment center that said they would do this. My family member admitted, stayed for 100+ days, and left Breathe firmly planted in recovery. They continue, now several years later, with ongoing recovery. I attended Breathe's Family Classes and was impressed with that service as well. Breathe Life Healing Center is amazing. Lovely, comfortable surroundings, truly excellent staff and very responsive to family members. Thank you Breathe!" },
  { name: "James King", avatar: "/Asset/Image%20reviews/James%20King.svg",
    quote: "I went to breathe on Jan 9th 2021. I almost have 3 years in recovery and I was angry at Breathe, depress, lost, lost everything broke my addiction to get out of a serious situation I was in. My family wanted nothing to do with me and today it's different, I made amends with my Parents, Aunt, Uncle, Cousins and friends. I managed to quit smoking at Breathe thanks to Brad at smoking session group he hosted. I have rebuilt my life and I get to be there for my family. Breathe has prepared me for the future, it was not a vacation in Breathe, give it time and one day a time! Great staff and you will develop wonderful relationships. Thank you Breathe.." },
] as const;

export const faqGroups = [
  {
    icon: "call",
    label: "Before you call",
    items: [
      { q: "What is it actually like to be here day to day?", a: "Structured, but not institutional. Mornings start with community and group work, afternoons hold individual therapy and specialised sessions, evenings are quieter — meals together, meetings, time outside. You live in a residential home in Laurel Canyon with other people who understand why you came, not in a ward." },
      { q: "What happens on the first day I arrive?", a: "Someone meets you at the door — usually the person you spoke to on the phone. There is a medical and clinical intake, a chance to unpack and eat, and a walk-through of the house. Nobody puts you in a group on day one. The first day is about landing safely." },
      { q: "I am not sure I need rehab. Is it worth calling anyway?", a: "Yes — and that is a very common place to be starting from. You do not need to have decided anything, name it a certain way, or hit some threshold first. Tell us what has been happening and we will tell you honestly what we think — including if we are not the right fit and someone else would serve you better." },
    ],
  },
  {
    icon: "home_health",
    label: "While you are here",
    items: [
      { q: "How long does treatment usually last?", a: "It is shaped around your progress rather than a fixed calendar, and it varies by level of care and by what a plan authorises. Most people step down gradually — through PHP, IOP, or transitional living — rather than going straight home, and the plan is built with you and changes as you do." },
      { q: "Can my family — or my chosen family — be part of it?", a: "Yes. Alongside family therapy we run a Family Class and a 3-Day Family Workshop, and family here means the people who actually show up for you: partners, chosen family, close friends. You stay in contact with them throughout; connection is part of the treatment, not a privilege to earn." },
    ],
  },
  {
    icon: "savings",
    label: "After, and what it costs",
    items: [
      { q: "What happens when residential treatment ends?", a: "You do not simply leave. Before discharge we build the next step with you — outpatient care, transitional living, therapists, a meeting schedule — and our Alumni Program keeps a real community around you afterwards, with groups and staff who follow up because they want to know how you are." },
      { q: "Will my insurance help cover this?", a: "Very likely. We are in-network with most major providers, and our team verifies your specific benefits directly with your insurer, at no cost and with no obligation, before you commit to anything. We do not accept Medi-Cal or Medicare, and if that is your coverage we will say so straight away and point you somewhere that can help." },
    ],
  },
] as const;

/** Leadership — the design's three cards. Brad Lamm and Deb Hughes restored at
 *  the client's request (2026-08-31), reversing the earlier "Beck Gee only".
 *  The founder-positioning question flagged in docs/BUILD-NOTES.md is now
 *  resolved: Jasmine confirmed directly (2026-09-14) that Brad Lamm is still
 *  the founder and may be credited as such, with Beck Gee confirmed
 *  alongside as current CEO wherever leadership is named. His bio page at
 *  /about/our-team/brad-lamm/ is live with his real bio. */
export const team = [
  { name: "Brad Lamm", slug: "brad-lamm", badge: "CIP", role: "Founder", photo: "/Asset/Our%20Team/Brad-Lamm.webp",
    bio: "Founded Breathe after his own recovery in 2003 — personally selects every clinician on staff." },
  { name: "Beck Gee", slug: "beck-gee", badge: "CADC-II, AMFT", role: "Chief Executive Officer", photo: "/Asset/Our%20Team/Beck-Gee.jpg",
    bio: "A trans man in recovery, leading Breathe's clinical and operational vision day to day.",
    // Short first-person bio, verbatim from the live site's author archive
    // (breathelifehealingcenters.com/author/beck/, checked 2026-09-11) —
    // distinct from, and shorter than, the full bio on
    // /about/our-team/beck-gee/ (sourced from a different page). Used for
    // the "About the author" card on blog posts. Only edit: em dashes
    // converted to commas per CLAUDE.md Writing Style; no wording changed,
    // no LinkedIn URL found on either live page.
    authorBio: "Los Angeles has always been home, but my journey to finding myself, and my purpose, took me far beyond the city limits. I studied at the University of Montana and later at the Hazelden Betty Ford Graduate School, but my greatest education came through my own recovery. I entered this field when I was three years sober, inspired to help others find the hope and healing that transformed my life. Supporting the LGBTQ+ community has always been central to my work because I understand the challenges of identity, belonging, and finding a safe place to heal. What drives me is seeing people reclaim their lives and discover that recovery is about thriving, not just surviving. At Breathe Life Healing Centers, we believe in your strength and your potential. Recovery changed my life, and I'm honored to help others take that first step toward lasting healing and a brighter future." },
  { name: "Deb Hughes", slug: "deb-hughes", badge: "CAS", role: "Co-founder, Strategic Relations", photo: "/Asset/Our%20Team/Deb-Hughes.jpg",
    bio: "Oversees family programming and community partnerships." },
] as const;

export const insurers = [
  { name: "Aetna", src: "/Asset/Insurances/Aetna.svg", h: 34 },
  { name: "Anthem", src: "/Asset/Insurances/Anthem.svg", h: 44 },
  { name: "Blue Cross Blue Shield", src: "/Asset/Insurances/BlueCross.svg", h: 46 },
  { name: "Cigna", src: "/Asset/Insurances/Cigna.svg", h: 38 },
  { name: "Beacon Health Options", src: "/Asset/Insurances/beacon-logo%201.svg", h: 38 },
  { name: "Carelon", src: "/Asset/Insurances/Carelon.svg", h: 34 },
] as const;
