import React, { useState } from 'react';
import { 
  LayoutDashboard, FileText, Database, Map, Search, Network, 
  Brain, Image as ImageIcon, User, PlusCircle, Trash2, Edit, 
  ExternalLink, Building2, CheckCircle2, ChevronRight, X 
} from 'lucide-react';
import { INITIAL_PAPERS, POLAR_DATASETS, POLAR_EXPEDITIONS, SCIENTISTS_LIST, INSTITUTIONS_LIST } from '../data/polarData';
import { ResearchPaper, PolarRegion } from '../types/polar';
import { AskPolarAI } from './AskPolarAI';

export const ResearcherDashboard: React.FC = () => {
  const [activeNav, setActiveNav] = useState<
    'dashboard' | 'my-research' | 'papers' | 'datasets' | 'expeditions' | 
    'scientists' | 'institutions' | 'search' | 'network' | 'polar-ai' | 'visual-studio' | 'profile'
  >('dashboard');

  const [papers, setPapers] = useState<ResearchPaper[]>(INITIAL_PAPERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [scientistQuery, setScientistQuery] = useState('');
  const [institutionQuery, setInstitutionQuery] = useState('');
  
  // Modal for CREATE record
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthors, setNewAuthors] = useState('');
  const [newRegion, setNewRegion] = useState<PolarRegion>('Antarctic');
  const [newStation, setNewStation] = useState('Bharati Station');
  const [newJournal, setNewJournal] = useState('');
  const [newDoi, setNewDoi] = useState('');
  const [newAbstract, setNewAbstract] = useState('');

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'my-research', label: 'My Research', icon: <FileText className="w-4 h-4" /> },
    { id: 'papers', label: 'Papers', icon: <FileText className="w-4 h-4" /> },
    { id: 'datasets', label: 'Datasets', icon: <Database className="w-4 h-4" /> },
    { id: 'expeditions', label: 'Expeditions', icon: <Map className="w-4 h-4" /> },
    { id: 'scientists', label: 'Search Scientists', icon: <Search className="w-4 h-4" /> },
    { id: 'institutions', label: 'Search Institutions', icon: <Building2 className="w-4 h-4" /> },
    { id: 'network', label: 'Research Network', icon: <Network className="w-4 h-4" /> },
    { id: 'polar-ai', label: 'Polar AI', icon: <Brain className="w-4 h-4" /> },
    { id: 'visual-studio', label: 'Visual Studio', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
  ];

  const handleCreatePaper = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const paper: ResearchPaper = {
      id: `paper-${Date.now()}`,
      title: newTitle,
      authors: newAuthors ? newAuthors.split(',').map(a => a.trim()) : ['Dr. K. P. Sharma'],
      region: newRegion,
      station: newStation,
      year: 2026,
      journal: newJournal || 'Polar Science Reports',
      doi: newDoi || '10.21125/ncpor.preprint.2026',
      abstract: newAbstract || 'Glaciological mass balance analysis and radar telemetry observations.',
      status: 'Under Review',
      tags: [newRegion, newStation]
    };

    setPapers([paper, ...papers]);
    setIsModalOpen(false);
    setNewTitle('');
    setNewAuthors('');
    setNewJournal('');
    setNewDoi('');
    setNewAbstract('');
  };

  const handleDeletePaper = (id: string) => {
    setPapers(papers.filter(p => p.id !== id));
  };

  const filteredPapers = papers.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
    p.station.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredScientists = SCIENTISTS_LIST.filter(s =>
    s.name.toLowerCase().includes(scientistQuery.toLowerCase()) ||
    s.specialization.toLowerCase().includes(scientistQuery.toLowerCase()) ||
    s.institution.toLowerCase().includes(scientistQuery.toLowerCase())
  );

  const filteredInstitutions = INSTITUTIONS_LIST.filter(i =>
    i.name.toLowerCase().includes(institutionQuery.toLowerCase()) ||
    i.shortName.toLowerCase().includes(institutionQuery.toLowerCase()) ||
    i.location.toLowerCase().includes(institutionQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar Architecture */}
      <aside className="w-full md:w-64 bg-slate-900/90 rounded-2xl border border-white/10 p-4 space-y-6 flex-shrink-0">
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">
            Workspace
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Researcher Workspace</span>
          </div>
        </div>

        <nav className="space-y-1">
          {sidebarLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveNav(link.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                activeNav === link.id
                  ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
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
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2.5 px-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Create Record</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 w-full space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              National Polar Vault
            </span>
            <h2 className="text-2xl font-bold text-white capitalize">
              {activeNav.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Authenticated:</span>
            <span className="text-xs font-semibold text-white bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
              Dr. S. K. Mehta (NCPOR)
            </span>
          </div>
        </div>

        {/* Dashboard Overview */}
        {activeNav === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Publications</div>
                <div className="text-2xl font-bold font-mono text-white">{papers.length}</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">2 in peer review</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Expeditions</div>
                <div className="text-2xl font-bold font-mono text-white">4</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">Arctic &amp; Antarctic</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Datasets</div>
                <div className="text-2xl font-bold font-mono text-white">6</div>
                <div className="text-[10px] text-purple-400 mt-0.5">Open DOI access</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Citations</div>
                <div className="text-2xl font-bold font-mono text-white">482</div>
                <div className="text-[10px] text-amber-400 mt-0.5">h-index 12</div>
              </div>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Recent Research Contributions (CRUD Enabled)</h3>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>New Submission</span>
                </button>
              </div>

              <div className="space-y-3">
                {papers.slice(0, 3).map(paper => (
                  <div key={paper.id} className="p-4 bg-slate-900/60 rounded-xl border border-white/5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] text-slate-400 mb-0.5">{paper.station} · {paper.region}</div>
                      <h4 className="text-sm font-semibold text-white">{paper.title}</h4>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">DOI: {paper.doi}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button 
                        onClick={() => handleDeletePaper(paper.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                        title="Delete Record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* My Research & Papers (CRUD) */}
        {(activeNav === 'my-research' || activeNav === 'papers') && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search papers, DOI, or stations..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Deposit Research Paper</span>
              </button>
            </div>

            <div className="space-y-3">
              {filteredPapers.map(paper => (
                <div key={paper.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                        <span className="text-cyan-400 font-semibold">{paper.station}</span>
                        <span>·</span>
                        <span>{paper.region}</span>
                        <span>·</span>
                        <span className="font-mono">{paper.year}</span>
                      </div>
                      <h4 className="text-base font-semibold text-white">{paper.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{paper.authors.join(', ')}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                        {paper.status}
                      </span>
                      <button
                        onClick={() => handleDeletePaper(paper.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                        title="Delete Record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {paper.abstract}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-white/5 font-mono">
                    <span>DOI: {paper.doi}</span>
                    <span>{paper.journal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Datasets */}
        {activeNav === 'datasets' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {POLAR_DATASETS.map(ds => (
              <div key={ds.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-semibold">{ds.station}</span>
                  <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded text-[10px]">
                    {ds.accessLevel}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{ds.title}</h4>
                <div className="text-xs text-slate-300">
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Parameters</span>
                  {ds.parameters}
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5 font-mono">
                  <span>Size: {ds.fileSize}</span>
                  <span>{ds.downloads} downloads</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Expeditions */}
        {activeNav === 'expeditions' && (
          <div className="space-y-3">
            {POLAR_EXPEDITIONS.map(exp => (
              <div key={exp.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-cyan-400 font-medium">{exp.season} · {exp.region}</span>
                    <h4 className="text-base font-semibold text-white">{exp.name}</h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30 self-start">
                    ● {exp.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300">Leader: {exp.leader} · Team: {exp.teamSize} scientists</p>
              </div>
            ))}
          </div>
        )}

        {/* Search Scientists (Allowed only in Researcher / Institution / Admin) */}
        {activeNav === 'scientists' && (
          <div className="space-y-4">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                placeholder="Search accredited polar scientists..."
                value={scientistQuery}
                onChange={e => setScientistQuery(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredScientists.map(sci => (
                <div key={sci.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">{sci.name}</h4>
                    <p className="text-xs text-cyan-400">{sci.designation}</p>
                    <p className="text-xs text-slate-400">{sci.institution}</p>
                  </div>
                  <div className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                    {sci.specialization}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5 font-mono">
                    <span>Expeditions: {sci.expeditionsCount}</span>
                    <span>ORCID: {sci.orcid}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Institutions */}
        {activeNav === 'institutions' && (
          <div className="space-y-4">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input
                type="text"
                placeholder="Search polar research institutes..."
                value={institutionQuery}
                onChange={e => setInstitutionQuery(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredInstitutions.map(inst => (
                <div key={inst.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                  <div>
                    <span className="text-[10px] text-cyan-400 font-mono uppercase">{inst.leadMinistry}</span>
                    <h4 className="text-base font-bold text-white">{inst.name} ({inst.shortName})</h4>
                    <p className="text-xs text-slate-400">{inst.location}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/5">
                    <span>Active Projects: {inst.activeProjects}</span>
                    <span>Scientists: {inst.affiliatedScientists}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Research Network */}
        {activeNav === 'network' && (
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4 text-xs text-slate-300">
            <h4 className="text-base font-bold text-white">Indian Polar Collaborative Network</h4>
            <p className="leading-relaxed">
              Real-time collaboration graph linking NCPOR (Goa), Wadia Institute of Himalayan Geology (Dehradun), IIT Roorkee, Zoological Survey of India, and international Arctic/Antarctic consortia.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-900 rounded-lg border border-white/5 text-center">
                <span className="text-xl font-bold font-mono text-cyan-400">14</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Joint Consortia</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-white/5 text-center">
                <span className="text-xl font-bold font-mono text-emerald-400">38</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Active Projects</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-white/5 text-center">
                <span className="text-xl font-bold font-mono text-amber-400">128</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Co-Authors</span>
              </div>
            </div>
          </div>
        )}

        {/* Polar AI */}
        {activeNav === 'polar-ai' && (
          <AskPolarAI role="researcher" />
        )}

        {/* Visual Studio */}
        {activeNav === 'visual-studio' && (
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
            <h4 className="text-base font-bold text-white">Polar Visual &amp; Schematic Studio</h4>
            <p className="text-xs text-slate-300">
              Generate and inspect high-resolution scientific diagrams, ice core stratigraphic models, and expedition terrain projections for peer-reviewed papers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-video relative bg-slate-950">
                <img
                  src="/src/assets/images/polar_ice_core_lab_1790962313214.jpg"
                  alt="Cryogenic Lab"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded">
                  Cryogenic Ice Core Strata
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 aspect-video relative bg-slate-950">
                <img
                  src="/src/assets/images/arctic_himadri_station_1790962275208.jpg"
                  alt="Himadri Station"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded">
                  Himadri Observatory Array
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Profile */}
        {activeNav === 'profile' && (
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4 max-w-lg text-xs">
            <h4 className="text-base font-bold text-white">Researcher Profile</h4>
            <div className="space-y-2 text-slate-300">
              <p><strong className="text-white">Name:</strong> Dr. S. K. Mehta</p>
              <p><strong className="text-white">Designation:</strong> Senior Glaciologist</p>
              <p><strong className="text-white">Institute:</strong> National Centre for Polar and Ocean Research</p>
              <p><strong className="text-white">ORCID:</strong> 0000-0002-8419-4217</p>
              <p><strong className="text-white">Clearance:</strong> Ministry of Earth Sciences Certified (Level 3)</p>
            </div>
          </div>
        )}

      </div>

      {/* Create Paper Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white">Deposit New Polar Research Paper</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePaper} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. Mass Balance Variability of Samudra Tapu Glacier"
                  className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Region</label>
                  <select
                    value={newRegion}
                    onChange={e => setNewRegion(e.target.value as PolarRegion)}
                    className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Arctic">Arctic</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Himalaya">Himalaya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Station Base</label>
                  <input
                    type="text"
                    value={newStation}
                    onChange={e => setNewStation(e.target.value)}
                    className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Authors (comma separated)</label>
                <input
                  type="text"
                  value={newAuthors}
                  onChange={e => setNewAuthors(e.target.value)}
                  placeholder="Dr. S. K. Mehta, Dr. P. Sharma"
                  className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Journal / Proceedings</label>
                  <input
                    type="text"
                    value={newJournal}
                    onChange={e => setNewJournal(e.target.value)}
                    placeholder="Journal of Glaciology"
                    className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">DOI identifier</label>
                  <input
                    type="text"
                    value={newDoi}
                    onChange={e => setNewDoi(e.target.value)}
                    placeholder="10.21125/ncpor.2026.11"
                    className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Abstract</label>
                <textarea
                  rows={3}
                  value={newAbstract}
                  onChange={e => setNewAbstract(e.target.value)}
                  placeholder="Summary of empirical measurements and methodology..."
                  className="w-full bg-[#020617] border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-1.5 text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold"
                >
                  Deposit Paper
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
