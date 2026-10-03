import React, { useState } from 'react';
import { 
  Snowflake, ThermometerSnowflake, Mountain, Wind, 
  Compass, MapPin, Calendar, Activity, CheckCircle, ChevronRight 
} from 'lucide-react';
import { POLAR_STATIONS } from '../data/polarData';
import { StationTelemetry } from '../types/polar';

interface PolarStationViewerProps {
  onSelectStation?: (stationName: string) => void;
}

export const PolarStationViewer: React.FC<PolarStationViewerProps> = ({ onSelectStation }) => {
  const [activeStationId, setActiveStationId] = useState<string>('himadri');
  const [imageError, setImageError] = useState<{ [id: string]: boolean }>({});

  const activeStation = POLAR_STATIONS.find(s => s.id === activeStationId) || POLAR_STATIONS[0];

  const getRegionIcon = (region: string) => {
    switch (region) {
      case 'Arctic': return <Snowflake className="w-4 h-4 text-cyan-400" />;
      case 'Antarctic': return <ThermometerSnowflake className="w-4 h-4 text-blue-400" />;
      case 'Himalaya': return <Mountain className="w-4 h-4 text-emerald-400" />;
      default: return <Compass className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header & Station Selector Strip */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            Tri-Polar Infrastructure
          </div>
          <h2 className="text-2xl font-bold text-white">India's Permanent Polar Stations</h2>
          <p className="text-sm text-slate-400">
            Real-time telemetry, geographic coordinates, and scientific programs across the globe.
          </p>
        </div>

        {/* Station Select Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5 overflow-x-auto">
          {POLAR_STATIONS.map(st => (
            <button
              key={st.id}
              onClick={() => setActiveStationId(st.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeStationId === st.id
                  ? 'bg-cyan-950/80 text-cyan-200 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {getRegionIcon(st.region)}
              <span>{st.name.replace(' Station', '')}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Station Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Visual & Telemetry Stage */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-slate-900 shadow-2xl group">
            {/* Image with fallback */}
            {!imageError[activeStation.id] ? (
              <img
                src={activeStation.imagePath}
                alt={`${activeStation.name} in ${activeStation.region}`}
                referrerPolicy="no-referrer"
                onError={() => setImageError(prev => ({ ...prev, [activeStation.id]: true }))}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-900 p-8 text-center">
                <Compass className="w-12 h-12 text-cyan-400/40 mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">{activeStation.name}</h4>
                <p className="text-xs text-slate-400">{activeStation.location}</p>
              </div>
            )}

            {/* Gradient Scrim for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent pointer-events-none" />

            {/* Overlay Station Identity */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between z-10">
              <div>
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeStation.coordinates}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{activeStation.name}</h3>
                <p className="text-xs text-slate-300">{activeStation.location}</p>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-[11px] uppercase tracking-wider font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  ● {activeStation.liveStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Telemetry Strip with tabular-nums */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
              <div className="text-[11px] font-medium text-slate-400 uppercase mb-1">Ambient Temp</div>
              <div className="text-xl font-bold font-mono tabular-nums text-white">
                {activeStation.currentTemp > 0 ? `+${activeStation.currentTemp}` : activeStation.currentTemp}
                <span className="text-xs text-slate-400 font-sans ml-1">°C</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Sensor calibration ok</div>
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
              <div className="text-[11px] font-medium text-slate-400 uppercase mb-1">Wind Vector</div>
              <div className="text-xl font-bold font-mono tabular-nums text-white">
                {activeStation.windSpeed}
                <span className="text-xs text-slate-400 font-sans ml-1">km/h</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Dir: {activeStation.windDirection}</div>
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
              <div className="text-[11px] font-medium text-slate-400 uppercase mb-1">Barometer</div>
              <div className="text-xl font-bold font-mono tabular-nums text-white">
                {activeStation.pressure}
                <span className="text-xs text-slate-400 font-sans ml-1">hPa</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Surface pressure</div>
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
              <div className="text-[11px] font-medium text-slate-400 uppercase mb-1">Commissioned</div>
              <div className="text-xl font-bold font-mono tabular-nums text-cyan-400">
                {activeStation.established}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">MoES / NCPOR</div>
            </div>
          </div>
        </div>

        {/* Station Scientific Mandate & Research Pillars */}
        <div className="lg:col-span-5 bg-white/5 rounded-2xl border border-white/10 p-6 space-y-6">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              {activeStation.region} Domain Overview
            </span>
            <h4 className="text-xl font-bold text-white mt-1 mb-2">Scientific Mandate</h4>
            <p className="text-sm leading-relaxed text-slate-300">
              {activeStation.id === 'himadri' && 
                'Inaugurated on July 1, 2008, Himadri provides year-round atmospheric, marine, and biological research facilities in Svalbard. It serves as India’s primary observational window into Arctic warming and aerosol-monsoon linkages.'}
              {activeStation.id === 'bharati' && 
                'Commissioned in 2012 in the Larsemann Hills, Bharati features cutting-edge modular architecture on stilts. It houses dedicated laboratories for oceanography, Gondwana tectonics, and a high-rate ISRO ground station for Earth-observation satellites.'}
              {activeStation.id === 'maitri' && 
                'Operational since 1989 on the rocky Schirmacher Oasis, Maitri has anchored India’s continuous Antarctic presence for decades, conducting geomagnetic, paleolimnological, and extreme environmental human physiological studies.'}
              {activeStation.id === 'himansh' && 
                'Constructed at 13,500 ft in Spiti Valley in 2016, Himansh is India’s highest research station. Scientists monitor glacial mass loss, snow-melt discharge, and permafrost thawing to predict downstream water security for Northern India.'}
            </p>
          </div>

          {/* Primary Research Lines */}
          <div>
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Key Observation Tracks
            </h5>
            <ul className="space-y-2.5">
              {activeStation.primaryResearch.map((res, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-slate-300 p-2.5 bg-slate-900/60 rounded-lg border border-white/5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Daylight & Climate Notice */}
          <div className="p-3.5 bg-cyan-950/20 rounded-xl border border-cyan-500/20 text-xs text-slate-300 flex items-center justify-between">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Photoperiod Status</span>
              <span className="font-medium text-cyan-300">{activeStation.daylight}</span>
            </div>
            <Activity className="w-5 h-5 text-cyan-400/80" />
          </div>

          {onSelectStation && (
            <button
              onClick={() => onSelectStation(activeStation.name)}
              className="w-full py-2.5 px-4 bg-white text-slate-900 font-semibold hover:bg-cyan-50 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore {activeStation.name} Archives</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
