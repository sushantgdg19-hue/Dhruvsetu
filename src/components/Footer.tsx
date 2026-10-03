import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PolarRole } from '../types/polar';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (route: string, role?: PolarRole | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/5 bg-[#020617] text-slate-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Mandate */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="md" variant="dark" showSubtitle={false} onClick={() => onNavigate('/')} />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md mb-4">
              Connecting India’s polar research, knowledge and outreach.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>National Centre for Polar and Ocean Research (NCPOR)</span>
              <span aria-hidden="true">·</span>
              <span>Ministry of Earth Sciences (MoES)</span>
            </div>
          </div>

          {/* Research & Stations */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-4">
              Scientific Stations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('/stations')} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Himadri Station (Arctic)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/stations')} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Bharati & Maitri (Antarctica)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/stations')} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Himansh Station (Himalaya)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/stations')} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  IndARC Fjord Mooring
                </button>
              </li>
            </ul>
          </div>

          {/* Ecosystem Portals */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-4">
              Access Portals
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('/login', 'researcher')} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Researcher Vault
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/login', 'institution')} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Institutional Repository
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/login', 'admin')} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Peer Review & Admin
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/login', 'student')} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Student & Public Explorer
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DhruvSetu. Government of India · Autonomous Polar Research Network.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Open Access Data Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Scientific Integrity Guidelines</span>
            <span className="hover:text-slate-400 cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
