import React, { useState } from 'react';
import { 
  Building2, Users, FileText, Database, PlusCircle, 
  MapPin, CheckCircle, ShieldCheck, ArrowUpRight, Search, 
  Trash2, LayoutDashboard, Map, BarChart3, Brain, Image as ImageIcon 
} from 'lucide-react';
import { INSTITUTIONS_LIST, SCIENTISTS_LIST, POLAR_EXPEDITIONS, INITIAL_PAPERS } from '../data/polarData';
import { ScientistProfile } from '../types/polar';
import { AskPolarAI } from './AskPolarAI';

export const InstitutionDashboard: React.FC = () => {
  const [activeNav, setActiveNav] = useState<
    'dashboard' | 'profile' | 'researchers' | 'projects' | 'expeditions' | 
    'publications' | 'datasets' | 'scientists' | 'institutions' | 'search' | 
    'contributions' | 'analytics' | 'polar-ai' | 'visual-studio'
  >('dashboard');

  const [scientists, setScientists] = useState<ScientistProfile[]>(SCIENTISTS_LIST);
  const [selectedInstId, setSelectedInstId] = useState<string>('inst-ncpor');
  const [newSciModal, setNewSciModal] = useState(false);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [email, setEmail] = useState('');

  const currentInst = INSTITUTIONS_LIST.find(i => i.id === selectedInstId) || INSTITUTIONS_LIST[0];

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'profile', label: 'Institution Profile', icon: <Building2 className="w-4 h-4" /> },
    { id: 'researchers', label: 'Researchers', icon: <Users className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FileText className="w-4 h-4" /> },
    { id: 'expeditions', label: 'Expeditions', icon: <Map className="w-4 h-4" /> },
    { id: 'publications', label: 'Publications', icon: <FileText className="w-4 h-4" /> },
    { id: 'datasets', label: 'Datasets', icon: <Database className="w-4 h-4" /> },
    { id: 'scientists', label: 'Search Scientists', icon: <Search className="w-4 h-4" /> },
    { id: 'institutions', label: 'Search Institutions', icon: <Building2 className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'polar-ai', label: 'Polar AI', icon: <Brain className="w-4 h-4" /> },
    { id: 'visual-studio', label: 'Visual Studio', icon: <ImageIcon className="w-4 h-4" /> },
  ];

  const handleAddScientist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newSci: ScientistProfile = {
      id: `sci-${Date.now()}`,
      name,
      designation: designation || 'Project Scientist',
      institution: currentInst.name,
      specialization: specialization || 'Polar Cryospheric Science',
      expeditionsCount: 1,
      regions: ['Antarctic'],
      publicationsCount: 2,
      email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@${currentInst.shortName.toLowerCase()}.res.in`,
      orcid: '0000-0003-9182-4412'
    };

    setScientists([newSci, ...scientists]);
    setNewSciModal(false);
    setName('');
    setDesignation('');
    setSpecialization('');
    setEmail('');
  };

  const handleRemoveScientist = (id: string) => {
    setScientists(scientists.filter(s => s.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar Architecture */}
      <aside className="w-full md:w-64 bg-slate-900/90 rounded-2xl border border-white/10 p-4 space-y-6 flex-shrink-0">
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">
            Workspace
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Institution Workspace</span>
          </div>
        </div>

        <nav className="space-y-1">
          {sidebarLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveNav(link.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                activeNav === link.id
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="pt-4 border-t border-white/5">
          <button
            onClick={() => setNewSciModal(true)}
            className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Enroll Researcher</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 w-full space-y-6">
        
        {/* Header with Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {currentInst.leadMinistry}
            </span>
            <h2 className="text-2xl font-bold text-white">
              {currentInst.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <label className="text-xs text-slate-400">Nodal Center:</label>
            <select
              value={selectedInstId}
              onChange={e => setSelectedInstId(e.target.value)}
              className="bg-slate-900 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500"
            >
              {INSTITUTIONS_LIST.map(inst => (
                <option key={inst.id} value={inst.id}>
                  {inst.shortName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dashboard Overview */}
        {activeNav === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Affiliated Researchers</div>
                <div className="text-2xl font-bold font-mono text-white">{scientists.length}</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">12 in field deployment</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Active Projects</div>
                <div className="text-2xl font-bold font-mono text-white">{currentInst.activeProjects}</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">MoES / DST sponsored</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Allocated Berths</div>
                <div className="text-2xl font-bold font-mono text-white">24</div>
                <div className="text-[10px] text-purple-400 mt-0.5">44th ISEA &amp; Himadri</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Established</div>
                <div className="text-2xl font-bold font-mono text-amber-400">{currentInst.established}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{currentInst.location}</div>
              </div>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Institutional Researchers (CRUD Allowed)</h3>
                <button
                  onClick={() => setNewSciModal(true)}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Add Scientist</span>
                </button>
              </div>

              <div className="bg-slate-900 rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/5">
                    <tr>
                      <th className="px-4 py-3">Scientist Name</th>
                      <th className="px-4 py-3">Designation</th>
                      <th className="px-4 py-3">Specialization</th>
                      <th className="px-4 py-3">Expeditions</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {scientists.map(sci => (
                      <tr key={sci.id} className="hover:bg-white/5">
                        <td className="px-4 py-3 font-semibold text-white">{sci.name}</td>
                        <td className="px-4 py-3 text-slate-400">{sci.designation}</td>
                        <td className="px-4 py-3 text-cyan-300">{sci.specialization}</td>
                        <td className="px-4 py-3 font-mono">{sci.expeditionsCount}</td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => handleRemoveScientist(sci.id)}
                            className="p-1 text-slate-400 hover:text-rose-400"
                            title="Remove researcher"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Profile */}
        {activeNav === 'profile' && (
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4 max-w-2xl text-xs text-slate-300">
            <h3 className="text-base font-bold text-white">{currentInst.name}</h3>
            <p className="leading-relaxed">
              Operating under the {currentInst.leadMinistry}, {currentInst.shortName} serves as a key pillar in India's polar and oceanographic sciences, orchestrating Arctic, Antarctic, and Himalayan expeditions.
            </p>
            <div className="pt-2 space-y-2">
              <span className="font-semibold text-slate-400 block uppercase text-[10px]">Specialization Mandates:</span>
              <div className="flex flex-wrap gap-2 text-xs">
                {currentInst.specialties.map((sp, idx) => (
                  <span key={idx} className="bg-slate-900 px-3 py-1 rounded-lg border border-white/10 text-cyan-300">
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Researchers & Scientists Management */}
        {(activeNav === 'researchers' || activeNav === 'scientists') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Affiliated Research Staff</h3>
              <button
                onClick={() => setNewSciModal(true)}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Enroll Researcher</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scientists.map(sci => (
                <div key={sci.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{sci.name}</h4>
                      <p className="text-xs text-emerald-400">{sci.designation}</p>
                      <p className="text-xs text-slate-400">{sci.institution}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveScientist(sci.id)}
                      className="p-1 text-slate-400 hover:text-rose-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                    {sci.specialization}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5 font-mono">
                    <span>Expeditions: {sci.expeditionsCount}</span>
                    <span>{sci.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Institutions Search */}
        {activeNav === 'institutions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INSTITUTIONS_LIST.map(inst => (
              <div key={inst.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs">
                <span className="text-[10px] font-mono text-cyan-400 uppercase">{inst.leadMinistry}</span>
                <h4 className="text-sm font-bold text-white">{inst.name} ({inst.shortName})</h4>
                <p className="text-slate-400">{inst.location}</p>
                <div className="pt-2 flex justify-between border-t border-white/5 text-slate-300">
                  <span>Projects: {inst.activeProjects}</span>
                  <span>Researchers: {inst.affiliatedScientists}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Analytics */}
        {activeNav === 'analytics' && (
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
            <h4 className="text-base font-bold text-white">Institutional Polar Output Analytics</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-900 rounded-xl border border-white/5 text-center">
                <span className="text-2xl font-bold font-mono text-cyan-400">42%</span>
                <span className="text-xs text-slate-400 block mt-1">Antarctic Field Work</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-white/5 text-center">
                <span className="text-2xl font-bold font-mono text-emerald-400">34%</span>
                <span className="text-xs text-slate-400 block mt-1">Himalayan Cryosphere</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-white/5 text-center">
                <span className="text-2xl font-bold font-mono text-blue-400">24%</span>
                <span className="text-xs text-slate-400 block mt-1">Arctic IndARC Campaigns</span>
              </div>
            </div>
          </div>
        )}

        {/* Polar AI */}
        {activeNav === 'polar-ai' && (
          <AskPolarAI role="institution" />
        )}

        {/* Visual Studio */}
        {activeNav === 'visual-studio' && (
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
            <h4 className="text-base font-bold text-white">Institutional Media &amp; Graphic Repository</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-video relative bg-slate-950">
                <img
                  src="/src/assets/images/antarctic_bharati_station_1790962287391.jpg"
                  alt="Bharati Station"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded">
                  Bharati Station Base
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-video relative bg-slate-950">
                <img
                  src="/src/assets/images/himalaya_himansh_station_1790962298987.jpg"
                  alt="Himansh Station"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded">
                  Himansh Spiti Valley Camp
                </span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Add Scientist Modal */}
      {newSciModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white">Enroll Affiliated Researcher</h3>
            <form onSubmit={handleAddScientist} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Dr. Ananya Sen"
                  className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Designation</label>
                <input
                  type="text"
                  value={designation}
                  onChange={e => setDesignation(e.target.value)}
                  placeholder="e.g. Scientist-D / Associate Professor"
                  className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Primary Specialization</label>
                <input
                  type="text"
                  value={specialization}
                  onChange={e => setSpecialization(e.target.value)}
                  placeholder="e.g. Ice Sheet Modeling & Radar"
                  className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">Official Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="asen@ncpor.res.in"
                  className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setNewSciModal(false)}
                  className="px-3.5 py-1.5 text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold"
                >
                  Enroll Scientist
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
