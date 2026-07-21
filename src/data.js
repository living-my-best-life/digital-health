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
  lastUpdated: 'July 2026',
  updateLabel: 'Full Refresh — Big Tech, Telehealth, Policy, EMR & On-Demand Care',
  subtitle: 'AI, Telehealth & Big Tech Market Analysis | Urgent Care Executive Insights',
};

// ============================================================
// KEY METRICS (top cards on overview)
// ============================================================
export const keyMetrics = [
  { label: 'Global Telehealth', value: '$219B', subtext: '2026 market size', trend: '→ $1.37T by 2035', color: '#0ea5e9' },
  { label: 'U.S. Urgent Care', value: '$44.3B', subtext: '2026 projected revenue', trend: '8.6% CAGR', color: '#10b981' },
  { label: 'ChatGPT Health Users', value: '230M+', subtext: 'weekly health queries', trend: '40M+ daily', color: '#8b5cf6' },
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
  projectedRate2028: '15-25%',  // of low-acuity visits — NOTE: a single-source UCA 2026 playbook (Alan Ayers, citing Stanford/KFF) frames this as *current*, not 2028; primary source not locatable, flagged not applied (2026-07-20)
  currentRate: '3-8%',          // today
  genZMultiplier: '3x',         // more likely to use digital UC
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
  },
  trustDecline: {
    opennessThen: '52%', opennessNow: '42%',        // openness to AI in healthcare, since 2024
    efficiencyBeliefThen: '64%', efficiencyBeliefNow: '55%', // belief AI improves efficiency
    comfortTreatmentDecisions: '47%',
    comfortReassurance: '44%',
    source: 'JMIR 2026',
  },
  countersignal: 'Ohio State Wexner: 51% of Americans already used AI to make an important health decision without consulting a professional first; Wolters Kluwer: 70% believe AI improves health literacy, 42% bring AI-generated info to appointments',
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
  { date: 'Mar 12, 2026', company: 'Google', product: 'AMIE Real-World Debut — 100-Patient Clinic Study, 0 Safety Stops; 90% correct dx in differential, 75% top-3 (Nature OSCE: matches/exceeds 21 PCPs on reasoning, trails on practicality)', color: '#ef4444' },
  { date: 'Apr 2026', company: 'OpenAI', product: 'ChatGPT for Clinicians — Free for Verified Providers', color: '#10b981' },
  { date: 'May 2026', company: 'OpenAI', product: 'Labcorp Partnership — AI Lab-Result Interpretation (260+ MDs reviewed 700K+ responses)', color: '#10b981' },
  { date: 'May 19, 2026', company: 'Google', product: 'Fitbit → Google Health + Gemini AI Health Coach ($9.99/mo, or bundled in AI Pro $19.99/mo)', color: '#ef4444' },
  { date: 'Jun 8, 2026', company: 'Apple', product: 'Health+ AI Coach Delayed/Absent from WWDC26 (trade-press inference, not confirmed)', color: '#a3a3a3' },
  { date: 'Jul 9, 2026', company: 'Anthropic', product: "Claude Integrated into UST's CarePath (claims, care management, member services)", color: '#f59e0b' },
];

export const bigTechStats = {
  chatgptWeeklyUsers: '900M',        // WAU (confirmed Feb + Jun 2026)
  chatgptMonthlyUsers: '1B',         // MAU by June 2026
  chatgptWeeklyQueries: '230M+',     // OpenAI's own figure, still 230M as of Jul 2026 (was overstated as 250M)
  chatgptDailyPrompts: '40M+',
  chatgptHealthShare: '1 in 4',
  chatgptAfterHours: '7 in 10',
  chatgptInsuranceMsgs: '~1.5-2M',   // widened range per OpenAI/Healthcare Dive Jan 2026
  chatgptHospitalDesertMsgs: '580K+', // weekly healthcare messages from US "hospital deserts"
  chatgptEnterpriseCustomers: '8',   // AdventHealth, HCA, MSK, Stanford Children's, UCSF, Baylor, Boston Children's, Cedars-Sinai — no net-new since Jan
  chatgptCliniciansProduct: 'Apr 2026', // ChatGPT for Clinicians, free for verified providers
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
  boomerTelehealthRate: '38%',      // have used telehealth (was 6% under the old metric — do not mix metrics)
  boomerSubstitution: '74%',        // strong substitution when adopted; prefer phone and relationships
  genZDigitalUCMultiplier: '3x',    // more likely to choose digital-first urgent care
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
    note: 'Strong reviews (4.5+) drive +40-50% visit lift. Booking UX and reputation decide where they go.',
  },
  {
    generation: 'Baby Boomers',
    stat: '38%',
    statLabel: 'have used telehealth',
    accent: 'emerald',
    note: 'Strong substitution when adopted (74%). Prefer phone and relationships — keep human escalation paths visible.',
  },
];

