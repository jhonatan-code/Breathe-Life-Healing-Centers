// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import redirectsTrailingSlash from './integrations/redirects-trailing-slash.mjs';
import sitemap from './integrations/sitemap.mjs';
import llms from './integrations/llms.mjs';
import { site as siteFacts } from './src/config/site.ts';
import { insurers } from './src/data/home.ts';

// Redirects for the ~225 old-site blog/utility URLs that don't get their own
// page on the rebuilt site (see docs/11-REDIRECTS-GAPFILL.md for the tiering
// and rationale, docs/seo/blog-redirect-proposal-2026-09-11.csv for the raw
// data this was generated from). Astro emits these as static redirect pages
// on `output: 'static'` (no adapter configured yet) -- if/when a host is
// confirmed (Vercel per CLAUDE.md, unconfirmed), port this same map into
// that host's native redirect config for true HTTP 301s. A Netlify-format
// `public/_redirects` file with the identical rules ships alongside this as
// a fallback in case Netlify ends up being the host instead.
//
// Tier B (13 posts) is NOT in this map -- pending a content strategy, see
// docs/12-BLOG-TIER-B-STRATEGY.md.
//
// Tier A update (2026-09-11): the 18 real Tier A posts (2 more were rejected
// on content-governance grounds and 3 are confirmed gone from the live site
// -- see docs/11-REDIRECTS-GAPFILL.md) were originally kept live at their
// exact old root-level URLs specifically to preserve real backlink equity
// (BuzzFeed, Vanity Fair, Daily Mail links, plus GSC ranking history). The
// client explicitly asked to move them under /blog/{slug}/ instead, for
// URL-structure consistency with the new blog system -- see
// src/content.config.ts and src/pages/blog/. The 18 redirects below trade
// some of that backlink equity for that consistency; this is a deliberate,
// requested reversal of the earlier decision, not an oversight.
//
// RESOLVED 2026-09-14 (Breathe_Life_Open_Items_Audit.docx, then the user's
// direct correction): the audit flagged that Mackenzie Phillips' and Steve
// Karp's current employment status can't be confirmed, and initially
// recommended redirecting their posts to the Our Team page instead of
// keeping them live here. That was wrong -- this project already has a
// precedent for exactly this situation (Dr. Tian Dayton's bio, kept live as
// historical content rather than redirected) and it applies here too: these
// are dated announcements ("joined as of [then]"), not current-status
// claims. The exclusion rule is about new content making forward-looking
// claims, not about erasing real, dated, historical content. No redirect
// change needed -- these stay exactly where they are, preserving the
// BuzzFeed/Vanity Fair/Daily Mail backlinks this decision was about in the
// first place.
const tierAMigrationRedirects = {
  "/toxic-codependency-looks-like/": "/blog/toxic-codependency-looks-like/",
  "/sex-addiction-drug-addiction/": "/blog/sex-addiction-drug-addiction/",
  "/vicious-cycle-addiction/": "/blog/vicious-cycle-addiction/",
  "/mackenzie-phillips-joins-breathe-as-addiction-counselor/": "/blog/mackenzie-phillips-joins-breathe-as-addiction-counselor/",
  "/5-weird-things-alcohol-withdrawal/": "/blog/5-weird-things-alcohol-withdrawal/",
  "/hookah-smoking-smoking-tobacco/": "/blog/hookah-smoking-smoking-tobacco/",
  "/can-you-force-someone-to-go-to-rehab/": "/blog/can-you-force-someone-to-go-to-rehab/",
  "/abuse-c-ptsd-complex-post-traumatic-stress-disorder/": "/blog/abuse-c-ptsd-complex-post-traumatic-stress-disorder/",
  "/smoking-suicide/": "/blog/smoking-suicide/",
  "/prevent-failure-launch-children/": "/blog/prevent-failure-launch-children/",
  "/skillful-vs-unskillful-love/": "/blog/skillful-vs-unskillful-love/",
  "/psychiatrist-steve-karp/": "/blog/psychiatrist-steve-karp/",
  "/how-to-start-the-conversation-about-rehab/": "/blog/how-to-start-the-conversation-about-rehab/",
  "/breathes-new-office-location-on-melrose/": "/blog/breathes-new-office-location-on-melrose/",
  "/manage-nicotine-withdrawal/": "/blog/manage-nicotine-withdrawal/",
  "/living-with-someone-who-has-ocd/": "/blog/living-with-someone-who-has-ocd/",
  "/orange-new-black-got-mackenzie-phillips-tap-past/": "/blog/orange-new-black-got-mackenzie-phillips-tap-past/",
  "/flight-attendant-mental-health/": "/blog/flight-attendant-mental-health/",
};

// New Beck Gee posts discovered 2026-09-14 via breathelifehealingcenters.com/author/beck/
// -- published Sept 3-11, 2026, after our original GSC/tiering export, so they
// never appeared in the Tier A-D classification. One of the three
// (what-happens-to-your-body-and-mind-when-you-stop-using-meth-after-chemsex)
// had already been redirected to /what-we-treat/methamphetamine/ as part of the
// ~225-URL gap-fill map, purely because it looked like zero-traffic old content
// in that export -- it was actually brand new. That redirect is removed; all
// three get real pages at /blog/{slug}/, with their live bare URLs redirected
// here the same way the Tier A migration above does.
const newBeckGeePostRedirects = {
  "/chosen-family-and-recovery-why-your-support-system-does-not-have-to-be-blood/": "/blog/chosen-family-and-recovery-why-your-support-system-does-not-have-to-be-blood/",
  "/what-happens-to-your-body-and-mind-when-you-stop-using-meth-after-chemsex/": "/blog/what-happens-to-your-body-and-mind-when-you-stop-using-meth-after-chemsex/",
  "/grindr-hookup-culture-and-substance-use-what-queer-men-should-know/": "/blog/grindr-hookup-culture-and-substance-use-what-queer-men-should-know/",
};

