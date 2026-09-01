/**
 * Dashboard Data Layer — Digital Healthcare Strategic Dashboard
 *
 * All data points live here. To update the dashboard:
 * 1. Edit values in this file
 * 2. Update the `lastUpdated` field
 * 3. Push to GitHub → Vercel auto-deploys
 *
 * Data point IDs map to the data-points-tracker.md in the Healthcare AI folder.
 * Monthly research updates produce a brief; apply changes here.
 */

// ============================================================
// META
// ============================================================
export const dashboardMeta = {
  lastUpdated: 'September 2026',
  updateLabel: 'Full Refresh — Big Tech, Telehealth, Policy, EMR & On-Demand Care (research through Aug 31, 2026)',
  subtitle: 'AI, Telehealth & Big Tech Market Analysis | Urgent Care Executive Insights',
};

// ============================================================
// KEY METRICS (top cards on overview)
// ============================================================
export const keyMetrics = [
  { label: 'Global Telehealth', value: '$219B', subtext: '2026 market size', trend: '→ $1.37T by 2035', color: '#0ea5e9' },
  { label: 'U.S. Urgent Care', value: '$44.3B', subtext: '2026 projected revenue', trend: '8.6% CAGR', color: '#10b981' },
  { label: 'ChatGPT Health Users', value: '300M+', subtext: 'weekly health queries', trend: '40M+ daily', color: '#8b5cf6' },
  { label: 'AI Visit Deflection', value: '15-25%', subtext: 'low-acuity by 2028', trend: '4-8 visits/day', color: '#f59e0b' },
];

// ============================================================
// OVERVIEW SECTION — highlight cards
// ============================================================
export const overviewHighlights = {
  aiHealthQueries: { value: '40M+', label: 'daily prompts', detail: '32% of U.S. adults have used AI for health info/advice (KFF Mar 2026)' },
  urgentCareCenters: { value: '15,398', label: 'U.S. locations', detail: 'UCA Mar 2026; demand stabilized 25-30% above pre-pandemic' },
  telehealthShare: { value: '25-30%', label: 'of visits by 2026', detail: '16-24% CAGR (total market); 30.3% DTC segment only' },
};

// ============================================================
// STRATEGIC PILLARS
// ============================================================
export const strategicPillars = [
  { title: 'AI-Enabled Patient Engagement', description: 'Deploy AI chatbots, ambient scribes, and smart triage to meet patients in digital channels', metrics: ['30-40% FAQ automation', '50-70% doc time savings'], iconName: 'Brain' },
  { title: 'Hybrid Care Delivery', description: 'Seamlessly blend virtual and in-person care with warm handoffs and remote diagnostics', metrics: ['24/7 virtual access', '94-99% satisfaction'], iconName: 'Zap' },
  { title: 'Consumer Experience Excellence', description: 'Price transparency, digital scheduling, minimal wait times to match retail expectations', metrics: ['+72% bookings for hybrid', '43% book after hours'], iconName: 'Heart' },
  { title: 'Gen Z/Millennial Capture', description: 'Target digital natives with the experiences they expect—text-first, transparent, fast', metrics: ['3x more likely to choose UC', '$165B spending by 2030'], iconName: 'TrendingUp' },
];

// ============================================================
// CHART DATA
// ============================================================

// Age-based telehealth adoption (%)
export const ageData = [
  { age: '0-9', adoption: 4.0, fill: '#94a3b8' },
  { age: '10-18', adoption: 11.3, fill: '#64748b' },
  { age: '19-30', adoption: 24.0, fill: '#0ea5e9' },
  { age: '31-40', adoption: 23.2, fill: '#0284c7' },
  { age: '41-50', adoption: 16.6, fill: '#0369a1' },
  { age: '51-64', adoption: 10.0, fill: '#075985' },
  { age: '65+', adoption: 5.7, fill: '#0c4a6e' },
];

// Geographic telehealth adoption (%)
export const geoData = [
  { name: 'Urban', value: 14.6, color: '#0ea5e9' },
  { name: 'Suburban', value: 12.5, color: '#38bdf8' },
  { name: 'Rural', value: 7.4, color: '#7dd3fc' },
];

// Telehealth service mix — commercial claims only (FAIR Health)
export const serviceMix = [
  { name: 'Behavioral Health', value: 67, color: '#6366f1' },
  { name: 'Primary Care', value: 18, color: '#0ea5e9' },
  { name: 'Specialty Care', value: 10, color: '#10b981' },
  { name: 'Other', value: 5, color: '#94a3b8' },
];

// Estimated full-market telehealth mix (incl. Medicare, Medicaid, self-pay)
// Sources: HHS ASPE, CMS, Grand View Research, McKinsey CHI 2024
export const fullMarketMix = [
  { name: 'Behavioral Health', value: 40, color: '#6366f1' },
  { name: 'Primary Care', value: 30, color: '#0ea5e9' },
  { name: 'Urgent/Low-Acuity', value: 15, color: '#f59e0b' },
  { name: 'Specialty Care', value: 10, color: '#10b981' },
  { name: 'Self-Pay/DTC', value: 5, color: '#f43f5e' },
];

// DTC / Self-Pay telehealth market
export const dtcTelehealth = {
  marketSize: '$1.5B',
  cagr: '30.3%',
  projectedBy2030: '$9.5B',
  keyPlayers: ['Amazon One Medical', 'Sesame/Costco', 'Teladoc'],
  visitPriceRange: '$29-75',
  primaryUseCase: 'Low-acuity (URI, UTI, rash, allergies)',
};

// Telemental health by age group (%)
export const telementalHealthByAge = [
  { age: '18-44', rate: 31.7, fill: '#6366f1', insight: 'Highest adoption' },
  { age: '45-64', rate: 24.2, fill: '#8b5cf6', insight: 'Moderate adoption' },
  { age: '65+', rate: 19.4, fill: '#a78bfa', insight: 'Lowest adoption' },
];

// Market projections ($ Billions) — updated March 2026
export const marketProjections = [
  { year: '2024', urgentCare: 34.34, telehealth: 74.8 },
  { year: '2025', urgentCare: 37.3, telehealth: 196.8 },
  { year: '2026', urgentCare: 44.3, telehealth: 219.0 },
  { year: '2028', urgentCare: 52.0, telehealth: 340.0 },
  { year: '2030', urgentCare: 60.0, telehealth: 520.0 },
];

// ============================================================
// STATE PAYMENT PARITY MAP
// ============================================================
export const stateParityData = {
  'Alabama': false, 'Alaska': false, 'Arizona': true, 'Arkansas': true,
  'California': true, 'Colorado': true, 'Connecticut': true, 'Delaware': true,
  'Florida': false, 'Georgia': true, 'Hawaii': true, 'Idaho': false,
  'Illinois': true, 'Indiana': false, 'Iowa': false, 'Kansas': false,
  'Kentucky': true, 'Louisiana': false, 'Maine': false, 'Maryland': true,
  'Massachusetts': true, 'Michigan': false, 'Minnesota': true, 'Mississippi': false,
  'Missouri': true, 'Montana': false, 'Nebraska': true, 'Nevada': true,
  'New Hampshire': true, 'New Jersey': true, 'New Mexico': true, 'New York': true,
  'North Carolina': false, 'North Dakota': false, 'Ohio': false, 'Oklahoma': true,
  'Oregon': true, 'Pennsylvania': false, 'Rhode Island': true, 'South Carolina': false,
  'South Dakota': false, 'Tennessee': false, 'Texas': false, 'Utah': true,
  'Vermont': true, 'Virginia': true, 'Washington': true, 'West Virginia': true,
  'Wisconsin': false, 'Wyoming': false
};

export const parityStates = Object.entries(stateParityData).filter(([_, v]) => v).map(([k]) => k);
export const noParityStates = Object.entries(stateParityData).filter(([_, v]) => !v).map(([k]) => k);
export const parityCount = parityStates.length; // 29 strict payment parity; 44 states + DC with broader telehealth reimbursement laws

// ============================================================
// AI VISIT DEFLECTION
// ============================================================
export const deflectionData = [
  { type: 'Low Acuity', volume: '35-40%', deflection: '30-40%', visits: '3-5', color: '#ef4444' },
  { type: 'Medium Acuity', volume: '40-45%', deflection: '10-15%', visits: '1-2', color: '#f59e0b' },
  { type: 'Higher Acuity', volume: '15-20%', deflection: '<5%', visits: '<1', color: '#10b981' },
];

export const deflectionStats = {
  totalDeflected: '4-8',        // visits/day from 30-patient clinic
  projectedRate2028: '15-25%',  // of low-acuity visits — NOTE: a single-source UCA 2026 playbook (Alan Ayers, citing Stanford/KFF) frames this as *current*, not 2028; both cited primary sources (KFF Mar 25 2026 poll, Stanford "State of Clinical AI" Jan 2026) checked directly this cycle and neither contains a matching figure — recommend dropping or hard-flagging as unverifiable, not applied (2026-07-27)
  currentRate: '3-8%',          // today
  genZMultiplier: '3x',         // more likely to use digital UC
  genZAIBeforeCare: '76%',      // Gen Z who turn to AI before seeking professional care (Aflac 2026; added 2026-08-10)
  millennialAIBeforeCare: '63%', // Millennials who turn to AI before seeking professional care (Aflac 2026; added 2026-08-10)
  volumeDeclineWithout: '-15-25%',  // without digital by 2028
  volumeGainWith: '+5-15%',         // with digital by 2028
};

