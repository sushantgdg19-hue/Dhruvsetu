import React, { useState } from 'react';
import { Brain, Send, Sparkles, BookOpen, CheckCircle, Compass, HelpCircle, Loader2 } from 'lucide-react';
import { PolarRole } from '../types/polar';

interface AskPolarAIProps {
  initialTopic?: string;
  role?: PolarRole | null;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  source?: string;
  timestamp: string;
}

export const AskPolarAI: React.FC<AskPolarAIProps> = ({ initialTopic = '', role = 'student' }) => {
  const [query, setQuery] = useState(initialTopic ? `Tell me about ${initialTopic} in India's polar research program` : '');
  const [loading, setLoading] = useState(false);
  const [perspective, setPerspective] = useState<'student' | 'researcher'>(role === 'researcher' ? 'researcher' : 'student');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-01',
      sender: 'ai',
      text: "Welcome to DhruvSetu AI. I am calibrated with data from the National Centre for Polar and Ocean Research (NCPOR) and Ministry of Earth Sciences. Ask me about India's Arctic (Himadri), Antarctic (Maitri & Bharati), or Himalayan (Himansh) expeditions, paleoclimate ice cores, or the IndARC ocean mooring.",
      source: 'NCPOR / MoES Polar Knowledge Repository',
      timestamp: 'Just now'
    }
  ]);

  const samplePrompts = [
    "Why does India have research stations in both the Arctic and Antarctic?",
    "What is the IndARC underwater mooring in Kongsfjorden?",
    "How do ice cores drilled at Bharati Station reveal past climates?",
    "How does Himansh Station measure Himalayan glacier mass balance?",
    "What is the link between melting Arctic ice and the Indian Monsoon?"
  ];

  const handleSubmit = async (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const promptToSend = customQuery || query;
    if (!promptToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: promptToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask-polar-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: promptToSend,
          role: perspective,
          stationContext: 'all'
        })
      });

      if (!res.ok) throw new Error('Network error');
      const data = await res.json();

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.answer || 'Unable to retrieve data.',
        source: data.source || 'NCPOR Polar Archive',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      const fallbackMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: "India maintains three permanent poles of scientific exploration: Himadri (Arctic, Svalbard), Maitri & Bharati (Antarctica), and Himansh (Himalayas, Chandra Basin). Each station is equipped with automated sensors and laboratories tracking global climate teleconnections and cryospheric ice dynamics.",
        source: 'NCPOR Polar Archive (Local Fallback)',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Role Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">
            <Brain className="w-4 h-4" />
            <span>AI Polar Knowledge Synthesis</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Ask Polar Science AI</h2>
          <p className="text-sm text-slate-400">
            Source-grounded scientific intelligence on India’s cryospheric research and expeditions.
          </p>
        </div>

        {/* Perspective Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5">
          <button
            onClick={() => setPerspective('student')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              perspective === 'student'
                ? 'bg-purple-950/80 text-purple-200 border border-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Curious Public / Student
          </button>
          <button
            onClick={() => setPerspective('researcher')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              perspective === 'researcher'
                ? 'bg-purple-950/80 text-purple-200 border border-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Technical Researcher
          </button>
        </div>
      </div>

      {/* Suggested Inquiries */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400">Sample Inquiries:</span>
        {samplePrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSubmit(undefined, prompt)}
            className="text-xs text-slate-300 hover:text-cyan-300 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 transition-colors text-left"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Conversation Thread */}
      <div className="bg-[#030816] rounded-2xl border border-white/10 p-6 min-h-[420px] max-h-[580px] overflow-y-auto space-y-5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-cyan-900/40 text-cyan-50 border border-cyan-500/30'
                  : 'bg-white/5 text-slate-200 border border-white/10'
              }`}
            >
              {msg.sender === 'ai' && (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 mb-2">
                  <Brain className="w-3.5 h-3.5" />
                  <span>DhruvSetu Polar AI</span>
                </div>
              )}
              <div className="whitespace-pre-wrap">{msg.text}</div>

              {msg.source && (
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>Verified: {msg.source}</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">{msg.timestamp}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 text-slate-400 text-sm">
              <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>Cross-referencing NCPOR polar expedition archives &amp; atmospheric sensors...</span>
            </div>
          </div>
        )}
      </div>

      {/* Query Input Bar */}
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything about Indian polar stations, glaciers, ice cores, or marine ecology..."
          className="w-full bg-slate-900 border border-white/10 rounded-xl pl-4 pr-24 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute right-2 top-2 bottom-2 px-4 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <span>Ask</span>
          <Send className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
