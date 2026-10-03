import React, { useState } from 'react';
import { Compass, Shield, Microscope, Building2, Globe2, Newspaper, ArrowRight, UserCheck, KeyRound } from 'lucide-react';
import { PolarRole } from '../types/polar';
import officialLogoImg from '../assets/images/dhruvsetu_official_logo.png';

interface LoginPageProps {
  role: PolarRole;
  onLoginSuccess: (role: PolarRole) => void;
  onBackToRoles: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  role,
  onLoginSuccess,
  onBackToRoles,
}) => {
  const [identifier, setIdentifier] = useState(
    role === 'researcher' ? 'dr.parmanand@ncpor.res.in' :
    role === 'institution' ? 'inst-ncpor-admin@moes.gov.in' :
    role === 'admin' ? 'admin.oversight@dhruvsetu.gov.in' :
    role === 'media' ? 'science.editor@pib.gov.in' :
    'student.explorer@delhi.ac.in'
  );
  const [credential, setCredential] = useState('••••••••••••');

  const getRoleConfig = () => {
    switch (role) {
      case 'researcher':
        return {
          title: 'Researcher Vault Sign In',
          subtitle: 'National Polar Scientist & PI Access',
          label: 'Institutional Email / ORCID iD',
          placeholder: 'name@ncpor.res.in or 0000-0002-...',
          icon: <Microscope className="w-5 h-5 text-cyan-700" />,
          accent: 'border-cyan-300 text-cyan-800 bg-cyan-50',
          btnBg: 'bg-cyan-700 hover:bg-cyan-800',
        };
      case 'institution':
        return {
          title: 'Institutional Portal Access',
          subtitle: 'Nodal Institutes (NCPOR, IITs, WIHG, CSIR-NIO)',
          label: 'Institutional Portal ID / Lead Email',
          placeholder: 'admin@ncpor.res.in',
          icon: <Building2 className="w-5 h-5 text-emerald-700" />,
          accent: 'border-emerald-300 text-emerald-800 bg-emerald-50',
          btnBg: 'bg-emerald-700 hover:bg-emerald-800',
        };
      case 'admin':
        return {
          title: 'National Oversight Authentication',
          subtitle: 'Evidence Audit & Credential Approval',
          label: 'National Admin ID',
          placeholder: 'admin.secretariat@dhruvsetu.gov.in',
          icon: <Shield className="w-5 h-5 text-purple-700" />,
          accent: 'border-purple-300 text-purple-800 bg-purple-50',
          btnBg: 'bg-purple-700 hover:bg-purple-800',
        };
      case 'media':
        return {
          title: 'Media Workspace Access',
          subtitle: 'Discover verified polar research and transform trusted science into public stories.',
          label: 'Media ID / Organization Email',
          placeholder: 'journalist@sciencepress.in or editor@media.org',
          icon: <Newspaper className="w-5 h-5 text-rose-700" />,
          accent: 'border-rose-300 text-rose-800 bg-rose-50',
          btnBg: 'bg-rose-700 hover:bg-rose-800',
        };
      case 'student':
      default:
        return {
          title: 'Polar Discovery & Learning Access',
          subtitle: 'Curious Public & Student Explorer',
          label: 'Email or Mobile (Optional for OTP)',
          placeholder: 'learner@school.edu.in',
          icon: <Globe2 className="w-5 h-5 text-amber-700" />,
          accent: 'border-amber-300 text-amber-800 bg-amber-50',
          btnBg: 'bg-amber-600 hover:bg-amber-700',
        };
    }
  };

  const config = getRoleConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(role);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-12 text-slate-800">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-cyan-200 shadow-md">
        
        {/* Left Visual Info Stage */}
        <div className="md:col-span-5 p-8 flex flex-col justify-between bg-gradient-to-b from-[#EAF5FA] to-white border-r border-cyan-100 relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <div className="rounded-2xl overflow-hidden border border-cyan-200/80 shadow-xs bg-white p-2">
              <img
                src={officialLogoImg}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== 'https://file.tmper.app/image_1790964321020_739a8a3e.png') {
                    target.src = 'https://file.tmper.app/image_1790964321020_739a8a3e.png';
                  }
                }}
                alt="DhruvSetu"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            <div className="pt-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border ${config.accent} text-xs font-bold mb-3 shadow-xs`}>
                {config.icon}
                <span className="capitalize">{role} Role</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">{config.title}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {config.subtitle}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-cyan-100 text-[11px] text-slate-500 font-mono space-y-1">
            <div>DhruvSetu Sovereign Security Gateway</div>
            <div>Ministry of Earth Sciences · NCPOR</div>
          </div>
        </div>

        {/* Right Form Stage */}
        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-950">Authenticate Credentials</h2>
            <p className="text-xs text-slate-600">
              Enter your authorized identifier to access the {role} workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                {config.label}
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={config.placeholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-hidden focus:border-cyan-600 focus:bg-white transition-all shadow-2xs font-mono"
                />
                <UserCheck className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                Security Passkey / OTP
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-hidden focus:border-cyan-600 focus:bg-white transition-all shadow-2xs font-mono"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1 text-slate-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-600 focus:ring-0" />
                <span>Keep session active</span>
              </label>
              <span className="text-cyan-700 font-semibold cursor-pointer hover:underline">Support &amp; Verification</span>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className={`w-full py-3 px-4 ${config.btnBg} text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-all`}
              >
                <span>Enter {role.charAt(0).toUpperCase() + role.slice(1)} Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={onBackToRoles}
              className="text-slate-500 hover:text-cyan-700 transition-colors font-semibold"
            >
              ← Choose Different Role
            </button>
            <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              Active Security Guard
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
