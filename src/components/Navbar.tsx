import React, { useState } from 'react';
import { LogOut, ArrowRight, Menu, X, Shield, Microscope, Building2, Globe2, Newspaper, LogIn } from 'lucide-react';
import { PolarRole } from '../types/polar';
import { Logo } from './Logo';

interface NavbarProps {
  currentRoute: string;
  authRole: PolarRole | null;
  onNavigate: (route: string, role?: PolarRole | null) => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  authRole,
  onNavigate,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getRoleIcon = (role: PolarRole) => {
    switch (role) {
      case 'researcher': return <Microscope className="w-3.5 h-3.5 text-cyan-700" />;
      case 'institution': return <Building2 className="w-3.5 h-3.5 text-emerald-700" />;
      case 'admin': return <Shield className="w-3.5 h-3.5 text-purple-700" />;
      case 'student': return <Globe2 className="w-3.5 h-3.5 text-amber-700" />;
      case 'media': return <Newspaper className="w-3.5 h-3.5 text-rose-700" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-cyan-100 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: DhruvSetu logo + name + small tagline */}
        <Logo 
          size="sm" 
          variant="light"
          onClick={() => onNavigate('/')} 
        />

        {/* Center: Clean public navigation links with generous balanced spacing */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-11 xl:gap-14 text-sm font-semibold text-slate-600">
          <button 
            onClick={() => onNavigate('/')}
            className={`hover:text-cyan-800 transition-colors py-1 ${currentRoute === '/' ? 'text-slate-950 font-bold border-b-2 border-cyan-600' : 'text-slate-600'}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('/explore')}
            className={`hover:text-cyan-800 transition-colors py-1 ${currentRoute === '/explore' ? 'text-slate-950 font-bold border-b-2 border-cyan-600' : 'text-slate-600'}`}
          >
            Explore
          </button>
          <button 
            onClick={() => onNavigate('/about')}
            className={`hover:text-cyan-800 transition-colors py-1 ${currentRoute === '/about' ? 'text-slate-950 font-bold border-b-2 border-cyan-600' : 'text-slate-600'}`}
          >
            About
          </button>
          <button 
            onClick={() => {
              if (currentRoute === '/') {
                const el = document.getElementById('insights');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else {
                onNavigate('/');
                setTimeout(() => {
                  const el = document.getElementById('insights');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-cyan-800 transition-colors py-1 text-slate-600"
          >
            News &amp; Insights
          </button>
        </nav>

        {/* Right: ONLY Login button */}
        <div className="hidden md:flex items-center">
          {authRole ? (
            <div className="flex items-center gap-2.5">
              <button 
                onClick={() => onNavigate('/dashboard', authRole)}
                className="px-4 py-2 text-xs font-bold text-slate-900 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shadow-xs"
              >
                {getRoleIcon(authRole)}
                <span className="capitalize">{authRole} Workspace</span>
              </button>
              <button 
                onClick={onLogout}
                title="Sign out"
                className="p-2 text-slate-500 hover:text-rose-600 transition-colors rounded-lg hover:bg-slate-100"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => onNavigate('/roles')}
              className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-800 hover:from-cyan-600 hover:to-blue-700 rounded-xl transition-all shadow-xs hover:shadow-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Login</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/90" />
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-950"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-cyan-100 px-6 py-5 flex flex-col gap-3 shadow-lg">
          <button 
            onClick={() => { onNavigate('/'); setMobileMenuOpen(false); }}
            className="text-left text-sm font-semibold text-slate-700 hover:text-cyan-700 py-1.5"
          >
            Home
          </button>
          <button 
            onClick={() => { onNavigate('/explore'); setMobileMenuOpen(false); }}
            className="text-left text-sm font-semibold text-slate-700 hover:text-cyan-700 py-1.5"
          >
            Explore
          </button>
          <button 
            onClick={() => { onNavigate('/about'); setMobileMenuOpen(false); }}
            className="text-left text-sm font-semibold text-slate-700 hover:text-cyan-700 py-1.5"
          >
            About
          </button>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              if (currentRoute === '/') {
                const el = document.getElementById('insights');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else {
                onNavigate('/');
                setTimeout(() => {
                  const el = document.getElementById('insights');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-left text-sm font-semibold text-slate-700 hover:text-cyan-700 py-1.5"
          >
            News &amp; Insights
          </button>
          
          <div className="pt-3 border-t border-slate-100">
            {authRole ? (
              <div className="flex justify-between items-center py-2">
                <button 
                  onClick={() => { onNavigate('/dashboard', authRole); setMobileMenuOpen(false); }}
                  className="text-sm font-semibold text-cyan-800 flex items-center gap-2"
                >
                  {getRoleIcon(authRole)}
                  <span className="capitalize">{authRole} Workspace</span>
                </button>
                <button 
                  onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                  className="text-xs text-rose-600 hover:underline font-semibold"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-1">
                <button 
                  onClick={() => { onNavigate('/roles'); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-800 rounded-lg shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span>Login</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/90" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
