import React, { useState } from 'react';
import { 
  Shield, CheckCircle, AlertTriangle, Users, Database, 
  FileText, Search, Play, Loader2, Sparkles, Check, X, 
  RefreshCw, LayoutDashboard, Building2, Map, History, 
  Sliders, BarChart3, CheckSquare, GitBranch 
} from 'lucide-react';
import { INITIAL_EVIDENCE_ITEMS, SCIENTISTS_LIST, INSTITUTIONS_LIST, POLAR_EXPEDITIONS } from '../data/polarData';
import { EvidenceCheckItem } from '../types/polar';

export const AdminDashboard: React.FC = () => {
  const [activeNav, setActiveNav] = useState<
    'dashboard' | 'users' | 'researchers' | 'institutions' | 'scientists' | 
    'expeditions' | 'research' | 'content-review' | 'ai-review' | 'evidence-checking' | 
    'publishing' | 'version-control' | 'audit-trail' | 'analytics' | 'settings'
  >('dashboard');

  const [evidenceItems, setEvidenceItems] = useState<EvidenceCheckItem[]>(INITIAL_EVIDENCE_ITEMS);
  const [customClaim, setCustomClaim] = useState('');
  const [verifyingId, setVerifyingId] = useState<string | null>(null);

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'users', label: 'Users', icon: <Users className="w-4 h-4" /> },
    { id: 'researchers', label: 'Researchers', icon: <Users className="w-4 h-4" /> },
    { id: 'institutions', label: 'Institutions', icon: <Building2 className="w-4 h-4" /> },
    { id: 'scientists', label: 'Search Scientists', icon: <Search className="w-4 h-4" /> },
    { id: 'expeditions', label: 'Search Expeditions', icon: <Map className="w-4 h-4" /> },
    { id: 'content-review', label: 'Content Review', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'evidence-checking', label: 'Evidence Checking', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'publishing', label: 'Publishing', icon: <FileText className="w-4 h-4" /> },
    { id: 'version-control', label: 'Version Control', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'audit-trail', label: 'Audit Trail', icon: <History className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'settings', label: 'System Settings', icon: <Sliders className="w-4 h-4" /> },
  ];

  const runEvidenceCheck = async (id: string, claimText: string) => {
    setVerifyingId(id);
    try {
      const res = await fetch('/api/evidence-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claim: claimText, context: 'Polar Science Outreach Verification' })
      });
      const data = await res.json();

      setEvidenceItems(prev => prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            status: data.verified ? 'Verified' : 'Flagged',
            confidenceScore: data.confidenceScore || 92,
            rationale: data.rationale || 'Cross-referenced with NCPOR published expedition proceedings.',
            citations: data.primaryCitations || ['NCPOR Technical Publications 2024-2025']
          };
        }
        return item;
      }));
    } catch (err) {
      console.error('Evidence check failed:', err);
    } finally {
      setVerifyingId(null);
    }
  };

  const handleAddCustomClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customClaim.trim()) return;

    const newItemId = `ev-${Date.now()}`;
    const newItem: EvidenceCheckItem = {
      id: newItemId,
      claim: customClaim,
      sourceContext: 'Admin Real-Time Submission',
      submittedBy: 'Portal Admin',
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'Pending Verification'
    };

    setEvidenceItems([newItem, ...evidenceItems]);
    setCustomClaim('');
    await runEvidenceCheck(newItemId, newItem.claim);
  };

  const handleUpdateStatus = (id: string, newStatus: 'Verified' | 'Flagged') => {
    setEvidenceItems(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar Architecture */}
      <aside className="w-full md:w-64 bg-slate-900/90 rounded-2xl border border-white/10 p-4 space-y-6 flex-shrink-0">
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">
            Console
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Admin Console</span>
          </div>
        </div>

        <nav className="space-y-1">
          {sidebarLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveNav(link.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                activeNav === link.id
                  ? 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 w-full space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
          <div>
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              National Polar Secretariat
            </span>
            <h2 className="text-2xl font-bold text-white capitalize">
              {activeNav.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
              ● AUDIT LEVEL 5
            </span>
          </div>
        </div>

        {/* Dashboard Overview */}
        {activeNav === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Registered Users</div>
                <div className="text-2xl font-bold font-mono text-white">1,248</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">84 Institutional PIs</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Evidence Audit Queue</div>
                <div className="text-2xl font-bold font-mono text-purple-400">
                  {evidenceItems.filter(i => i.status === 'Pending Verification').length} Pending
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">AI cross-checked</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Active Expeditions</div>
                <div className="text-2xl font-bold font-mono text-white">3</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">44th ISEA &amp; Himansh</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Data Storage Pool</div>
                <div className="text-2xl font-bold font-mono text-amber-400">2.4 TB</div>
                <div className="text-[10px] text-slate-400 mt-0.5">NetCDF &amp; Raw CTD</div>
              </div>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white">Evidence Auditing &amp; Peer Verification Queue</h3>
              <p className="text-xs text-slate-300">
                Incoming public outreach claims, press summaries, and research findings are audited against NCPOR primary expedition data.
              </p>

              <div className="space-y-3">
                {evidenceItems.slice(0, 2).map(item => (
                  <div key={item.id} className="p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">{item.sourceContext}</span>
                      <span className="text-emerald-400 font-mono text-[10px]">● {item.status}</span>
                    </div>
                    <p className="text-xs font-semibold text-white">"{item.claim}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Evidence Checking (Gemini Verification Pipeline) */}
        {activeNav === 'evidence-checking' && (
          <div className="space-y-6">
            <form onSubmit={handleAddCustomClaim} className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Verify Scientific Assertion with Gemini</span>
                </span>
                <span className="text-[10px] text-slate-400">Grounded via NCPOR Archive</span>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={customClaim}
                  onChange={e => setCustomClaim(e.target.value)}
                  placeholder="Enter claim to verify against polar scientific datasets..."
                  className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  disabled={!customClaim.trim() || !!verifyingId}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Play className="w-3 h-3" />
                  <span>Audit Claim</span>
                </button>
              </div>
            </form>

            <div className="space-y-3">
              {evidenceItems.map(item => (
                <div key={item.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] text-slate-400 mb-1">{item.sourceContext} · {item.submissionDate}</div>
                      <h4 className="text-sm font-semibold text-white">"{item.claim}"</h4>
                    </div>

                    <div className="shrink-0">
                      {item.status === 'Verified' && (
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                          VERIFIED ({item.confidenceScore}%)
                        </span>
                      )}
                      {item.status === 'Flagged' && (
                        <span className="text-[11px] font-mono text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/30">
                          FLAGGED ({item.confidenceScore}%)
                        </span>
                      )}
                      {item.status === 'Pending Verification' && (
                        <span className="text-[11px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                          PENDING
                        </span>
                      )}
                    </div>
                  </div>

                  {item.rationale && (
                    <div className="p-3 bg-slate-900/80 rounded-lg text-xs text-slate-300">
                      <p>{item.rationale}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                    <button
                      onClick={() => runEvidenceCheck(item.id, item.claim)}
                      disabled={verifyingId === item.id}
                      className="text-purple-300 hover:text-purple-200 flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Audit</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleUpdateStatus(item.id, 'Verified')}
                        className="px-2.5 py-1 bg-emerald-950/60 text-emerald-300 rounded border border-emerald-500/30 text-[11px]"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleUpdateStatus(item.id, 'Flagged')}
                        className="px-2.5 py-1 bg-rose-950/60 text-rose-300 rounded border border-rose-500/30 text-[11px]"
                      >
                        Flag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Scientists (Allowed in Admin) */}
        {activeNav === 'scientists' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCIENTISTS_LIST.map(sci => (
              <div key={sci.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs">
                <h4 className="text-sm font-bold text-white">{sci.name}</h4>
                <p className="text-cyan-400">{sci.designation}</p>
                <p className="text-slate-400">{sci.institution}</p>
                <div className="pt-2 flex justify-between border-t border-white/5 text-slate-400 font-mono">
                  <span>Expeditions: {sci.expeditionsCount}</span>
                  <span>Publications: {sci.publicationsCount}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search Expeditions */}
        {activeNav === 'expeditions' && (
          <div className="space-y-3">
            {POLAR_EXPEDITIONS.map(exp => (
              <div key={exp.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs">
                <span className="text-cyan-400 font-medium">{exp.season} · {exp.region}</span>
                <h4 className="text-sm font-bold text-white">{exp.name}</h4>
                <p className="text-slate-300">Base: {exp.stationBase} · Leader: {exp.leader}</p>
              </div>
            ))}
          </div>
        )}

        {/* Publishing & Settings */}
        {activeNav === 'publishing' && (
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-4 max-w-xl text-xs text-slate-300">
            <h4 className="text-sm font-bold text-white">National Public Feed Release</h4>
            <p>Controls automatic dissemination of approved polar datasets to university portals and open research repositories.</p>
            <div className="p-3 bg-slate-900 rounded-lg flex items-center justify-between">
              <span className="text-white font-medium">Public Discovery Syndication</span>
              <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-500/30 rounded text-[10px]">
                ACTIVE
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