// /conditions/* section merged into /what-we-treat/* (2026-09-18, Elizabeth's
// nav consolidation): depression, anxiety, trauma, complex-trauma, and
// dual-diagnosis moved to src/pages/what-we-treat/, and the /conditions/ hub
// itself no longer has a page. These 6 send anyone hitting the old URLs
// (bookmarks, backlinks, stale search results) straight to the new ones --
// no chain, since every legacy redirect above that used to target /conditions/*
// was updated in place to point directly at /what-we-treat/* instead.
const conditionsMergeRedirects = {
  "/conditions/": "/what-we-treat/",
  "/conditions/depression/": "/what-we-treat/depression/",
  "/conditions/anxiety/": "/what-we-treat/anxiety/",
  "/conditions/complex-trauma/": "/what-we-treat/complex-trauma/",
  "/conditions/trauma/": "/what-we-treat/trauma/",
  "/conditions/dual-diagnosis/": "/what-we-treat/dual-diagnosis/",
};

// /about/outpatient-photos/ removed (2026-09-18, user feedback): it was a
// near-duplicate of /about/campus-photos/ using the same facility photo set
// (the original build note on that page explains why -- the asset
// filenames don't reliably distinguish outpatient-office photos from
// residential-campus ones), which meant bedroom/spa/pool photos were
// showing up on a page framed as the outpatient (non-residential) location.
// Consolidated into the one gallery page, matching how the official site
// (breathelifehealingcenters.com/locations/campus-photos/) has only a
// single campus-photos page, not two.
const outpatientPhotosMergeRedirects = {
  "/about/outpatient-photos/": "/about/campus-photos/",
};

// Restored eating-disorder blogs (2026-10-14). Daniel restored these 38
// educational posts on the current WordPress site (disabled their blog-hub
// redirects, indexable again) and the task is for both sites to match at
// launch: same posts, same slugs, no redirect to the blog hub. They live at
// /blog/{slug}/ like every other migrated post, so each bare URL 301s to its
// own article. Commercial ED service pages stay off, mirroring Daniel:
// /breathe-eating-disorder-recovery/ now points at the recovery article
// (his change), the other five keep pointing at /what-we-treat/eating-disorders/
// (this site's stand-in for the old /breathe-services/). /hand-mouth/ (smoking
// article, still a draft redirecting to the hub on the live site) does the same here.
const edBlogRestoreRedirects = {
  "/can-you-have-an-eating-disorder-and-not-realize-it/": "/blog/can-you-have-an-eating-disorder-and-not-realize-it/",
  "/tips-coping-eating-disorder-holidays/": "/blog/tips-coping-eating-disorder-holidays/",
  "/top-5-facts-and-myths-about-eating-disorders/": "/blog/top-5-facts-and-myths-about-eating-disorders/",
  "/can-you-ever-fully-recover-from-an-eating-disorder/": "/blog/can-you-ever-fully-recover-from-an-eating-disorder/",
  "/how-to-know-when-the-occasional-binge-turns-into-binge-eating-disorder/": "/blog/how-to-know-when-the-occasional-binge-turns-into-binge-eating-disorder/",
  "/what-causes-anorexia/": "/blog/what-causes-anorexia/",
  "/help-someone-with-anorexia/": "/blog/help-someone-with-anorexia/",
  "/what-is-bulimia/": "/blog/what-is-bulimia/",
  "/bulimia-causes/": "/blog/bulimia-causes/",
  "/anorexia-versus-bulimia/": "/blog/anorexia-versus-bulimia/",
  "/snack-cake-near-death-at-81/": "/blog/snack-cake-near-death-at-81/",
  "/how-anorexia-affects-the-body/": "/blog/how-anorexia-affects-the-body/",
  "/what-is-anorexia/": "/blog/what-is-anorexia/",
  "/common-eating-disorder-america/": "/blog/common-eating-disorder-america/",
  "/signs-of-bulimia/": "/blog/signs-of-bulimia/",
  "/7-signs-you-are-suffering-from-anorexia/": "/blog/7-signs-you-are-suffering-from-anorexia/",
  "/https-breathelifehealingcenters-com-embarrassing-things-binge-eating-disorder/": "/blog/https-breathelifehealingcenters-com-embarrassing-things-binge-eating-disorder/",
  "/whats-even-in-diet-pills/": "/blog/whats-even-in-diet-pills/",
  "/how-to-prevent-obesity/": "/blog/how-to-prevent-obesity/",
  "/food-addiction-in-america/": "/blog/food-addiction-in-america/",
  "/bed-the-most-common-eating-disorder-in-america/": "/blog/bed-the-most-common-eating-disorder-in-america/",
  "/could-you-unknowingly-have-an-eating-disorder/": "/blog/could-you-unknowingly-have-an-eating-disorder/",
  "/the-good-food-mood/": "/blog/the-good-food-mood/",
  "/interventionist-brad-lamm-shares-his-insight-on-food-addiction/": "/blog/interventionist-brad-lamm-shares-his-insight-on-food-addiction/",
  "/live-learn-what-style-of-eater-are-you/": "/blog/live-learn-what-style-of-eater-are-you/",
  "/sugar-blows/": "/blog/sugar-blows/",
  "/more-or-less-sweet-tooth-check-up/": "/blog/more-or-less-sweet-tooth-check-up/",
  "/body-betrays/": "/blog/body-betrays/",
  "/motivators-western-diet/": "/blog/motivators-western-diet/",
  "/hope-binge-eating-recovery/": "/blog/hope-binge-eating-recovery/",
  "/addicted-food-journey-recovery/": "/blog/addicted-food-journey-recovery/",
  "/man-weighed-530lbs-reveals-lost-half-body-weight/": "/blog/man-weighed-530lbs-reveals-lost-half-body-weight/",
  "/aspartame-calorie-cost/": "/blog/aspartame-calorie-cost/",
  "/summer-eat-wave/": "/blog/summer-eat-wave/",
  "/im-not-big-why-we-loathe-to-admit-it/": "/blog/im-not-big-why-we-loathe-to-admit-it/",
  "/obesity-the-world-is-literally-round/": "/blog/obesity-the-world-is-literally-round/",
  "/educated-eating-diets-designed-fail-2/": "/blog/educated-eating-diets-designed-fail-2/",
  "/types-eating-disorders-explained/": "/blog/types-eating-disorders-explained/",
  "/breathe-eating-disorder-recovery/": "/blog/can-you-ever-fully-recover-from-an-eating-disorder/",
  "/hand-mouth/": "/blog/",
};