export const patientInsights = {
  weeklyHealthQueries: '230M+',     // OpenAI figure, confirmed Jul 2026
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
  costSecure: '49%',                // "Cost Secure" metric — down from 61% peak in 2022, a 5-yr low (Gallup/West Health 2026)
  hospitalCostsSerious: '87%',
  genZDelayedCost: '38%',           // updated: all Americans delayed due to cost (up from 27% in 2023)
  millennialsCanceledCost: '74%',
  millennialsOutOfPocket: '38%',    // now pay out-of-pocket for healthcare (PYMNTS 2026)
  worriedAboutAffordability: '47%', // record high, Gallup/West Health Mar 2026
  costStressDoubled: '15%',         // up from 8% in 2022
  longWaitTimesBarrier: '55%',      // say long appointment wait times prevented/delayed care in past year
  workScheduleBarrier: '27%',       // cite work-schedule conflicts as an access barrier
};

// Gen Z cost-driven behavior — added 2026-07-20 (HealthEquity/PYMNTS, CNN)
export const genZCostBehavior = {
  delayedVisitCost: '25%',          // delayed a visit in last 3 months due to cost (confirms CB-3)
  budgetStress: '8 in 10',          // report at least moderate budget stress from medical costs, ~2x Boomers
  changedBehaviorCost: '63%',       // changed behavior due to cost
  insuredAtLastVisit: '70%',        // vs. 86% of Boomers/seniors
  noPCPDefaultToUrgentCare: 'over 25%', // Gen Z with no primary care doctor, defaulting to urgent care (CNN, Jul 14 2026)
};

// AI-satisfaction as its own trackable metric — added 2026-07-20 (multi-country scoping review)
export const aiSatisfaction = {
  generalSatisfaction: '70%+',
  voiceAIComfort: '72%',            // comfortable with voice AI for refills/scheduling
  infoUseful: '90%',                // found AI-provided info useful
  recognizeBenefits: '75%+',        // recognize AI benefits when clearly explained
};

// ============================================================
// REIMBURSEMENT / GEOGRAPHY
// ============================================================
export const reimbursementData = {
  parityStateCount: 44,             // 44 states + DC have private payer telehealth laws (CHG Healthcare Feb 2026)
  parityTrend: 'strict parity counts diverge: 23 full + 5 with caveats (Manatt Nov 2025) or 24 + PR (CCHP); 44 with broader telehealth reimbursement laws',
  newLegislation2026: 'TX HB 1052 enacted (eff. Jan 1, 2026) — parity for telemedicine/teledentistry to/from out-of-state sites; NY S354 (parity expansion) passed one chamber, not yet enacted',
  avgReimbursement: '$20',          // less than in-person
  medicareExtended: 'Dec 31, 2027', // VERIFIED: enacted via H.R. 7148 (Consolidated Appropriations Act of 2026), signed Feb 3, 2026
  deaPrescribingExtended: 'Dec 31, 2026', // DEA 4th extension: Schedule II-V telemedicine prescribing, no prior in-person exam
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
  text: 'Gemini AI Health Coach launched May 19; Amazon Health AI open to all U.S. customers.',
  highlight: '900M weekly',
  suffix: 'ChatGPT users — 230M+ health Qs/week.',
};

// ============================================================
// NEW DATA — MARCH 2026 RESEARCH UPDATE
// ============================================================
export const tefcaStats = {
  recordsExchanged: '1B+',           // compounding: ~10M (Jan 2025) → ~500M (Feb 2026) → 1B+ (mid-2026); 2025 full-year volume 464,291,021 (down slightly from ~474M in 2024)
  organizations: '14,214',           // kept: newer figures conflict by methodology (Sequoia/RCE Nov 2025: 10,600+ orgs/60,000+ connections; separate Feb 2026 cite: 71,000+ "sites or organizations") — flagged, not swapped in (2026-07-20)
  connections: '75,000+',
  qhins: 11,                         // Oracle Health Information Network designated 11th QHIN Nov 2025
  documentsShared: '1.2B+',          // cumulative documents shared since Dec 2023 go-live (HealthIT.gov)
  bhitPilots: 9,                     // behavioral health IT pilots
  bhitInvestment: '$20M+',
  ssaJoined: true,                   // Social Security Administration
  ssaExchangePurpose: 'Government benefits determination', // new exchange purpose added spring 2026
  sopUpdate: 'Treatment XP + IAS XP Implementation v3.0, effective Aug 3, 2026',
};

