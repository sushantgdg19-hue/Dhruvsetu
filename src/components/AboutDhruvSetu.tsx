import React from 'react';
import { Compass, Shield, Award, Globe2, Microscope, Building2, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

export const AboutDhruvSetu: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-slate-700 text-xs">
      
      {/* Hero Intro */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <Logo size="lg" variant="light" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
          National Mission &amp; Vision
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
          About DhruvSetu
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          National Polar Science &amp; Knowledge Network, operating under the aegis of the Ministry of Earth Sciences (MoES) and National Centre for Polar and Ocean Research (NCPOR), Goa.
        </p>
      </div>

      {/* Tri-Polar Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-cyan-100 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
            <Globe2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">The Arctic Mandate</h3>
          <p className="leading-relaxed text-slate-600">
            Inaugurated on July 1, 2008, <strong>Himadri Station</strong> at Ny-Ålesund, Svalbard (78°55′ N) and the underwater <strong>IndARC mooring</strong> deployed in Kongsfjorden investigate how Arctic amplification reshapes global monsoon systems.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">The Antarctic Legacy</h3>
          <p className="leading-relaxed text-slate-600">
            Spanning 44 scientific expeditions since 1981, India operates <strong>Maitri</strong> (1989) in Schirmacher Oasis and modern <strong>Bharati</strong> (2012) in Larsemann Hills, drilling paleoclimate ice cores and monitoring the Southern Ocean.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-emerald-100 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <Microscope className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">The Third Pole (Himalaya)</h3>
          <p className="leading-relaxed text-slate-600">
            Perched at 13,500 ft (4,080m) in Spiti Valley, <strong>Himansh Station</strong> provides real-time glaciological mass balance telemetry to forecast river discharge and ensure freshwater security for northern India.
          </p>
        </div>
      </div>

      {/* Ecosystem Architecture */}
      <div className="p-8 bg-white rounded-3xl border border-cyan-200 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-950">Platform Governance &amp; Purpose</h3>
        <p className="leading-relaxed text-slate-600 text-sm">
          DhruvSetu ("Bridge to the Poles") serves as the digital infrastructure uniting researchers, universities, policy-makers, and schools. By providing role-segregated workspaces, it guarantees that primary empirical data remains secure and rigorously peer-verified while making educational discovery intuitive, accessible, and inspiring for every citizen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="space-y-1">
            <div className="font-bold text-slate-900 text-sm">Research Integrity</div>
            <div className="text-slate-500">Peer-reviewed dataset records with verified DOIs and sovereign archive provenance.</div>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-slate-900 text-sm">National Outreach</div>
            <div className="text-slate-500">Interactive mind maps, quizzes, and verified AI answers tailored for students and teachers.</div>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-slate-900 text-sm">Collaborative Science</div>
            <div className="text-slate-500">Connecting NCPOR, IITs, WIHG, CSIR labs, and global high-latitude polar consortia.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
