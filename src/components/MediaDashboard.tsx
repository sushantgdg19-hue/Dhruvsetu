import React, { useState } from 'react';
import { 
  LayoutDashboard, FileText, Database, Map, Sparkles, 
  Newspaper, Image as ImageIcon, BookOpen, Bookmark, 
  Send, CheckCircle, Share2, Copy, Eye, ExternalLink, 
  User, Check, ChevronRight 
} from 'lucide-react';
import { INITIAL_PAPERS, POLAR_EXPEDITIONS, INITIAL_MEDIA_DRAFTS, EDITORIAL_INSIGHTS } from '../data/polarData';
import { MediaDraft, ResearchPaper } from '../types/polar';

export const MediaDashboard: React.FC = () => {
  const [activeNav, setActiveNav] = useState<
    'dashboard' | 'approved-research' | 'research-library' | 'expeditions' | 
    'verified-media' | 'source-credits' | 'content-studio' | 'visual-studio' | 
    'story-builder' | 'saved-sources' | 'my-drafts' | 'profile'
  >('dashboard');

  const [drafts, setDrafts] = useState<MediaDraft[]>(INITIAL_MEDIA_DRAFTS);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper>(INITIAL_PAPERS[0]);
  const [selectedAudience, setSelectedAudience] = useState<'Public' | 'Student' | 'Teacher' | 'Journalist' | 'General Audience'>('Public');
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Hindi'>('English');
  const [selectedOutput, setSelectedOutput] = useState<'Article' | 'Research Explainer' | 'Social Post' | 'Infographic' | 'Video Script'>('Article');
  const [generatedDraftText, setGeneratedDraftText] = useState<string>('');
  const [savedSources, setSavedSources] = useState<string[]>(['paper-001', 'paper-003']);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'approved-research', label: 'Approved Research', icon: <FileText className="w-4 h-4" /> },
    { id: 'research-library', label: 'Research Library', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'expeditions', label: 'Expedition Stories', icon: <Map className="w-4 h-4" /> },
    { id: 'verified-media', label: 'Verified Media', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'source-credits', label: 'Source & Credits', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'content-studio', label: 'Content Studio', icon: <Sparkles className="w-4 h-4 text-rose-400" /> },
    { id: 'visual-studio', label: 'Visual Studio', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'story-builder', label: 'Story Builder', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'saved-sources', label: 'Saved Sources', icon: <Bookmark className="w-4 h-4" /> },
    { id: 'my-drafts', label: 'My Drafts', icon: <FileText className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
  ];

  const handleGenerateDraft = () => {
    let generated = '';
    if (selectedLanguage === 'Hindi') {
      generated = `[प्रेस विज्ञप्ति · ध्रुवसेतु] ${selectedPaper.station} (${selectedPaper.region}) से सत्यापित वैज्ञानिक रिपोर्ट:\n\n${selectedPaper.title}\n\nमुख्य निष्कर्ष: राष्ट्रीय ध्रुवीय एवं महासागर अनुसंधान केंद्र (NCPOR) के शोधकर्ताओं ने यह सिद्ध किया है कि ध्रुवीय क्षेत्रों में होने वाले बदलाव भारत के मानसून और जलवायु तंत्र से सीधे जुड़े हैं। यह अध्ययन विशेष रूप से ${selectedAudience} वर्ग के लिए प्रासंगिक है।`;
    } else {
      if (selectedOutput === 'Social Post') {
        generated = `🧊 Breaking Polar Science from India's ${selectedPaper.station}!\n\nNew verified research published in ${selectedPaper.journal} explores "${selectedPaper.title}".\n\n📌 Key Takeaway for ${selectedAudience}: Understanding teleconnections between polar cryospheric melting and India's seasonal weather.\n\nVerified Provenance: NCPOR / Ministry of Earth Sciences · DOI: ${selectedPaper.doi}\n\n#DhruvSetu #PolarScience #NCPOR #Arctic #Antarctica`;
      } else if (selectedOutput === 'Research Explainer') {
        generated = `HOW IT WORKS: ${selectedPaper.title.toUpperCase()}\n\nAudience Level: ${selectedAudience}\nPublished Source: ${selectedPaper.journal} (${selectedPaper.year})\n\nSUMMARY:\nIndian glaciologists and atmospheric researchers at ${selectedPaper.station} have documented critical cryospheric telemetry. ${selectedPaper.abstract}\n\nWHY IT MATTERS:\nObservations collected across India's tri-polar infrastructure (Himadri, Bharati, Maitri, Himansh) provide direct data to anticipate climatic variations affecting agriculture and water security across India.`;
      } else {
        generated = `NEW DELHI / GOA — In an official peer-reviewed study published in ${selectedPaper.journal}, Indian polar researchers stationed at ${selectedPaper.station} have uncovered groundbreaking insights: "${selectedPaper.title}".\n\nLead investigators (${selectedPaper.authors.join(', ')}) report that empirical observations confirm significant cryospheric and oceanographic teleconnections. This release has been verified through the DhruvSetu National Polar Knowledge Network under the Ministry of Earth Sciences.`;
      }
    }
    setGeneratedDraftText(generated);
  };

  const handleSaveDraft = () => {
    if (!generatedDraftText.trim()) return;

    const newDraft: MediaDraft = {
      id: `draft-${Date.now()}`,
      sourceTitle: selectedPaper.title,
      sourceType: selectedPaper.journal,
      audience: selectedAudience,
      outputType: selectedOutput,
      language: selectedLanguage,
      content: generatedDraftText,
      credits: `National Centre for Polar and Ocean Research (NCPOR) / ${selectedPaper.authors[0]}`,
      doi: selectedPaper.doi,
      provenance: 'Verified NCPOR Source',
      createdDate: new Date().toISOString().split('T')[0]
    };

    setDrafts([newDraft, ...drafts]);
    alert('Media story draft saved to your workspace!');
  };

  const toggleSaveSource = (id: string) => {
    if (savedSources.includes(id)) {
      setSavedSources(savedSources.filter(s => s !== id));
    } else {
      setSavedSources([...savedSources, id]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar Architecture */}
      <aside className="w-full md:w-64 bg-slate-900/90 rounded-2xl border border-white/10 p-4 space-y-6 flex-shrink-0">
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">
            Media Studio
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span>Media Workspace</span>
          </div>
        </div>

        <nav className="space-y-1">
          {sidebarLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveNav(link.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                activeNav === link.id
                  ? 'bg-rose-950/80 text-rose-300 border border-rose-500/30'
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
            onClick={() => setActiveNav('content-studio')}
            className="w-full py-2.5 px-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Content Studio</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 w-full space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
          <div>
            <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
              Science Communication Desk
            </span>
            <h2 className="text-2xl font-bold text-white capitalize">
              {activeNav.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
              ● VERIFIED SOURCES ONLY
            </span>
          </div>
        </div>

        {/* Dashboard Overview */}
        {activeNav === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Approved Research</div>
                <div className="text-2xl font-bold font-mono text-white">{INITIAL_PAPERS.length}</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">DOI verified</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Expedition Stories</div>
                <div className="text-2xl font-bold font-mono text-white">{POLAR_EXPEDITIONS.length}</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">Arctic &amp; Antarctic</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">Saved Sources</div>
                <div className="text-2xl font-bold font-mono text-white">{savedSources.length}</div>
                <div className="text-[10px] text-rose-400 mt-0.5">In workspace</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-slate-400 mb-1">My Drafts</div>
                <div className="text-2xl font-bold font-mono text-white">{drafts.length}</div>
                <div className="text-[10px] text-amber-400 mt-0.5">Ready for publication</div>
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="p-6 bg-gradient-to-r from-rose-950/30 via-slate-900 to-cyan-950/20 rounded-2xl border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">Media Content Studio</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
                  Transform verified scientific papers, ice-core datasets, and polar expedition proceedings into articles, infographics, social carousels, and video scripts with strict provenance tracking.
                </p>
              </div>
              <button
                onClick={() => setActiveNav('content-studio')}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold whitespace-nowrap shadow-md"
              >
                Create Media Draft
              </button>
            </div>

            {/* Approved Research Feeds */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white">Latest Verified Research Sources</h3>
              <div className="space-y-3">
                {INITIAL_PAPERS.slice(0, 3).map(paper => (
                  <div key={paper.id} className="p-4 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5 font-semibold">
                        {paper.station} · {paper.region}
                      </div>
                      <h4 className="text-sm font-semibold text-white">{paper.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">DOI: {paper.doi}</p>
                    </div>
                    <button
                      onClick={() => { setSelectedPaper(paper); setActiveNav('content-studio'); }}
                      className="px-3.5 py-1.5 bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold self-start sm:self-auto"
                    >
                      Use as Source
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content Studio (FLAGSHIP FEATURE) */}
        {activeNav === 'content-studio' && (
          <div className="space-y-6">
            <div className="p-6 bg-slate-900 rounded-2xl border border-white/10 space-y-6">
              
              {/* Step 1: Select Verified Source */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block">
                  Step 1 · Select Verified Polar Source
                </span>
                <select
                  value={selectedPaper.id}
                  onChange={e => {
                    const p = INITIAL_PAPERS.find(item => item.id === e.target.value);
                    if (p) setSelectedPaper(p);
                  }}
                  className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                >
                  {INITIAL_PAPERS.map(p => (
                    <option key={p.id} value={p.id}>
                      [{p.region} - {p.station}] {p.title}
                    </option>
                  ))}
                </select>
                <div className="text-[11px] text-slate-400 bg-white/5 p-3 rounded-lg border border-white/5">
                  <strong className="text-white block mb-0.5">Source Metadata:</strong>
                  {selectedPaper.journal} ({selectedPaper.year}) · Authors: {selectedPaper.authors.join(', ')} · DOI: {selectedPaper.doi}
                </div>
              </div>

              {/* Step 2: Target Audience & Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-slate-300 uppercase block">Step 2 · Target Audience</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(['Public', 'Student', 'Teacher', 'Journalist', 'General Audience'] as const).map(aud => (
                      <button
                        key={aud}
                        onClick={() => setSelectedAudience(aud)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          selectedAudience === aud
                            ? 'bg-rose-950 text-rose-200 border border-rose-500/50'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {aud}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-slate-300 uppercase block">Step 3 · Language</span>
                  <div className="flex gap-2">
                    {(['English', 'Hindi'] as const).map(lang => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          selectedLanguage === lang
                            ? 'bg-rose-950 text-rose-200 border border-rose-500/50'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Output Format */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-300 uppercase block">Step 4 · Output Format</span>
                <div className="flex flex-wrap gap-2">
                  {(['Article', 'Research Explainer', 'Social Post', 'Infographic', 'Video Script'] as const).map(out => (
                    <button
                      key={out}
                      onClick={() => setSelectedOutput(out)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedOutput === out
                          ? 'bg-cyan-950 text-cyan-200 border border-cyan-500/50'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {out}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate CTA */}
              <button
                onClick={handleGenerateDraft}
                className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Verified Media Draft</span>
              </button>

              {/* Output Preview & Provenance */}
              {generatedDraftText && (
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      <span>Draft Preview ({selectedOutput} · {selectedAudience})</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      ● PROVENANCE: VERIFIED NCPOR SOURCE
                    </span>
                  </div>

                  <div className="p-4 bg-[#020617] rounded-xl border border-white/10 text-xs text-slate-200 whitespace-pre-wrap leading-relaxed font-sans">
                    {generatedDraftText}
                  </div>

                  {/* Provenance Box */}
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] text-slate-400 space-y-1 font-mono">
                    <div><strong>Source:</strong> {selectedPaper.title}</div>
                    <div><strong>Publisher:</strong> {selectedPaper.journal} ({selectedPaper.year})</div>
                    <div><strong>Reference:</strong> DOI {selectedPaper.doi}</div>
                    <div><strong>Attribution:</strong> NCPOR / MoES Science Media Protocol</div>
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(generatedDraftText);
                        alert('Copied draft to clipboard!');
                      }}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </button>
                    <button
                      onClick={handleSaveDraft}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Save Media Draft</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Approved Research Library */}
        {(activeNav === 'approved-research' || activeNav === 'research-library') && (
          <div className="space-y-4">
            <div className="text-xs text-slate-400">
              Peer-reviewed Indian polar publications approved for public communication and news reporting.
            </div>
            <div className="space-y-3">
              {INITIAL_PAPERS.map(paper => (
                <div key={paper.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-cyan-400 uppercase font-semibold font-mono">
                        {paper.station} · {paper.region}
                      </span>
                      <h4 className="text-sm font-semibold text-white">{paper.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{paper.authors.join(', ')}</p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0 self-start">
                      ● APPROVED SOURCE
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {paper.abstract}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5 font-mono">
                    <span>DOI: {paper.doi}</span>
                    <button
                      onClick={() => { setSelectedPaper(paper); setActiveNav('content-studio'); }}
                      className="text-rose-400 hover:text-rose-300 font-semibold font-sans flex items-center gap-1"
                    >
                      <span>Open in Content Studio</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verified Media (Photos, Infographics) */}
        {(activeNav === 'verified-media' || activeNav === 'visual-studio') && (
          <div className="space-y-6">
            <div className="text-xs text-slate-400">
              High-resolution accredited imagery and scientific visualizations cleared for editorial and broadcast use.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-white/10 space-y-3 p-4">
                <div className="aspect-video relative rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/arctic_himadri_station_1790962275208.jpg"
                    alt="Himadri Arctic Research Station"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Himadri Arctic Research Station</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Location: Ny-Ålesund, Svalbard · 78°55′ N</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">Credit: National Centre for Polar and Ocean Research</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-white/10 space-y-3 p-4">
                <div className="aspect-video relative rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/antarctic_bharati_station_1790962287391.jpg"
                    alt="Bharati Antarctic Station"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Bharati Antarctic Station</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Location: Larsemann Hills · 69°24′ S</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">Credit: Ministry of Earth Sciences (MoES)</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-white/10 space-y-3 p-4">
                <div className="aspect-video relative rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/himalaya_himansh_station_1790962298987.jpg"
                    alt="Himansh Himalayan Station"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Himansh High-Altitude Station</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Location: Chandra Basin, Spiti · 4,080m ASL</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">Credit: NCPOR Cryosphere Division</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-white/10 space-y-3 p-4">
                <div className="aspect-video relative rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/polar_ice_core_lab_1790962313214.jpg"
                    alt="Cryogenic Ice Core Laboratory"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">National Ice Core Laboratory</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Location: NCPOR Headland Sada, Goa</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">Credit: National Cryospheric Ice Core Facility</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* My Drafts */}
        {activeNav === 'my-drafts' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-400">
              Your saved articles, explainers, and media scripts created via Content Studio.
            </div>
            <div className="space-y-3">
              {drafts.map(draft => (
                <div key={draft.id} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-rose-400">{draft.outputType} · {draft.audience} ({draft.language})</span>
                    <span className="font-mono text-slate-500 text-[10px]">{draft.createdDate}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{draft.sourceTitle}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{draft.content}</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5 font-mono">
                    <span>Provenance: {draft.provenance}</span>
                    <span>Credits: {draft.credits}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile */}
        {activeNav === 'profile' && (
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4 max-w-lg text-xs">
            <h4 className="text-base font-bold text-white">Media Desk Accreditation</h4>
            <div className="space-y-2 text-slate-300">
              <p><strong className="text-white">Organization:</strong> Press Information Bureau / Science Desk</p>
              <p><strong className="text-white">Role:</strong> Accredited Science Communicator</p>
              <p><strong className="text-white">Access Level:</strong> Approved Polar Research &amp; Media Studio</p>
              <p><strong className="text-white">Syndication Clearance:</strong> Public &amp; Educational Dissemination</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