export const fdaAiUpdates = {
  enforcementDiscretion: true,       // expanded Jan 6, 2026
  wellnessWearablesExempt: true,     // BP, SpO2, glucose monitors
  newFrameworkInDev: true,           // Commissioner announced
  approvedAiDevices: '1,350-1,450', // FDA-authorized AI-enabled devices, ~2x 2022 (CRS Jan 2026) — not re-verified this cycle
  cdsMultipleOptionsRelaxed: true,   // FDA relaxed Clinical Decision Support "multiple options" requirement
  tempoPilot: 'CMS-partnered, Dec 2025 — early patient access to FDA-authorized digital chronic-disease devices',
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
  source: 'FAIR Health Quarterly Telehealth Regional Tracker, Jul 2026',
};

export const hospitalAtHome = {
  approvedHospitals: 366,
  states: 37,
  waiverExtension: '2030',           // 5-year extension
};

export const retailHealthRetreat = {
  cvsClosingLocations: true,         // Southern CA + New England MinuteClinics
  walgreensClosing: 160,             // VillageMD sites, $6B write-down (not re-confirmed this cycle)
  walmartExited: true,
  cvsPivot: '300+ comprehensive primary care centers',
  cvsAetnaInNetwork: 'In-network Aetna primary care via MinuteClinic — Houston, San Antonio, Greater Atlanta (2026)',
  cvsVirtualGLP1Visit: '$49',        // new virtual GLP-1 visit, plus Medicare GLP-1 Bridge Program participation through Dec 2027
};

