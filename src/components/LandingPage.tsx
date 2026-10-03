import React, { useState } from 'react';
import { 
  ArrowRight, Compass, Snowflake, ThermometerSnowflake, Mountain, 
  Brain, Network, CheckCircle, ChevronRight, Activity, Shield, Users, 
  BookOpen, Database, MapPin, Sparkles, FileText, Calendar, 
  Layers, CheckCircle2, ArrowDown, HelpCircle, LogIn, Award, Globe2, Radio
} from 'lucide-react';
import { 
  POLAR_TIMELINE_MILESTONES, 
  EDITORIAL_INSIGHTS, 
  EXPEDITION_STORIES 
} from '../data/polarData';
import { PolarRole, PolarRegion } from '../types/polar';

interface LandingPageProps {
  onNavigate: (route: string, role?: PolarRole | null) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [activeRegionTab, setActiveRegionTab] = useState<'all' | PolarRegion>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 pb-20 text-slate-800">
      
      {/* ========================================================
          1. HERO SECTION (Light Polar Atmosphere & Real Science Scene)
         ======================================================== */}
      <section className="relative pt-6 pb-12 px-6 flex flex-col items-center justify-center">
        {/* Soft Aurora & Subtle Polar Light Aura */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="w-[850px] h-[450px] bg-gradient-to-b from-cyan-100/60 via-sky-100/40 to-transparent blur-[120px] rounded-full" />
          <div className="w-[950px] h-[950px] border border-cyan-200/40 rounded-full absolute pointer-events-none" />
          <div className="w-[1250px] h-[1250px] border border-cyan-100/40 rounded-full absolute pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          
          {/* Top Small Badge (No giant logo above heading) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-200 shadow-xs text-xs font-bold text-cyan-800 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
            <span>INDIA’S POLAR KNOWLEDGE NETWORK</span>
          </div>

          {/* Main Heading (Controlled, elegant, deep navy) */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] text-balance">
            India’s Polar Knowledge <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-sky-600 to-blue-800">
              &amp; Outreach Platform
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Connecting India’s polar research, high-latitude expeditions, scientific knowledge and public education — from the Himalayas to the Arctic and Antarctica.
          </p>

          {/* Visible Buttons: Explore Polar World + Login */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onNavigate('/explore')}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-800 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-xs hover:shadow-sm flex items-center justify-center gap-2 text-sm"
            >
              <span>Explore Polar World</span>
              <ArrowRight className="w-4 h-4 text-white/90" />
            </button>
            <button
              onClick={() => onNavigate('/roles')}
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-cyan-50/80 border border-cyan-300 text-slate-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-xs hover:border-cyan-400"
            >
              <span>Login</span>
              <ArrowRight className="w-4 h-4 text-cyan-700" />
            </button>
          </div>

          {/* HERO VISUAL: Authentic Indian Polar Research Infrastructure */}
          <div className="pt-6 max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-cyan-200/80 bg-white group">
              <div className="relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/antarctic_bharati_station_1790962287391.jpg"
                  alt="India's Bharati Station, Larsemann Hills Antarctica with Earth Observation Communication Dish"
                  className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Station Telemetry Overlay Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono font-semibold text-cyan-300 flex items-center gap-1.5 shadow-xs">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>Deep-Sky Dish Antenna: 69°24′ S, 76°11′ E</span>
                  </span>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white/90">
                    Bharati Research Base · Antarctica
                  </span>
                </div>

                {/* Bottom Context Strip inside Hero Visual */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-0.5 w-1 h-3.5 justify-center">
                      <span className="w-full h-0.5 bg-[#FF9933] rounded-full" />
                      <span className="w-full h-0.5 bg-white rounded-full" />
                      <span className="w-full h-0.5 bg-[#138808] rounded-full" />
                    </div>
                    <span className="font-semibold text-white/95">Tri-Polar Active Observatories: Himadri (Arctic) · Maitri &amp; Bharati (Antarctica) · Himansh (Himalaya)</span>
                  </div>
                  <span className="hidden md:inline-flex text-[11px] font-mono text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/30">
                    National Centre for Polar and Ocean Research
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. QUICK EXPLORE NAVIGATION
         ======================================================== */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-md border border-cyan-200/90 rounded-2xl p-2 shadow-xs flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-3 pr-1 hidden sm:inline-block">
            Quick Explore
          </span>
          <button
            onClick={() => scrollToSection('journey')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:text-cyan-800 hover:bg-cyan-50/80 transition-all border border-transparent hover:border-cyan-200"
          >
            Polar Journey
          </button>
          <button
            onClick={() => scrollToSection('frontiers')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:text-cyan-800 hover:bg-cyan-50/80 transition-all border border-transparent hover:border-cyan-200"
          >
            Three Frontiers
          </button>
          <button
            onClick={() => scrollToSection('insights')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:text-cyan-800 hover:bg-cyan-50/80 transition-all border border-transparent hover:border-cyan-200"
          >
            Polar Insights
          </button>
          <button
            onClick={() => scrollToSection('why-dhruvsetu')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:text-cyan-800 hover:bg-cyan-50/80 transition-all border border-transparent hover:border-cyan-200"
          >
            Why DhruvSetu
          </button>
          <button
            onClick={() => onNavigate('/explore')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-cyan-800 bg-cyan-50 hover:bg-cyan-100 transition-all border border-cyan-300 flex items-center gap-1 shadow-2xs"
          >
            <span>Explore</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ========================================================
          3. POLAR HIGHLIGHTS (Verified Numerical Metrics)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all">
            <div className="text-3xl font-extrabold font-mono tabular-nums text-slate-900">44</div>
            <div className="text-xs font-bold text-cyan-700 mt-1">Antarctic Expeditions</div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-mono">Source: NCPOR / MoES (1981–2025)</div>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all">
            <div className="text-3xl font-extrabold font-mono tabular-nums text-slate-900">16</div>
            <div className="text-xs font-bold text-cyan-700 mt-1">Arctic Campaigns</div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-mono">Source: Himadri Station Svalbard</div>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all">
            <div className="text-3xl font-extrabold font-mono tabular-nums text-slate-900">4,080 m</div>
            <div className="text-xs font-bold text-cyan-700 mt-1">Himansh Elevation</div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-mono">Source: Chandra Basin AWS, Spiti</div>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all">
            <div className="text-3xl font-extrabold font-mono tabular-nums text-slate-900">192 m</div>
            <div className="text-xs font-bold text-cyan-700 mt-1">IndARC Mooring Depth</div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-mono">Source: Kongsfjorden Array (MoES)</div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. INDIA’S POLAR JOURNEY (Brought Higher Up as Requested)
         ======================================================== */}
      <section id="journey" className="max-w-7xl mx-auto px-6 space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1 block">
              National Evolution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">India’s Polar Journey</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Over four decades of sovereign scientific excellence across the Antarctic continent, Arctic fjords, and Himalayan glaciology.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('/explore')}
            className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 self-start md:self-auto"
          >
            <span>View Full Expedition Logs</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="relative border-l-2 border-cyan-200 ml-4 md:ml-6 pl-6 space-y-6">
          {POLAR_TIMELINE_MILESTONES.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-cyan-600 group-hover:scale-125 transition-transform shadow-xs" />
              
              <div className="p-5 bg-white rounded-2xl border border-cyan-100/90 hover:border-cyan-300 shadow-xs hover:shadow-sm transition-all space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold font-mono text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                    {m.year}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">· {m.region}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {m.description}
                </p>
                <div className="pt-1 text-[10px] text-slate-400 font-mono">
                  Verified Source: {m.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. THE THREE POLAR FRONTIERS
         ======================================================== */}
      <section id="frontiers" className="max-w-7xl mx-auto px-6 space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1 block">
            Tri-Polar Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">The Three Polar Frontiers</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
            India’s permanent scientific bases strategically stationed across the High Arctic, Antarctica, and the Third Pole.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Arctic - Himadri */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-cyan-100 hover:border-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between h-[420px]">
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/arctic_himadri_station_1790962275208.jpg"
                alt="Himadri Arctic Station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            <div className="relative z-10 p-6 flex justify-between items-start">
              <span className="text-[11px] font-mono font-bold text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                78°55′ N · ARCTIC
              </span>
              <Snowflake className="w-5 h-5 text-cyan-300" />
            </div>

            <div className="relative z-10 p-6 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold text-white">Himadri</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Ny-Ålesund, Svalbard. Atmospheric aerosol tracking, Kongsfjorden fjord oceanography, and year-round continuous observation via the IndARC moored observatory.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/explore')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                >
                  <span>Explore Arctic Science</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Antarctic - Maitri & Bharati */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-cyan-100 hover:border-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between h-[420px]">
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/antarctic_bharati_station_1790962287391.jpg"
                alt="Bharati Antarctic Station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            <div className="relative z-10 p-6 flex justify-between items-start">
              <span className="text-[11px] font-mono font-bold text-blue-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-blue-400/30">
                69°24′ S · ANTARCTICA
              </span>
              <ThermometerSnowflake className="w-5 h-5 text-blue-300" />
            </div>

            <div className="relative z-10 p-6 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold text-white">Maitri &amp; Bharati</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Larsemann Hills &amp; Schirmacher Oasis. Deep ice-core drilling, continental breakup tectonics, geomagnetic pulsars, and high-rate ISRO Earth observation satellite data reception.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/explore')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors"
                >
                  <span>Explore Antarctica Science</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Himalaya - Himansh */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-cyan-100 hover:border-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between h-[420px]">
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/himalaya_himansh_station_1790962298987.jpg"
                alt="Himansh Himalayan Station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            <div className="relative z-10 p-6 flex justify-between items-start">
              <span className="text-[11px] font-mono font-bold text-emerald-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-emerald-400/30">
                4,080m ASL · HIMALAYA
              </span>
              <Mountain className="w-5 h-5 text-emerald-300" />
            </div>

            <div className="relative z-10 p-6 space-y-2 text-white">
              <h3 className="text-2xl font-extrabold text-white">Himansh</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Chandra Basin, Spiti Valley. High-altitude glaciological mass balance monitoring, hydrological runoff telemetry, and downstream freshwater security forecasting for northern India.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/explore')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors"
                >
                  <span>Explore Himalayan Science</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. POLAR INSIGHT (Editorial Cards with Categories)
         ======================================================== */}
      <section id="insights" className="max-w-7xl mx-auto px-6 space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1 block">
            Scientific Magazine
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Polar Insight</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
            Research, discoveries and stories from India’s polar knowledge ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDITORIAL_INSIGHTS.map(ins => (
            <div
              key={ins.id}
              className="p-6 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] text-cyan-700 font-mono font-bold uppercase">
                  <span>{ins.category}</span>
                  <span className="text-slate-400 font-normal">{ins.readTime}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {ins.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ins.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="text-[10px] text-slate-400 font-mono">
                  {ins.source} · {ins.date}
                </div>
                <button
                  onClick={() => onNavigate('/explore')}
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          7. WHY DHRUVSETU (4 Clear Pillars)
         ======================================================== */}
      <section id="why-dhruvsetu" className="max-w-7xl mx-auto px-6 space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Platform Mandate
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why DhruvSetu?</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Bridging isolated polar field expeditions with national education and public understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all space-y-2.5">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              <span>CONNECT</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connect polar research and knowledge across Indian ministries, scientific institutes, universities, and international expeditions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all space-y-2.5">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>DISCOVER</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Discover India's polar regions, stations, and expeditions through accredited archives and interactive visualizations.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all space-y-2.5">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>UNDERSTAND</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Make complex polar cryospheric telemetry and monsoon teleconnections easier to understand for learners of all ages.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-cyan-100 shadow-xs hover:border-cyan-300 hover:shadow-sm transition-all space-y-2.5">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>OUTREACH</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bring verified scientific knowledge, interactive challenges, and source-grounded answers to schools, educators, and citizens.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. KNOWLEDGE FROM THE FIELD (Horizontal Science Pipeline)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6 space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Systematic Science Cycle
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Knowledge from the Field</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            How observations gathered at Earth's extremities transform into national education and policy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 relative">
          {[
            { step: '01', title: 'FIELD', desc: 'Researchers collect observations at Antarctic, Arctic & Himalayan bases.' },
            { step: '02', title: 'DATA', desc: 'Raw telemetry, ice cores, and CTD logs are structured and calibrated.' },
            { step: '03', title: 'RESEARCH', desc: 'Rigorous peer analysis produces verified empirical findings.' },
            { step: '04', title: 'KNOWLEDGE', desc: 'Datasets and publications are interconnected in the national portal.' },
            { step: '05', title: 'OUTREACH', desc: 'Students and citizens explore verified science through interactive tools.' }
          ].map((st, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-cyan-100 text-center space-y-2 relative group hover:border-cyan-300 hover:shadow-sm transition-all">
              <span className="text-xl font-extrabold font-mono text-cyan-700 block">{st.step}</span>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          9. EXPLORE / LEARN / ASK / CHALLENGE (Public Previews)
         ======================================================== */}
      <section id="explore-preview" className="max-w-7xl mx-auto px-6 space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1 block">
            Public Feature Previews
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Discover Polar Science Your Way</h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
            Choose your learning path. Full interactive tools unlock after logging into your role.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            onClick={() => onNavigate('/explore')}
            className="p-6 bg-white rounded-2xl border border-cyan-100 hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer space-y-3 shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">EXPLORE</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Discover polar regions, stations, and approved public knowledge through interactive maps and photography.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('/roles')}
            className="p-6 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer space-y-3 shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">LEARN</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Understand polar science in simple, clear language with the interactive Polar Mind Map.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('/roles')}
            className="p-6 bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer space-y-3 shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">ASK</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ask Polar AI verified questions grounded in NCPOR research proceedings and station logs.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('/roles')}
            className="p-6 bg-white rounded-2xl border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all cursor-pointer space-y-3 shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">CHALLENGE</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Test your knowledge through authenticated quizzes on Indian polar exploration history.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. TRUSTED KNOWLEDGE (Institutional Provenance)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 bg-white rounded-3xl border border-cyan-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Sovereign Provenance
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              Official Indian Polar Research Source
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              All scientific data, geographic coordinates, and mission logs on DhruvSetu are authenticated through the <strong>National Centre for Polar and Ocean Research (NCPOR)</strong>, an autonomous research institute under the <strong>Ministry of Earth Sciences, Government of India</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-xs">
              MoES Verified
            </span>
            <span className="px-4 py-2 bg-cyan-50 border border-cyan-300 rounded-xl text-xs font-bold text-cyan-900 shadow-xs">
              NCPOR Certified
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. FINAL LOGIN CTA
         ======================================================== */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-5 pt-4">
        <div className="p-10 bg-gradient-to-b from-white via-cyan-50/50 to-blue-50/60 rounded-3xl border border-cyan-200 shadow-sm space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-cyan-200 text-xs font-bold text-cyan-800">
            <span>DHRUVSETU GATEWAY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950">
            Access DhruvSetu Portal
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Log in with your accredited role as a Researcher, Institutional Lead, Admin, Media communicator, or Student Explorer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('/roles')}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-800 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-xs hover:shadow-sm inline-flex items-center justify-center gap-2"
            >
              <span>Login</span>
              <ArrowRight className="w-4 h-4 text-white/90" />
            </button>
            <button
              onClick={() => onNavigate('/explore')}
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold rounded-xl text-sm transition-all shadow-xs"
            >
              Explore Public Archive
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
