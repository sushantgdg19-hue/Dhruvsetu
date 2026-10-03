import React, { useState } from 'react';
import { 
  Compass, Network, Brain, CheckCircle, Award, 
  BookOpen, Sparkles, HelpCircle, ArrowRight, Snowflake, 
  Mountain, ThermometerSnowflake, Globe2, Newspaper, User, 
  Map as MapIcon 
} from 'lucide-react';
import { MindMapViewer } from './MindMapViewer';
import { AskPolarAI } from './AskPolarAI';
import { PolarStationViewer } from './PolarStationViewer';
import { PolarMap } from './PolarMap';
import { POLAR_QUIZ_QUESTIONS } from '../data/polarData';

export const StudentDashboard: React.FC = () => {
  const [activeNav, setActiveNav] = useState<
    'home' | 'explore' | 'arctic' | 'antarctic' | 'himalaya' | 
    'polar-map' | 'mind-map' | 'learning' | 'ask-polar-science' | 
    'quizzes' | 'news-events' | 'profile'
  >('mind-map'); // Mind Map is the primary flagship experience

  const [quizAnswers, setQuizAnswers] = useState<{ [qIndex: number]: number }>({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);
  const [aiTopic, setAiTopic] = useState('');

  const studentLinks = [
    { id: 'mind-map', label: 'Mind Map', icon: <Network className="w-4 h-4 text-cyan-400" /> },
    { id: 'home', label: 'Home', icon: <Compass className="w-4 h-4" /> },
    { id: 'explore', label: 'Explore', icon: <Globe2 className="w-4 h-4" /> },
    { id: 'arctic', label: 'Arctic', icon: <Snowflake className="w-4 h-4" /> },
    { id: 'antarctic', label: 'Antarctica', icon: <ThermometerSnowflake className="w-4 h-4" /> },
    { id: 'himalaya', label: 'Himalaya', icon: <Mountain className="w-4 h-4" /> },
    { id: 'polar-map', label: 'Polar Map', icon: <MapIcon className="w-4 h-4" /> },
    { id: 'learning', label: 'Learning', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ask-polar-science', label: 'Ask Polar Science', icon: <Brain className="w-4 h-4 text-purple-400" /> },
    { id: 'quizzes', label: 'Quizzes', icon: <HelpCircle className="w-4 h-4 text-amber-400" /> },
    { id: 'news-events', label: 'News & Events', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
  ];

  const handleSelectQuizAnswer = (qIndex: number, optIndex: number) => {
    if (submittedQuiz) return;
    setQuizAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    POLAR_QUIZ_QUESTIONS.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleAskAIFromTopic = (topic: string) => {
    setAiTopic(topic);
    setActiveNav('ask-polar-science');
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Student/Public Navigation Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900/90 rounded-2xl border border-white/10 p-4 space-y-6 flex-shrink-0">
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">
            Learning Hub
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Student &amp; Public</span>
          </div>
        </div>

        <nav className="space-y-1">
          {studentLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveNav(link.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                activeNav === link.id
                  ? 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-500/20 text-center">
          <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
          <div className="text-[11px] font-bold text-amber-200">National Explorer</div>
          <p className="text-[10px] text-slate-400 mt-0.5">Explore nodes to unlock badges</p>
        </div>
      </aside>

      {/* Main Learning & Exploration Content Area (Strictly No CRUD) */}
      <div className="flex-1 w-full space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              India's Polar Discovery Portal
            </span>
            <h2 className="text-2xl font-bold text-white capitalize">
              {activeNav.replace('-', ' ')}
            </h2>
          </div>

          <div className="text-xs text-slate-400">
            Explorer Mode · All Knowledge Verified by NCPOR
          </div>
        </div>

        {/* 1. Mind Map (Primary Experience) */}
        {activeNav === 'mind-map' && (
          <MindMapViewer onAskAI={handleAskAIFromTopic} />
        )}

        {/* 2. Home / Overview */}
        {activeNav === 'home' && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-indigo-950/30 rounded-2xl border border-white/10 space-y-3">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Discover the Three Poles
              </span>
              <h3 className="text-2xl font-bold text-white">Welcome to Polar Science</h3>
              <p className="text-xs leading-relaxed text-slate-300 max-w-2xl">
                India is one of the few nations conducting year-round scientific investigations in Svalbard (Arctic), Queen Maud Land and Larsemann Hills (Antarctica), and the high Himalayas (The Third Pole). Use the interactive tools here to learn, ask questions, and test your understanding!
              </p>
              <div className="pt-2 flex gap-3">
                <button 
                  onClick={() => setActiveNav('mind-map')}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold"
                >
                  Launch Mind Map
                </button>
                <button 
                  onClick={() => setActiveNav('quizzes')}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl text-xs font-medium"
                >
                  Take Polar Quiz
                </button>
              </div>
            </div>

            <PolarStationViewer onSelectStation={handleAskAIFromTopic} />
          </div>
        )}

        {/* 3. Explore & Learning */}
        {(activeNav === 'explore' || activeNav === 'learning') && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => setActiveNav('arctic')}
                className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/40 cursor-pointer space-y-2 transition-all"
              >
                <Snowflake className="w-6 h-6 text-cyan-400" />
                <h4 className="text-base font-bold text-white">The Arctic &amp; Himadri Station</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Discover how melting Arctic sea ice changes the jet stream and impacts monsoon rains across India.
                </p>
              </div>

              <div 
                onClick={() => setActiveNav('antarctic')}
                className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/40 cursor-pointer space-y-2 transition-all"
              >
                <ThermometerSnowflake className="w-6 h-6 text-blue-400" />
                <h4 className="text-base font-bold text-white">Antarctica: Bharati &amp; Maitri</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Explore ancient ice cores, the break-up of the Gondwana supercontinent, and the Southern Ocean.
                </p>
              </div>

              <div 
                onClick={() => setActiveNav('himalaya')}
                className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-emerald-500/40 cursor-pointer space-y-2 transition-all"
              >
                <Mountain className="w-6 h-6 text-emerald-400" />
                <h4 className="text-base font-bold text-white">The Third Pole: Himansh</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Learn about high-altitude glaciers in Spiti that feed river basins sustaining over a billion people.
                </p>
              </div>

              <div 
                onClick={() => setActiveNav('mind-map')}
                className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/40 cursor-pointer space-y-2 transition-all"
              >
                <Network className="w-6 h-6 text-amber-400" />
                <h4 className="text-base font-bold text-white">Interactive Science Mind Map</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Navigate interconnections between polar stations, expeditions, and climate science.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4. Regions Details */}
        {(activeNav === 'arctic' || activeNav === 'antarctic' || activeNav === 'himalaya') && (
          <PolarStationViewer onSelectStation={handleAskAIFromTopic} />
        )}

        {/* 5. Polar Map */}
        {activeNav === 'polar-map' && (
          <PolarMap />
        )}

        {/* 6. Ask Polar Science AI */}
        {activeNav === 'ask-polar-science' && (
          <AskPolarAI initialTopic={aiTopic} role="student" />
        )}

        {/* 7. Quizzes */}
        {activeNav === 'quizzes' && (
          <div className="max-w-3xl space-y-6">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2 text-center">
              <h3 className="text-lg font-bold text-white">India's Polar Science Quiz</h3>
              <p className="text-xs text-slate-300">
                Answer these 5 questions based on real Indian expeditions and research stations!
              </p>
            </div>

            <div className="space-y-4">
              {POLAR_QUIZ_QUESTIONS.map((q, qIdx) => {
                const selectedOpt = quizAnswers[qIdx];
                const isCorrect = selectedOpt === q.correctIndex;

                return (
                  <div key={qIdx} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                      <span>Question {qIdx + 1} of {POLAR_QUIZ_QUESTIONS.length}</span>
                      {submittedQuiz && (
                        <span className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>
                          {isCorrect ? '● Correct' : '● Incorrect'}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-white">{q.question}</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = selectedOpt === optIdx;
                        let btnStyle = 'bg-slate-900/60 border-white/10 text-slate-300 hover:bg-white/10';

                        if (submittedQuiz) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                          } else if (isChosen && !isCorrect) {
                            btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                          }
                        } else if (isChosen) {
                          btnStyle = 'bg-amber-950/80 border-amber-500 text-amber-200 font-semibold';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={submittedQuiz}
                            onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                            className={`p-3 rounded-lg border text-left transition-colors flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {submittedQuiz && optIdx === q.correctIndex && (
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {submittedQuiz && (
                      <p className="text-xs text-slate-400 pt-2 border-t border-white/5 leading-relaxed">
                        {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                {submittedQuiz ? (
                  <span className="text-sm font-bold text-white">
                    Score: {calculateScore()} / {POLAR_QUIZ_QUESTIONS.length}
                  </span>
                ) : (
                  <span className="text-xs text-slate-400">Answer all questions to finish.</span>
                )}
              </div>
              <div>
                {submittedQuiz ? (
                  <button
                    onClick={() => { setQuizAnswers({}); setSubmittedQuiz(false); }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold"
                  >
                    Retake Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setSubmittedQuiz(true)}
                    disabled={Object.keys(quizAnswers).length < POLAR_QUIZ_QUESTIONS.length}
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 8. News & Events */}
        {activeNav === 'news-events' && (
          <div className="space-y-4">
            {[
              { title: '44th Indian Antarctic Expedition Flagged Off from Goa', date: 'November 2024', summary: 'Scientists depart aboard expedition vessel to Bharati Station for summer ice-coring campaign.' },
              { title: 'Himansh Station Records Record Snow Accumulation in Chandra Basin', date: 'January 2025', summary: 'Automated weather telemetry indicates high snow-water equivalent across Samudra Tapu glacier.' },
              { title: 'IndARC Fjord Mooring Completes Decade of Continuous Hydrographic Monitoring', date: 'October 2024', summary: 'MoES celebrates 10 years of Indian multi-sensor moored ocean observatory in Svalbard.' }
            ].map((news, i) => (
              <div key={i} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-1.5 text-xs">
                <span className="text-[10px] text-cyan-400 font-mono">{news.date}</span>
                <h4 className="text-sm font-bold text-white">{news.title}</h4>
                <p className="text-slate-300 leading-relaxed">{news.summary}</p>
              </div>
            ))}
          </div>
        )}

        {/* 9. Profile */}
        {activeNav === 'profile' && (
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3 max-w-md text-xs text-slate-300">
            <h4 className="text-base font-bold text-white">Student Explorer Profile</h4>
            <p>Role: Public &amp; Student Explorer</p>
            <p>Access Level: Educational Content, Mind Map, Polar AI</p>
            <p>Badges Earned: National Polar Science Discovery Badge</p>
          </div>
        )}

      </div>
    </div>
  );
};
