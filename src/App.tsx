/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AgeWarning from "./components/AgeWarning";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Skull, 
  Heart, 
  Clock, 
  FileText, 
  Activity, 
  Flame, 
  AlertOctagon, 
  HelpCircle,
  TrendingUp,
  UserCheck,
  BookOpen
} from 'lucide-react';

import InteractiveAnatomy from './components/InteractiveAnatomy';
import TechniqueModule from './components/TechniqueModule';
import ScenarioSimulator from './components/ScenarioSimulator';
import EmpowermentHub from './components/EmpowermentHub';
import PracticeCoach from './components/PracticeCoach';
import DefenseManual from './components/DefenseManual';
import AboutManifesto from './components/AboutManifesto';

export default function App() {
  const [activeTab, setActiveTab] = useState<'techniques' | 'anatomy' | 'simulator' | 'stories' | 'coach' | 'manual' | 'manifesto'>('manifesto');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Update live clock representing active vigilance
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStartDrill = () => {
    setActiveTab('coach');
    // Scroll smoothly to drill/timer section
    setTimeout(() => {
      document.getElementById('practice-timer-coach')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600/30 selection:text-white pb-16">
      {/* Header Vigilance Bar */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 lg:px-8 py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="uppercase tracking-widest font-bold text-[10px] text-red-500">Valkyrie Security Grid • Online</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-zinc-600">IP SECURED</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-red-600" /> {currentTime || 'LOADING VIGILANCE TIMER...'}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        {/* Brand & Hero Unit */}
        <div className="relative bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-10 overflow-hidden">
          {/* Ambient graphic elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-zinc-800/5 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-900/60 px-3.5 py-1.5 text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold">
                <Shield className="w-3.5 h-3.5 text-red-600" /> Universal Equalizer Academy
              </div>
              
              <span className="block text-xs tracking-[0.4em] uppercase font-bold text-red-600">Self-Defense Academy</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black italic tracking-tighter text-white leading-none uppercase">
                DEFEND HER
              </h1>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Reports of sexual harassment, molestation, stalking, and sexual violence continue to remind us that personal safety remains a serious concern in many communities around the world. While no one is ever responsible for being targeted by violence, learning practical self-defense skills can help increase confidence, improve situational awareness, and create opportunities to escape dangerous situations.Size does not matter. Adrenaline does not matter. Every human body has anatomical weak-points that trigger profound neurological shutdown. We empower women with the physical competence, tactical plans, and muscle memory to deploy zero-hesitation groin counter-attacks against any harasser or predator.
              </p>
            </div>

            {/* Visual Bento Stats Sidebar */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="bg-zinc-950 border border-zinc-800 p-4 space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Kinetic Force</span>
                <div className="text-2xl font-black text-red-500 font-mono tracking-tighter">&lt; 10 LBS</div>
                <p className="text-[10px] text-zinc-400 leading-snug">Required to collapse any attacker.</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-4 space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Reaction Speed</span>
                <div className="text-2xl font-black text-red-500 font-mono tracking-tighter">0.4S</div>
                <p className="text-[10px] text-zinc-400 leading-snug">Average speed of a snap groin-kick.</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-4 col-span-2 space-y-1 flex items-center gap-3">
                <AlertOctagon className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <span className="text-[9px] font-mono text-red-500 uppercase tracking-wider block font-bold">Constitutional Right</span>
                  <div className="text-sm font-black text-white uppercase tracking-tight">Absolute Personal Sovereignty</div>
                  <p className="text-[10px] text-zinc-400 leading-normal">You have 100% legal right to defend your body.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tactical Navigation Tabs */}
        <div className="bg-zinc-900 border-2 border-zinc-800 p-1 flex flex-wrap gap-1" id="valkyrie-primary-navigation">
          <button
            onClick={() => setActiveTab('manifesto')}
            className={`flex-1 min-w-[120px] py-3.5 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
              activeTab === 'manifesto'
                ? 'bg-red-600 text-white border-red-600'
                : 'text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800'
            }`}
          >
            <Heart className="w-4 h-4 shrink-0 text-red-500 animate-pulse" /> Empowerment Manifesto
          </button>

          <button
            onClick={() => setActiveTab('techniques')}
            className={`flex-1 min-w-[120px] py-3.5 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
              activeTab === 'techniques'
                ? 'bg-red-600 text-white border-red-600'
                : 'text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800'
            }`}
          >
            <Shield className="w-4 h-4 shrink-0" /> Strike Library
          </button>

          <button
            onClick={() => setActiveTab('anatomy')}
            className={`flex-1 min-w-[120px] py-3.5 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
              activeTab === 'anatomy'
                ? 'bg-red-600 text-white border-red-600'
                : 'text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800'
            }`}
          >
            <Activity className="w-4 h-4 shrink-0" /> Target Anatomy
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex-1 min-w-[120px] py-3.5 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
              activeTab === 'simulator'
                ? 'bg-red-600 text-white border-red-600'
                : 'text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800'
            }`}
          >
            <Skull className="w-4 h-4 shrink-0" /> Threat Simulator
          </button>

          <button
            onClick={() => setActiveTab('stories')}
            className={`flex-1 min-w-[120px] py-3.5 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
              activeTab === 'stories'
                ? 'bg-red-600 text-white border-red-600'
                : 'text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800'
            }`}
          >
            <FileText className="w-4 h-4 shrink-0" /> Empowerment Vault
          </button>

          <button
            onClick={() => setActiveTab('coach')}
            className={`flex-1 min-w-[120px] py-3.5 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
              activeTab === 'coach'
                ? 'bg-red-600 text-white border-red-600'
                : 'text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800'
            }`}
          >
            <Clock className="w-4 h-4 shrink-0" /> Practice Coach
          </button>

          <button
            onClick={() => setActiveTab('manual')}
            className={`flex-1 min-w-[120px] py-3.5 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
              activeTab === 'manual'
                ? 'bg-red-600 text-white border-red-600'
                : 'text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800'
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" /> Defense Manual
          </button>


        </div>

        {/* Dynamic Workspace Container */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              {activeTab === 'manifesto' && (
                <AboutManifesto />
              )}
              {activeTab === 'techniques' && (
                <TechniqueModule onStartDrill={handleStartDrill} />
              )}
              {activeTab === 'anatomy' && (
                <InteractiveAnatomy />
              )}
              {activeTab === 'simulator' && (
                <ScenarioSimulator />
              )}
              {activeTab === 'stories' && (
                <EmpowermentHub />
              )}
              {activeTab === 'coach' && (
                <PracticeCoach />
              )}
              {activeTab === 'manual' && (
                <DefenseManual />
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Safety Disclaimer and Legal Footer */}
        <div className="border-t border-zinc-800 pt-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-500 leading-relaxed">
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-zinc-400 font-bold font-mono text-[10px] uppercase tracking-wider">
              <AlertOctagon className="w-4 h-4 text-red-600" /> Law Enforcement & Ethical Directives
            </div>
            <p>
              This is an educational research portal committed exclusively to social, lawful, defensive counter-measures against severe personal violence, assault, and harassment. Groin-strike physical counter-measures are classified globally by defense professionals as maximum-impact escape enablers to neutralize risk immediately and facilitate flight.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-zinc-400 font-bold font-mono text-[10px] uppercase tracking-wider">
              <UserCheck className="w-4 h-4 text-red-600" /> Mental Sovereignty Mantra
            </div>
            <p>
              By utilizing this training resource, you commit to maintaining situational awareness, pre-planning emergency routes, rehearsing strike biomechanics, and carrying yourself with absolute physical authority. You are never a victim; you are a highly trained, sovereign, and dangerous defender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