// AI deflection supporting evidence — deployment scale, diagnostic-accuracy
// studies, and the countervailing trust signal (added 2026-07-20)
export const aiDeflectionEvidence = {
  careAgentPatients: '650,000+',    // Experity Care Agent — patients served by Feb 2026 (discharge docs, lab-result comms, SMS/RCS registration, web-chat triage)
  triageAccuracy: {
    nejmCriticalCareId: { before: '78.8%', after: '83.1%', study: 'NEJM AI, 174,648 ED visits' },
    xgboostSeverity: '94.7%',        // MDPI Diagnostics 2026, ML-based ER severity classification
    randomForestSeverity: '91.6%',   // chosen clinically for interpretability over XGBoost
    scopingReviewAUC: '0.88 (95% CI 0.85-0.91)', // 29-study pooled AUC
    waitTimeReduction: '18.7 min avg', // vs. conventional triage
    symptomAI: { patients: '13,917', setting: 'Fitbit app, Jun 2025-Apr 2026', aiAccuracy: '73%', physicianAccuracy: '60%', activeVsPassiveGain: '+27%', note: 'Largest real-world eval of conversational diagnostic AI to date; Google Research / TechTimes Jul 24, 2026; Medium confidence on 73%/60% framing until paper directly reviewed' }, // BT-17 (added 2026-08-03)
    infermedicaVsMTS: { patients: '18,000', complicationsBefore: '10.25%', complicationsAfter: '4.42%', satisfactionBefore: '7.0', satisfactionAfter: '9.0', mortalityOR: '0.39', study: 'Infermedica AI-supported triage vs Manchester Triage System, 2026; Medium confidence pending direct journal read', counterpoint: 'Mount Sinai (2026) published research identifying blind spots in AI medical triage' }, // added 2026-08-03
    o1ERTriage: { accuracy: '67%', vsPhysicians: ['55%', '50%'], study: 'Harvard/BIDMC, published Science, May 2026', note: 'Exact-or-close ER triage diagnosis rate vs two attending physicians; highest-profile peer-reviewed head-to-head AI vs physician result in 2026' }, // added 2026-08-10
  },
  trustDecline: {
    opennessThen: '52%', opennessNow: '42%',        // openness to AI in healthcare, since 2024
    efficiencyBeliefThen: '64%', efficiencyBeliefNow: '55%', // belief AI improves efficiency
    comfortTreatmentDecisions: '47%',
    comfortReassurance: '44%',
    behavioralGap: '34%',                            // of people have made a healthcare decision based on an AI answer despite low stated trust — behavior outpaces stated openness (42%); Healthcare IT News, 2026; added 2026-08-17
    source: 'Ohio State University Wexner Medical Center survey, reported Apr 7, 2026 (US News) — corrected 2026-07-27; previously mis-cited as "JMIR 2026"; a genuine JMIR 2026 paper exists but covers different content',
  },
  countersignal: 'Ohio State Wexner: 51% of Americans already used AI to make an important health decision without consulting a professional first; Wolters Kluwer: 70% believe AI improves health literacy, 42% bring AI-generated info to appointments; Jul 2026 update (Wolters Kluwer/Sprinklr): 57% now say trust decreases when a business relies mainly on AI (up from 47% Oct 2025), trend continues eroding — though Philips Future Health Index 2026 finds patients trust GenAI "almost as much" as their own doctor',
  safetyFlag: 'Nature Medicine (Feb 23, 2026): ChatGPT Health under-triages 51.6% of emergencies in the first independent safety evaluation since the Jan 7, 2026 launch. This is the most significant clinical safety data point for any consumer health AI in 2026 — reinforces the "clinical oversight required" position and complicates the deflection narrative. Complements (and qualifies) the 300M weekly query adoption signal. (https://www.nature.com/articles/s41591-026-04297-7; added 2026-08-24)',
  safetyFlag2: 'Nature Medicine (May 2026) structured stress test — 60 clinician-authored vignettes across 21 clinical domains, 16 factorial conditions, 960 total responses: 48% emergency undertriage (e.g., diabetic ketoacidosis routed to "see a doctor within 24-48 hours" instead of the ED); 35% non-urgent overtriage; inverted-U performance pattern with the worst failures at clinical extremes; suicide/crisis safety alerts fired inconsistently (triggered on lower-risk conversations, absent when users described specific self-harm plans). Second independent peer-reviewed safety study in three months confirming the Feb 2026 finding — same structural failure mode. (added 2026-08-31)',
};

// ============================================================
// BIG TECH TIMELINE
// ============================================================
export const bigTechTimeline = [
  { date: 'Jan 7, 2026', company: 'OpenAI', product: 'ChatGPT Health', color: '#10b981' },
  { date: 'Jan 8, 2026', company: 'OpenAI', product: 'OpenAI for Healthcare — Enterprise Suite (GPT-5.2, HIPAA)', color: '#10b981' },
  { date: 'Jan 11, 2026', company: 'Anthropic', product: 'Claude for Healthcare', color: '#f59e0b' },
  { date: 'Jan 21, 2026', company: 'Amazon', product: 'Health AI (One Medical)', color: '#0ea5e9' },
  { date: 'Mar 5, 2026', company: 'Microsoft', product: 'Dragon Copilot Goes Agentic — 100K+ Clinicians, 9 Countries', color: '#6366f1' },
  { date: 'Mar 10, 2026', company: 'Amazon', product: 'Health AI — All U.S. Customers', color: '#0ea5e9' },
  { date: 'Mar 12, 2026', company: 'Google', product: 'AMIE Real-World Debut — 100-Patient BIDMC Study, 0 Safety Stops, improved patient trust post-interaction (p<0.001); 90% correct dx in differential, 75% top-3 (Nature OSCE: matches/exceeds 21 PCPs on reasoning, trails on practicality); researchers caveat AMIE is not yet ready for independent clinical use; disease management Nature study (Jun 2026): 95% / 96% / 98% plan appropriateness (visits 1/2/3) vs 72% / 80% / 81% for PCPs — two-agent architecture (empathetic dialogue + deep-thinking management reasoning)', color: '#ef4444' },
  { date: 'Apr 22, 2026', company: 'OpenAI', product: 'ChatGPT for Clinicians — free for verified individual physicians, NPs, PAs, and pharmacists; separate from the enterprise suite. Completes OpenAI\'s three-tier healthcare stack: Consumer (ChatGPT Health, Jan 7) → Clinician (Apr 22) → Enterprise (ChatGPT for Healthcare, Jan 8, GPT-5.2, HIPAA) — volume-based network effects pursued across every healthcare segment simultaneously (OpenAI / iatrox.com; updated 2026-08-31)', color: '#10b981' },
  { date: 'May 2026', company: 'OpenAI', product: 'AdventHealth Utilization Management — 80% Admin-Time Reduction (700K+ Reviewed Examples)', color: '#10b981' },
  { date: 'May 20, 2026', company: 'Labcorp', product: 'MyLabcorp — Consumer App Explaining Lab Results in Plain Language (OpenAI-powered, 260+ MDs reviewed)', color: '#10b981' },
  { date: 'May 19, 2026', company: 'Google', product: 'Fitbit → Google Health + Gemini AI Health Coach ($9.99/mo, or bundled in AI Pro $19.99/mo)', color: '#ef4444' },
  { date: 'Jun 8, 2026', company: 'Apple', product: 'Health+ AI Coach scaled back — WWDC 2026 passed with no Health+ or AI health coach announcement. "Mulberry" project shelved as a unified service; Apple rolling out individual features within the existing Health app (nutrition tracking, scaled-down AI suggestions) rather than a standalone service; some features may arrive in iOS 26.4. Nothing Apple-confirmed; all third-party reporting. (Newsweek / Athletech / Sahha, Aug 2026)', color: '#a3a3a3' },
  { date: 'Jun 18, 2026', company: 'OpenAI', product: 'GPT-5.5 Instant health intelligence update — clinical-quality health reasoning (urgent care recognition, contextual questioning, uncertainty explanation) deployed to free tier; 230M+ weekly free-tier users now have access to clinical-grade AI health guidance (commoditization move: OpenAI removing the paywall from clinical-quality health advice)', color: '#10b981' },
  { date: 'Jul 9, 2026', company: 'Anthropic', product: "Claude Integrated into UST's CarePath (claims, care management, member services)", color: '#f59e0b' },
  { date: 'Jul 13, 2026', company: 'Anthropic', product: 'Optum (UnitedHealth Group) strategic partnership — Claude deployed across claims processing, revenue cycle management, and administrative workflows inside a $3B AI capitalization program (2026-2027). Largest Claude healthcare deployment announced to date. Also available via Microsoft Azure / Foundry; HIPAA BAA available to enterprise customers. (HIT Consultant)', color: '#f59e0b' },
  { date: 'Jul 22, 2026', company: 'OpenAI', product: 'First AI-Health-Advice Liability Lawsuit Filed (Winters v. OpenAI)', color: '#a3a3a3' },
  { date: 'Jul 23, 2026', company: 'OpenAI', product: 'ChatGPT Health — Full US Public Launch (18+); weekly health queries hit 300M; 70% of health queries still occur outside the dedicated Health hub', color: '#10b981' },
  { date: 'Jul 2026', company: 'Amazon', product: 'One Medical provider-facing AI suite (Bedrock + HealthScribe): ambient visit documentation, outside-records summarization, AI-drafted patient message responses, AI task routing to best-fit care team member', color: '#0ea5e9' },
  { date: '2026', company: 'Amazon', product: 'Agentic health AI assistant expanded to all One Medical members and all US consumers via Amazon.com / Amazon app — takes action (books appointments, reads labs, manages meds), accesses state HIE data and patient records before responding. The Amazon health front door is now an AI agent, not a provider.', color: '#0ea5e9' },
  { date: 'Aug 12, 2026', company: 'Google', product: 'AMIE Video — multimodal real-time video consultations powered by Gemini and Project Astra. In a 100-case controlled study (300 consultations with professional patient actors), AMIE Video received clinical evaluator ratings on par with PCPs across cardiopulmonary, abdominal, HEENT, neurological/psychiatric, and musculoskeletal scenarios — simultaneously analyzing voice, video, and visual behavioral cues (distress, breathing changes, movement difficulty). Research-only; no independent deployment cleared. (Google Research Blog, Aug 2026)', color: '#ef4444' },
  { date: 'Late Aug 2026', company: 'Anthropic', product: 'First published outcome benchmarks from Claude for Healthcare deployments: Elation Health (ambulatory EHR) 61% faster chart insights; Carta Healthcare (clinical data abstraction) 66% faster processing; Banner Health 85% of users report meaningful time savings. First hard ROI data since the Jan 11 launch — currently the highest-confidence published enterprise outcome benchmarks from any foundation model in healthcare. Anthropic also opened free / reduced-rate Claude access for scientists and researchers; Azure AI Foundry confirmed as an additional enterprise channel. (Anthropic / IntuitionLabs / TipRanks, Aug 2026; added 2026-08-31)', color: '#f59e0b' },
];