const redirects = {
  ...tierAMigrationRedirects,
  ...newBeckGeePostRedirects,
  ...conditionsMergeRedirects,
  ...outpatientPhotosMergeRedirects,
  ...edBlogRestoreRedirects,
  // Every post now has a real named author (Beck Gee, Shoshana Katz, or
  // Brad Lamm for his one first-person essay) per Elizabeth's 2026-09-14
  // instruction to retire the generic institutional byline. The archive
  // page for it was deleted since it would render with zero posts; this
  // catches anything already indexed or linked to the old URL.
  "/blog/author/breathe-life-team/": "/blog/",
  // Brad Lamm removed from every leadership credit sitewide per Charmaine
  // (cc Elizabeth, 2026-09-25), so his bio page is gone. Same target the
  // approved redirect map already uses for his old-site bio
  // (/our-team/brad-lamm-cip/ -> /about/our-team/, "Bio removed per client
  // direction").
  "/about/our-team/brad-lamm/": "/about/our-team/",
  // Brian Whisenant removed from the team (Marketing, Business Development
  // & Alumni) per client request 2026-10-05; bio page deleted.
  "/about/our-team/brian-whisenant/": "/about/our-team/",
  // Sarah Johnson and Dez White removed per client request 2026-10-30.
  "/about/our-team/sarah-johnson/": "/about/our-team/",
  "/about/our-team/dez-white/": "/about/our-team/",
  // Old WordPress (Yoast) sitemap files that search engines still have on file -> the new sitemap
  "/sitemap_index.xml": "/sitemap.xml",
  "/post-sitemap.xml": "/sitemap.xml",
  "/page-sitemap.xml": "/sitemap.xml",
  "/category-sitemap.xml": "/sitemap.xml",
  "/sitemap.xml.gz": "/sitemap.xml",
  // Keone Holt (Head Chef) removed per client request 2026-11-02.
  "/about/our-team/keone-holt/": "/about/our-team/",
  // Name corrected to Sarah Stitt per client 2026-10-30.
  "/about/our-team/sarah-sitt/": "/about/our-team/sarah-stitt/",
  // Video Tour page removed per client request 2026-10-30.
  "/about/video-tour/": "/about/campus-photos/",
  "/4-ways-to-heal-from-psychological-trauma/": "/what-we-treat/complex-trauma/",
  "/5-absolute-important-steps-take-relapse/": "/programs/alumni-program/",
  "/5-things-cheaper-drug-screening/": "/blog/category/understanding-addiction/",
  "/7-signs-of-depression/": "/what-we-treat/depression/",
  "/7-triggering-situations-recovering-addicts-avoid/": "/blog/category/understanding-addiction/",
  "/a-cut-above/": "/blog/category/understanding-addiction/",
  "/addicted-alcohol-problem/": "/what-we-treat/alcohol/",
  "/addiction-myths-vs-facts/": "/blog/vicious-cycle-addiction/",
  "/addiction-treatment-center-best-option-2/": "/programs/residential-treatment/",
  "/addiction-treatment-for-gay-men/": "/signature-services/lgbtq/",
  "/addiction-treatment-west-hollywood/": "/areas-we-service/west-hollywood/",
  "/advantages-alcohol-support-groups/": "/what-we-treat/alcohol/",
  "/affordable-care-act-provides-access-to-treatment/": "/admissions/insurance/",
  "/alcohol-anxiety-navigating-dual-diagnosis-treatment-in-west-hollywood/": "/what-we-treat/alcohol/",
  "/alcohol-awareness-month-for-the-health-of-it/": "/what-we-treat/alcohol/",
  "/alcohol-drug-addiction-treatment/": "/what-we-treat/alcohol/",
  "/alliance-with-experience-recovery/": "/blog/category/news/",
  "/alumni-support/": "/programs/alumni-program/",
  "/anorexia-treatment-los-angeles/": "/what-we-treat/eating-disorders/",
  "/anorexia/": "/what-we-treat/eating-disorders/",
  "/benefits-group-therapy-addiction/": "/therapies/",
  "/benefits-of-depression-screening/": "/what-we-treat/depression/",
  "/benefits-quitting-smoking/": "/what-we-treat/",
  "/best-anger-management-strategies/": "/therapies/cbt/",
  "/binge-eating-disorder-treatment/": "/what-we-treat/eating-disorders/",
  "/binge-eating-disorder/": "/what-we-treat/eating-disorders/",
  "/body-dysmorphia-disorder/": "/what-we-treat/eating-disorders/",
  "/body-dysmorphic-disorder-causes/": "/what-we-treat/eating-disorders/",
  "/body-dysmorphic-disorder-symptoms/": "/what-we-treat/eating-disorders/",
  "/body-dysmorphic-disorder-treatment/": "/what-we-treat/eating-disorders/",
  "/breathe-awarded-accreditation-joint-commission/": "/about/",
  "/breathe-life-healing-centers-employment-application/": "/resources/media/",
  "/breathe-weho-treatment-services-earns-joint-commissions-gold-seal-approval/": "/about/",
  "/breeding-addiction-moms-babies-opiates-arrive-pre-loaded/": "/what-we-treat/opioids/",
  "/bulimia-treatment-in-los-angeles-pathways-to-a-healthier-you/": "/what-we-treat/eating-disorders/",
  "/bulimia/": "/what-we-treat/eating-disorders/",
  "/bullying-battle-cry-its-no-joke/": "/blog/category/understanding-trauma/",
  "/caffeine-overdose/": "/blog/category/understanding-addiction/",
  "/cape-bowl/": "/blog/category/news/",
  "/cheers-health/": "/what-we-treat/alcohol/",
  "/chemsex-crystal-meth-navigating-recovery-in-west-hollywood/": "/what-we-treat/methamphetamine/",
  "/chemsex-what-is-it-and-why-is-it-dangerous/": "/signature-services/chemsex-treatment/",
  "/clinical-outreach-coordinator/": "/resources/media/",
  "/coping-patterns-in-complex-trauma-and-addiction/": "/what-we-treat/complex-trauma/",
  "/coping-vs-avoiding-pain/": "/therapies/act/",
  "/crystal-meth-addiction-treatment-in-los-angeles/": "/what-we-treat/methamphetamine/",
  "/day-treatment/": "/programs/php/",
  "/dealing-with-early-sobriety-triggers/": "/blog/category/understanding-addiction/",
  "/depression-and-addiction/": "/what-we-treat/depression/",
  "/depression-in-college-students/": "/what-we-treat/depression/",
  "/detox-increase-quit/": "/programs/medical-detox/",
  "/digital-edit/": "/blog/category/news/",
  "/do-i-have-complex-trauma/": "/what-we-treat/complex-trauma/",
  "/dr-tian-dayton/": "/resources/media/",
  "/drinking-back-years/": "/what-we-treat/alcohol/",
  "/drug-addicts-anonymous-meetings-expect/": "/programs/alumni-program/",
  "/drug-dealer-co-pay/": "/blog/category/news/",
  "/drug-induced-psychosis/": "/what-we-treat/methamphetamine/",
  "/drugs-in-the-digital-age/": "/blog/category/news/",
  "/dual-diagnosis-relationship-substance-abuse-mental-illness/": "/what-we-treat/dual-diagnosis/",
  "/dual-diagnosis-substance-abuse-and-mental-illness/": "/what-we-treat/dual-diagnosis/",
  "/dual-diagnosis-treatment-program/": "/what-we-treat/dual-diagnosis/",
  "/dude-wheres-my-car/": "/blog/category/understanding-addiction/",
  "/experience-detox-residential/": "/programs/medical-detox/",
  "/failure-to-launch/": "/blog/prevent-failure-launch-children/",
  "/faq/": "/admissions/",
  "/fighting-depression-in-the-summer/": "/what-we-treat/depression/",
  "/finding-freedom-through-the-dance-of-liberation/": "/therapies/experiential-therapies/",
  "/fitness-rx-fun-matters/": "/therapies/holistic-therapy/",
  "/five-alive-qa-with-jed-hastings/": "/resources/media/",
  "/food-addiction-treatment/": "/what-we-treat/eating-disorders/",
  "/for-many-veterans-accidental-addiction-from-drugs-meant-to-heal/": "/what-we-treat/opioids/",
  "/freedom-from-bondage/": "/blog/category/understanding-addiction/",
  "/from-detox-to-recovery-in-los-angeles-the-role-of-addiction-treatment-centers/": "/programs/medical-detox/",
  "/from-survival-mode-to-stability-how-the-body-heals-in-treatment/": "/therapies/somatic-therapy/",
  "/gay-rehab-centers-in-los-angeles-tailored-support-for-the-lgbtq-community/": "/signature-services/lgbtq/",
  "/good-golly-molly/": "/what-we-treat/designer-drugs/",
  "/guns-mental-illness-deadly-combination/": "/blog/category/news/",
  "/he-intervenes-with-compassion/": "/resources/media/",
  "/healing-experiential-therapies/": "/therapies/experiential-therapies/",
  "/helping-the-addict-healing-the-family/": "/admissions/for-families/",
  "/heroin-breakthrough-need-money/": "/what-we-treat/opioids/",
  "/heroin-deaths-twice-bad/": "/what-we-treat/opioids/",
  "/heroin-pandemic-help-horizon/": "/what-we-treat/opioids/",
  "/heroin-the-drug-of-nice-suburban-areas/": "/what-we-treat/opioids/",
  "/history-removes-mystery/": "/blog/category/understanding-addiction/",
  "/hit-snooze-button-taking-nap-always-lazy/": "/therapies/holistic-therapy/",
  "/holistic-approach-health-wellbeing/": "/therapies/holistic-therapy/",
  "/how-breathe-life-healing-centers-in-los-angeles-supports-long-term-sobriety-after-detox/": "/programs/medical-detox/",
  "/how-complex-trauma-impacts-our-sense-of-self-safety/": "/what-we-treat/complex-trauma/",
  "/how-families-can-support-a-loved-one-in-addiction-treatment/": "/admissions/for-families/",
  "/how-methamphetamine-affects-your-physical-health/": "/what-we-treat/methamphetamine/",
  "/how-our-residential-rehab-can-help-you/": "/programs/residential-treatment/",
  "/how-to-be-the-sober-life-of-the-party/": "/blog/category/understanding-addiction/",
  "/how-to-choose-the-right-drug-detox-center-in-los-angeles/": "/programs/medical-detox/",
  "/https-breathelifehealingcenters-com-pill-popping-dermatologist/": "/blog/category/news/",
  "/https-breathelifehealingcenters-com-time-to-give-back-tis-the-season-to-think-of-others/": "/blog/category/news/",
  "/importance-integrated-treatment-dual-diagnosis/": "/what-we-treat/dual-diagnosis/",
  "/inpatient-mental-health-treatment/": "/what-we-treat/dual-diagnosis/",
  "/intensive-outpatient-program/": "/programs/intensive-outpatient/",
  "/internal-family-systems-and-its-role-in-restoring-balance/": "/therapies/trauma-focused-therapy/",
  "/is-it-paranoia-or-psychosis-managing-meth-induced-mental-health-crises/": "/what-we-treat/methamphetamine/",
  "/joint-commission/": "/about/",
  "/josh-duggars-rehab-welcome-to-the-dark-ages/": "/blog/category/news/",
  "/junior-high-marijuana-teens/": "/what-we-treat/marijuana/",
  "/laugh-way-joyful-life/": "/blog/category/understanding-addiction/",
  "/lgbt-drug-rehab-in-los-angeles-inclusive-and-compassionate-care/": "/signature-services/lgbtq/",
  "/lifesaver-youve-never-heard/": "/what-we-treat/opioids/",
  "/light-life/": "/blog/category/understanding-addiction/",
  "/look-for-drug-intervention-specialist/": "/admissions/for-families/",
  "/los-angeles-holistic-recovery-overcoij-ming-fentanyl-and-kratom-addiction-beyond-detox/": "/what-we-treat/opioids/",
  "/love-addict-love-avoidant-a-match-made-in-hell/": "/blog/toxic-codependency-looks-like/",
  "/mackenzie-phillips-featured-on-fox-11-los-angeles/": "/resources/media/",
  "/mackenzie-phillips-joins-addiction-counselor/": "/resources/media/",
  "/media-mania/": "/blog/category/news/",
  "/medical-alcohol-and-drug-detox/": "/what-we-treat/alcohol/",
  "/medication-assisted-treatment-for-long-term-stability/": "/programs/medication-assisted-treatment/",
  "/medication-assisted-treatment-mat/": "/programs/medication-assisted-treatment/",
  "/medication-assisted-treatment/": "/programs/medication-assisted-treatment/",
  "/meet-the-intake-team/": "/resources/media/",
  "/melissa-mccracken-speaks-at-cma2020/": "/resources/media/",
  "/mental-health-awareness-month-b4stage4/": "/what-we-treat/depression/",
  "/mental-health-help-available/": "/what-we-treat/dual-diagnosis/",
  "/mental-health-treatment/": "/what-we-treat/dual-diagnosis/",
  "/meth-addiction-getting-help/": "/what-we-treat/methamphetamine/",
  "/meth-addiction-how-crystal-recovery-works/": "/what-we-treat/methamphetamine/",
  "/michael-phelps/": "/blog/category/news/",
  "/moderate-drinking-really-safe-may-never-know/": "/what-we-treat/alcohol/",
  "/most-addictive-substances/": "/what-we-treat/",
  "/new-peer-pressure-hashtags-facebook-feeds/": "/blog/category/news/",
  "/newsnight-debate-between-matthew-perry-and-peter-hitchens/": "/blog/category/news/",
  "/nfl-suit-pain-meds/": "/what-we-treat/opioids/",
  "/numbing-the-pain-the-link-between-heroin-and-unresolved-trauma/": "/what-we-treat/opioids/",
  "/nyc-smoking-spikes/": "/what-we-treat/",
  "/off-the-court-the-life-of-lamar-odom/": "/blog/category/news/",
  "/one-year-anniversary/": "/resources/media/",
  "/overcome-alcohol-withdrawal/": "/what-we-treat/alcohol/",
  "/pain-meds-xanax-anxiety/": "/what-we-treat/opioids/",
  "/phillip-seymour-hoffman-dead-actor-dies-46/": "/blog/category/news/",
  "/php-vs-iop-understanding-different-levels-of-addiction-treatment/": "/programs/intensive-outpatient/",
  "/post-acute-withdrawal-syndrome-in-los-angeles-managing-recovery-after-detox/": "/programs/medical-detox/",
  "/post-traumatic-stress-disorder-ptsd/": "/what-we-treat/trauma/",
  "/professional-help-anxiety/": "/what-we-treat/anxiety/",
  "/ptsd-and-substance-use-why-trauma-and-addiction-are-often-connected/": "/what-we-treat/complex-trauma/",
  "/ptsd-treatment-in-los-angeles-integrating-trauma-therapy-with-addiction-recovery/": "/what-we-treat/trauma/",
  "/reasons-rehab-2-prescription-medication-addiction/": "/what-we-treat/benzodiazepines/",
  "/reckless-doctor-faces-justice/": "/blog/category/news/",
  "/relapse-prone/": "/programs/alumni-program/",
  "/residential-treatment-for-substance-addiction/": "/programs/residential-treatment/",
  "/risks-of-untreated-adhd/": "/what-we-treat/",
  "/robin-williams-fame-self-shame/": "/blog/category/news/",
  "/rodrigo-dasilva-joins-the-breathe-team/": "/resources/media/",
  "/safe-from-self-harm/": "/what-we-treat/depression/",
  "/self-care-health-care/": "/therapies/holistic-therapy/",
  "/september-is-recovery-monthwhat-does-that-mean-really/": "/blog/category/understanding-addiction/",
  "/sero-mental-health/": "/about/",
  "/service-for-sobriety-three-tools-for-making-it-stick/": "/blog/category/understanding-addiction/",
  "/sleep-hygiene-tips/": "/therapies/holistic-therapy/",
  "/smoking-booze-get-outa-town/": "/what-we-treat/",
  "/sober-living-home-can-benefit-your-recovery/": "/programs/sober-living/",
  "/sobriety-on-pain-meds/": "/what-we-treat/opioids/",
  "/staying-sober-during-the-holidays/": "/blog/category/understanding-addiction/",
  "/still-debating-naloxone-life-saving-emergency-drug/": "/what-we-treat/opioids/",
  "/strategies-complex-trauma/": "/what-we-treat/complex-trauma/",
  "/substance-free-summer-activities/": "/blog/category/understanding-addiction/",
  "/support-groups-for-family-members-of-drug-addicts/": "/admissions/for-families/",
  "/teen-depression-symptoms-causes/": "/what-we-treat/depression/",
  "/the-beauty-blueprint/": "/blog/category/understanding-addiction/",
  "/the-new-heroin-why-the-rules-of-recovery-have-changed/": "/what-we-treat/opioids/",
  "/the-new-world-what-christopher-columbus-can-teach-us-about-recovery/": "/blog/category/understanding-addiction/",
  "/the-polyvagal-theory-trauma-and-mental-health/": "/what-we-treat/complex-trauma/",
  "/the-rules-are-different/": "/blog/category/understanding-addiction/",
  "/the-trajectory-of-addiction-to-recovery/": "/blog/category/understanding-addiction/",
  "/the-whole-person-approach-why-holistic-alcohol-rehab-is-taking-over-los-angeles/": "/what-we-treat/alcohol/",
  "/things-need-know-trichotillomania/": "/what-we-treat/",
  "/thinking-back/": "/blog/category/understanding-addiction/",
  "/this-is-what-toxic-codependency-looks-like/": "/blog/toxic-codependency-looks-like/",
  "/tips-parents-addicts/": "/admissions/for-families/",
  "/toxic-codependent-looks-like/": "/blog/toxic-codependency-looks-like/",
  "/transitional-living-after-residential-treatment/": "/programs/residential-treatment/",
  "/trauma-and-addiction/": "/what-we-treat/complex-trauma/",
  "/treatment-eating-disorders/": "/what-we-treat/eating-disorders/",
  "/treatment-for-bulimia/": "/what-we-treat/eating-disorders/",
  "/types-anxiety-disorder/": "/what-we-treat/anxiety/",
  "/understanding-alcohol-withdrawal-symptoms-causes-and-treatment/": "/what-we-treat/alcohol/",
  "/vaping-illness-syndrome/": "/what-we-treat/",
  "/what-does-dual-diagnosis-mean/": "/what-we-treat/dual-diagnosis/",
  "/what-happens-during-meth-detox/": "/what-we-treat/methamphetamine/",
  "/what-is-body-dysmorphic-disorder/": "/what-we-treat/eating-disorders/",
  "/what-is-methamphetamine/": "/what-we-treat/methamphetamine/",
  "/what-is-obsessive-compulsive-disorder/": "/what-we-treat/anxiety/",
  "/what-is-ocd/": "/what-we-treat/anxiety/",
  "/what-is-trichotillomania/": "/what-we-treat/",
  "/when-its-time-to-tell-the-family-about-your-addiction/": "/admissions/for-families/",
  "/why-is-depression-on-the-rise/": "/what-we-treat/depression/",
  "/world-intervention-day/": "/admissions/for-families/",
  "/you-dont-have-to-do-it-alone/": "/blog/category/understanding-addiction/",
  // Google Ads landing page on the WP site (2026-10-14, docs/13-MIGRATION-CHECKLIST.md):
  // same "drug rehab" intent as the Los Angeles page.
  "/drug-rehab/": "/areas-we-service/los-angeles/",
  // Old WordPress URLs that returned 404, sent to the homepage or (files) returned 403: each 301s to its
  // matching new page (ClickUp 1dfm34y06de, Maria's list of 272 sorted by Search Console clicks).
  // The 77 entries above that used to point at "/" were updated in place to the same list.
  "/our-team/kathleen-murphy-ma-lmft-lpc/": "/about/our-team/",
  "/our-team/valerio-iovino-laadc-c-asat/": "/about/our-team/valerio-iovino/",
  "/our-team/emmy-olea/": "/about/our-team/emmy-olea/",
  "/our-team/beck-gee-cadc-ii-amft-145681/": "/about/our-team/beck-gee/",
  "/our-team/megan-etheridge-lpcc/": "/about/our-team/megan-ethridge/",
  "/our-team/blake-dinger-cadc/": "/about/our-team/blake-dinger/",
  "/our-team/angie-s-wang/": "/about/our-team/angie-wang/",
  "/our-team/brad-lamm-cip/": "/about/our-team/",
  "/our-team/wayne-nathan/": "/about/our-team/wayne-nathan/",
  "/our-team/deb-hughes-cas/": "/about/our-team/deb-hughes/",
  "/our-team/brian-whisenant/": "/about/our-team/",
  "/our-team/miguel-palacios/": "/about/our-team/miguel-palacios/",
  "/our-team/mark-s-derosa-cadc-iii-icadc-asat-c-lgbtqia2/": "/about/our-team/mark-derosa/",
  "/our-team/mayra-lopez-lvn/": "/about/our-team/mayra-lopez/",
  "/our-team/nate-chappell/": "/about/our-team/",
  "/our-team/kayla-radin/": "/about/our-team/kayla-radin/",
  "/our-team/rachel-aiono-asw/": "/about/our-team/rachel-aiono/",
  "/our-team/keone-holt/": "/about/our-team/",
  "/our-team/christine-wolf-cadc-ii-icadc/": "/about/our-team/christine-wolf/",
  "/our-team/brian-etter/": "/about/our-team/",
  "/our-team/stacy-cohen-md/": "/about/our-team/stacy-cohen/",
  "/our-team/cristina-meadows/": "/about/our-team/cristina-meadows/",
  "/our-team/stephanie-wolf/": "/about/our-team/",
  "/our-team/emily-salas/": "/about/our-team/emily-salas/",
  "/our-team/wendy-adamson/": "/about/our-team/",
  "/members_category/clinical-team/": "/about/our-team/",
  "/our-team/emily-wessel/": "/about/our-team/emily-wessel/",
  "/our-team/sara-stitt/": "/about/our-team/sarah-stitt/",
  "/our-team/bill-reilly-cadc-ii/": "/about/our-team/bill-reilly/",
  "/our-team/david-stookey/": "/about/our-team/",
  "/our-team/nick-michalski/": "/about/our-team/nick-michalski/",
  "/our-team/forever-peru/": "/about/our-team/forever-peru/",
  "/our-team/shoshana-katz-lmft/": "/about/our-team/shoshana-katz/",
  "/about/-our-team/": "/about/our-team/",
  "/our-team/jeremy-hanes/": "/about/our-team/jeremy-hanes/",
  "/our-team/kimberly-washington/": "/about/our-team/",
  "/our-team/ivis-gutierrez-lopez/": "/about/our-team/ivis-gutierrez-lopez/",
  "/our-team/iza-kiacz-ma-amft/": "/about/our-team/iza-kiacz/",
  "/members_category/admissions-case-management/": "/about/our-team/",
  "/our-team/sue-dinner/": "/about/our-team/sue-dinner/",
  "/our-team/duran-visek/": "/about/our-team/duran-visek/",
  "/our-team/vivian-rubio-cadc-ii/": "/about/our-team/vivian-rubio/",
  "/our-team/sarah-johnson-m-a-amft/": "/about/our-team/",
  "/our-team/wes-werbeck/": "/about/our-team/wes-werbeck/",
  "/members_category/operations/": "/about/our-team/",
  "/members_category/adjunct-professionals/": "/about/our-team/",
  "/members_category/marketing-clinical-outreach/": "/about/our-team/",
  "/our-team/melissa-sanchez/": "/about/our-team/",
  "/our-team/christina-beck/": "/about/our-team/christina-beck/",
  "/our-team/rox-varela/": "/about/our-team/rox-varela/",
  "/our-team/hannah-ayers-lmft/": "/about/our-team/hannah-ayers/",
  "/members_category/executive-leadership/": "/about/our-team/",
  "/our-team/velsanard-beavers/": "/about/our-team/velsanard-beavers/",
  "/our-team/hassan-olton/": "/about/our-team/hassan-olton/",
  "/members_category/medical-team/": "/about/our-team/",
  "/our-team/keegan-halupowski/": "/about/our-team/keegan-halupowski/",
  "/our-team/esmeralda-sandoval/": "/about/our-team/esmeralda-sandoval/",
  "/our-team/anna-limina-mt-bc/": "/about/our-team/anna-limina/",
  "/breathe-services/crystal-meth-rehab/": "/what-we-treat/methamphetamine/",
  "/breathe-services/lgbtqia/": "/signature-services/lgbtq/",
  "/therapies/complex-trauma-treatment/": "/what-we-treat/complex-trauma/",
  "/therapies/flight-attendant-program/": "/signature-services/flight-attendant-program/",
  "/addiction-treatment-program/meth-addiction-treatment/": "/what-we-treat/methamphetamine/",
  "/eating-disorder-nutrition/": "/what-we-treat/eating-disorders/",
  "/addiction-treatment-program/": "/what-we-treat/",
  "/breathe-services/breatheout/": "/signature-services/lgbtq/",
  "/addiction-treatment-program/alcohol-rehab/": "/what-we-treat/alcohol/",
  "/addiction-treatment-program/kratom-treatment/": "/what-we-treat/kratom/",
  "/addiction-treatment-program/chemsex-treatment-los-angeles/": "/signature-services/chemsex-treatment/",
  "/addiction-treatment-program/cocaine-addiction-treatment/": "/what-we-treat/cocaine/",
  "/addiction-treatment-program/xanax-addiction/": "/what-we-treat/xanax/",
  "/addiction-treatment-program/marijuana-treatment/": "/what-we-treat/marijuana/",
  "/addiction-treatment-program/designer-drug-treatment/": "/what-we-treat/designer-drugs/",
  "/breathe-services/family-programs/": "/programs/family-program/",
  "/therapies/trauma-treatment/": "/what-we-treat/trauma/",
  "/therapies/depression-treatment-center/": "/what-we-treat/depression/",
  "/addiction-treatment-program/inhalant-treatment/": "/what-we-treat/inhalants/",
  "/addiction-treatment-program/drug-addiction-treatment/": "/what-we-treat/",
  "/therapies/residential-treatment/": "/programs/residential-treatment/",
  "/addiction-treatment-program/opioids-opiates-treatment/": "/what-we-treat/opioids/",
  "/therapies/case-management/": "/programs/case-management/",
  "/breathe-services/family-programs/family-intensive-services/": "/programs/family-program/",
  "/addiction-treatment-program/benzodiazepine-treatment/": "/what-we-treat/benzodiazepines/",
  "/addiction-treatment-program/heroin-addiction-treatment/": "/what-we-treat/opioids/",
  "/addiction-treatment-program/fentanyl-addiction-treatment/": "/what-we-treat/opioids/",
  "/breathe-services/levels-of-care/": "/programs/",
  "/breathe-services/": "/programs/",
  "/therapies/dual-diagnosis-treatment/": "/what-we-treat/dual-diagnosis/",
  "/therapies/anxiety-treatment-program/": "/what-we-treat/anxiety/",
  "/therapies/outpatient-addiction-rehab/": "/programs/outpatient-rehab/",
  "/therapies/enhanced-sober-living/": "/programs/sober-living/",
  "/addiction-treatment-program/amphetamine-treatment/": "/what-we-treat/methamphetamine/",
  "/addiction-treatment-program/prescription-drug-addiction-treatment/": "/what-we-treat/benzodiazepines/",
  "/breathe-services/family-programs/3-day-family-workshop/": "/programs/family-program/",
  "/chemsex-addiction/": "/signature-services/chemsex-treatment/",
  "/breathe-services-old/": "/programs/",
  "/addiction-treatment-program/kratom-addiction/": "/what-we-treat/kratom/",
  "/addiction-treatment-program/fentanyl-addiction/": "/what-we-treat/opioids/",
  "/addiction-treatment-program/benzodiazepine-addiction/": "/what-we-treat/benzodiazepines/",
  "/about/join-the-breathe-team/": "/about/careers/",
  "/locations/campus-photos/": "/about/campus-photos/",
  "/about/our-mission-vision/": "/about/",
  "/admissions/self-assessment-forms/": "/admissions/self-assessment/",
  "/locations/video-tour/": "/about/campus-photos/",
  "/locations/": "/contact-us/",
  "/about/treatment-accreditations-memberships/": "/about/",
  "/resources/our-brochures/": "/resources/",
  "/resources/brads-books/": "/resources/",
  "/resources/how-to-choose-treatment/": "/resources/",
  "/gallery/campus-gallery/": "/about/campus-photos/",
  "/gallery/campus-grid-gallery/": "/about/campus-photos/",
  "/treatment-access/": "/admissions/insurance/",
  "/locations/outpatient-photos/": "/about/campus-photos/",
  "/gallery/campus-indoor-gallery/": "/about/campus-photos/",
  "/wp-content/uploads/2025/08/Chemsex_brochure_.pdf": "/signature-services/chemsex-treatment/",
  "/wp-content/uploads/2025/08/Breathe_Program_Overview.pdf": "/programs/",
  "/wp-content/uploads/2025/08/UPDATED-Breathe-Alumni-Pack.pdf": "/programs/alumni-program/",
  "/wp-content/uploads/2017/08/IMG_0387.jpg": "/about/campus-photos/",
  "/wp-content/uploads/bb-plugin/cache/IMG_0387-landscape-518ba19926be5e1fc2d6e9d15b1a745c-4jubsa9r0wo7.jpg": "/about/campus-photos/",
  "/wp-content/uploads/2025/08/Living_in_Recovery_at_Campus.pdf": "/about/campus-photos/",
  "/wp-content/uploads/bb-plugin/cache/IMG_0951-landscape-dfe3b6129a26bb473789ce15fdc231db-4jubsa9r0wo7.jpg": "/about/campus-photos/",
  "/wp-content/uploads/bb-plugin/cache/IMG_0583-scaled-1-landscape-56c1e056b638e9b040b1412ae0b316cd-4jubsa9r0wo7.jpg": "/about/campus-photos/",
  "/wp-content/uploads/bb-plugin/cache/IMG_0369-landscape-09ca025589b9cfbc374b8cc8c665a695-4jubsa9r0wo7.jpg": "/about/campus-photos/",
  "/wp-content/uploads/2025/08/Breathe_-_Family_Class.pdf": "/programs/family-program/",
  "/transgender-treatment-for-addiction-in-los-angeles-inclusive-and-understanding-care/": "/signature-services/lgbtq/",
  "/breathe-life-healing-centers-welcomes-transgender-people/": "/signature-services/lgbtq/",
  "/tag/binge-eating-disorder/": "/blog/category/eating-disorders/",
  "/gay-addiction-treatment-in-los-angeles/": "/signature-services/lgbtq/",
  "/latest-news/": "/blog/",
  "/gay-rehab-centers-in-los-angeles-addressing-unique-needs-in-recovery/": "/signature-services/lgbtq/",
  "/how-minority-stress-drives-substance-use-in-lgbtq-communities/": "/blog/category/lgbtqia/",
  "/why-queer-people-deserve-treatment-that-actually-sees-them/": "/blog/category/lgbtqia/",
  "/category/recovery/page/2/": "/blog/category/understanding-addiction/",
  "/lgbtqia-affirming-addiction-treatment-in-los-angeles-finding-the-right-support/": "/signature-services/lgbtq/",
  "/author/beck/": "/blog/",
  "/category/alcoholism/": "/blog/category/understanding-addiction/",
  "/category/food-weight/": "/blog/category/eating-disorders/",
  "/author/breathe-life-healing-centers/": "/blog/",
  "/category/uncategorized/": "/blog/",
  "/category/recovery/": "/blog/category/understanding-addiction/",
  "/author/vectoron/": "/blog/",
  "/tag/pregnancy-addiction/": "/blog/",
  "/tag/detox-to-recovery/": "/programs/medical-detox/",
  "/latest-news/page/5/": "/blog/",
  "/latest-news/page/10/": "/blog/",
  "/tag/overdoses/": "/blog/",
  "/category/recovery/page/3/": "/blog/category/understanding-addiction/",
  "/tag/philip-seymour-hoffman-death/": "/blog/",
  "/tag/new-design/": "/blog/",
  "/tag/managing-recovery-after-detox/": "/programs/medical-detox/",
  "/tag/holistic-recovery/": "/blog/",
  "/tag/gay-addiction-treatment-in-los-angeles/": "/signature-services/lgbtq/",
  "/tag/bulimia-treatment/": "/blog/category/eating-disorders/",
  "/celebrating-national-lgbt-history-month/": "/blog/category/lgbtqia/",
  "/category/specialized-programs/": "/blog/",
  "/when-is-enough-enough/": "/blog/how-to-start-the-conversation-about-rehab/",
  "/what-to-expect-during-heroin-detox/": "/programs/medical-detox/",
  "/treatment-for-meth-addiction/": "/what-we-treat/methamphetamine/",
  "/substance-abuse-mental-illness-related/": "/what-we-treat/dual-diagnosis/",
  "/save-the-date-connect-on-the-cape/": "/blog/category/news/",
  "/preparing-for-holidays-in-recovery/": "/blog/category/understanding-addiction/",
  "/potent-heroin-painkiller-mix-pittsburgh/": "/what-we-treat/opioids/",
  "/legalize-marijuana-says-times/": "/what-we-treat/marijuana/",
  "/its-a-science-what-about-holiday-stress-that-makes-relapse-so-risky/": "/blog/category/understanding-addiction/",
  "/im-rehab-now-2/": "/admissions/what-to-bring/",
  "/grandma-loves-wine/": "/what-we-treat/alcohol/",
  "/good-grief-rage-against-the-machine/": "/blog/category/understanding-addiction/",
  "/financial-freedom-hope-after-help/": "/admissions/insurance/",
  "/family-guide-to-drug-addiction-withdrawal-support/": "/admissions/for-families/",
  "/early-childhood-trauma-disease-addiction/": "/what-we-treat/trauma/",
  "/e-cigarettes-childproof/": "/blog/manage-nicotine-withdrawal/",
  "/category/treatment/": "/blog/category/understanding-addiction/",
  "/category/transgender-treatment/": "/blog/category/lgbtqia/",
  "/category/relapse/": "/blog/category/understanding-addiction/",
  "/category/ptsd/": "/blog/category/understanding-trauma/",
  "/category/our-staff/": "/blog/",
  "/category/mental-illness/": "/blog/",
  "/category/lgbtqia/": "/blog/category/lgbtqia/",
  "/category/health-fitness/": "/blog/",
  "/category/for-the-family/": "/blog/category/for-the-family/",
  "/category/eating-disorders/": "/blog/category/eating-disorders/",
  "/category/detox/": "/blog/category/understanding-addiction/",
  "/category/bulimia-treatment/": "/blog/category/eating-disorders/",
  "/category/alumni-five-alive-qa/": "/blog/",
  "/category/addiction/": "/blog/category/understanding-addiction/",
  "/breathe-life-healing-center-lists-fisher-mansion-for-sale/": "/blog/category/news/",
  "/avoid-drug-addiction/": "/blog/vicious-cycle-addiction/",
  "/author/kacydesilva/": "/blog/",
  "/alcohol-treatment-help/": "/what-we-treat/alcohol/",
  "/addiction-and-drug-rehab-for-the-lgbtqia-community/": "/signature-services/lgbtq/",
  "/8-things-need-know-about-depression/": "/what-we-treat/depression/",
};

// https://astro.build/config
export default defineConfig({
  // Static output (no SSR needed, this is a fully prerendered marketing
  // site). The Vercel adapter still applies here: it translates the
  // `redirects` map below into Vercel's native edge redirect config
  // (real HTTP 301s) instead of the static meta-refresh stub pages Astro
  // falls back to with no adapter, per the plan already noted above.
  // Vercel itself is not yet confirmed as the actual host (CLAUDE.md marks
  // it TBD) -- this is prep, not a hosting decision.
  site: 'https://breathelifehealingcenters.com',
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  redirects,
  integrations: [redirectsTrailingSlash(), sitemap(), llms({ site: siteFacts, insurers })],
});
