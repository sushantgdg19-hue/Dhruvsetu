import React, { useState } from 'react';
import { 
  Snowflake, ThermometerSnowflake, Mountain, Compass, 
  FileText, BookOpen, ArrowRight, ChevronRight, Search 
} from 'lucide-react';
import { PolarRegion } from '../types/polar';

interface ExploreViewProps {
  onNavigate: (route: string) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'regions' | 'missions' | 'outreach'>('all');

  const exploreTracks = [
    {
      id: 'arctic',
      category: 'regions',
      title: 'Arctic: Svalbard & Himadri',
      badge: 'Boreal Polar Domain',
      desc: 'Established in 2008 in Ny-Ålesund, Norway. Continuous atmospheric aerosol, fjord marine biology, and IndARC underwater mooring observations.',
      image: '/src/assets/images/arctic_himadri_station_1790962275208.jpg',
      route: '/stations',
      icon: <Snowflake className="w-5 h-5 text-cyan-700" />
    },
    {
      id: 'antarctic',
      category: 'regions',
      title: 'Antarctica: Bharati & Maitri',
      badge: 'Austral Polar Domain',
      desc: 'India’s permanent Antarctic presence since 1981. Ice core paleoclimate drilling, continental Gondwana break-up tectonics, and ISRO satellite ground communications.',
      image: '/src/assets/images/antarctic_bharati_station_1790962287391.jpg',
      route: '/stations',
      icon: <ThermometerSnowflake className="w-5 h-5 text-blue-700" />
    },
    {
      id: 'himalaya',
      category: 'regions',
      title: 'The Third Pole: Himansh',
      badge: 'High Altitude Cryosphere',
      desc: 'Perched at 4,080m (13,500 ft) in Spiti Valley, Himachal Pradesh. Real-time glacier mass balance monitoring and hydrological runoff telemetry.',
      image: '/src/assets/images/himalaya_himansh_station_1790962298987.jpg',
      route: '/stations',
      icon: <Mountain className="w-5 h-5 text-emerald-700" />
    },
    {
      id: 'ice-cores',
      category: 'missions',
      title: 'Cryogenic Ice Core Laboratory',
      badge: 'Paleoclimate Archive',
      desc: 'Located at NCPOR Goa. Preserving and analyzing thousands of meters of ice drilled from the Antarctic ice sheet, tracking 400+ years of atmospheric chemistry.',
      image: '/src/assets/images/polar_ice_core_lab_1790962313214.jpg',
      route: '/roles',
      icon: <FileText className="w-5 h-5 text-purple-700" />
    },
    {
      id: 'mindmap',
      category: 'outreach',
      title: 'Interactive Polar Mind Map',
      badge: 'Visual Knowledge Graph',
      desc: 'Discover interconnections between atmospheric teleconnections, monsoon dynamics, polar expeditions, and scientific discoveries.',
      image: '/src/assets/images/arctic_himadri_station_1790962275208.jpg',
      route: '/roles',
      icon: <BookOpen className="w-5 h-5 text-amber-700" />
    },
    {
      id: 'expeditions',
      category: 'missions',
      title: 'National Polar Expeditions',
      badge: 'Field Operations',
      desc: 'Over 44 Indian Scientific Expeditions to Antarctica (ISEA) and annual Arctic summer/winter campaigns supported by ORV Sagar Kanya.',
      image: '/src/assets/images/antarctic_bharati_station_1790962287391.jpg',
      route: '/roles',
      icon: <Compass className="w-5 h-5 text-cyan-800" />
    }
  ];

  const filteredTracks = filter === 'all' 
    ? exploreTracks 
    : exploreTracks.filter(t => t.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10 text-slate-800">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-100 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1 block">
            Public Knowledge Archive
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950">
            Explore India’s Polar Ecosystem
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mt-1">
            Browse through Arctic observations, Antarctic ice-core drilling, Himalayan glaciology, and educational interactive graphs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-cyan-200 text-xs shadow-xs">
          {[
            { id: 'all', label: 'All Knowledge' },
            { id: 'regions', label: 'Three Poles' },
            { id: 'missions', label: 'Missions & Labs' },
            { id: 'outreach', label: 'Interactive Learning' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                filter === f.id
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-cyan-800 hover:bg-cyan-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Exploration Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map(track => (
          <div
            key={track.id}
            className="group bg-white rounded-2xl overflow-hidden border border-cyan-100 hover:border-cyan-300 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold text-white bg-slate-950/80 px-2.5 py-1 rounded border border-white/20 backdrop-blur-xs">
                  {track.badge}
                </span>
              </div>

              <div className="p-6 space-y-2.5">
                <div className="flex items-center gap-2">
                  {track.icon}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {track.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">
                  {track.desc}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate(track.route)}
                className="w-full py-2.5 px-3 bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>Access Explorer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Educational Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 border border-cyan-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-900">
            Looking for authentic research papers or raw datasets?
          </h3>
          <p className="text-xs text-slate-600">
            Log into your accredited Researcher or Institutional workspace to access the sovereign DOI repository.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/roles')}
          className="px-6 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 flex items-center gap-2"
        >
          <span>Choose Role &amp; Login</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