export const bigTechStats = {
  chatgptWeeklyUsers: '900M',        // WAU (confirmed Feb + Jun 2026)
  chatgptMonthlyUsers: '1B',         // MAU by June 2026
  chatgptWeeklyQueries: '300M+',     // up from 230M — ChatGPT Health went fully public Jul 23, 2026 to all US users 18+ (TechCrunch)
  chatgptOutsideHubShare: '70%',     // health queries that occur outside the dedicated Health hub (OpenAI, Jul 23, 2026)
  chatgptHealthConnectors: 'Epic, Oracle Health, One Medical, Function Health, Apple Health, MyFitnessPal', // medical-record connectors at full launch
  chatgptDailyPrompts: '40M+',       // not refreshed this cycle — potentially stale relative to the new 300M weekly-query figure (flag added 2026-07-27)
  chatgptHealthShare: '1 in 4',
  chatgptAfterHours: '7 in 10',
  chatgptInsuranceMsgs: '~1.5-2M',   // widened range per OpenAI/Healthcare Dive Jan 2026
  chatgptHospitalDesertMsgs: '580K+', // weekly healthcare messages from US "hospital deserts"
  chatgptEnterpriseCustomers: '8',   // AdventHealth, HCA, MSK, Stanford Children's, UCSF, Baylor, Boston Children's, Cedars-Sinai — no net-new since Jan
  chatgptCliniciansProduct: 'Apr 22, 2026', // ChatGPT for Clinicians, free for verified individual physicians/NPs/PAs/pharmacists — middle tier of the Consumer → Clinician → Enterprise stack (date confirmed 2026-08-31)
  adventHealthAdminSavings: '80%',   // AdventHealth (50+ hospitals) admin time savings on OpenAI for Healthcare (Forbes Jul 2026)
  bwellProviders: '2.2M',            // b.well EHR aggregation backbone for ChatGPT Health
  amazonPrimeMembers: '200M+',
  amazonVisitPrice: '$29',           // messaging-only pay-per-visit; $49 for video visit (One Medical "On-Demand Care," confirmed Jul 2026)
  amazonFreeConsults: '5',           // free Prime consults, 30+ conditions, valued up to $145
  amazonConsultValue: '$145',
  dragonCopilotClinicians: '100K+',  // clinicians daily, 9 countries, 58 languages (HIMSS Mar 2026)
  dragonCopilotCountries: 9,
  googleHealthPremium: '$9.99/mo',   // Gemini AI Health Coach, May 19 2026; also bundled into Google AI Pro ($19.99/mo) or Ultra
  googleDailyHealthQuestions: '1B',  // health questions/day across Google properties (ppc.land 2026)
  googleRctStatus: 'IRB-approved, enrolling', // Included Health nationwide RCT — upgraded from "announced" (Mar 17, 2026); no enrollment #s or results yet
  amieCaseAccuracy: '90%',           // AMIE cases with correct dx in differential (Google Research blog, Mar 2026)
  amieTop3Accuracy: '75%',           // AMIE top-3 diagnostic accuracy
  openaiLabcorpReview: '260+ MDs / 700K+ responses', // physician review program backing OpenAI x Labcorp lab-result interpretation (May 2026)
  epicAiAdoption: '85%',             // of Epic customers using AI (HIMSS 2026)
  epicArtMonthlyUses: '16M',         // Art documentation uses/month, ~3x growth
  aiUnderTriageRate: '52%',          // Mount Sinai study — emergency cases under-triaged
  aiTrustRate: '39%',                // Americans who trust AI chatbots for health decisions
  aiMonthlyUsage: '1 in 6',          // U.S. adults using AI chatbot monthly for health
  aiHealthAdoption: '32%',           // U.S. adults have used AI for health info/advice (KFF Mar 2026); West Health-Gallup: 1 in 4 (66M+), Apr 2026
};

// ============================================================
// GENERATIONAL / VOLUME IMPACT
// ============================================================
export const genVolumeImpact = [
  { factor: 'Digital scheduling', impact: '+25-35%', audience: 'Under 40' },
  { factor: 'Telehealth option', impact: '+15-20%', audience: 'Gen Z/Millennials' },
  { factor: 'Price transparency', impact: '+20-30%', audience: 'Digital search' },
  { factor: 'Strong reviews (4.5+)', impact: '+40-50%', audience: 'Gen Z' },
];

// ============================================================
// OPERATIONS
// ============================================================
export const operationsData = {
  virtualUCMinutes: 9.38,
  inPersonUCMinutes: 70.89,
  timeSavingsFactor: '~7.5x',
  satisfaction: '94-99%',
  avgTelehealthCost: '$32',
  inPersonCostRange: '$75-150',
  telehealthBestFor: [
    'Follow-up Care (EPV > NPV)',
    'Low-Acuity Conditions (UTIs, allergies, acne)',
    'Prescription Refills ($15-39/visit)',
    'Chronic Disease Management',
  ],
};

// ============================================================
// DEMOGRAPHICS / PATIENT INSIGHTS
// ============================================================
export const demographicStats = {
  millennialTelehealthRate: '68%',  // have used telehealth (2026 survey; replaces old 30% "most recent visit was virtual" metric)
  boomerTelehealthRate: '48%',      // updated 2026-07-27: Rock Health past-12-months virtual-care usage (was 38%); the persistent "76% of 55+" market.us figure is a lifetime "ever used" metric, not past-year usage — different methodology, not a true contradiction
  genZTelehealthRate: '60%',        // added 2026-07-27: Rock Health past-12-months virtual-care usage — distinct from the 3x "digital-first" preference stat below
  boomerSubstitution: '74%',        // strong substitution when adopted; prefer phone and relationships
  genZDigitalUCMultiplier: '3x',    // more likely to choose digital-first urgent care
  genZAIFirstCare: '76%',           // turn to AI before seeking professional care (Aflac 2026; added 2026-08-10)
  millennialsAIFirstCare: '63%',    // turn to AI before seeking professional care (Aflac 2026; added 2026-08-10)
  genZMillennialUCVisitShare: '51%+', // of all urgent care visits despite being only 43% of US population (Charta Health / HCCI 2026; added 2026-08-10)
  genZUCERShare: '62%',               // Gen Z seeking care from ER or urgent care (up from 51% one year prior, Aflac 2026; also in genZCostBehavior.seeksCareFromUCOrER; added 2026-08-24)
  genZPreferPCPOverUC: '47%',         // only 47% of Gen Z say they prefer a primary care doctor over urgent care or other options, vs. >90% of Boomers — explicit support for the UC-as-front-door thesis (Healthgrades / JUCM 2026; added 2026-08-31)
  genZRoutineCheckupDelay: '65%',     // Gen Z who delay or skip routine checkups/screenings — reasons: feeling healthy, scheduling difficulty, long waits, cost; distinct from the 25% cost-specific delay stat in genZCostBehavior (Pragmatic Coders / Healthgrades 2026; added 2026-08-31)
  genZMenNoPCP: '39%',                // Gen Z men without a primary care provider — more severe than the 25%+ overall Gen Z no-PCP figure (Healthgrades 2026; added 2026-08-31)
};

