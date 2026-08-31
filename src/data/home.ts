/**
 * Homepage content for the design-faithful port of Breathe Life Homepage.dc.html.
 * Copy is the design's, with these client fixes applied (see docs/BUILD-NOTES.md):
 *  - Beck Gee (Brad Lamm / Deb Hughes not shown — open client decision)
 *  - no "Since 2013", no room/home counts
 *  - phone from the content brief
 *  - review quotes verbatim from docs/content/Breathe_Life_Reviews_Compilation
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
  ["restaurant", "Eating Disorders", "Treated alongside substance use, simultaneously — the reason many families call us first.", true],
] as const;

export const levels = [
  { title: "Residential Treatment", flag: "Flagship", text: "Our most structured, primary level of care. Clients live on-site with 24/7 supervision, daily therapy, and psychiatric care for both addiction and mental health." },
  { title: "Detox", text: "Medically supervised environment to safely manage withdrawal symptoms." },
  { title: "PHP — Day Treatment (SUD, MH)", text: "Intensive day treatment; clients return home or to transitional living in the evenings." },
  { title: "IOP — Intensive Outpatient (SUD, MH)", text: "Flexible schedule for those balancing treatment with work, school, or family." },
  { title: "Transitional Living / Enhanced Sober Living", text: "Structured, supportive environment for the transition to independent living." },
  { title: "Outpatient (OP)", text: "Most flexible level of care, ideal as a step-down after more intensive levels." },
] as const;

export const signature = [
  ["diversity_3", "LGBTQIA+ Therapy Services", "Identity- and gender-affirming care woven into every level of treatment — never a separate track.", "Individual, group, and identity-focused therapy"],
  ["favorite", "Chemsex Treatment", "One of the few dedicated programs in the country for substance use and sex, treated together.", "Judgment-free, clinically specialised"],
  ["healing", "Complex Trauma Treatment", "Trauma-informed care for the wounds underneath the substance use, not just the symptoms.", "Somatic and grief work"],
  ["support_agent", "Individual Case Management", "One dedicated person who knows your file, your history, and your name for the whole stay.", "Assigned on day one"],
  ["family_restroom", "Family Therapy Programs", "A Family Class and a 3-Day Family Workshop, with room for chosen family as well as family of origin.", "Partners and chosen family welcome"],
  ["flight", "Flight Attendant Program", "Treatment shaped around airline rosters, union benefits, and a workforce we know well.", "Schedule- and union-aware"],
  ["medication", "Medication-Assisted Treatment", "Pharmaceutical support integrated with clinical care and psychiatric oversight.", "Prescriber on staff"],
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
  { name: "Zahara Nakia R.", quote: "The staff for the most part is great... they were patient enough with me... I left 5 stars because the CM's were very kind as well as the nursing staff. Blake is amazing and most of the staff are extremely empathetic towards everyone, not just people within the LGBTQ community." },
  { name: "Martin Warne", quote: "80 days sober today! I discharge on the 25th and I feel I've been equipped with all the tools needed to stay sober... If you're struggling with addiction or an eating disorder, come be a part of the Breathe community. It will be tough but so worth it." },
  { name: "Babbi Anderson", quote: "A family member was struggling with an eating disorder as well as alcoholism... needed to address both issues simultaneously. I called all over the country and at that time Breathe Life Healing Center was the only treatment center that said they would do this." },
  { name: "Stephen Timmer", quote: "I have brought LGBTQ clients and straight or cisgender clients and both are welcomed equally and given the same overwhelming amount of love and acceptance. Highly recommended!" },
  { name: "Matt Berg", quote: "I was able to process my trauma from issues I faced growing up as a gay boy in the 1980's to an abusive romantic relationship as a young adult. The trauma and shame that I grew up with fueled my lack of self worth and my use of drugs and alcohol to numb myself." },
  { name: "Edil Visli Cordova", quote: "My experience with Breathe was amazing and truly life-changing. The therapists are highly educated and helped me explore my issues deeply. Kathleen, the clinical director, is remarkable, and her group sessions are among my favorite memories. The campus is beautiful and serene, and the food was excellent." },
  { name: "Troy Eaton", quote: "I spent 90 days at Breathe just about a year ago and it changed my life. The staff there guided me through dealing with some underlying emotional issues I had been overlooking for years... Their alumni program is incredible as they are big on following up and supporting former patients even after they leave the facility." },
  { name: "James King", quote: "I went to breathe on Jan 9th 2021. I almost have 3 years in recovery... My family wanted nothing to do with me and today it's different, I made amends with my Parents, Aunt, Uncle, Cousins and friends... Breathe has prepared me for the future, it was not a vacation, give it time and one day at a time!" },
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

export const insurers = [
  { name: "Aetna", src: "/Asset/Insurances/Aetna.svg", h: 34 },
  { name: "Anthem", src: "/Asset/Insurances/Anthem.svg", h: 44 },
  { name: "Blue Cross Blue Shield", src: "/Asset/Insurances/BlueCross.svg", h: 46 },
  { name: "Cigna", src: "/Asset/Insurances/Cigna.svg", h: 38 },
  { name: "Beacon Health Options", src: "/Asset/Insurances/beacon-logo%201.svg", h: 38 },
  { name: "Carelon", src: "/Asset/Insurances/Carelon.svg", h: 34 },
] as const;
