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
  lastUpdated: 'March 2026',
  updateLabel: 'HIMSS 2026 / Amazon Expansion Update',
  subtitle: 'AI, Telehealth & Big Tech Market Analysis | Urgent Care Executive Insights',
};

// ============================================================
// KEY METRICS (top cards on overview)
// ============================================================
export const keyMetrics = [
  { label: 'Global Telehealth', value: '$219B', subtext: '2026 market size', trend: '→ $1.37T by 2035', color: '#0ea5e9' },
  { label: 'U.S. Urgent Care', value: '$44.3B', subtext: '2026 projected revenue', trend: '8.6% CAGR', color: '#10b981' },
  { label: 'ChatGPT Health Users', value: '250M+', subtext: 'weekly health queries (est.)', trend: '40M+ daily', color: '#8b5cf6' },
  { label: 'AI Visit Deflection', value: '15-25%', subtext: 'low-acuity by 2028', trend: '4-8 visits/day', color: '#f59e0b' },
];

// ============================================================
// OVERVIEW SECTION — highlight cards
// ============================================================
export const overviewHighlights = {
  aiHealthQueries: { value: '40M+', label: 'daily prompts', detail: '1 in 6 U.S. adults use AI for health monthly' },
  urgentCareCenters: { value: '~14,400', label: 'U.S. locations', detail: 'Supply growth (25%) outpacing demand (19%)' },
  telehealthShare: { value: '25-30%', label: 'of visits by 2026', detail: '23-25% CAGR growth rate' },
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

// Telehealth service mix (%)
export const serviceMix = [
  { name: 'Behavioral Health', value: 67, color: '#6366f1' },
  { name: 'Primary Care', value: 18, color: '#0ea5e9' },
  { name: 'Specialty Care', value: 10, color: '#10b981' },
  { name: 'Other', value: 5, color: '#94a3b8' },
];

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
  projectedRate2028: '15-25%',  // of low-acuity visits
  currentRate: '3-8%',          // today
  genZMultiplier: '3x',         // more likely to use digital UC
  volumeDeclineWithout: '-15-25%',  // without digital by 2028
  volumeGainWith: '+5-15%',         // with digital by 2028
};

// ============================================================
// BIG TECH TIMELINE
// ============================================================
export const bigTechTimeline = [
  { date: 'Jan 7, 2026', company: 'OpenAI', product: 'ChatGPT Health', color: '#10b981' },
  { date: 'Jan 11, 2026', company: 'Anthropic', product: 'Claude for Healthcare', color: '#f59e0b' },
  { date: 'Jan 21, 2026', company: 'Amazon', product: 'Health AI (One Medical)', color: '#0ea5e9' },
  { date: 'Mar 10, 2026', company: 'Amazon', product: 'Health AI — All U.S. Customers', color: '#0ea5e9' },
  { date: 'Mar 10, 2026', company: 'HIMSS 2026', product: 'Agentic AI Wave — Epic, Microsoft, Google', color: '#6366f1' },
];

export const bigTechStats = {
  chatgptWeeklyUsers: '900M',        // WAU as of Feb 2026 (up from 800M)
  chatgptWeeklyQueries: '250M+',     // est. from 900M WAU x 1-in-4 health ratio
  chatgptDailyPrompts: '40M+',
  chatgptHealthShare: '1 in 4',
  chatgptAfterHours: '7 in 10',
  chatgptInsuranceMsgs: '1.6-1.9M',
  chatgptEnterpriseCustomers: '8+',  // AdventHealth, HCA, MSK, Stanford, UCSF, Baylor, Boston Children's, Cedars-Sinai
  amazonPrimeMembers: '200M+',
  amazonVisitPrice: '$29-49',
  amazonFreeConsults: '5',            // free provider consultations for Prime members
  dragonCopilotSystems: '600+',      // health systems using Microsoft Dragon Copilot
  dragonCopilotClinicians: '100K+',  // clinicians daily
  epicAiAdoption: '85%',             // of Epic customers using AI
  aiUnderTriageRate: '52%',          // Mount Sinai study — emergency cases under-triaged
  aiTrustRate: '39%',                // Americans who trust AI chatbots for health decisions
  aiMonthlyUsage: '1 in 6',          // U.S. adults using AI chatbot monthly for health
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
  genZTelehealthRate: '30%',
  boomerTelehealthRate: '6%',
  genZSubstitution: '74%',      // prefer phone and relationships
};

export const patientInsights = {
  weeklyHealthQueries: '250M+',     // est. from 900M WAU base
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
  healthcareInCrisis: '70%',
  hospitalCostsSerious: '87%',
  genZDelayedCost: '38%',           // updated: all Americans delayed due to cost (up from 27% in 2023)
  millennialsCanceledCost: '74%',
  worriedAboutAffordability: '47%', // record high, Gallup/West Health Mar 2026
  costStressDoubled: '15%',         // up from 8% in 2022
};

// ============================================================
// REIMBURSEMENT / GEOGRAPHY
// ============================================================
export const reimbursementData = {
  parityStateCount: 44,             // 44 states + DC have private payer telehealth laws (CHG Healthcare Feb 2026)
  parityTrend: 'up from 29 payment parity states; 44 with broader telehealth reimbursement laws',
  avgReimbursement: '$20',          // less than in-person
  medicareExtended: 'Dec 31, 2027', // Medicare telehealth flexibilities extension
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
  text: 'Amazon opened Health AI to ALL U.S. customers on March 10.',
  highlight: '900M weekly',
  suffix: 'ChatGPT users — 250M+ ask health Qs.',
};

// ============================================================
// NEW DATA — MARCH 2026 RESEARCH UPDATE
// ============================================================
export const tefcaStats = {
  recordsExchanged: '500M',          // up from ~10M in Jan 2025
  organizations: '14,214',
  connections: '75,000+',
  bhitPilots: 9,                     // behavioral health IT pilots
  bhitInvestment: '$20M+',
  ssaJoined: true,                   // Social Security Administration
};

export const fdaAiUpdates = {
  enforcementDiscretion: true,       // expanded Jan 6, 2026
  wellnessWearablesExempt: true,     // BP, SpO2, glucose monitors
  newFrameworkInDev: true,           // Commissioner announced
  approvedAiDevices: '1,000+',      // FDA-authorized AI/ML medical devices
};

export const hospitalAtHome = {
  approvedHospitals: 366,
  states: 37,
  waiverExtension: '2030',           // 5-year extension
};

export const retailHealthRetreat = {
  cvsClosingLocations: true,         // Southern CA + New England MinuteClinics
  walgreensClosing: 160,             // VillageMD sites
  walmartExited: true,
  cvsPivot: '300+ comprehensive primary care centers',
};

export const mentalHealthTelehealth = {
  remoteShare: '52%',               // of mental health visits now remote
  springHealthAlmaValuation: '$6-7B',
  springHealthAlmaRevenue: '$1B',
};

export const medicaidCuts = {
  federalCuts10yr: '$911B',
  ruralHospitalsAtRisk: 756,
  ruralResidentsLoseCoverage: '1.8M by 2034',
  ruralHealthProgram: '$50B',        // Rural Health Transformation Program
};
