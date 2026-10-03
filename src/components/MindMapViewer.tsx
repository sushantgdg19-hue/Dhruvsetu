import React, { useState } from 'react';
import { 
  Network, Sparkles, Brain, CheckCircle2, XCircle, 
  HelpCircle, ChevronRight, RefreshCw, ZoomIn, ZoomOut, Compass, Info
} from 'lucide-react';
import { MIND_MAP_NODES } from '../data/polarData';
import { MindMapNode, PolarRegion } from '../types/polar';

interface MindMapViewerProps {
  onAskAI?: (topic: string) => void;
}

export const MindMapViewer: React.FC<MindMapViewerProps> = ({ onAskAI }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('root-polar');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [quizState, setQuizState] = useState<{ [nodeId: string]: number | null }>({});
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const selectedNode = MIND_MAP_NODES.find(n => n.id === selectedNodeId) || MIND_MAP_NODES[0];

  const filteredNodes = activeCategory === 'all' 
    ? MIND_MAP_NODES 
    : MIND_MAP_NODES.filter(n => n.category === activeCategory);

  // SVG node coordinates calculation for clear, aesthetic layout
  const nodePositions: { [id: string]: { x: number; y: number } } = {
    'root-polar': { x: 380, y: 220 },
    'node-arctic': { x: 180, y: 110 },
    'node-indarc': { x: 80, y: 220 },
    'node-antarctic': { x: 580, y: 110 },
    'node-ice-core': { x: 680, y: 220 },
    'node-himalaya': { x: 380, y: 360 },
    'node-glacier-mass': { x: 220, y: 440 },
    'node-teleconnections': { x: 540, y: 440 },
  };

  const connections = [
    { from: 'root-polar', to: 'node-arctic' },
    { from: 'root-polar', to: 'node-antarctic' },
    { from: 'root-polar', to: 'node-himalaya' },
    { from: 'root-polar', to: 'node-teleconnections' },
    { from: 'node-arctic', to: 'node-indarc' },
    { from: 'node-antarctic', to: 'node-ice-core' },
    { from: 'node-himalaya', to: 'node-glacier-mass' },
    { from: 'node-arctic', to: 'node-teleconnections' },
  ];

  const handleQuizAnswer = (nodeId: string, optionIndex: number) => {
    setQuizState(prev => ({ ...prev, [nodeId]: optionIndex }));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'region': return { bg: 'bg-cyan-950/80', border: 'border-cyan-400', text: 'text-cyan-300', dot: '#22d3ee' };
      case 'discipline': return { bg: 'bg-indigo-950/80', border: 'border-indigo-400', text: 'text-indigo-300', dot: '#818cf8' };
      case 'discovery': return { bg: 'bg-amber-950/80', border: 'border-amber-400', text: 'text-amber-300', dot: '#fbbf24' };
      default: return { bg: 'bg-slate-900', border: 'border-slate-500', text: 'text-slate-300', dot: '#94a3b8' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
            <Network className="w-4 h-4" />
            <span>Interactive Knowledge Graph</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Polar Science Mind Map</h2>
          <p className="text-sm text-slate-400">
            Explore interconnectivity between India’s polar stations, expeditions, and cryospheric processes.
          </p>
        </div>

        {/* Filter Tabs (Single-line interactive buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-lg border border-white/5 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'All Knowledge' },
            { id: 'region', label: 'Polar Domains' },
            { id: 'discipline', label: 'Scientific Fields' },
            { id: 'discovery', label: 'Key Discoveries' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                activeCategory === tab.id
                  ? 'bg-cyan-900/60 text-cyan-200 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewport & Drawer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Graph Canvas */}
        <div className="lg:col-span-7 bg-[#030816] rounded-2xl border border-white/10 relative overflow-hidden h-[540px] flex flex-col justify-between p-4 shadow-xl">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
          
          {/* Canvas Controls */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Click any node to inspect evidence</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-900/80 border border-white/10 rounded-lg p-1">
              <button 
                onClick={() => setZoomLevel(z => Math.max(0.75, z - 0.1))} 
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setZoomLevel(1)} 
                className="px-2 py-0.5 text-[11px] font-mono text-slate-300 hover:text-white"
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button 
                onClick={() => setZoomLevel(z => Math.min(1.3, z + 0.1))} 
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* SVG Map */}
          <div className="relative z-10 flex-1 flex items-center justify-center overflow-hidden">
            <div 
              className="w-[760px] h-[480px] relative transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <svg className="w-full h-full absolute inset-0 pointer-events-none">
                {connections.map((conn, idx) => {
                  const from = nodePositions[conn.from];
                  const to = nodePositions[conn.to];
                  if (!from || !to) return null;
                  const isHighlighted = selectedNodeId === conn.from || selectedNodeId === conn.to;
                  return (
                    <line
                      key={idx}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={isHighlighted ? '#06b6d4' : '#1e293b'}
                      strokeWidth={isHighlighted ? 2.5 : 1.5}
                      strokeDasharray={conn.from.includes('tele') || conn.to.includes('tele') ? '4 4' : 'none'}
                      className="transition-colors duration-300"
                    />
                  );
                })}
              </svg>

              {/* Node Elements */}
              {MIND_MAP_NODES.map(node => {
                const pos = nodePositions[node.id];
                if (!pos) return null;
                const isSelected = selectedNodeId === node.id;
                const style = getCategoryColor(node.category);
                const isDimmed = activeCategory !== 'all' && node.category !== activeCategory;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 px-4 py-2.5 rounded-xl border text-left transition-all duration-200 focus:outline-none ${
                      isSelected
                        ? 'bg-cyan-900 text-white border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105 z-20'
                        : `${style.bg} ${style.border} ${style.text} hover:scale-105 z-10`
                    } ${isDimmed ? 'opacity-30' : 'opacity-100'}`}
                    style={{ left: pos.x, top: pos.y }}
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full shrink-0" 
                        style={{ backgroundColor: style.dot }}
                      />
                      <span className="text-xs font-semibold whitespace-nowrap">{node.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="relative z-10 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Domains</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-400" /> Disciplines</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> Discoveries</span>
            </div>
            <span className="text-slate-500">8 Curated Knowledge Nodes</span>
          </div>
        </div>

        {/* Selected Node Details Drawer */}
        <div className="lg:col-span-5 bg-white/5 rounded-2xl border border-white/10 p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {selectedNode.category} · {selectedNode.region}
              </span>
              {selectedNode.relatedStations && (
                <span className="text-xs text-slate-400">
                  Base: {selectedNode.relatedStations.join(', ')}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{selectedNode.label}</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {selectedNode.summary}
            </p>
          </div>

          {/* Key Empirical Facts */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Empirical Facts &amp; Expeditions
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {selectedNode.keyFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold shrink-0">·</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scientific Significance */}
          <div className="p-3.5 bg-cyan-950/30 rounded-xl border border-cyan-500/20">
            <div className="text-xs font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              <span>Scientific Significance</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              {selectedNode.scientificSignificance}
            </p>
          </div>

          {/* Interactive Mini-Quiz on this Node */}
          {selectedNode.quizQuestion && (
            <div className="p-4 bg-slate-900/90 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Test Your Understanding</span>
              </div>
              <p className="text-xs font-medium text-slate-200">
                {selectedNode.quizQuestion.question}
              </p>
              
              <div className="space-y-1.5">
                {selectedNode.quizQuestion.options.map((opt, idx) => {
                  const hasAnswered = quizState[selectedNode.id] !== undefined && quizState[selectedNode.id] !== null;
                  const isSelected = quizState[selectedNode.id] === idx;
                  const isCorrect = idx === selectedNode.quizQuestion?.correctIndex;

                  let optClass = 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10';
                  if (hasAnswered) {
                    if (isCorrect) optClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-200';
                    else if (isSelected && !isCorrect) optClass = 'bg-rose-950/60 border-rose-500 text-rose-200';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={hasAnswered}
                      onClick={() => handleQuizAnswer(selectedNode.id, idx)}
                      className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors flex items-center justify-between ${optClass}`}
                    >
                      <span>{opt}</span>
                      {hasAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                      {hasAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {quizState[selectedNode.id] !== undefined && quizState[selectedNode.id] !== null && (
                <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                  {selectedNode.quizQuestion.explanation}
                </p>
              )}
            </div>
          )}

          {/* Ask AI Action */}
          {onAskAI && (
            <button
              onClick={() => onAskAI(selectedNode.label)}
              className="w-full py-2.5 px-4 bg-cyan-900/30 hover:bg-cyan-800/40 border border-cyan-500/30 rounded-xl text-xs font-semibold text-cyan-300 flex items-center justify-center gap-2 transition-colors"
            >
              <Brain className="w-4 h-4" />
              <span>Ask Polar AI about {selectedNode.label}</span>
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
