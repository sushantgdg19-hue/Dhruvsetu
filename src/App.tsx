import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { RoleSelection } from './components/RoleSelection';
import { LoginPage } from './components/LoginPage';
import { PolarStationViewer } from './components/PolarStationViewer';
import { MindMapViewer } from './components/MindMapViewer';
import { AskPolarAI } from './components/AskPolarAI';
import { ExploreView } from './components/ExploreView';
import { AboutDhruvSetu } from './components/AboutDhruvSetu';
import { ResearcherDashboard } from './components/ResearcherDashboard';
import { InstitutionDashboard } from './components/InstitutionDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { StudentDashboard } from './components/StudentDashboard';
import { MediaDashboard } from './components/MediaDashboard';
import { PolarRole } from './types/polar';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [authRole, setAuthRole] = useState<PolarRole | null>(null);
  const [pendingRole, setPendingRole] = useState<PolarRole>('student');

  const navigate = (route: string, role?: PolarRole | null) => {
    setCurrentRoute(route);
    if (role !== undefined && role !== null) {
      setPendingRole(role);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (role: PolarRole) => {
    setAuthRole(role);
    setCurrentRoute('/dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setAuthRole(null);
    setCurrentRoute('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentRoute) {
      case '/':
        return <LandingPage onNavigate={navigate} />;

      case '/explore':
        return <ExploreView onNavigate={navigate} />;
      
      case '/stations':
        return (
          <div className="max-w-7xl mx-auto px-6 py-10">
            <PolarStationViewer onSelectStation={(st) => navigate('/ask-ai')} />
          </div>
        );

      case '/mindmap':
        return (
          <div className="max-w-7xl mx-auto px-6 py-10">
            <MindMapViewer onAskAI={(topic) => navigate('/ask-ai')} />
          </div>
        );

      case '/ask-ai':
        return (
          <div className="max-w-5xl mx-auto px-6 py-10">
            <AskPolarAI role={authRole} />
          </div>
        );

      case '/about':
        return <AboutDhruvSetu />;

      case '/roles':
        return <RoleSelection onSelectRole={(role) => navigate('/login', role)} />;

      case '/login':
        return (
          <LoginPage
            role={pendingRole}
            onLoginSuccess={handleLoginSuccess}
            onBackToRoles={() => navigate('/roles')}
          />
        );

      case '/dashboard':
        if (!authRole) {
          return <RoleSelection onSelectRole={(role) => navigate('/login', role)} />;
        }
        return (
          <div className="max-w-7xl mx-auto px-6 py-10">
            {authRole === 'researcher' && <ResearcherDashboard />}
            {authRole === 'institution' && <InstitutionDashboard />}
            {authRole === 'admin' && <AdminDashboard />}
            {authRole === 'student' && <StudentDashboard />}
            {authRole === 'media' && <MediaDashboard />}
          </div>
        );

      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4FAFD] text-slate-800 flex flex-col justify-between selection:bg-cyan-100 selection:text-cyan-900 transition-colors">
      {/* Light Polar Ice Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/50 via-[#F4FAFD] to-[#EAF5FA]" />
        <div className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-b from-cyan-100/30 via-sky-50/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0284c70a_1px,transparent_1px)] [background-size:36px_36px] opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar
          currentRoute={currentRoute}
          authRole={authRole}
          onNavigate={navigate}
          onLogout={handleLogout}
        />

        <main className="flex-1">
          {renderContent()}
        </main>

        <Footer onNavigate={navigate} />
      </div>
    </div>
  );
}
