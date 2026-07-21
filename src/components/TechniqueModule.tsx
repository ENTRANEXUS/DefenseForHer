/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Technique } from '../types';
import { TECHNIQUES } from '../selfDefenseData';
import { Shield, Flame, Activity, Zap, CheckCircle, ArrowRight, BookOpen, AlertOctagon } from 'lucide-react';

interface TechniqueModuleProps {
  onStartDrill: (drillId: string) => void;
}

export default function TechniqueModule({ onStartDrill }: TechniqueModuleProps) {
  const [selectedTech, setSelectedTech] = useState<Technique>(TECHNIQUES[0]);
  const [completedTechs, setCompletedTechs] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('valkyrie_completed_techniques');
    if (saved) {
      try {
        setCompletedTechs(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleCompleted = (id: string) => {
    let updated: string[];
    if (completedTechs.includes(id)) {
      updated = completedTechs.filter(tId => tId !== id);
    } else {
      updated = [...completedTechs, id];
    }
    setCompletedTechs(updated);
    localStorage.setItem('valkyrie_completed_techniques', JSON.stringify(updated));
  };

  return (
    <div className="space-y-8" id="techniques-training-module">
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-zinc-900 border-2 border-zinc-800 p-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-black italic tracking-tighter text-white flex items-center gap-2 uppercase">
            <BookOpen className="w-6 h-6 text-red-600" />
            Tactical Strike Library
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Study the exact biomechanical steps for the five primary high-impact groin strikes. Each technique is designed for speed, low strength requirement, and immediate neutralization.
          </p>
        </div>
        <div className="bg-zinc-950 px-5 py-3 border border-zinc-800 shrink-0 text-center md:text-right">
          <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest font-bold">Your Progress</div>
          <div className="text-xl font-black text-red-500 font-mono uppercase">
            {completedTechs.length} / {TECHNIQUES.length} LEARNED
          </div>
          <div className="w-32 h-2 bg-zinc-800 mt-1.5 overflow-hidden mx-auto md:ml-auto">
            <div 
              className="bg-red-600 h-full transition-all duration-500" 
              style={{ width: `${(completedTechs.length / TECHNIQUES.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Selector */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-1 font-bold">SELECT TECHNIQUE</h3>
          <div className="space-y-2">
            {TECHNIQUES.map((tech) => {
              const isSelected = selectedTech.id === tech.id;
              const isLearned = completedTechs.includes(tech.id);
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech)}
                  className={`w-full text-left p-4 border transition-all duration-200 relative overflow-hidden group flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-red-950/20 border-red-600'
                      : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80'
                  }`}
                >
                  {/* Learned indicator square */}
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompleted(tech.id);
                    }}
                    className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isLearned 
                        ? 'bg-red-600 border-red-500 text-white' 
                        : 'border-zinc-700 hover:border-red-500'
                    }`}
                  >
                    {isLearned && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-black uppercase tracking-tight text-sm transition-colors ${
                        isSelected ? 'text-red-500' : 'text-zinc-200 group-hover:text-white'
                      }`}>
                        {tech.title}
                      </span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                        tech.difficulty === 'Beginner' 
                          ? 'bg-emerald-950/40 border-emerald-800 text-emerald-400 font-bold'
                          : tech.difficulty === 'Intermediate'
                          ? 'bg-amber-950/40 border-amber-800 text-amber-400 font-bold'
                          : 'bg-red-950/40 border-red-800 text-red-400 font-bold'
                      }`}>
                        {tech.difficulty}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {tech.subtitle.split(' • ')[1] || tech.subtitle}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Panel */}
        <div className="lg:col-span-8 bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-red-500 text-xs font-mono uppercase tracking-widest mb-1.5 font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    {selectedTech.subtitle}
                  </div>
                  <h3 className="text-3xl font-black italic uppercase text-white tracking-tighter">
                    {selectedTech.title}
                  </h3>
                </div>
                <button
                  onClick={() => toggleCompleted(selectedTech.id)}
                  className={`px-5 py-2 text-xs font-black uppercase tracking-wider flex items-center gap-2 border transition-all ${
                    completedTechs.includes(selectedTech.id)
                      ? 'bg-red-950/40 border-red-800 text-red-300'
                      : 'bg-red-600 hover:bg-red-500 border-red-500 text-white'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  {completedTechs.includes(selectedTech.id) ? 'Completed • Re-learn' : 'Mark as Learned'}
                </button>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
                <div className="bg-zinc-950 border border-zinc-800 p-3 flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase font-bold">Power output</div>
                    <div className="text-xs font-bold text-zinc-200">{selectedTech.powerLevel}</div>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 p-3 flex items-center gap-2.5">
                  <Flame className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase font-bold">Ideal Distance</div>
                    <div className="text-xs font-bold text-zinc-200">{selectedTech.idealDistance}</div>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 p-3 flex items-center gap-2.5 col-span-2 md:col-span-1">
                  <Shield className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase font-bold">Complexity</div>
                    <div className="text-xs font-bold text-zinc-200">{selectedTech.difficulty} Level</div>
                  </div>
                </div>
              </div>

              {/* Body layout: Animation + steps */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* SVG Visual Illustrator */}
                <div className="md:col-span-5 bg-zinc-950 border border-zinc-800 p-4 flex flex-col items-center justify-center relative overflow-hidden h-[260px]">
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                    Tactical Motion Graph
                  </div>

                  <DynamicVectorAnimation techId={selectedTech.id} />

                  <div className="absolute bottom-2 text-[10px] text-center text-zinc-500 font-mono italic font-bold">
                    Animation of strike trajectory
                  </div>
                </div>

                {/* Steps */}
                <div className="md:col-span-7 space-y-4">
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">STEP-BY-STEP BIOMECHANICS</h4>
                  <div className="space-y-3.5">
                    {selectedTech.steps.map((step, index) => {
                      const [title, desc] = step.split(': ');
                      return (
                        <div key={index} className="flex gap-3">
                          <div className="w-5 h-5 bg-red-950 text-red-400 text-xs font-mono flex items-center justify-center font-bold shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <div className="text-sm">
                            <span className="font-bold text-zinc-200 block uppercase tracking-tight text-xs">{title}</span>
                            <span className="text-zinc-400 leading-relaxed text-xs block mt-0.5">{desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom analytical block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-zinc-800 pt-5 mt-4">
                <div className="bg-zinc-950/50 p-4 border border-zinc-800 space-y-1.5">
                  <h4 className="text-[11px] font-mono text-red-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <Activity className="w-3.5 h-3.5" /> Physiological Impact
                  </h4>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    {selectedTech.physiologicalImpact}
                  </p>
                </div>

                <div className="bg-zinc-950/50 p-4 border border-zinc-800 space-y-1.5">
                  <h4 className="text-[11px] font-mono text-red-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <Shield className="w-3.5 h-3.5" /> Core Tactical Mandate
                  </h4>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    {selectedTech.tacticalKey}
                  </p>
                </div>
              </div>

              {/* Legal / Warning */}
              <div className="bg-red-950/20 border-l-4 border-red-600 p-4 flex gap-3">
                <AlertOctagon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="text-xs text-red-200 leading-relaxed">
                  <strong className="text-red-300 font-bold uppercase tracking-tight">Absolute Commitment Warning:</strong> These techniques are designated strictly for severe threat defense against rapists, molestors, and harassers. In extreme threat encounters, do not pull your strikes or check your speed. Commit 100% of your body weight and speed to ensure instant disabling effects.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* Custom Interactive SVG Animations */
function DynamicVectorAnimation({ techId }: { techId: string }) {
  if (techId === 'snap-kick') {
    return (
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-full">
        {/* Attacker Silhouette */}
        <g opacity="0.65">
          <circle cx="140" cy="50" r="12" fill="#475569" /> {/* Attacker head */}
          <line x1="140" y1="62" x2="140" y2="130" stroke="#475569" strokeWidth="4" /> {/* Body */}
          <line x1="140" y1="130" x2="155" y2="190" stroke="#475569" strokeWidth="4" /> {/* Far leg */}
          <line x1="140" y1="130" x2="130" y2="190" stroke="#475569" strokeWidth="4" /> {/* Near leg */}
        </g>

        {/* Defender Silhouette */}
        <g>
          <circle cx="60" cy="55" r="12" fill="#e2e8f0" /> {/* Head */}
          <line x1="60" y1="67" x2="60" y2="125" stroke="#e2e8f0" strokeWidth="4" /> {/* Torso */}
          <line x1="60" y1="125" x2="50" y2="190" stroke="#e2e8f0" strokeWidth="4" /> {/* Back leg standing */}
          {/* Hands up defense posture */}
          <line x1="60" y1="80" x2="75" y2="70" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="60" y1="85" x2="70" y2="75" stroke="#e2e8f0" strokeWidth="3" />
        </g>

        {/* Animated kicking leg */}
        <motion.g
          animate={{
            rotate: [0, 45, -5, 0],
            originX: '60px',
            originY: '125px'
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.8,
            ease: 'easeInOut'
          }}
        >
          {/* Upper leg */}
          <line x1="60" y1="125" x2="75" y2="150" stroke="#e2e8f0" strokeWidth="4" />
          {/* Lower leg kicking */}
          <motion.line
            x1="75"
            y1="150"
            x2="105"
            y2="155"
            stroke="#e2e8f0"
            strokeWidth="4"
            animate={{
              x2: [105, 133, 90, 105],
              y2: [155, 116, 170, 155]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: 'easeInOut'
            }}
          />
        </motion.g>

        {/* Trajectory glow line */}
        <motion.path
          d="M 60,125 Q 90,150 133,116"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="2"
          strokeDasharray="4,4"
          animate={{ strokeDashoffset: [0, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Target Flash */}
        <motion.circle
          cx="133"
          cy="116"
          r="8"
          fill="#f43f5e"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.2, 0.9, 0.2]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.8,
            ease: 'easeInOut'
          }}
        />
        <circle cx="133" cy="116" r="3" fill="#ffffff" />
      </svg>
    );
  }

  if (techId === 'knee-thrust') {
    return (
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-full">
        {/* Clinched state: Defender holding attacker's collar */}
        {/* Attacker Silhouette slightly bent forward */}
        <g opacity="0.65">
          <circle cx="120" cy="55" r="12" fill="#475569" /> {/* Attacker head bent */}
          <path d="M 120,67 L 115,120 L 130,190" fill="none" stroke="#475569" strokeWidth="4" />
          <line x1="115" y1="120" x2="110" y2="190" stroke="#475569" strokeWidth="4" />
        </g>

        {/* Defender holding attacker */}
        <g>
          <circle cx="75" cy="50" r="12" fill="#e2e8f0" /> {/* Head */}
          <line x1="75" y1="62" x2="80" y2="120" stroke="#e2e8f0" strokeWidth="4" /> {/* Torso */}
          <line x1="80" y1="120" x2="70" y2="190" stroke="#e2e8f0" strokeWidth="4" /> {/* Standing leg */}
          {/* Grip lines pulling down */}
          <line x1="75" y1="72" x2="115" y2="60" stroke="#f43f5e" strokeWidth="3.5" /> {/* Arm pull collar */}
        </g>

        {/* Driving Knee */}
        <motion.g
          animate={{
            y: [0, -18, 5, 0],
            x: [0, 15, -2, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: 'easeOut'
          }}
        >
          {/* Upper leg kneeing up */}
          <line x1="80" y1="120" x2="105" y2="102" stroke="#e2e8f0" strokeWidth="5.5" strokeLinecap="round" />
          {/* Foot pointed down */}
          <line x1="105" y1="102" x2="98" y2="135" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
        </motion.g>

        {/* Force Impact Lines */}
        <motion.g
          animate={{
            opacity: [0, 1, 0],
            scale: [0.6, 1.4, 0.6]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: 'easeOut'
          }}
          className="origin-center"
          style={{ transformOrigin: '112px 105px' }}
        >
          <circle cx="112" cy="105" r="14" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
          <path d="M 102,95 L 94,88 M 122,95 L 130,88 M 112,118 L 112,128" stroke="#f43f5e" strokeWidth="2" />
        </motion.g>

        <circle cx="112" cy="105" r="4" fill="#ffffff" />
      </svg>
    );
  }

  if (techId === 'claw-twist') {
    return (
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-full">
        {/* Detail view of a firm high-contract claw hand squeezing a central core */}
        {/* Wrist base */}
        <rect x="25" y="85" width="40" height="30" rx="4" fill="#334155" />
        <rect x="60" y="80" width="30" height="40" rx="6" fill="#e2e8f0" />

        {/* Pulsing Target Core being squeezed */}
        <motion.circle
          cx="125"
          cy="100"
          r="18"
          fill="#311"
          stroke="#ef4444"
          strokeWidth="2.5"
          animate={{
            scale: [1, 0.72, 1],
            fill: ['#311', '#911', '#311']
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Fingers forming a tight squeezing clamp */}
        {/* Thumb */}
        <motion.path
          d="M 85,75 C 95,65 110,65 122,78"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="5"
          strokeLinecap="round"
          animate={{
            d: [
              'M 85,75 C 95,65 110,65 122,78',
              'M 85,75 C 95,73 108,78 116,88',
              'M 85,75 C 95,65 110,65 122,78'
            ]
          }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Index Finger */}
        <motion.path
          d="M 85,90 C 105,80 120,85 130,95"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="5"
          strokeLinecap="round"
          animate={{
            d: [
              'M 85,90 C 105,80 120,85 130,95',
              'M 85,90 C 105,90 115,92 122,96',
              'M 85,90 C 105,80 120,85 130,95'
            ]
          }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Middle/Ring Fingers group */}
        <motion.path
          d="M 85,110 C 105,120 120,115 130,105"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="5"
          strokeLinecap="round"
          animate={{
            d: [
              'M 85,110 C 105,120 120,115 130,105',
              'M 85,110 C 105,110 115,108 122,104',
              'M 85,110 C 105,120 120,115 130,105'
            ]
          }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Twist arrow rotation indicator */}
        <motion.path
          d="M 155,80 A 25,25 0 0,1 155,120"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="4,4"
          animate={{
            rotate: [0, 90, 0],
            opacity: [0.3, 1, 0.3]
          }}
          className="origin-center"
          style={{ transformOrigin: '125px 100px' }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    );
  }

  if (techId === 'heel-stamp') {
    return (
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-full">
        {/* Attacker holding defender from behind */}
        <g opacity="0.5">
          <circle cx="65" cy="55" r="12" fill="#475569" />
          <line x1="65" y1="67" x2="65" y2="130" stroke="#475569" strokeWidth="4" />
        </g>

        {/* Defender in front, arms locked but hip free */}
        <g>
          <circle cx="85" cy="60" r="11" fill="#e2e8f0" />
          <line x1="85" y1="71" x2="85" y2="125" stroke="#e2e8f0" strokeWidth="4" />
          <line x1="85" y1="125" x2="95" y2="190" stroke="#e2e8f0" strokeWidth="4" /> {/* Front standing foot */}
        </g>

        {/* Rear Stamp Foot driving backwards */}
        <motion.g
          animate={{
            x: [0, -18, 4, 0],
            y: [0, 8, -1, 0]
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: 'easeOut'
          }}
        >
          {/* Leg driving back */}
          <line x1="85" y1="125" x2="72" y2="145" stroke="#e2e8f0" strokeWidth="4" />
          {/* Hard heel driving flat backward */}
          <line x1="72" y1="145" x2="52" y2="148" stroke="#dc2626" strokeWidth="5.5" strokeLinecap="square" />
        </motion.g>

        {/* Impact glow on Attacker groin height (x=65, y=148 approx) */}
        <motion.circle
          cx="62"
          cy="148"
          r="10"
          fill="#dc2626"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.1, 0.8, 0.1]
          }}
          transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 0.5 }}
        />
        <circle cx="62" cy="148" r="3" fill="#ffffff" />
      </svg>
    );
  }

  // default combo
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-full">
      {/* Visual representations of two arrows: head push and groin drive */}
      <circle cx="100" cy="100" r="40" fill="none" stroke="#27272a" strokeWidth="2" />
      
      {/* Upper Push Arrow */}
      <motion.path
        d="M 50,70 L 140,55"
        fill="none"
        stroke="#71717a"
        strokeWidth="3.5"
        strokeLinecap="round"
        animate={{
          x: [0, 20, 0],
          stroke: ['#71717a', '#dc2626', '#71717a']
        }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <circle cx="140" cy="55" r="4" fill="#dc2626" />
      <text x="50" y="55" fill="#dc2626" fontSize="10" fontFamily="monospace" fontWeight="bold">1. HIGH PALM SHOVE</text>

      {/* Lower Groin Knee Arrow */}
      <motion.path
        d="M 60,140 L 130,110"
        fill="none"
        stroke="#dc2626"
        strokeWidth="4"
        strokeLinecap="round"
        animate={{
          x: [0, 24, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
      />
      <circle cx="130" cy="110" r="5" fill="#dc2626" />
      <text x="50" y="160" fill="#dc2626" fontSize="10" fontFamily="monospace" fontWeight="bold">2. EXPLOSIVE KNEE</text>
    </svg>
  );
}
