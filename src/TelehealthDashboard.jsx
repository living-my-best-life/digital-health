import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, Users, MapPin, Target, ChevronRight, Activity, Heart, Building, Zap, ArrowRight, CheckCircle, Clock, DollarSign, Brain, AlertTriangle, Sparkles, Globe, Bot } from 'lucide-react';
import {
  dashboardMeta, keyMetrics as keyMetricsData, overviewHighlights,
  strategicPillars as strategicPillarsData,
  ageData, geoData, serviceMix, telementalHealthByAge, marketProjections,
  stateParityData, parityStates, noParityStates, parityCount,
  deflectionData, deflectionStats, bigTechTimeline, bigTechStats,
  genVolumeImpact, operationsData, demographicStats, patientInsights,
  consumerCostData, reimbursementData, geographyProjections, strategicAlert,
} from './data.js';

export default function TelehealthDashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Market Overview', icon: Activity },
    { id: 'bigtech', label: 'Big Tech & AI', icon: Brain },
    { id: 'deflection', label: 'AI Deflection', icon: Bot },
    { id: 'operations', label: 'Operations', icon: Clock },
    { id: 'demographics', label: 'Demographics', icon: Users },
    { id: 'patients', label: 'Patient Insights', icon: Heart },
    { id: 'reimbursement', label: 'Reimbursement', icon: DollarSign },
    { id: 'geography', label: 'Geography', icon: MapPin },
    { id: 'strategy', label: 'Growth Strategy', icon: Target },
  ];

  const iconMap = { Brain, Zap, Heart, TrendingUp };
  const keyMetrics = keyMetricsData;
  const strategicPillars = strategicPillarsData.map(p => ({ ...p, icon: iconMap[p.iconName] || Brain }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6">
      <header className="mb-8 pb-6 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Digital Healthcare</span>
              <span className="text-slate-300 font-light ml-2">Strategic Dashboard</span>
            </h1>
            <p className="text-slate-500 text-sm mt-1">AI, Telehealth & Big Tech Market Analysis | Urgent Care Executive Insights</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase">Data Current</p>
              <p className="text-sm text-slate-300 font-mono">{dashboardMeta.lastUpdated}</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20 border border-violet-500/30">
              <Sparkles size={14} className="text-violet-400" />
              <span className="text-sm text-slate-300">AI Era Update</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex gap-6">
        <nav className="w-56 flex-shrink-0">
          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                  activeSection === section.id
                    ? 'bg-sky-500/15 text-white border-l-2 border-sky-400'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <section.icon size={18} className={activeSection === section.id ? 'text-sky-400' : ''} />
                <span className="text-sm font-medium">{section.label}</span>
                {activeSection === section.id && <ChevronRight size={14} className="ml-auto text-sky-400" />}
              </button>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-sky-500/10 border border-violet-500/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={14} className="text-amber-400" />
              <p className="text-xs text-amber-400 uppercase font-medium">Strategic Alert</p>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Big Tech entered healthcare in force in Jan 2026. <span className="text-violet-400 font-semibold">230M+ weekly</span> health queries on ChatGPT alone.
            </p>
          </div>
        </nav>

        <main className="flex-1 min-w-0">
          {/* OVERVIEW SECTION */}
          {activeSection === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Market Overview</h2>
                <p className="text-slate-400">The convergence of AI, telehealth, and big tech entry is reshaping urgent care. Organizations must adapt within 12-24 months or risk disintermediation.</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {keyMetrics.map((metric, i) => (
                  <div key={i} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition-all">
                    <p className="text-xs text-slate-500 uppercase mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold font-mono" style={{ color: metric.color }}>{metric.value}</p>
                    <p className="text-sm text-slate-400 mt-1">{metric.subtext}</p>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-700">
                      <TrendingUp size={12} className="text-emerald-400" />
                      <span className="text-xs text-slate-500">{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-violet-500/10 border border-violet-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain size={16} className="text-violet-400" />
                    <span className="text-xs text-violet-400 uppercase font-medium">AI Health Queries</span>
                  </div>
                  <p className="text-3xl font-bold text-white">40M+</p>
                  <p className="text-sm text-slate-400">daily prompts</p>
                  <p className="text-xs text-slate-500 mt-3"><span className="text-violet-400 font-semibold">1 in 4</span> ChatGPT users ask health Qs</p>
                </div>
                <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Building size={16} className="text-emerald-400" />
                    <span className="text-xs text-emerald-400 uppercase font-medium">Urgent Care Centers</span>
                  </div>
                  <p className="text-3xl font-bold text-white">~14,400</p>
                  <p className="text-sm text-slate-400">U.S. locations</p>
                  <p className="text-xs text-slate-500 mt-3"><span className="text-emerald-400 font-semibold">Doubled</span> since 2014</p>
                </div>
                <div className="p-5 rounded-xl bg-sky-500/10 border border-sky-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe size={16} className="text-sky-400" />
                    <span className="text-xs text-sky-400 uppercase font-medium">Telehealth Share</span>
                  </div>
                  <p className="text-3xl font-bold text-white">25-30%</p>
                  <p className="text-sm text-slate-400">of visits by 2026</p>
                  <p className="text-xs text-slate-500 mt-2">Includes growing self-pay segment</p>
                  <p className="text-xs text-slate-500 mt-1"><span className="text-sky-400 font-semibold">21-24% CAGR</span> growth rate</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Market Growth Projections ($ Billions)</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={marketProjections}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="telehealth" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.3} name="U.S. Telehealth" />
                      <Area type="monotone" dataKey="urgentCare" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} name="Urgent Care" />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="flex gap-4 mt-4 justify-center">
                    <span className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-3 h-3 rounded bg-sky-500/50" /> U.S. Telehealth
                    </span>
                    <span className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-3 h-3 rounded bg-emerald-500/50" /> Urgent Care
                    </span>
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">Telehealth Service Mix (2025)</h3>
                  <p className="text-xs text-slate-500 mb-3">Commercial payer mix only — excludes Medicare, Medicaid, and self-pay</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={serviceMix} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
                        {serviceMix.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                      </Pie>
                      <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-3 mt-4 justify-center">
                    {serviceMix.map((item, i) => (
                      <span key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                        {item.name} ({item.value}%)
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BIG TECH & AI SECTION - NEW */}
          {activeSection === 'bigtech' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Big Tech's Healthcare Offensive</h2>
                <p className="text-slate-400">January 2026 marked a watershed moment. OpenAI, Anthropic, and Amazon each launched comprehensive healthcare AI platforms within two weeks.</p>
              </div>

              {/* Timeline */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">January 2026 Launch Timeline</h3>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-700" />
                  <div className="space-y-6">
                    {bigTechTimeline.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 ml-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center z-10" style={{ background: `${item.color}30`, border: `2px solid ${item.color}` }}>
                          <Sparkles size={14} style={{ color: item.color }} />
                        </div>
                        <div className="flex-1 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-slate-500">{item.date}</span>
                            <span className="px-2 py-1 rounded text-xs font-medium" style={{ background: `${item.color}20`, color: item.color }}>{item.company}</span>
                          </div>
                          <p className="text-lg font-semibold text-white">{item.product}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platform Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <Bot size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">ChatGPT Health</p>
                      <p className="text-xs text-emerald-400">OpenAI</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>EHR integration (U.S.)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>Apple Health, Peloton sync</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>GPT-5 healthcare models</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-emerald-500/20">
                    <p className="text-2xl font-bold text-emerald-400">230M+</p>
                    <p className="text-xs text-slate-500">weekly health queries</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <Brain size={20} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Claude for Healthcare</p>
                      <p className="text-xs text-amber-400">Anthropic</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-amber-400" />
                      <span>HIPAA-ready infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-amber-400" />
                      <span>CMS, ICD-10, PubMed native</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-amber-400" />
                      <span>Prior auth & claims focus</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-500/20">
                    <p className="text-2xl font-bold text-amber-400">55K+</p>
                    <p className="text-xs text-slate-500">Banner Health employees</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-500/10 to-sky-500/5 border border-sky-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center">
                      <Building size={20} className="text-sky-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Amazon Health AI</p>
                      <p className="text-xs text-sky-400">One Medical</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-sky-400" />
                      <span>End-to-end integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-sky-400" />
                      <span>Pharmacy + clinic + telehealth</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={14} className="text-sky-400" />
                      <span>Seamless appointment booking</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-sky-500/20">
                    <p className="text-2xl font-bold text-sky-400">100%</p>
                    <p className="text-xs text-slate-500">ecosystem integration</p>
                  </div>
                </div>
              </div>

              {/* Strategic Implications */}
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} className="text-rose-400" />
                  Competitive Pressures for Urgent Care
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-slate-800/50">
                    <p className="text-sm font-semibold text-rose-400 mb-2">1. Upstream Disintermediation</p>
                    <p className="text-xs text-slate-400">AI chatbots capture patient attention before they decide where to seek care. Patients may bypass urgent care entirely.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50">
                    <p className="text-sm font-semibold text-rose-400 mb-2">2. Care Navigation Competition</p>
                    <p className="text-xs text-slate-400">Big tech platforms becoming the primary interface, potentially directing patients to affiliated providers.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/50">
                    <p className="text-sm font-semibold text-rose-400 mb-2">3. Expectation Escalation</p>
                    <p className="text-xs text-slate-400">Sophisticated AI interactions raise patient expectations. Organizations without AI may seem outdated.</p>
                  </div>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center">
                  <p className="text-4xl font-bold text-violet-400">40M+</p>
                  <p className="text-sm text-slate-400 mt-1">Daily health prompts</p>
                  <p className="text-xs text-slate-500 mt-2">ChatGPT alone</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center">
                  <p className="text-4xl font-bold text-emerald-400">800M</p>
                  <p className="text-sm text-slate-400 mt-1">Total ChatGPT users</p>
                  <p className="text-xs text-slate-500 mt-2">1 in 4 ask health Qs</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center">
                  <p className="text-4xl font-bold text-amber-400">66%</p>
                  <p className="text-sm text-slate-400 mt-1">Physicians use AI</p>
                  <p className="text-xs text-slate-500 mt-2">In daily practice</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center">
                  <p className="text-4xl font-bold text-sky-400">71%</p>
                  <p className="text-sm text-slate-400 mt-1">Hospitals run AI</p>
                  <p className="text-xs text-slate-500 mt-2">EHR-integrated models</p>
                </div>
              </div>
            </div>
          )}

          {/* AI DEFLECTION SECTION - NEW */}
          {activeSection === 'deflection' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">AI Visit Deflection Analysis</h2>
                <p className="text-slate-400">AI-powered triage will significantly impact urgent care volumes—but digital-native strategies create offsetting opportunities.</p>
              </div>

              {/* Deflection Impact Table */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Projected Visit Deflection by Acuity Level (2028)</h3>
                <p className="text-sm text-slate-500 mb-4">Based on 30 visits/day average urgent care center</p>

                <div className="overflow-hidden rounded-lg border border-slate-700">
                  <table className="w-full">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase">Visit Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase">% of Volume</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase">AI Deflection Rate</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase">Visits Deflected/Day</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      {deflectionData.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-800/50">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ background: row.color }} />
                              <span className="text-sm text-white">{row.type}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-300">{row.volume}</td>
                          <td className="px-4 py-3 text-sm font-semibold" style={{ color: row.color }}>{row.deflection}</td>
                          <td className="px-4 py-3 text-sm text-slate-300">{row.visits}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-800/80">
                        <td className="px-4 py-3 text-sm font-semibold text-white">Total Impact</td>
                        <td className="px-4 py-3 text-sm font-semibold text-white">100%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-amber-400">15-25%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-amber-400">4-8 visits</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Offsetting Opportunities */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-emerald-400" />
                  Gen Z & Millennial Volume Opportunity
                </h3>
                <p className="text-sm text-slate-400 mb-4">Digitally-enabled urgent care can capture significant new volume to offset AI deflection</p>

                <div className="grid grid-cols-2 gap-4">
                  {genVolumeImpact.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div>
                        <p className="text-sm font-medium text-white">{item.factor}</p>
                        <p className="text-xs text-slate-500">{item.audience}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-emerald-400">{item.impact}</p>
                        <p className="text-xs text-slate-500">new patients</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Net Impact Analysis */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-4">✓ Digitally-Enabled Centers</h3>
                  <div className="text-center py-6">
                    <p className="text-5xl font-bold text-emerald-400">+5-15%</p>
                    <p className="text-lg text-slate-300 mt-2">Net Volume Impact by 2028</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>AI triage captures upstream patients</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>Digital scheduling attracts Gen Z/Millennials</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <span>Price transparency builds trust</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-rose-400 mb-4">✗ Without Digital Capabilities</h3>
                  <div className="text-center py-6">
                    <p className="text-5xl font-bold text-rose-400">-15-25%</p>
                    <p className="text-lg text-slate-300 mt-2">Volume Decline by 2028</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <AlertTriangle size={14} className="text-rose-400" />
                      <span>AI deflects low-acuity visits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <AlertTriangle size={14} className="text-rose-400" />
                      <span>Younger patients choose competitors</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <AlertTriangle size={14} className="text-rose-400" />
                      <span>Big tech captures upstream demand</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={24} className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">The Digital Imperative</h4>
                    <p className="text-sm text-slate-400">Gen Z and Millennials are <span className="text-sky-400 font-semibold">3x more likely</span> to choose urgent care over primary care when digital scheduling is available. By 2030, Gen Z alone will account for <span className="text-sky-400 font-semibold">$165 billion</span> in annual healthcare spending. The window for action is 12-24 months.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OPERATIONS SECTION */}
          {activeSection === 'operations' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Operational Metrics</h2>
                <p className="text-slate-400">Telehealth delivers exceptional consumer value through massive time savings, high satisfaction rates, and strong resolution for low-acuity conditions.</p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">The Time Advantage: Virtual vs In-Person</h3>
                <p className="text-sm text-slate-500 mb-6">"Door-to-door" total time comparison for urgent care visits</p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <Clock size={36} className="text-emerald-400 mb-4" />
                    <p className="text-5xl font-bold text-emerald-400 font-mono">9.38</p>
                    <p className="text-lg text-slate-300 mt-2">minutes</p>
                    <p className="text-sm text-emerald-400 font-medium mt-1">Virtual Urgent Care</p>
                    <p className="text-xs text-slate-500 mt-3">From login to resolution</p>
                  </div>

                  <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <Clock size={36} className="text-amber-400 mb-4" />
                    <p className="text-5xl font-bold text-amber-400 font-mono">70.89</p>
                    <p className="text-lg text-slate-300 mt-2">minutes</p>
                    <p className="text-sm text-amber-400 font-medium mt-1">In-Person Urgent Care</p>
                    <div className="text-xs text-slate-500 mt-3 flex gap-4">
                      <span>Wait: 22-55 min</span>
                      <span>Travel: 34-37 min</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-sky-500/10 border border-sky-500/20 text-center">
                  <p className="text-2xl font-bold text-sky-400">~61 minutes saved per visit</p>
                  <p className="text-sm text-slate-400 mt-1">Patients reclaim over an hour with each virtual visit</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-emerald-500">
                  <p className="text-4xl font-bold text-emerald-400">94-99%</p>
                  <p className="text-lg text-slate-300 mt-2">Patient Satisfaction</p>
                  <p className="text-sm text-slate-500 mt-3">Consistently high rates for virtual urgent care</p>
                </div>
<div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-indigo-500">
                  <p className="text-4xl font-bold text-indigo-400">$75-150</p>
                  <p className="text-lg text-slate-300 mt-2">Family Expense Savings</p>
                  <p className="text-sm text-slate-500 mt-3">Avoided childcare & other expenses</p>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Use Case Analysis: Where Telehealth Excels</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 uppercase mb-3">✓ Best Use Cases</h4>
                    <div className="space-y-2">
                      {['Follow-up Care (EPV > NPV)', 'Low-Acuity Conditions (UTIs, allergies, acne)', 'Prescription Refills ($15-39/visit)', 'Chronic Disease Management'].map((item, i) => (
                        <div key={i} className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-slate-300">{item}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-amber-400 uppercase mb-3">⚠ Limitations</h4>
                    <div className="space-y-2">
                      {['Initial Complex Diagnoses', 'Physical Examination Required', 'State Regulations (e.g., SC, TX)', 'High-Acuity Emergencies'].map((item, i) => (
                        <div key={i} className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm text-slate-300">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DEMOGRAPHICS SECTION */}
          {activeSection === 'demographics' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Demographics & Age Patterns</h2>
                <p className="text-slate-400">Young adults (19-40) dominate telehealth usage. Gen Z/Millennials show 30% telehealth adoption vs just 6% for Baby Boomers.</p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Telehealth Adoption by Age Group</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={ageData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                    <XAxis type="number" stroke="#64748b" fontSize={12} tickFormatter={(v) => `${v}%`} />
                    <YAxis type="category" dataKey="age" stroke="#64748b" fontSize={12} width={50} />
                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} formatter={(value) => [`${value}%`, 'Adoption Rate']} />
                    <Bar dataKey="adoption" radius={[0, 6, 6, 0]}>
                      {ageData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.fill} />))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Telemental Health Adoption by Age</h3>
                <p className="text-sm text-slate-500 mb-4">% using ALL telemental health care (among those with mental health needs)</p>
                <div className="grid grid-cols-3 gap-4">
                  {telementalHealthByAge.map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-center">
                      <p className="text-4xl font-bold font-mono" style={{ color: item.fill }}>{item.rate}%</p>
                      <p className="text-lg text-slate-300 mt-2">{item.age} years</p>
                      <p className="text-sm text-slate-500 mt-1">{item.insight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-l-4 border-l-sky-500">
                  <span className="px-2 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-medium">Gen Z + Millennials</span>
                  <h4 className="text-lg font-semibold text-white mt-3 mb-2">30% Telehealth</h4>
                  <p className="text-sm text-slate-400">Most recent healthcare visit was virtual. Expect digital-first experiences.</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-l-4 border-l-indigo-500">
                  <span className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-medium">Gen X</span>
                  <h4 className="text-lg font-semibold text-white mt-3 mb-2">~15% Telehealth</h4>
                  <p className="text-sm text-slate-400">Selective adoption. Want human backup and clear escalation paths.</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-l-4 border-l-emerald-500">
                  <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">Baby Boomers</span>
                  <h4 className="text-lg font-semibold text-white mt-3 mb-2">6% Telehealth</h4>
                  <p className="text-sm text-slate-400">Strong substitution when adopted (74%). Prefer phone and relationships.</p>
                </div>
              </div>
            </div>
          )}

          {/* PATIENTS SECTION */}
          {activeSection === 'patients' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">What Patients Want</h2>
                <p className="text-slate-400">Speed, convenience, 24/7 access—but human connection remains the #1 priority.</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-rose-500">
                  <p className="text-3xl font-bold text-rose-400">67%</p>
                  <p className="text-sm text-slate-300 mt-1">of bookers are women</p>
                  <p className="text-xs text-slate-500 mt-2">Healthcare's "power users"</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-amber-500">
                  <p className="text-3xl font-bold text-amber-400">21.5%</p>
                  <p className="text-sm text-slate-300 mt-1">discouraged w/o telehealth</p>
                  <p className="text-xs text-slate-500 mt-2">Gen Z/Millennials</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-sky-500">
                  <p className="text-3xl font-bold text-sky-400">43%</p>
                  <p className="text-sm text-slate-300 mt-1">book after hours</p>
                  <p className="text-xs text-slate-500 mt-2">24/7 access demand</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-emerald-500">
                  <p className="text-3xl font-bold text-emerald-400">84%</p>
                  <p className="text-sm text-slate-300 mt-1">influenced by reviews</p>
                  <p className="text-xs text-slate-500 mt-2">Gen Z decisions</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">What Patients Value Most</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-rose-400">1</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-white">Positive connection with doctor</span>
                          <span className="text-xs text-rose-400 font-semibold">2x importance</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500 rounded-full w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-slate-500">2</div>
                      <div className="flex-1">
                        <span className="text-sm text-slate-300">Proximity to home or work</span>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-slate-500 rounded-full w-1/2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-slate-500">3</div>
                      <div className="flex-1">
                        <span className="text-sm text-slate-300">Price transparency</span>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-slate-500 rounded-full w-[45%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">AI as Healthcare's Front Door</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/30 text-center">
                      <p className="text-2xl font-bold text-violet-400">230M+</p>
                      <p className="text-xs text-slate-400">weekly health queries</p>
                    </div>
                    <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-center">
                      <p className="text-2xl font-bold text-indigo-400">1 in 4</p>
                      <p className="text-xs text-slate-400">ChatGPT users ask health</p>
                    </div>
                    <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/30 text-center">
                      <p className="text-2xl font-bold text-sky-400">40M+</p>
                      <p className="text-xs text-slate-400">daily health prompts</p>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
                      <p className="text-2xl font-bold text-emerald-400">70%</p>
                      <p className="text-xs text-slate-400">after clinic hours</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Source: OpenAI, January 2026</p>
                </div>
              </div>
            </div>
          )}

          {/* REIMBURSEMENT SECTION */}
          {activeSection === 'reimbursement' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Reimbursement Landscape</h2>
                <p className="text-slate-400">29 states now have payment parity laws (up from 24 in late 2025). Payment parity is essential for sustainable telehealth programs.</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-emerald-500">
                  <p className="text-3xl font-bold text-emerald-400">29</p>
                  <p className="text-sm text-slate-300 mt-1">States with Payment Parity</p>
                  <p className="text-xs text-slate-500 mt-2">January 2026</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-amber-500">
                  <p className="text-3xl font-bold text-amber-400">67%</p>
                  <p className="text-sm text-slate-300 mt-1">Commercial Payers Pay Less</p>
                  <p className="text-xs text-slate-500 mt-2">For telehealth vs in-person</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-rose-500">
                  <p className="text-3xl font-bold text-rose-400">$20</p>
                  <p className="text-sm text-slate-300 mt-1">Median Payment Gap</p>
                  <p className="text-xs text-slate-500 mt-2">Less per telehealth visit</p>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 border-t-4 border-t-sky-500">
                  <p className="text-3xl font-bold text-sky-400">50</p>
                  <p className="text-sm text-slate-300 mt-1">States Cover Medicaid</p>
                  <p className="text-xs text-slate-500 mt-2">Live video telehealth</p>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Telehealth Payment Parity by State</h3>
                    <p className="text-sm text-slate-500">States requiring telehealth reimbursement at same rate as in-person (January 2026)</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-emerald-500" />
                      <span className="text-sm text-slate-400">Parity ({parityStates.length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-slate-600" />
                      <span className="text-sm text-slate-400">No Parity ({noParityStates.length})</span>
                    </div>
                  </div>
                </div>

                {/* US Map Grid */}
                <div className="grid grid-cols-11 gap-1 p-4 bg-slate-900/50 rounded-lg">
                  {/* Row 1 */}
                  <div className="col-start-1"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Maine'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>ME</div>
                  {/* Row 2 */}
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Washington'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>WA</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Montana'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>MT</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['North Dakota'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>ND</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Minnesota'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>MN</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Wisconsin'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>WI</div>
                  <div></div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Michigan'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>MI</div>
                  <div></div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['New York'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>NY</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Vermont'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>VT</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['New Hampshire'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>NH</div>
                  {/* Row 3 */}
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Oregon'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>OR</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Idaho'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>ID</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Wyoming'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>WY</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['South Dakota'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>SD</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Iowa'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>IA</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Illinois'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>IL</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Indiana'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>IN</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Ohio'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>OH</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Pennsylvania'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>PA</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['New Jersey'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>NJ</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Massachusetts'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>MA</div>
                  {/* Row 4 */}
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['California'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>CA</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Nevada'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>NV</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Utah'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>UT</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Colorado'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>CO</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Nebraska'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>NE</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Missouri'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>MO</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Kentucky'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>KY</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['West Virginia'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>WV</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Virginia'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>VA</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Maryland'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>MD</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Connecticut'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>CT</div>
                  {/* Row 5 */}
                  <div></div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Arizona'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>AZ</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['New Mexico'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>NM</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Kansas'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>KS</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Oklahoma'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>OK</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Arkansas'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>AR</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Tennessee'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>TN</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['North Carolina'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>NC</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['South Carolina'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>SC</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Delaware'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>DE</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Rhode Island'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>RI</div>
                  {/* Row 6 */}
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Alaska'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>AK</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Hawaii'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>HI</div>
                  <div></div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Texas'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>TX</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Louisiana'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>LA</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Mississippi'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>MS</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Alabama'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>AL</div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Georgia'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>GA</div>
                  <div></div>
                  <div className={`aspect-square rounded text-[10px] flex items-center justify-center font-bold ${stateParityData['Florida'] ? 'bg-emerald-500' : 'bg-slate-600'}`}>FL</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-4">✓ States with Payment Parity ({parityStates.length})</h3>
                  <div className="flex flex-wrap gap-2">
                    {parityStates.sort().map((state, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-medium">{state}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-400 mb-4">States Without Parity ({noParityStates.length})</h3>
                  <div className="flex flex-wrap gap-2">
                    {noParityStates.sort().map((state, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-slate-700 text-slate-400 text-xs font-medium">{state}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GEOGRAPHY SECTION */}
          {activeSection === 'geography' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Geographic Patterns</h2>
                <p className="text-slate-400">Urban residents adopt telehealth at nearly double the rate of rural residents. Rural urgent care centers growing 40% faster than suburban.</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Urban vs Rural Telehealth Adoption</h3>
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={geoData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                      <XAxis type="number" stroke="#64748b" fontSize={12} tickFormatter={(v) => `${v}%`} />
                      <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={12} width={70} />
                      <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} formatter={(value) => [`${value}%`, 'Adoption Rate']} />
                      <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                        {geoData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-center">
                    <span className="text-2xl font-bold text-sky-400">2x</span>
                    <span className="text-sm text-slate-400 ml-2">Urban adoption vs Rural</span>
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Urgent Care Growth by Location</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">Rural Growth</span>
                        <span className="text-xl font-bold text-emerald-400">+40%</span>
                      </div>
                      <p className="text-xs text-slate-500">Faster than suburban counterparts</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">Suburban Markets</span>
                        <span className="text-lg font-semibold text-slate-400">Saturating</span>
                      </div>
                      <p className="text-xs text-slate-500">Signs of market maturation</p>
                    </div>
                    <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">PE Rollups</span>
                        <span className="text-xl font-bold text-violet-400">+63%</span>
                      </div>
                      <p className="text-xs text-slate-500">Increase in 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STRATEGY SECTION */}
          {activeSection === 'strategy' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Growth Strategy Framework</h2>
                <p className="text-slate-400">Organizations must develop comprehensive digital strategies within 12-24 months. Those who move decisively will capture market share.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {strategicPillars.map((pillar, i) => (
                  <div key={i} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center">
                        <pillar.icon size={24} className="text-sky-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{pillar.title}</h4>
                        <p className="text-sm text-slate-400 mb-3">{pillar.description}</p>
                        <div className="space-y-1">
                          {pillar.metrics.map((metric, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs">
                              <CheckCircle size={12} className="text-emerald-400" />
                              <span className="text-slate-300">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Implementation Roadmap</h3>
                <div className="space-y-3">
                  {[
                    { phase: '1', title: 'Foundation (Months 1-6)', desc: 'AI scribes, digital check-in, cash-pay pricing', timeline: 'Quick Wins' },
                    { phase: '2', title: 'Capability Building (6-12)', desc: 'AI triage, telehealth, data integration', timeline: 'Build' },
                    { phase: '3', title: 'Differentiation (12-24)', desc: 'Hybrid care expansion, predictive analytics', timeline: 'Scale' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold">{item.phase}</div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-slate-700 text-xs text-slate-400">{item.timeline}</div>
                      <ArrowRight size={16} className="text-slate-600" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-violet-500/10 to-sky-500/10 border border-violet-500/20 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-violet-400 uppercase mb-2">Market Projection by 2030</p>
                    <p className="text-4xl font-bold text-white">$55.07B</p>
                    <p className="text-sm text-slate-400 mt-1">U.S. Urgent Care Market</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-slate-400">Telehealth: <span className="text-sky-400 font-semibold">$252B</span></p>
                    <p className="text-sm text-emerald-400 mt-1">The window for action is 12-24 months</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <footer className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <p>Sources: OpenAI, Anthropic, Amazon, Grand View Research, PwC, CMS, CCHP, Experity, AMA, Deloitte</p>
              <p>Analysis: January 2026 | Digital Healthcare Strategic Dashboard v2.0</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