// Urgent care M&A / consolidation trend — added 2026-07-20 (Auxo Capital Advisors, UCA)
export const urgentCareMA = {
  dealsAnnounced2021: 44,
  dealsAnnounced2025: 29,            // consolidation cooling from 2021 peak
  valuationMultiples: 'Single sites: 3x-6x; premium platforms: 11x-15x+',
  activeAcquirers: 'PE-backed platforms (CityMD/Warburg Pincus, GoHealth/TPG, FastMed/ABRY); strategics (Optum MedExpress, HCA CareNow, Select Medical Concentra); hospital systems buying centers as outpatient-access hubs',
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
  asOf: 'July 2026',
  blocks: [
    {
      title: 'GLP-1 & Metabolic Care',
      posture: 'Opportunity',
      color: '#10b981',
      stats: [
        { label: 'US adults on a GLP-1', value: '1 in 8' },
        { label: 'Wegovy cash price (NovoCare)', value: '$349/mo' },
        { label: 'Compounded sema shipments YoY', value: '-90%' },
      ],
      developments: [
        { date: 'Apr 30, 2026', headline: 'FDA permanently excludes tirzepatide, semaglutide, and liraglutide from the 503B Bulk Drug Substances List — compounding pathway closed for these molecules; smaller 503A pharmacies (e.g., Trimi at $125/mo) still operate' },
        { date: '2025-26', headline: 'Hims & Hers FY2025: $2.35B revenue (up from $1.5B in 2024), guiding $2.7-2.9B for 2026, 2.5M subscribers (+282K YoY); pivoted to branded-drug dispensing, compounded product only when clinically necessary' },
        { date: 'Jul 2026', headline: 'Medicare GLP-1 Bridge live July 1 — $50/30-day copay for Wegovy/Zepbound through Dec 2027' },
        { date: 'Mar 2026', headline: 'Hims & Hers-Novo Nordisk partnership: branded Wegovy pills/injections + Ozempic on-platform, oral Wegovy from $149/mo; orforglipron (oral GLP-1) PDUFA Apr 10, 2026, expected ~$149/mo via LillyDirect' },
        { date: '2026', headline: 'Direct pricing settled: LillyDirect Zepbound vials $299-449; NovoCare Wegovy $349/mo cash-pay ($149/mo oral promo); Walmart is first retail pickup for LillyDirect' },
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
        { label: 'Apple BP alerts', value: 'FDA-cleared' },
      ],
      developments: [
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
  asOf: 'July 2026',
  vendors: [
    {
      name: 'Epic',
      segment: 'Enterprise + independent groups (Garden Plot, 40+ providers)',
      marketShare: '~20% ambulatory · Best in KLAS 75+ MDs (tie)',
      color: '#ef4444',
      updates: [
        { date: 'Mar 2026', headline: 'HIMSS26 "Healthcare Intelligence" push: "Factory" agent-builder preview (health systems configure/deploy their own AI agents), new foundation model CoMET, AI tools branded Art/Penny/Emmie, 150+ AI features in development' },
        { date: 'Mar 2026', headline: '>85% of Epic customers actively using Epic AI (kept — no refreshed figure this cycle)' },
        { date: '2026', headline: 'Garden Plot (cloud/SaaS EHR for independent groups) continues rollout with AI-generated pre-visit summaries' },
        { date: 'Aug 2025', headline: 'Toolbox stays open to third-party ambient vendors — Ambience native in Haiku/Hyperdrive' },
      ],
      strategicNote: 'Building its own agent stack AND renting best-of-breed scribes. Garden Plot floor is 40+ providers — leaves small urgent care unserved. Flag: a newer KLAS-adjacent source cites Epic ambulatory share at 37-44%, well above the ~20% baseline below — different methodology (patient-record vs. facility/physician count), not swapped in.',
    },
    {
      name: 'athenahealth',
      segment: 'Independent practice suites (athenaOne)',
      marketShare: '~7% ambulatory · Best in KLAS 11-75 MDs',
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
        { date: '2026', headline: 'CORRECTED: ambulatory AI-native EHR has reached general availability (voice-first, agentic AI, semantic AI foundation open to third-party model integration) — acute/hospital-care functionality still in development, targeted for 2026 (was previously misstated as "acute launched")' },
        { date: 'Jan 2026', headline: 'Ambulatory AI features live for early adopters of the voice-first, agentic EHR' },
        { date: '2026', headline: 'OpenAI-powered Oracle Patient Portal GA planned for CY2026' },
        { date: '2026', headline: 'Reported ~320 facilities on new EHR; 78% of nurses rate interface intuitive (single-source — verify)' },
      ],
      strategicNote: 'Only legacy vendor rebuilding AI-native from the ground up rather than bolting AI onto old bones. Biggest structural swing factor over 6-12 months.',
    },
    {
      name: 'eClinicalWorks',
      segment: 'Ambulatory + community health centers',
      marketShare: '~12% ambulatory · largest cloud install base',
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
        { date: 'May 2026', headline: 'Commure: $70M at $7B post-money; acquired Augmedix for $139M; claims 85%+ of RCM work with no human in the loop; embedded in MEDITECH Expanse' },
        { date: 'Jun 2026', headline: 'Elation Health acquired Aster (AI-native women’s-health EHR) and won Best in KLAS for Small Practice Ambulatory EHR/PM; touchless billing creates 72% of eligible claims from note sign-off' },
        { date: 'Apr 2026', headline: 'Abridge: $300M Series E + $316M extension (~$812M total raised, $5.3B+ valuation), ~$100M ARR; #1 Best in KLAS Ambient AI in RCM for the second consecutive year' },
        { date: 'Feb 2026', headline: 'Ambience: $243M raise + Epic Toolbox membership; "Chart Awareness" grounds notes in full longitudinal record; autonomous AutoCDI coding — integrates Epic, Oracle, athena' },
      ],
      strategicNote: 'Money is backing platforms that wrap the EHR and expand into coding/RCM/intake. The EHR of record is becoming a system of record wrapped in third-party AI.',
    },
  ],
  marketSignals: [
    'The ambulatory EHR market stays fragmented: Epic ~20%, eClinicalWorks ~12%, athenahealth ~7% — the top 3 hold only ~40% (vs a consolidated hospital market). Share shifts are winnable; athenahealth is gaining among independents.',
    'Ambient documentation is now table stakes and the price is collapsing — athenahealth made it free and native. The moat moved to what happens AFTER the note: autonomous coding, CDI, prior auth, RCM. Assume ambient capture is commoditized within ~12 months.',
    'The frontier moved from documentation to agents: Epic Agent Factory + CoMET foundation model, Oracle voice-first agentic EHR, ModMed/Bonsai, Commure touchless RCM. For high-volume, thin-margin urgent care, agentic front-door + touchless billing is where ROI concentrates.',
    'Capital is flooding the AI-native layer, not legacy suites (Abridge ~$5.3B+/~$812M raised, Commure $7B, Ambience $1.25B, Tebra $250M). Best-of-breed AI will keep out-innovating incumbents’ native stacks near-term — weigh build vs partner accordingly.',
    'Regulation forces an interoperability step-change in 2026: July 4 FHIR/USCDI v3 deadline, live info-blocking enforcement (up to $1M/violation), payer prior-auth APIs. Whoever operationalizes digital prior auth first wins share.',
    'Oracle is the wildcard: ambulatory AI-native EHR has now reached general availability (acute/hospital version still in development, targeted for 2026) — pressures Epic/athena from the top while AI-native upstarts pressure from the bottom. Watch Oracle ambulatory traction and any Veradigm data-asset acquisition.',
    'athenahealth is the first vendor to disclose hard AI-RCM performance numbers (30% more recovered denial payments, 16% fewer denials) rather than feature announcements — a signal the "documentation → agents/RCM" shift is starting to show measurable ROI, not just roadmap.',
    'Structural gap persists for urgent care: majors aim above the segment (Garden Plot floor = 40+ providers). Small high-throughput walk-in sites are served mainly by urgent-care-specific and small-practice vendors.',
  ],
};

export const medicaidCuts = {
  federalCuts10yr: '$911B',
  ruralHospitalsAtRisk: 756,
  ruralResidentsLoseCoverage: '1.8M by 2034',
  ruralHealthProgram: '$50B',        // Rural Health Transformation Program
};
