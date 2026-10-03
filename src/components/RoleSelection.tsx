import React from 'react';
import { Microscope, Building2, Shield, Globe2, Newspaper, ArrowRight, Check } from 'lucide-react';
import { PolarRole } from '../types/polar';

interface RoleSelectionProps {
  onSelectRole: (role: PolarRole) => void;
}

export const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  const roles = [
    {
      id: 'researcher' as PolarRole,
      title: 'Researcher',
      subtitle: 'Field Scientists, Glaciologists & PIs',
      desc: 'Research, contribute, and manage polar knowledge. Deposit datasets, manage preprints, track expeditions, and search verified scientists.',
      icon: <Microscope className="w-6 h-6 text-cyan-700" />,
      themeBorder: 'hover:border-cyan-400',
      themeGlow: 'hover:shadow-md',
      badge: 'Scientific Research',
      badgeColor: 'text-cyan-800 bg-cyan-50 border-cyan-200',
      btnColor: 'bg-cyan-700 hover:bg-cyan-800 text-white',
      features: [
        'Deposit & manage research papers with DOI',
        'Access raw CTD, AWS & ice-core datasets',
        'Directory search of Indian polar scientists'
      ]
    },
    {
      id: 'institution' as PolarRole,
      title: 'Institution',
      subtitle: 'NCPOR, IITs, WIHG, CSIR-NIO & Universities',
      desc: 'Manage institutional research, projects, and contributions. Oversee affiliated researcher deployments and track expedition berths.',
      icon: <Building2 className="w-6 h-6 text-emerald-700" />,
      themeBorder: 'hover:border-emerald-400',
      themeGlow: 'hover:shadow-md',
      badge: 'Institutional Governance',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      btnColor: 'bg-emerald-700 hover:bg-emerald-800 text-white',
      features: [
        'Institutional researcher roster & field status',
        'Expedition berths & grant oversight',
        'Institutional repository governance'
      ]
    },
    {
      id: 'admin' as PolarRole,
      title: 'Admin',
      subtitle: 'National Polar Oversight & Verification Cell',
      desc: 'Manage, validate, review, and publish the knowledge ecosystem. Audit outreach evidence, manage credentials, and control data syndication.',
      icon: <Shield className="w-6 h-6 text-purple-700" />,
      themeBorder: 'hover:border-purple-400',
      themeGlow: 'hover:shadow-md',
      badge: 'National Oversight',
      badgeColor: 'text-purple-800 bg-purple-50 border-purple-200',
      btnColor: 'bg-purple-700 hover:bg-purple-800 text-white',
      features: [
        'AI evidence verification pipeline (Gemini)',
        'Credential validation for expedition staff',
        'National public data release controls'
      ]
    },
    {
      id: 'student' as PolarRole,
      title: 'Student / Public',
      subtitle: 'Curious Citizens, Learners & Educators',
      desc: 'Explore, learn, ask, and discover polar science. Navigate the interactive polar mind map, explore stations, and test knowledge through quizzes.',
      icon: <Globe2 className="w-6 h-6 text-amber-600" />,
      themeBorder: 'hover:border-amber-400',
      themeGlow: 'hover:shadow-md',
      badge: 'Public Discovery',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
      btnColor: 'bg-amber-600 hover:bg-amber-700 text-white',
      features: [
        'Interactive Polar Science Mind Map',
        'Real-time station telemetry & stories',
        'Ask Polar AI with source grounding'
      ]
    },
    {
      id: 'media' as PolarRole,
      title: 'Media',
      subtitle: 'Journalists, Science Communicators & Media Teams',
      desc: 'Discover verified polar research and turn scientific knowledge into accessible public stories, carousels, explainers, and video drafts.',
      icon: <Newspaper className="w-6 h-6 text-rose-600" />,
      themeBorder: 'hover:border-rose-400',
      themeGlow: 'hover:shadow-md',
      badge: 'Science Communication',
      badgeColor: 'text-rose-800 bg-rose-50 border-rose-200',
      btnColor: 'bg-rose-600 hover:bg-rose-700 text-white',
      features: [
        'Discover approved publications & reports',
        'Content Studio: Articles, posts & explainers',
        'Verified source attribution & provenance'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 text-slate-800">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-cyan-200 text-xs font-bold text-cyan-800 uppercase tracking-wider shadow-xs">
          Access Ecosystem
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950">
          Enter DhruvSetu Portal
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Choose how you participate in India’s polar knowledge ecosystem. Your role determines your access, tools, and dedicated workspace.
        </p>
      </div>

      {/* Desktop 3 + 2 Balanced Layout */}
      <div className="space-y-6">
        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.slice(0, 3).map(role => (
            <div
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className={`group bg-white rounded-2xl border border-cyan-100 p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md ${role.themeBorder}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {role.icon}
                  </div>
                  <span className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-md border ${role.badgeColor}`}>
                    {role.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    {role.subtitle}
                  </p>
                </div>

                <p className="text-xs leading-relaxed text-slate-600">
                  {role.desc}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {role.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs ${role.btnColor}`}>
                  <span>Continue as {role.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 2 cards (Student/Public and Media) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {roles.slice(3, 5).map(role => (
            <div
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className={`group bg-white rounded-2xl border border-cyan-100 p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md ${role.themeBorder}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {role.icon}
                  </div>
                  <span className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-md border ${role.badgeColor}`}>
                    {role.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    {role.subtitle}
                  </p>
                </div>

                <p className="text-xs leading-relaxed text-slate-600">
                  {role.desc}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {role.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs ${role.btnColor}`}>
                  <span>Continue as {role.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