// Generational cards for the Demographics section (data-driven since Jul 2026;
// accent must be one of: sky, indigo, emerald — mapped to classes in the JSX)
export const generationalCards = [
  {
    generation: 'Millennials',
    stat: '68%',
    statLabel: 'have used telehealth',
    accent: 'sky',
    note: 'Highest adoption of any generation. Expect digital-first experiences: online booking, price transparency, text-first communication.',
  },
  {
    generation: 'Gen Z',
    stat: '3x',
    statLabel: 'more likely to choose digital-first urgent care',
    accent: 'indigo',
    note: 'Strong reviews (4.5+) drive +40-50% visit lift. Booking UX and reputation decide where they go. (60% used virtual care in the past year, per Rock Health.)',
  },
  {
    generation: 'Baby Boomers',
    stat: '48%',
    statLabel: 'have used telehealth',
    accent: 'emerald',
    note: 'Strong substitution when adopted (74%). Prefer phone and relationships — keep human escalation paths visible. (Updated 2026-07-27 to Rock Health\'s past-12-months figure; resolves earlier ambiguity vs. market.us\'s 76% lifetime "ever used" metric.)',
  },
];

export const patientInsights = {
  weeklyHealthQueries: '300M+',     // OpenAI figure, up from 230M — ChatGPT Health went fully public Jul 23, 2026
  healthUserShare: '1 in 4',
  dailyPrompts: '40M+',
  afterHoursRate: '70%',
  delayedCare: '52%',               // of U.S. adults delayed/skipped care in past 12 months
  delayedDueToCost: '38%',          // 41% increase from 2023
};

// ============================================================
// CONSUMER COST SENSITIVITY
// ============================================================
export const consumerCostData = {
  healthcareInCrisis: '70%',        // major problems or worse (Gallup 2026)
  stateOfCrisis: '23%',             // record high saying system is in "state of crisis" (Gallup 2026)
  cantAffordCare: '51%',            // could not consistently afford healthcare in 2025 — 5-yr high (West Health-Gallup)
  costSecure: '49%',                // "Cost Secure" — down from 61% peak 2022, 5-yr low; Healthcare Affordability Index three-way split (2025 data, published 2026)
  costInsecure: '41%',              // "Cost Insecure" (Healthcare Affordability Index 2025/2026)
  costDesperate: '10%',             // "Cost Desperate" (Healthcare Affordability Index 2025/2026; added 2026-08-03)
  hospitalCostsSerious: '87%',
  genZDelayedCost: '38%',           // updated: all Americans delayed due to cost (up from 27% in 2023)
  millennialsCanceledCost: '74%',
  millennialsOutOfPocket: '38%',    // now pay out-of-pocket for healthcare (PYMNTS 2026)
  worriedAboutAffordability: '47%', // record high, Gallup/West Health Mar 2026
  costStressDoubled: '15%',         // up from 8% in 2022
  longWaitTimesBarrier: '55%',      // say long appointment wait times prevented/delayed care in past year
  workScheduleBarrier: '27%',       // cite work-schedule conflicts as an access barrier
  topDomesticWorry: true,           // added 2026-07-27: healthcare displaced the economy as Americans' #1 domestic worry (Gallup)
  cutBackExpenses: '33%',           // of Americans cut back on everyday expenses to cover healthcare costs (Gallup 2026; added 2026-08-24)
  worriedGreatDeal: '61%',          // worry about healthcare costs "a great deal" (Gallup 2026)
  costSecureByRace: { black: '38%', hispanic: '32%', white: '55%' }, // share who are "Cost Secure," by race (Gallup/West Health 2026)
  costSecureDroppedPastYear: '2.8M', // Americans who dropped out of the "Cost Secure" category in the past year
  boomersCanceledCost: '13%',       // canceled an appointment due to cost, vs. 74% of Millennials (comparator); Gen Z 56% (added 2026-08-03)
  millennialsExtraTimeOffWork: '30%', // Millennials who needed extra time off work after delaying care (vs. 3% Boomers) — productivity-cost angle (added 2026-08-03)
  boomersExtraTimeOffWork: '3%',
  outOfPocketShareOverall: '30%',   // out-of-pocket payment required at 30% of visits overall; 38% Millennials, 42% zillennials, 35% Gen Z (PYMNTS 2026; added 2026-08-03)
};

// Gen Z cost-driven behavior — added 2026-07-20 (HealthEquity/PYMNTS, CNN)
export const genZCostBehavior = {
  delayedVisitCost: '25%',          // delayed a visit in last 3 months due to cost (confirms CB-3)
  budgetStress: '8 in 10',          // report at least moderate budget stress from medical costs, ~2x Boomers
  changedBehaviorCost: '63%',       // changed behavior due to cost
  insuredAtLastVisit: '70%',        // vs. 86% of Boomers/seniors
  noPCPDefaultToUrgentCare: 'over 25%', // Gen Z with no primary care doctor, defaulting to urgent care (CNN, Jul 14 2026)
  skippedTreatmentCost: '22%',      // added 2026-07-27: Gen Z who skipped a recommended treatment/test due to cost
  annualWellnessVisitRate: '47%',   // added 2026-07-27: share of 18-29s who had an annual wellness visit in the past year
  canceledAppointmentHighCost: '56%', // Gen Z who canceled an appointment after a too-high cost estimate — completes generational comparison (Millennials 74% / Gen Z 56% / Boomers 13%; added 2026-08-03)
  seeksCareFromUCOrER: '62%',         // Gen Z seeking care from ER or urgent care (up from 51% one year prior) — Aflac 2026; added 2026-08-17
};

// AI-satisfaction as its own trackable metric — added 2026-07-20 (multi-country scoping review)
export const aiSatisfaction = {
  generalSatisfaction: '70%+',
  voiceAIComfort: '72%',            // comfortable with voice AI for refills/scheduling
  infoUseful: '90%',                // found AI-provided info useful
  recognizeBenefits: '75%+',        // recognize AI benefits when clearly explained
  madeExperienceWorse: '18%',       // added 2026-07-27: say AI made their healthcare experience "worse," down from 27% in 2025 — trend improving
  intendToContinue: '94.12%',       // gen-AI health-assistant users who intend to keep using them
  wouldActOnAiInfo: '55%',          // would consider requesting a test/treatment based on AI-sourced info, vs. 48% for social media
};

// ============================================================
// REIMBURSEMENT / GEOGRAPHY
// ============================================================
export const reimbursementData = {
  parityStateCount: 44,             // 44 states + DC have private payer telehealth laws (CHG Healthcare Feb 2026)
  parityTrend: 'strict parity counts diverge: 23 full + 5 with caveats (Manatt Nov 2025) or 24 + PR (CCHP); 44 states + DC + PR + USVI with broader telehealth reimbursement laws (CCHP May 2026); Maryland private-payer law made permanent — repeal date removed (added 2026-08-03)',
  newLegislation2026: 'TX HB 1052 enacted (eff. Jan 1, 2026) — parity for telemedicine/teledentistry to/from out-of-state sites; NY S354 (parity expansion) passed one chamber, not yet enacted; NJ parity extended through Dec 31, 2027 via S-3947/A-4357 (signed Jun 30, 2026, fixing the prior Jul 1, 2026 sunset); NY base parity law (distinct from pending S354) separately extended through Apr 1, 2028 via A10007; Maryland made its private-payer telehealth coverage law PERMANENT (removed scheduled repeal date, CCHP May 2026; added 2026-08-03); Alaska HB 14 PASSED BOTH CHAMBERS, pending Governor signature — requires insurers to reimburse telehealth at same rate as in-person, including behavioral health; geographic pay differential allowed for out-of-state providers (updated 2026-08-24); New Mexico broadened Telehealth Act with expanded eligible provider types (2026)',
  avgReimbursement: '$20',          // less than in-person
  medicareExtended: 'Dec 31, 2027', // VERIFIED: enacted via H.R. 7148 (Consolidated Appropriations Act of 2026), signed Feb 3, 2026
  deaPrescribingExtended: 'Dec 31, 2026', // DEA 4th extension: Schedule II-V telemedicine prescribing, no prior in-person exam
  deaCliffRisk: 'Extension expires Dec 31, 2026 — if Special Registration final rule is not finalized before then, telehealth platforms prescribing Schedule II-V controlled substances face an immediate regulatory cliff Jan 1, 2027; Trump administration intent to finalize rule unclear (Holland & Knight, Jan 2026)',
};

export const geographyProjections = {
  urgentCare2030: '$60B',
  telehealth2030: '$520B',         // revised upward with accelerated growth
  telehealthBy2035: '$1.37T',
};

// ============================================================
// STRATEGIC ALERT (sidebar)
// ============================================================
export const strategicAlert = {
  text: 'ChatGPT Health went fully public Jul 23, 2026 to all US adults; first AI-health-advice liability lawsuit (Winters v. OpenAI) filed one day prior.',
  highlight: '300M+',
  suffix: 'weekly ChatGPT health queries, up from 230M.',
};

