import React, { useState } from 'react';
import { Compass, MapPin, Radio, Activity, Snowflake, ThermometerSnowflake, Mountain, ChevronRight } from 'lucide-react';
import { PolarRegion } from '../types/polar';

interface PolarMapProps {
  onSelectRegion?: (region: PolarRegion) => void;
  onSelectStation?: (stationId: string) => void;
}

export const PolarMap: React.FC<PolarMapProps> = ({ onSelectRegion, onSelectStation }) => {
  const [selectedStation, setSelectedStation] = useState<string>('himadri');
  const [activeLayer, setActiveLayer] = useState<'all' | 'stations' | 'routes' | 'telemetry'>('all');

  const stationsData = [
    {
      id: 'himadri',
      name: 'Himadri Station',
      region: 'Arctic' as PolarRegion,
      coords: '78°55′ N, 11°56′ E',
      x: 32, // percentage on projection
      y: 22,
      established: 2008,
      status: 'Active',
      focus: 'Atmospheric Aerosols, Kongsfjorden Oceanography, IndARC Mooring',
      color: '#06b6d4',
      telemetry: { temp: '-14.6°C', wind: '24 km/h NNW', depth: '192m (IndARC)' }
    },
    {
      id: 'himansh',
      name: 'Himansh Station',
      region: 'Himalaya' as PolarRegion,
      coords: '32°24′ N, 77°37′ E',
      x: 62,
      y: 48,
      established: 2016,
      status: 'Active',
      focus: 'Glacial Mass Balance (Batal, Samudra Tapu), 4,080m AWS Telemetry',
      color: '#10b981',
      telemetry: { temp: '-8.4°C', wind: '18 km/h WNW', altitude: '4,080m ASL' }
    },
    {
      id: 'bharati',
      name: 'Bharati Station',
      region: 'Antarctic' as PolarRegion,
      coords: '69°24′ S, 76°11′ E',
      x: 74,
      y: 82,
      established: 2012,
      status: 'Active',
      focus: 'Continental Gondwana Tectonics, Oceanography, ISRO Ground Station',
      color: '#38bdf8',
      telemetry: { temp: '-26.8°C', wind: '38 km/h ESE', iceDepth: '2.4 km' }
    },
    {
      id: 'maitri',
      name: 'Maitri Station',
      region: 'Antarctic' as PolarRegion,
      coords: '70°46′ S, 11°44′ E',
      x: 42,
      y: 84,
      established: 1989,
      status: 'Active',
      focus: 'Upper Atmospheric Physics, Priyadarshini Lake Limnology, Geomagnetism',
      color: '#818cf8',
      telemetry: { temp: '-29.2°C', wind: '45 km/h SE', lakeDepth: '28m' }
    }
  ];

  const currentSt = stationsData.find(s => s.id === selectedStation) || stationsData[0];

  return (
    <div className="bg-[#030816] rounded-3xl border border-white/10 p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Coordinate Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Map Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10 border-b border-white/5 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            <Compass className="w-4 h-4" />
            <span>Interactive Geodetic Projection</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            India’s Tri-Polar Geographic Presence
          </h3>
          <p className="text-xs text-slate-400">
            Coordinates, expedition maritime corridors, and telemetry hubs across Earth's three poles.
          </p>
        </div>

        {/* Layer Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5 text-xs">
          {[
            { id: 'all', label: 'Composite View' },
            { id: 'stations', label: 'Stations' },
            { id: 'routes', label: 'Expedition Corridors' },
            { id: 'telemetry', label: 'Live Telemetry' }
          ].map(layer => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id as any)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeLayer === layer.id
                  ? 'bg-cyan-950/80 text-cyan-200 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {layer.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        
        {/* Interactive Coordinate Canvas */}
        <div className="lg:col-span-8 bg-[#020617] rounded-2xl border border-white/10 relative h-[440px] flex items-center justify-center overflow-hidden p-6">
          {/* Simulated Graticule Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            {/* Latitude parallels */}
            <line x1="0" y1="22%" x2="100%" y2="22%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#475569" strokeWidth="1" />
            <line x1="0" y1="82%" x2="100%" y2="82%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />

            {/* Longitude meridians */}
            <line x1="33%" y1="0" x2="33%" y2="100%" stroke="#334155" strokeWidth="0.75" />
            <line x1="62%" y1="0" x2="62%" y2="100%" stroke="#334155" strokeWidth="0.75" />

            {/* Expedition Routes (Goa NCPOR -> Antarctica, Goa -> Svalbard Arctic) */}
            {(activeLayer === 'all' || activeLayer === 'routes') && (
              <>
                {/* Route: Goa to Arctic */}
                <path
                  d="M 58% 54% Q 45% 35% 32% 22%"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
                {/* Route: Goa to Antarctica (Bharati & Maitri) */}
                <path
                  d="M 58% 54% Q 65% 70% 74% 82%"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
                <path
                  d="M 58% 54% Q 50% 70% 42% 84%"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </>
            )}
          </svg>

          {/* National Nodal Hub: NCPOR Goa Marker */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
            style={{ left: '58%', top: '54%' }}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-white shadow-[0_0_15px_#f97316] animate-ping" />
            <span className="text-[10px] font-bold text-white bg-slate-900/90 px-2 py-0.5 rounded border border-orange-500/40 mt-1 whitespace-nowrap">
              NCPOR Goa (HQ)
            </span>
          </div>

          {/* Station Markers */}
          {stationsData.map(st => {
            const isSelected = selectedStation === st.id;

            return (
              <button
                key={st.id}
                onClick={() => setSelectedStation(st.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group text-left focus:outline-none transition-all ${
                  isSelected ? 'scale-110 z-30' : 'hover:scale-105'
                }`}
                style={{ left: `${st.x}%`, top: `${st.y}%` }}
              >
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/20 p-1.5 rounded-xl shadow-lg backdrop-blur-md group-hover:border-cyan-400">
                  <div 
                    className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center"
                    style={{ backgroundColor: st.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div className="hidden sm:block text-[11px] font-bold text-white pr-1">
                    {st.name.replace(' Station', '')}
                  </div>
                </div>

                {/* Coordinate label below */}
                <div className="text-[9px] font-mono text-cyan-300 bg-black/60 px-1.5 py-0.5 rounded mt-1 opacity-80 group-hover:opacity-100 whitespace-nowrap">
                  {st.coords}
                </div>
              </button>
            );
          })}

          {/* Latitude Markings on Side */}
          <div className="absolute left-3 top-4 text-[10px] font-mono text-cyan-400/70">78° N (Arctic Circle)</div>
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500">0° Equator</div>
          <div className="absolute left-3 bottom-4 text-[10px] font-mono text-blue-400/70">70° S (Antarctic Circle)</div>
        </div>

        {/* Station Intelligence Inspector */}
        <div className="lg:col-span-4 bg-white/5 rounded-2xl border border-white/10 p-6 space-y-5">
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold text-cyan-400 uppercase tracking-wider">
                {currentSt.region} Frontier
              </span>
              <span className="font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded text-[10px]">
                ● {currentSt.status}
              </span>
            </div>
            <h4 className="text-xl font-bold text-white">{currentSt.name}</h4>
            <p className="text-xs text-slate-400 font-mono mt-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>{currentSt.coords}</span>
            </p>
          </div>

          <div className="space-y-1 text-xs text-slate-300">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Scientific Focus</span>
            <p className="leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-white/5">
              {currentSt.focus}
            </p>
          </div>

          {/* Telemetry metrics */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-slate-900/80 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-500 block">Temperature</span>
              <span className="font-mono font-bold text-white text-sm">{currentSt.telemetry.temp}</span>
            </div>
            <div className="p-2.5 bg-slate-900/80 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-500 block">Wind Velocity</span>
              <span className="font-mono font-bold text-white text-sm">{currentSt.telemetry.wind}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onSelectRegion && onSelectRegion(currentSt.region)}
              className="w-full py-2.5 px-4 bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-500/30 rounded-xl text-xs font-semibold text-cyan-300 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Explore {currentSt.region} Regional Data</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
