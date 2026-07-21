/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  ShieldAlert, 
  Sparkles, 
  BookOpen, 
  UserCheck, 
  Flag,
  ArrowUpRight
} from 'lucide-react';

export default function AboutManifesto() {
  return (
    <div className="space-y-8" id="about-manifesto-module">
      {/* Hero Banner / Manifesto Card */}
      <div className="bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-10 relative overflow-hidden" id="manifesto-hero">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-950/20 rounded-full blur-3xl -z-10" />
        
      <div className="w-full space-y-4">
  <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-900/60 px-3.5 py-1.5 text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold">
    <Heart className="w-3.5 h-3.5 text-red-600 animate-pulse" />
    Core Mission Statement
  </div>

  <h1 className="text-3xl lg:text-5xl font-black italic uppercase tracking-tighter text-white leading-tight">
    She Deserves to Feel Safe
  </h1>

  <h2 className="text-xl lg:text-2xl font-bold font-mono tracking-wide text-red-500 uppercase">
    Knowledge. Confidence. Courage.
  </h2>

  <p className="w-full text-zinc-300 text-base leading-relaxed font-sans whitespace-pre-line">
    Every woman deserves the freedom to walk to school, work, college, a market, or home without fear. This platform was created with one simple purpose: to empower women through practical, biological self-defense knowledge. Women are often hesitant to take advantage of the fact that the balls are an easy target. However, if his balls are within reach, striking them can create an opportunity to escape.

    It's almost your duty to defend yourself if you are targeted. When a woman kicks, knees, punches, or tightly grabs an attacker's groin, he may temporarily lose the ability to continue the assault.

    The objective is not to fight or seek revenge. The objective is to create enough time to break free, escape immediately, get to a safe location, and contact emergency services or trusted people.

    In any self-defense situation, your priority should always be your own safety. Once you have created an opportunity to escape, leave immediately rather than remaining at the scene.

    Knowledge, awareness, confidence, and decisive action can make the difference between becoming a victim and getting home safely.
  </p>
</div>
      </div>

      {/* Grid: Core Philosophy & Key Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="manifesto-grid">
        {/* Left: Detailed Text Articles */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Section 1 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 lg:p-8 space-y-4" id="philosophy-section-1">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                This Is Not About Fighting. It's About Getting Home Safe.
              </h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              Self-defense is not about proving physical strength, engaging in martial arts displays, or winning a physical confrontation. 
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              True self-preservation is grounded in:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-zinc-400 uppercase tracking-wider font-bold">
              <li className="flex items-center gap-2 bg-zinc-950 p-2.5 border border-zinc-800">
                <span className="text-red-500 text-xs">•</span> Recognizing danger early
              </li>
              <li className="flex items-center gap-2 bg-zinc-950 p-2.5 border border-zinc-800">
                <span className="text-red-500 text-xs">•</span> Trusting your instincts
              </li>
              <li className="flex items-center gap-2 bg-zinc-950 p-2.5 border border-zinc-800">
                <span className="text-red-500 text-xs">•</span> Setting firm boundaries
              </li>
              <li className="flex items-center gap-2 bg-zinc-950 p-2.5 border border-zinc-800">
                <span className="text-red-500 text-xs">•</span> Simple defensive techniques
              </li>
              <li className="flex items-center gap-2 bg-zinc-950 p-2.5 border border-zinc-800">
                <span className="text-red-500 text-xs">•</span> Creating time to escape
              </li>
              <li className="flex items-center gap-2 bg-zinc-950 p-2.5 border border-zinc-800">
                <span className="text-red-500 text-xs">•</span> Getting to safety & help
              </li>
            </ul>
            <div className="bg-zinc-950 p-4 border border-zinc-850 text-xs text-zinc-400 font-serif italic">
              "Every second matters. Every decision matters. We don't stay to fight. We strike, we break their grip, and we run."
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 lg:p-8 space-y-4" id="philosophy-section-2">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Sparkles className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                Why This Matters
              </h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              Harassment, stalking, and sexual violence affect women across all ages, communities, and backgrounds. Behind every single statistic is a daughter, a sister, a mother, a friend, or a colleague whose sense of safety was unjustly compromised. No one chooses to become a target, and no one should have to navigate life in fear.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              While society must continue working tirelessly toward preventing violence and holding offenders accountable, learning tactical, physiological self-defense is a critical way to increase confidence and active preparedness today. 
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Being prepared does not mean expecting violence—it means refusing to let fear dictate where you walk, what you wear, or how you live.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 lg:p-8 space-y-4" id="philosophy-section-3">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <BookOpen className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                Understanding Vulnerable Targets
              </h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              In situations where escape is not immediately possible and a person faces an imminent physical or sexual assault, self-defense training teaches immediate awareness of vulnerable areas of the body. Targeting the biological fragile points—such as the pelvic nervous system and the groin—requires zero muscle leverage. 
            </p>
            <p className="text-red-400 text-sm font-bold leading-relaxed font-sans">
              These techniques are strictly intended ONLY to create an immediate opportunity to break free and escape, never to prolong a confrontation.
            </p>
            <div className="p-4 bg-red-950/20 border border-red-900/30 text-xs font-mono text-zinc-300 flex items-center justify-between uppercase font-black tracking-widest">
              <span>Goal Profile:</span>
              <span className="text-red-500">Escape. Survive. Get Help.</span>
            </div>
          </div>

        </div>

        {/* Right: Quick Mission Dashboard */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Mission Box */}
          <div className="bg-zinc-950 border-2 border-zinc-800 p-5 space-y-4" id="manifesto-mission-box">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold border-b border-zinc-800 pb-2">
              Our Active Mission
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              We believe that every woman, regardless of her size or background, should have direct access to:
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-wide">
                1. Easy self-defense education
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-wide">
                2. Practical escape strategies
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-wide">
                3. Confidence-building training
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-wide">
                4. High-alert threat awareness
              </div>
            </div>
            <p className="text-zinc-500 text-[10px] font-mono font-bold uppercase tracking-tight text-center pt-2">
              Empowerment begins with knowledge.
            </p>
          </div>

          {/* Letter Card */}
          <div className="bg-red-950/20 border-2 border-red-900/40 p-6 space-y-4 relative overflow-hidden" id="manifesto-letter-card">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl" />
            <h4 className="text-red-400 text-xs font-mono uppercase tracking-widest font-black flex items-center gap-1">
              <Flag className="w-3.5 h-3.5 text-red-500" /> To Every Woman
            </h4>
            
            <div className="space-y-3 text-sm text-zinc-200 font-black uppercase tracking-wider leading-relaxed">
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">&rarr;</span> You are stronger than fear.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">&rarr;</span> Your voice matters.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">&rarr;</span> Your safety matters.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">&rarr;</span> Your life matters.
              </div>
            </div>

            <div className="border-t border-red-900/30 pt-3 text-[10px] font-mono text-zinc-400 space-y-1.5 uppercase font-bold">
              <p>You have the absolute right to say <strong className="text-red-400 font-black">NO</strong>.</p>
              <p>You have the right to protect yourself.</p>
              <p>You have the right to walk away.</p>
            </div>
            <p className="text-xs text-white italic font-serif leading-relaxed">
              And you deserve to return home safely—every single day.
            </p>
          </div>

          {/* Join Movement callout */}
          <div className="bg-zinc-900 border border-zinc-800 p-5 space-y-3" id="manifesto-join-movement">
            <h4 className="text-white text-base font-black uppercase tracking-tight flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-red-600" /> Join the Movement
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              Together, we can build a world where women are informed, confident, prepared, and supported.
            </p>
            <div className="p-2.5 bg-zinc-950 border border-zinc-850 text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold text-center">
              Learn • Practice • Stay Aware • Protect
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