// ============================================================
// NEW DATA — MARCH 2026 RESEARCH UPDATE
// ============================================================
export const tefcaStats = {
  recordsExchanged: '1.5B+',          // updated Aug 24, 2026: 1.5 billion+ documents shared since Dec 2023 go-live (Sequoia Project Aug 17, 2026); trajectory: ~10M (Jan 2025) → ~500M (Feb 2026) → 1B+ (Jun 26, 2026) → 1.5B+ (Aug 2026); 2025 full-year volume 464,291,021
  organizations: '23,000+',          // updated Aug 24, 2026: Sequoia Project official announcement Aug 17, 2026 — up from 14,214; prior conflicting methodology notes superseded by official RCE figure
  connections: '100,000+',
  qhins: 11,                         // Oracle Health Information Network designated 11th QHIN Nov 2025
  documentsShared: '1.5 billion+',   // updated Aug 24, 2026: cumulative documents shared since Dec 2023 go-live; up from 1.2B+ (Sequoia Project Aug 17, 2026)
  bhitPilots: 9,                     // behavioral health IT pilots
  bhitInvestment: '$20M+',
  ssaJoined: true,                   // Social Security Administration
  ssaExchangePurpose: 'Government benefits determination', // new exchange purpose added spring 2026
  sopUpdate: 'Treatment XP + IAS XP Implementation v3.0 — NOW LIVE as of August 3, 2026 (confirmed this cycle). AHA raised formal privacy objections (Jul 2, 2026); Sequoia RCE proceeded on schedule while retaining provider-verification safeguards. SSA integration via eHealth Exchange QHIN confirmed: 50%+ reduction in disability claims processing time reported. TEFCA connectivity now characterized as "default expectation" not experimental.',
  ssaProcessingImprovement: '50%+',  // reduction in disability claims processing time (SSA via eHealth Exchange QHIN, confirmed Aug 2026; added 2026-08-10)
  sequoiaFundingIncrease: '15%+',   // ONC awarded Sequoia Project a 15%+ funding increase on Aug 17, 2026 — signals multi-year federal commitment to TEFCA infrastructure; strengthens VCN thesis (Sequoia Project official announcement Aug 17, 2026)
};

export const fdaAiUpdates = {
  enforcementDiscretion: true,       // expanded Jan 6, 2026
  wellnessWearablesExempt: true,     // BP, SpO2, glucose monitors
  newFrameworkInDev: true,           // Commissioner announced
  approvedAiDevices: '1,524',        // re-verified 2026-07-27: 1,451 (end of 2025) → 1,524 (late Mar 2026), per IntuitionLabs FDA AI Device Tracker
  cdsMultipleOptionsRelaxed: true,   // FDA relaxed Clinical Decision Support "multiple options" requirement
  tempoPilot: 'CMS-partnered, Dec 2025 — early patient access to FDA-authorized digital chronic-disease devices; Dexcom confirmed as first participant; CMS companion ACCESS model first cohort launched Jul 2026',
};

// FAIR Health telehealth utilization tracker (quarterly feed — added Jul 2026)
export const telehealthUtilization = {
  claimLinesShare: '5.51%',          // of medical claim lines, Q1 2026 (up from 5.01% Q4 2025, +10.1% QoQ)
  patientsWithClaim: '18.4%',        // patients with ≥1 telehealth claim (up from 17.3%)
  mentalHealthDiagnosisShare: '52.1%', // of telehealth patients received a mental health diagnosis, #1 category in every age group/region
  urbanPatients: '18.6%',
  ruralPatients: '10.3%',
  ruralGrowthQoQ: '+7.8%',           // rural growth outpaced urban Q4 2025 → Q1 2026
  urbanGrowthQoQ: '+6.2%',
  northeastGrowthQoQ: '+7.3%',       // largest regional increase
  hybridCarePreference: { patients: '82%', providers: '83%' }, // prefer hybrid virtual + in-person model
  physicianTelehealthWeekly2024: '71.4%',   // physicians using telehealth weekly in 2024 — supply-side adoption metric (AHA Market Scan / Axis Intelligence; added 2026-08-31)
  physicianTelehealthPrePandemic: '25.1%',  // pre-pandemic baseline — nearly 3x increase; telehealth is now a normalized delivery modality, not an exception (added 2026-08-31)
  q2_2026Status: 'FAIR Health Q2 2026 quarterly data not yet published as of Aug 31, 2026 — expected ~Sep 2026',
  source: 'FAIR Health Quarterly Telehealth Regional Tracker, Jul 2026',
};

export const hospitalAtHome = {
  approvedHospitals: 366,
  states: 37,
  waiverExtension: '2030',           // 5-year extension
};

export const retailHealthRetreat = {
  cvsClosingLocations: true,         // Southern CA + New England MinuteClinics
  walgreensClosing: '1,200 total closures planned (500+ completed by early 2026, additional 600+ in 2026) — cumulative vs. annual counts conflict across sources; reconcile against Walgreens investor materials before citing a single-year figure (Medium confidence; updated 2026-08-17; prior entry "<100 in 2026" referred to Sycamore-era 2026-specific closures after 500+ already completed)',
  walmartExited: true,
  cvsPivot: 'MinuteClinic Primary Care live in CT (in addition to TX/GA), now at 60%+ of CVS locations',
  cvsAetnaInNetwork: 'In-network Aetna primary care via MinuteClinic — Houston, San Antonio, Greater Atlanta (2026)',
  cvsVirtualGLP1Visit: '$49',        // virtual GLP-1 visit; GLP-1 support scaled to 9,000+ CVS Pharmacy locations
  cvsMedicareGlp1Bridge: '$50/month', // Medicare GLP-1 Bridge Program began Jul 1, 2026 (through Dec 2027)
  cvsMinuteClinicVirtualWeightMgmt: '$49 self-pay, 47 states + DC, ages 18-64', // new MinuteClinic virtual weight-management program (Jun-Jul 2026; added 2026-08-03)
  cvsFootprint: '~9,000 retail pharmacies + 1,000+ walk-in/primary care clinics (as of Mar 31, 2026)',
  cvsNetNewStores2026: '60 net new stores planned (20 small-format pharmacy-only + 40+ traditional/Target-based) — expanding after 4 consecutive years of contraction (PYMNTS / Consumer Affairs, 2026)',
  oakStreetCenters: '~300 centers across 27 states (expanded from ~170 at acquisition; CVS Health 2026)',
  walgreensVillageMDClosures: '160 VillageMD location closures noted (Walgreens holds 53% of VillageMD; clinic-level metric, distinct from store closures)',
};

// Urgent care M&A / consolidation trend — added 2026-07-20 (Auxo Capital Advisors, UCA)
export const urgentCareMA = {
  dealsAnnounced2021: 44,
  dealsAnnounced2025: 29,            // consolidation cooling from 2021 peak
  valuationMultiples: '9-13x EBITDA (down from 13-16x peak; Scope Research 2026) — updated 2026-08-10 from prior 3x-6x/11x-15x+ range',
  activeAcquirers: 'PE-backed platforms (CityMD/Warburg Pincus, GoHealth/TPG, FastMed/ABRY); strategics (Optum MedExpress, HCA CareNow, Select Medical Concentra); hospital systems buying centers as outpatient-access hubs',
  recentDeals: 'ExperCare Urgent Care (PE-backed) acquired After Hours Clinic in Northern Alabama (April 2026); health systems prioritizing UC as "front door" for patient entry and lower-cost ED alternative', // added 2026-08-10
};

// Digital health funding — new baseline, added 2026-07-27
export const digitalHealthFunding = {
  // H1 2026 — Rock Health "Durable roots, shifting routes" (Jul 2026) — primary source
  h1_2026Total: '$7.4B',
  h1_2026Deals: 244,
  h1_2026VsPriorYear: '$6.4B H1 2025',
  q1_2026_rockhealth: '$4.2B',
  q2_2026_rockhealth: '$3.2B',
  medianDealSize2026: '$14M',       // up from $12M in 2025; post-2022 high
  megadeals100M_h1: 20,             // 19 companies raised 20 megadeals ($100M+) = 45% of all H1 capital
  megadealsCapitalShare_h1: '45%',
  topRounds_h1: 'Whoop $575M, Verily $300M, OpenEvidence $250M, Talkiatry $210M, eMed $200M, Forus $160M, Aidoc $150M, Grow Therapy $150M',
  // Q1 2026 — alternative source (methodology differs from Rock Health's Q1 $4.2B; keep both labeled)
  q1_2026Total: '$5.34B',
  q1_2026Deals: 105,
  mentalHealthShare: '$1.27B',
  mentalHealthDeals: 14,
  megaRounds100M: 5,                // companies that raised $100M+ in Q1 2026, vs. zero in 2024 or 2025
  signal: 'H1 2026: AI reshaping investor expectations; 19 companies raised 20 megadeals capturing 45% of all capital. Capital-markets reopening for digital health after a multi-year drought.',
  // M&A activity (separate from VC — added 2026-08-10)
  h1_2026_maAcquisitions: 115,        // corporate acquisitions H1 2026 — busiest strategic consolidation in years (Rock Health)
  q2_2026_maAcquisitions: 71,         // Q2 alone — busiest single M&A quarter since bull market peak late 2021
};

export const mentalHealthTelehealth = {
  remoteShare: '52%',               // of mental health visits now remote
  springHealthAlmaValuation: '$6-7B',
  springHealthAlmaRevenue: '$1B',
};

// ============================================================
// ON-DEMAND CARE ECONOMY (ODC-1..3 in tracker)
// Five blocks: GLP-1/metabolic, virtual PCP, wellness/longevity,
// at-home diagnostics, pharmacy test-to-treat. Updated by weekly
// research → apply pipeline. posture: 'Threat' | 'Opportunity' | 'Mixed'
// ============================================================
export const onDemandCare = {
  asOf: 'August 2026',
  blocks: [
    {
      title: 'GLP-1 & Metabolic Care',
      posture: 'Opportunity',
      color: '#10b981',
      stats: [
        { label: 'US adults on a GLP-1', value: '1 in 8' },
        { label: 'Wegovy cash price (NovoCare)', value: '$349/mo' },
        { label: 'Compounded sema shipments YoY', value: '-90%' },
        { label: 'GLP-1 telehealth platform market (2026)', value: '$763.8M' },
      ],
      developments: [
        { date: 'Jun 2, 2026', headline: 'Hims & Hers completes Eucalyptus acquisition ($1.15B; announced Feb 19). Adds 775K customers, ~$450M annualized revenue, and international presence (Australia/UK/NZ) — first consumer telehealth platform with genuine international scale; now self-described as "world\'s largest consumer health platform." Combined 2026 guidance $2.8-3.0B excludes Eucalyptus; long-term 2030 targets $6.5B revenue / $1.3B Adj. EBITDA signal a platform play, not a GLP-1 thesis. Offers brand-name GLP-1s via Novo partnership plus compounded semaglutide only where clinically appropriate (SEC 8-K, investors.hims.com; added 2026-08-31)' },
        { date: 'Apr 30, 2026', headline: 'FDA permanently excludes tirzepatide, semaglutide, and liraglutide from the 503B Bulk Drug Substances List — compounding pathway closed for these molecules; smaller 503A pharmacies (e.g., Trimi at $125/mo) still operate' },
        { date: '2025-26', headline: 'Hims & Hers FY2025: $2.35B revenue (up from $1.5B in 2024), 2026 revenue guidance raised to $2.8-3.0B (19-28% growth; raised from initial $2.7-2.9B), 2.5M subscribers (+282K YoY); pivoted to branded-drug dispensing, compounded product only when clinically necessary' },
        { date: 'Jul 2026', headline: 'Medicare GLP-1 Bridge live July 1 — $50/30-day copay for Wegovy/Zepbound through Dec 2027' },
        { date: 'Mar 2026', headline: 'Hims & Hers-Novo Nordisk partnership: branded Wegovy pills/injections + Ozempic on-platform, oral Wegovy from $149/mo; orforglipron (oral GLP-1) PDUFA Apr 10, 2026, expected ~$149/mo via LillyDirect' },
        { date: '2026', headline: 'Direct pricing settled: LillyDirect Zepbound vials $299-449; NovoCare Wegovy $349/mo cash-pay ($149/mo oral promo); Walmart is first retail pickup for LillyDirect' },
        { date: '2026', headline: 'New market baseline (Evolvance/TrimRx, added 2026-07-27): global GLP-1 drug market $68.65B (2026) → $195.01B (2035, 12.3% CAGR), US holds 62.8% of global revenue share; ~2.8M patients enrolled across Hims & Hers/Ro/Amazon Clinic telehealth GLP-1 programs (Q1 2026); GLP-1 telehealth delivery channel specifically: $763.8M (2026) → $3.28B by 2036 (15.7% CAGR, Fact.MR) — added 2026-08-10' },
        { date: 'Q1 2026', headline: 'Hims & Hers posts $92M net loss as it transitions from compounded to branded FDA-approved GLP-1s; initial guidance $2.7-2.9B for 2026 subsequently raised to $2.8-3.0B (Fierce Healthcare Q1 2026 earnings); Ro launches aggressive price cuts (prepay annual = up to 50% discount, ~$900/yr savings) — GLP-1 telehealth market entering competitive shakeout (added 2026-08-10; guidance updated 2026-08-24)' },
        { date: 'Feb-Jul 2026', headline: 'Hims & Hers referred to DOJ by HHS General Counsel (Feb 6, 2026); FDA warning letters over compounded GLP-1 marketing; Hims and Ro exited compounded GLP-1s (Mar 2026) and now sell only FDA-approved branded products (Wegovy, Zepbound, oral GLP-1s) — the defining 2026 on-demand-care storyline; pending FDA peptide vote could open the next cash-pay telehealth category (Fortune, Jul 20, 2026)' },
      ],
      strategicNote: 'Build a cash-pay metabolic visit line. Urgent care owns the in-person wrapper telehealth can’t provide: eligibility workup, injection teaching, GI side-effect management — and the walk-in catch for adverse events.',
    },
    {
      title: 'Virtual & Hybrid Primary Care',
      posture: 'Threat',
      color: '#0ea5e9',
      stats: [
        { label: 'One Medical w/ Prime', value: '$99/yr' },
        { label: 'Large employers with virtual PCP', value: '45%' },
        { label: 'Direct primary care practices', value: '2,700+' },
      ],
      developments: [
        { date: '2026', headline: 'Amazon One Medical: $29 messaging / $49 video pay-per-visit, now extended to pediatrics (ages 2-11)' },
        { date: '2026', headline: 'Retail retreat continues: CVS closing 16 Oak Street centers, Walgreens exiting primary care — but Costco+Sesame counter with $29 virtual visits' },
        { date: '2025-26', headline: 'DTC-vs-legacy divergence: Hims & Hers FY2025 revenue ~$2.3B (+59%) vs Teladoc $2.5B (-1.5%, ~$200M net loss); Transcarent closed ~$621M Accolade acquisition' },
        { date: '2026', headline: '73% of large employers advancing "starts-online" primary care plan designs' },
        { date: '2026', headline: 'One Medical family pricing detail (added 2026-07-27): $66/yr per additional Prime family member, up to 5' },
      ],
      strategicNote: 'The virtual front door is resetting patient flow. Position urgent care as the escalation layer: referral partnerships, e-consult catch, and same-day physical care the virtual layer can’t deliver.',
    },
    {
      title: 'Cash-Pay Wellness & Longevity',
      posture: 'Opportunity',
      color: '#8b5cf6',
      stats: [
        { label: 'IV hydration market (2025)', value: '$2.9B' },
        { label: 'Function Health valuation', value: '$2.5B' },
        { label: 'US med spas', value: '11,500+' },
      ],
      developments: [
        { date: 'Jul 2026', headline: 'FDA advisory committee reviews 7 peptides (BPC-157, TB-500, MOTS-C) July 23-24 — regulatory gray zone unresolved' },
        { date: 'Nov 2025', headline: 'Function Health: $298M Series B at $2.5B; acquired Ezra and cut full-body MRI base scan to $499' },
        { date: '2025', headline: 'Prenuvo: 110K+ members, ~$100M revenue, profitable; longevity lab memberships (Superpower, Lifeforce) scaling' },
        { date: 'Feb 2025', headline: 'FDA removed testosterone CV warnings — TRT/HRT telehealth tailwind (Hone Health $33M Series A)' },
        { date: 'Jan-2026', headline: 'Function Health cut price from $499 to $365/yr; Superpower $199/yr (HSA/FSA-eligible); Function filed federal lawsuit vs Superpower (Jan 2026) alleging its "100+ tests" claim covers only ~55 measured assays — litigation signals category maturity (added 2026-08-03)' },
      ],
      strategicNote: 'High-margin, insurance-light, membership-friendly services that fit walk-in real estate and clinical staffing — the clearest "own the ancillary" play. Stay out of the peptide gray zone until FDA resolves it.',
    },
    {
      title: 'At-Home Diagnostics & Wearables',
      posture: 'Mixed',
      color: '#f59e0b',
      stats: [
        { label: 'Dexcom Stelo OTC CGM', value: '$99/mo' },
        { label: 'DTC lab-testing market (2025)', value: '$3.8B' },
        { label: 'OTC CGM market (2026, GM Insights)', value: '$613M' },
        { label: 'Apple BP alerts', value: 'FDA-cleared' },
      ],
      developments: [
        { date: '2026', headline: 'OTC CGM market quantified: $613M in 2026 → $2.5B by 2035 (17.1% CAGR, GM Insights). NOTE: differs from the ~$1.68B 2026 figure below — different research-firm methodology; label the source when citing either. Segment now has several OTC competitors beyond Lingo/Stelo with sharply lower prices and richer app ecosystems; Eversense 365 (1-year implantable sensor) extends the category past the standard 14-15 day OTC devices; top non-diabetic use cases: glucose response to food, exercise, sleep, stress (Medium confidence — secondary research firm; added 2026-08-31)' },
        { date: 'Sep 2025', headline: 'Apple Watch Series 11: FDA-cleared hypertension notifications + sleep apnea detection now live across Series 9/10/11 and Ultra' },
        { date: '2026', headline: 'OTC CGM market ~$1.68B projected 2026: Stelo $99/mo (only OTC CGM with provider data-sharing), Abbott Lingo $89/mo — shifting from wellness buyers toward prediabetes/Type 2 users' },
        { date: '2026', headline: 'DTC lab testing headed from $3.8B to ~$8.2B by 2034; Everlywell, QuestDirect, Labcorp OnDemand lead' },
      ],
      strategicNote: 'Patients increasingly arrive pre-flagged by a device or a home test. Build device-alert follow-up visits (BP trend, apnea flag, CGM anomaly) into the intake funnel — it converts consumer diagnostics into clinic volume.',
    },
    {
      title: 'Pharmacy Test-to-Treat',
      posture: 'Threat',
      color: '#f43f5e',
      stats: [
        { label: 'States w/ prescribe-on-result', value: '30 + DC' },
        { label: 'Cost vs urgent care per episode', value: '-$122' },
        { label: 'Would try pharmacy first', value: '58%' },
      ],
      developments: [
        { date: 'Jul 2025', headline: '42 states + DC allow pharmacist point-of-care testing (flu, strep, UTI, COVID, RSV); 30 + DC allow prescribing on the result' },
        { date: '2025-26', headline: 'CVS MinuteClinic test-to-treat $59-129 self-pay (~40% below urgent care); Walgreens from ~$45' },
        { date: '2026', headline: 'Counter-signal: CVS/Walgreens/Rite Aid closing thousands of stores + pharmacist staffing shortage caps deflection capacity' },
        { date: 'Apr-Jun 2026', headline: 'CORRECTED: Arizona ENACTED bipartisan Test and Treat law (signed by Gov. Hobbs Jun 23, 2026) — pharmacists may test and treat flu, strep, COVID-19, similar illnesses, and emerging public health threats, and prescribe HIV prevention medication; PCP notification required within 72 hours (scope detail added 2026-08-31). Tennessee\'s bill was stopped/defeated this session; Washington State bill also defeated (AMA State Advocacy Update, Apr 24, 2026); Pennsylvania still pending. JUCM 2026 frames 20+ "direct open market" states.' },
      ],
      strategicNote: 'The low-acuity core (flu, strep, UTI) is structurally exposed — but pharmacy capacity is shrinking. Defend acute/after-hours, and become the referral catch for what pharmacists can’t close: higher acuity, imaging, procedures.',
    },
  ],
  takeaways: [
    'Pharmacy test-to-treat is the nearest-term deflection threat, but it’s self-limiting: authority is expanding while the store footprint and pharmacist workforce shrink. Defend the acute/after-hours niche and catch the escalations.',
    'GLP-1s are a net ancillary-revenue opportunity, not just a threat. Telehealth prescribers are margin-squeezed on branded fulfillment; urgent care’s in-person wrapper (eligibility, injection teaching, side-effect management) is the differentiated piece. The Medicare GLP-1 Bridge (July 2026) expands the insured funnel.',
    'The cash-pay wellness/longevity stack (IV hydration, TRT/HRT, CGM/lab follow-up) is the clearest high-margin, insurance-light growth vector that fits urgent care real estate — with peptides as the one regulatory landmine to avoid.',
    'Virtual-first PCP and FDA-cleared wearable alerts reset the front door. More arrivals will be pre-triaged or device-flagged — integrate with the virtual funnel as its physical escalation layer instead of fighting it.',
  ],
};

// ============================================================
// AMBULATORY EMR COMPETITIVE LANDSCAPE (EMR-1..3 in tracker)
// Updated by weekly research → apply pipeline. Keep ≤4 updates per vendor.
// ============================================================
export const emrCompetitive = {
  asOf: 'August 31, 2026',
  vendors: [
    {
      name: 'Epic',
      segment: 'Enterprise + independent groups (Garden Plot, 40+ providers)',
      marketShare: '~19.5% ambulatory · Best in KLAS 75+ MDs (tie)',
      color: '#ef4444',
      updates: [
        { date: 'Aug 19, 2026 (UGM)', headline: '"Ergo" unveiled — Epic\'s new healthcare intelligence system providing evidence-based, plain-language answers to patient medical questions. Directly competitive with ChatGPT Health on patient-facing AI; EHR-grounded answers vs. general AI differentiate from OpenAI. STAT notes Epic faces succession planning questions and antitrust scrutiny alongside AI push (STAT News / Capital Times, Aug 19, 2026; added 2026-08-24)' },
        { date: 'Aug 19, 2026 (UGM)', headline: 'Outbreak Alerts — monitors county/state-level diagnosis rates across thousands of ICD-10 codes, filters seasonal baseline before surfacing to clinicians. High relevance for UC demand forecasting and infection control signaling (Modern Healthcare, Aug 19, 2026; added 2026-08-24)' },
        { date: 'Aug 19, 2026 (UGM)', headline: 'Real-Time Prior Authorization — clinicians immediately see insurer prior auth requirements before starting treatment, letting approval begin sooner. Material for UC throughput and billing efficiency; described as a competitive moat play (Modern Healthcare, Aug 19, 2026; added 2026-08-24)' },
        { date: 'Aug 19, 2026 (UGM)', headline: 'Penny (revenue cycle AI) at 200+ organizations: reducing coding-related denials by 20%; creating medical necessity denial appeals 23% faster; Agent Factory at 120 out-of-box AI features — but broader Agent Factory availability is set for 2027, not 2026 GA (roadmap clarification); Cosmos Curiosity announced — extends the Cosmos data platform into research and clinician-workflow integration, one of the larger strategic UGM announcements; ECU Health saved ~20 hrs/week on Transfer Center summaries alone; 85% AI adoption among customers confirmed (Epic UGM, Aug 19, 2026 — Healthcare IT Today / Distilinfo; added 2026-08-24, updated 2026-08-31)' },
      ],
      strategicNote: 'Building its own agent stack AND renting best-of-breed scribes. Garden Plot floor is 40+ providers — leaves small urgent care unserved. Resolved 2026-07-27: the 37-44% figure is acute/inpatient-hospital share (Epic 43.7% per KLAS 2026), a different market than the ~20% ambulatory baseline below — not a contradiction.',
    },
    {
      name: 'athenahealth',
      segment: 'Independent practice suites (athenaOne)',
      marketShare: '~6.9% ambulatory · Best in KLAS 11-75 MDs',
      color: '#0ea5e9',
      updates: [
        { date: 'Jun 2026', headline: '80+ feature AI-native RCM roadmap disclosed with hard results: 30% more recovered coding-denial payments, 16% fewer insurance denials, sub-hour AI voice-agent prior-auth calls; Spring 2026 athenaOne release added AI-determined copay estimates + expanded ChartSync/TEFCA interoperability' },
        { date: 'Feb 2026', headline: 'athenaAmbient: FREE native ambient scribe in athenaOne — GA expected mid-to-late 2026, no extra cost' },
        { date: 'Feb 2026', headline: 'Sage AI assistant reads the chart and answers clinical questions; agentic patient communication tools shipped' },
        { date: 'Feb 2026', headline: 'Five 2026 Best in KLAS awards, including Overall Independent Physician Practice Suite (3rd consecutive year), tied Epic at 75+ MDs' },
      ],
      strategicNote: 'Making ambient documentation a free platform feature, not a paid add-on — collapses scribe pricing across the segment. Now backing it with disclosed AI-RCM performance numbers, not just feature announcements.',
    },
    {
      name: 'Oracle Health (Cerner)',
      segment: 'Enterprise — AI-native rebuild, acute + ambulatory',
      marketShare: 'Wildcard',
      color: '#f59e0b',
      updates: [
        { date: 'Aug 22, 2026', headline: 'VA expanded the Oracle Health EHR Modernization contract by up to $17B in late August — total potential value now up to $27B (from ~$10B), the largest single EHR contract in history. Three Indiana VA medical centers (Fort Wayne, Marion, Richard L. Roudebush) went live Aug 22 — 8 facilities live year-to-date in 2026. Contract extension through 2031 still under negotiation (current deal expires May 2028). Public-sector lock-in is now the defining Oracle Health fact while commercial acute-care erosion continues in parallel (Washington Technology / Nextgov / Healthcare Dive / VA News, Aug 2026; added 2026-08-31)' },
        { date: 'Jul-Oct 2026', headline: 'VA rollout: 13 total VA facilities planned for 2026 (Ohio/Kentucky live, Indiana live Aug 22, Cleveland/Anchorage October 2026); VA seeking contract extension through 2031 (current deal expires May 2028) — largest EHR deployment in US history deepening despite commercial acute-care share losses; Oracle guides double-digit Oracle Health revenue growth FY2027 (Nextgov Aug 2026; Healthcare Dive)' },
        { date: '2026', headline: 'CORRECTED: ambulatory AI-native EHR has reached general availability (voice-first, agentic AI, semantic AI foundation open to third-party model integration) — acute/hospital-care functionality still in development, targeted for 2026 (was previously misstated as "acute launched")' },
        { date: 'May 14, 2026', headline: 'KLAS 2026: Oracle Health is the lowest-scoring acute care EHR across large, midsize, and small organizations — shed 56 hospitals/14,676 beds in 2025 (third consecutive year as the largest net loser); ~30% of customers say Oracle Health is not in their long-term plans, only 35% "firmly committed" (updated 2026-08-10 to add "lowest-scoring" KLAS language per Safeguard Consulting 2026 Scorecard)' },
      ],
      strategicNote: 'Only legacy vendor rebuilding AI-native from the ground up rather than bolting AI onto old bones. Key contrast: losing commercial acute-care share for a 3rd consecutive year while simultaneously holding the largest single EHR contract in history — VA potential value now up to $27B after the late-Aug 2026 $17B expansion, with a 2031 extension sought. The narrative has shifted from "struggling challenger" to "dominant government health IT vendor with eroding commercial share" — government lock-in vs. commercial erosion is the defining Oracle tension. Biggest structural swing factor over 6-12 months. (updated 2026-08-31)',
    },
    {
      name: 'eClinicalWorks',
      segment: 'Ambulatory + community health centers',
      marketShare: '~11.9% ambulatory · largest cloud install base',
      color: '#10b981',
      updates: [
        { date: 'May 2026', headline: 'healowIQ launched — peer-reviewed evidence at point of care, grounded in EHR data' },
        { date: 'May 2026', headline: 'Agentic AI ecosystem showcased at Health Center Summit' },
        { date: '2026', headline: 'Sunoh.ai ambient scribe (EHR-agnostic): vendor reports 102.5% more appointments handled, 33.2% faster documentation' },
      ],
      strategicNote: 'Bundled ambient + agentic stack aimed at high-throughput ambulatory — direct overlap with urgent care workflows.',
    },
    {
      name: 'Tebra',
      segment: 'Small/independent practices (Kareo + PatientPop)',
      marketShare: 'Small-practice leader',
      color: '#8b5cf6',
      updates: [
        { date: 'Dec 2025', headline: '$250M raise (Hildred Capital + J.P. Morgan debt) explicitly to accelerate AI across EHR, billing, patient experience' },
        { date: 'H2 2025', headline: 'AI Note Assist: >500K ambient notes, ~60% time savings per note (vendor-reported)' },
        { date: '2025', headline: 'AI Review Replies + Review Insights — reputation management from PatientPop DNA' },
      ],
      strategicNote: 'Clearest small-practice AI play with fresh capital — the segment below Epic Garden Plot’s 40-provider floor. Natural competitor for very small urgent care.',
    },
    {
      name: 'NextGen Healthcare',
      segment: 'Ambulatory mid-market (Thoma Bravo-owned)',
      marketShare: 'Quiet this window',
      color: '#64748b',
      updates: [
        { date: '2026', headline: 'Ambient Assist remains one of four EHRs with native ambient AI documentation (with Epic, athena, Oracle) — sold as paid add-on' },
        { date: '2026', headline: 'NextGen Office Ambient Assist small-practice variant + specialty tuning (ophthalmology/optometry)' },
        { date: 'Mar-Jul 2026', headline: 'No fresh M&A, funding, or major product news surfaced this window' },
      ],
      strategicNote: 'Paid ambient add-on model is under pressure as athenahealth makes it free.',
    },
    {
      name: 'Veradigm (Allscripts)',
      segment: 'Ambulatory + payer/life-science data',
      marketShare: 'Distressed',
      color: '#f43f5e',
      updates: [
        { date: 'May 2026', headline: 'New CFO Christian Greyenbuhl effective May 11 (single-source)' },
        { date: 'Feb 2026', headline: 'Released estimated FY2025 results; priorities: remediate internal controls, seek Nasdaq relisting in 2026' },
        { date: '2026', headline: 'Native ambient scribe + ICD-10/order suggestions; ScienceIO monetizing ~200M patient records as de-identified data' },
        { date: 'Watch', headline: 'Oracle reported as potential acquirer of Veradigm data assets — unresolved overhang' },
      ],
      strategicNote: 'Financially distracted and data-led rather than product-led. Its ambulatory install base is a churn target.',
    },
    {
      name: 'ModMed',
      segment: 'Specialty-first (derm/ortho/ophtho), Clearlake-backed',
      marketShare: '~$5.3B valuation',
      color: '#06b6d4',
      updates: [
        { date: 'Jun 2026', headline: 'Enterprise rollout at U.S. Orthopaedic Partners — 55+ locations' },
        { date: 'Apr 2026', headline: 'Acquired Bonsai Health: agentic AI patient engagement — automated reactivation, AI self-scheduling' },
        { date: 'Apr 2026', headline: 'Selected AWS for "AI-Powered Practice" platform' },
      ],
      strategicNote: 'Buying into front-office agentic AI — the same digital-front-door + self-scheduling territory urgent care is chasing.',
    },
    {
      name: 'AdvancedMD',
      segment: 'Independent practices — twice-yearly AI release cadence',
      marketShare: 'Independent segment',
      color: '#a3e635',
      updates: [
        { date: 'Jun 2026', headline: 'Summer Release: AI Clinical Assistant for Mobile + automated secondary/tertiary insurance eligibility verification' },
        { date: 'Feb 2026', headline: 'Winter Release: AI Clinical Assistant GA — ambient listening + AI Action Items auto-generating chart actions' },
      ],
      strategicNote: 'Multi-tier eligibility verification is the differentiated RCM automation piece for high-volume walk-in settings.',
    },
    {
      name: 'AI-Native Upstarts',
      segment: 'Abridge / Ambience / Commure / Elation — beside or inside the EHR',
      marketShare: 'Capital magnet',
      color: '#6366f1',
      updates: [
        { date: 'May 2026', headline: 'Commure: $70M at $7B post-money; acquired Augmedix for $139M; 75,000+ clinicians at 25M+ encounters/year; claims 85%+ of RCM work with no human in the loop; embedded in MEDITECH Expanse; Commure Dictation (speech-to-cursor for any text field) announced April 2026 (updated 2026-08-17)' },
        { date: 'Jun-Aug 2026', headline: 'Elation Health acquired Aster (AI-native women’s-health EHR) and won Best in KLAS for Small Practice Ambulatory EHR/PM; touchless billing creates 72% of eligible claims from note sign-off; late Aug 2026: Anthropic published Elation as a Claude for Healthcare case study — 61% faster chart insights after Claude integration, the first hard outcome benchmark from a foundation-model deployment inside an ambulatory EHR (Anthropic / IntuitionLabs; updated 2026-08-31)' },
        { date: 'Apr 2026', headline: 'Abridge: $300M Series E + $316M extension (~$812M total raised, $5.3B+ valuation), ~$100M ARR; Best in KLAS Ambient AI 2025 AND 2026 (two consecutive years); deployed at 200+ health systems including Mayo Clinic, UPMC, Johns Hopkins — ambient AI documentation approaching infrastructure-level status for large health systems (updated 2026-08-10)' },
        { date: 'Feb 2026', headline: 'Ambience Healthcare: $243M Series C at $1.25B valuation (Oak HC/FT + a16z, OpenAI Startup Fund) + Epic Toolbox membership + athenahealth marketplace partnership; "Chart Awareness" grounds notes in full longitudinal record; autonomous AutoCDI coding — integrates Epic, Oracle, athena (updated 2026-08-17)' },
      ],
      strategicNote: 'Money is backing platforms that wrap the EHR and expand into coding/RCM/intake. The EHR of record is becoming a system of record wrapped in third-party AI.',
    },
  ],
  marketSignals: [
    'The ambulatory EHR market stays fragmented: Epic ~19.5%, eClinicalWorks ~11.9%, athenahealth ~6.9% — the top 3 hold only ~38% (vs a consolidated hospital market). Share shifts are winnable; athenahealth is gaining among independents. (These are ambulatory-specific figures per EHR Source 2026; a separate KLAS acute/inpatient-hospital metric puts Epic at 43.7% of that distinct market — different denominator, not a contradiction. Updated 2026-08-10.)',
    'Ambient documentation is now table stakes and the price is collapsing — athenahealth made it free and native. The moat moved to what happens AFTER the note: autonomous coding, CDI, prior auth, RCM. Assume ambient capture is commoditized within ~12 months.',
    'The frontier moved from documentation to agents: Epic Agent Factory + CoMET foundation model, Oracle voice-first agentic EHR, ModMed/Bonsai, Commure touchless RCM. For high-volume, thin-margin urgent care, agentic front-door + touchless billing is where ROI concentrates.',
    'Capital is flooding the AI-native layer, not legacy suites (Abridge ~$5.3B+/~$812M raised, Commure $7B, Ambience $1.25B, Tebra $250M). Best-of-breed AI will keep out-innovating incumbents’ native stacks near-term — weigh build vs partner accordingly.',
    'Regulation forces an interoperability step-change in 2026: July 4 FHIR/USCDI v3 deadline, live info-blocking enforcement (up to $1M/violation), payer prior-auth APIs. Whoever operationalizes digital prior auth first wins share.',
    'Oracle is the wildcard: ambulatory AI-native EHR has now reached general availability (acute/hospital version still in development, targeted for 2026) — pressures Epic/athena from the top while AI-native upstarts pressure from the bottom. Watch Oracle ambulatory traction and any Veradigm data-asset acquisition. Countervailing signal (KLAS 2026): Oracle Health is losing acute-care share for a third straight year (56 hospitals/14,676 beds shed in 2025) with customer commitment softening (~30% not in long-term plans) — the vendor\'s ambulatory rollout performance claims (320 facilities, 78% nurse satisfaction) remain unverified/single-source. New in Aug 2026: the VA contract expansion to a potential $27B (largest EHR contract ever) gives Oracle a public-sector floor that commercial erosion cannot touch — read Oracle as two businesses, government-locked and commercial-leaking, not one. (updated 2026-08-31)',
    'athenahealth is the first vendor to disclose hard AI-RCM performance numbers (30% more recovered denial payments, 16% fewer denials) rather than feature announcements — a signal the "documentation → agents/RCM" shift is starting to show measurable ROI, not just roadmap.',
    'Structural gap persists for urgent care: majors aim above the segment (Garden Plot floor = 40+ providers). Small high-throughput walk-in sites are served mainly by urgent-care-specific and small-practice vendors.',
    'KLAS 2026: overall EHR purchase decisions are DOWN 40% vs 2024 (near 50% vs 2023) as health systems redirect capital to AI and operational-efficiency tools; global purchasing at a near five-year low (447 hospitals / 81,261 beds purchased across all vendors). MEDITECH: 84% legacy retention onto Expanse. Capital is moving from EHR refresh to AI layer — the EHR consolidation window is closing, the AI-on-top opportunity is opening. (HIT Consultant May 14 + Jul 8, 2026; added 2026-08-03)',
  ],
};

export const medicaidCuts = {
  federalCuts10yr: '$911B',
  ruralHospitalsAtRisk: 756,
  ruralResidentsLoseCoverage: '1.8M by 2034',
  ruralHealthProgram: '$50B',        // Rural Health Transformation Program
};
