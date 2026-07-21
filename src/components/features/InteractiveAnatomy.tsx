/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, AlertCircle, CheckCircle } from 'lucide-react';

interface TargetZone {
  id: string;
  name: string;
  x: number;
  y: number;
  radius: number;
  title: string;
  impactType: string;
  medicalDescription: string;
  tacticalApplication: string;
  vulnerabilityFactor: string;
  incapacitationThreshold: string;
  recoveryTime: string;
}

const TARGETS: TargetZone[] = [
  {
    id: 'plexus',
    name: 'Pelvic Nerve Plexus',
    x: 150,
    y: 190,
    radius: 12,
    title: 'The Neurological Core',
    impactType: 'Autonomic Shock & Nervous Overload',
    medicalDescription: 'The pelvic cavity is densely packed with sympathetic and parasympathetic nerves. Direct impact sends an instantaneous high-voltage overload signal straight to the spinal cord and brain stem, bypassing standard pain-blocking mechanisms.',
    tacticalApplication: 'Best targeted with a rising knee strike or shin kick. The strike does not need to be surgically precise; any high-force impact to the general lower pelvic region will trigger this response.',
    vulnerabilityFactor: '10/10 - Zero muscle shielding exists here. It is completely exposed on all genders.',
    incapacitationThreshold: 'Low (~15-20 lbs of direct impact force)',
    recoveryTime: '15 to 30 minutes of somatic recovery'
  },
  {
    id: 'testicular',
    name: 'Primary Groin Target (Testicles)',
    x: 150,
    y: 220,
    radius: 15,
    title: 'Anatomical Off-Button',
    impactType: 'Immediate Cardiovascular Collapse',
    medicalDescription: 'Extremely high concentration of sensory nerve endings. Compressive or kinetic trauma causes an immediate, severe drops in blood pressure (vasovagal syncope), leading to extreme dizziness, nausea, and immediate muscular collapse.',
    tacticalApplication: `The ultimate target for the Snap Groin Kick (distance) or the Claw & Twist (close-range pins/grabs). A firm squeeze or snap results in autonomic shutdown.

A severe kick to the testicles can trigger nausea and vomiting because intense pain signals can provoke a strong autonomic response.

People often report that severe testicular pain feels extremely intense, which may contribute to dizziness or, in some cases, fainting.

In severe cases, overwhelming pain may be associated with temporary loss of bladder or bowel control.

Severe testicular pain can also trigger sweating, chills, shivering, or feelings of being unusually hot or cold due to activation of the autonomic nervous system.

Although many symptoms improve over time, pain from a significant testicular injury can persist for weeks or even months if substantial tissue damage has occurred.`,



    vulnerabilityFactor: '10/10 - Extremely fragile tissue, easily damaged by even minor compression (less than 10 lbs of pressure). Can instantly incapacitate any attacker regardless of size.',
    incapacitationThreshold: 'Extremely Low (< 10 lbs of compressive force)',
    recoveryTime: '1 to 2 hours of profound autonomic distress'
  },
  {
    id: 'femoral',
    name: 'Femoral Nerve & Inner Thigh',
    x: 185,
    y: 240,
    radius: 10,
    title: 'Motor Control Support',
    impactType: 'Leg Collapse & Balance Loss',
    medicalDescription: 'The femoral nerve runs close to the surface along the inner thigh. Striking this area causes temporary motor-unit failure, causing the leg to buckle immediately.',
    tacticalApplication: 'Useful when the attacker has narrowed their stance or is turning. A side-kick or shin drive here creates an opening for a secondary direct groin strike.',
    vulnerabilityFactor: '7/10 - Slightly more protected by skin, but highly sensitive to blunt pressure.',
    incapacitationThreshold: 'Moderate (~25-30 lbs of blunt impact)',
    recoveryTime: '5 to 15 minutes of motor control paralysis'
  },
  {
    id: 'bladder',
    name: 'Suprapubic / Lower Abdomen',
    x: 150,
    y: 160,
    radius: 12,
    title: 'Lower Abdominal Shock',
    impactType: 'Visceral Pain & Doubling Over',
    medicalDescription: 'The area directly above the pubic bone houses the bladder and major descending nerves. Impact forces the attacker to bend forward at the waist to protect the organs.',
    tacticalApplication: 'A heel-stamp or punch here forces their chin down and hips out, perfectly setting up an ascending knee strike.',
    vulnerabilityFactor: '8/10 - Tends to cause immediate forward bending, bringing their face directly into knee range.',
    incapacitationThreshold: 'Medium (~20-25 lbs of targeted force)',
    recoveryTime: '10 to 20 minutes of severe visceral spasm'
  }
];

export default function InteractiveAnatomy() {
  const [activeZone, setActiveZone] = useState<TargetZone>(TARGETS[1]);
  const [hoveredZone, setHoveredZone] = useState<TargetZone | null>(null);

  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-8" id="interactive-anatomy-module">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">The Biomechanics of Defense</h2>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Self-defense through Groin Attacks (Ballbusting) is about targeting vulnerability. 
          The pain from ballbusting can be so bad that it turns the man into a squirming piece of meat on the floor, crying like a big dumb puppy. But actually, their balls are fine. Of course you might see some deep purple bruises develop, but after one or two weeks, these go away and the testicles are right as rain.
          Even though testicles are sensitive as hell because of the millions of nerve endings clumped inside to warn the male if anything bad is happening to his balls, the fact is, they're covered in a tough to break membrane called the tunica albuginea.
          Below is a detailed medical and tactical breakdown of the human groin area. Click the pulsing target rings to understand why these strikes disable any attacker instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive SVG Diagram */}
        <div className="lg:col-span-5 flex flex-col items-center bg-zinc-950 p-6 border-2 border-zinc-800 relative overflow-hidden h-[340px] justify-center">
          <div className="absolute top-3 left-3 bg-zinc-900 border border-zinc-800 px-2 py-1 text-[10px] font-mono text-red-500 uppercase tracking-widest font-bold">
            Vulnerability Blueprint
          </div>

          <div className="relative w-[240px] h-[300px]">
            <svg width="240" height="300" viewBox="0 0 300 300" className="text-zinc-700 w-full h-full">
              {/* Outline of Human Torso / Pelvis */}
              <path
                d="M 100,50 C 100,50 80,100 80,140 C 80,180 100,210 120,220 C 130,225 135,240 135,270 L 110,300 M 200,50 C 200,50 220,100 220,140 C 220,180 200,210 180,220 C 170,225 165,240 165,270 L 190,300 M 120,220 C 130,225 150,227 180,220"
                fill="none"
                stroke="#3f3f46"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Pelvis bone simplified visual */}
              <path
                d="M 110,130 C 110,130 130,110 150,130 C 170,110 190,130 190,130 C 190,130 195,170 150,190 C 105,170 110,130 110,130 Z"
                fill="none"
                stroke="#52525b"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              {/* Spine reference */}
              <line x1="150" y1="50" x2="150" y2="130" stroke="#18181b" strokeWidth="4" />

              {/* Pulsing connection lines to selected zone */}
              {activeZone && (
                <line
                  x1="150"
                  y1="130"
                  x2={activeZone.x}
                  y2={activeZone.y}
                  stroke="#dc2626"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  className="animate-pulse"
                />
              )}

              {/* Target Spots */}
              {TARGETS.map((target) => {
                const isActive = activeZone.id === target.id;
                return (
                  <g
                    key={target.id}
                    className="cursor-pointer group"
                    onClick={() => setActiveZone(target)}
                    onMouseEnter={() => setHoveredZone(target)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    {/* Glowing pulsing circle */}
                    <circle
                      cx={target.x}
                      cy={target.y}
                      r={target.radius + 8}
                      fill={isActive ? 'rgba(220, 38, 38, 0.25)' : 'rgba(220, 38, 38, 0.05)'}
                      className={isActive ? 'animate-ping origin-center' : 'group-hover:scale-110 transition-transform'}
                    />
                    {/* Outer circle */}
                    <circle
                      cx={target.x}
                      cy={target.y}
                      r={target.radius}
                      fill={isActive ? '#dc2626' : '#27272a'}
                      stroke={isActive ? '#ffffff' : '#dc2626'}
                      strokeWidth="2"
                      className="transition-colors duration-300"
                    />
                    {/* Core white dot */}
                    <circle cx={target.x} cy={target.y} r="3" fill="#ffffff" />
                  </g>
                );
              })}
            </svg>

            {/* Hover Tooltip Overlay */}
            <AnimatePresence>
              {hoveredZone && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -5 }}
                  transition={{ duration: 0.12 }}
                  className="absolute bg-zinc-900 border-2 border-red-600/90 p-3 shadow-2xl pointer-events-none z-30 w-56 text-[11px] space-y-2 rounded-none"
                  style={{
                    left: `${(hoveredZone.x / 300) * 100}%`,
                    top: `${(hoveredZone.y / 300) * 100 - 12}%`,
                    transform: 'translate(-50%, -100%)'
                  }}
                >
                  <div className="border-b border-zinc-800 pb-1.5">
                    <span className="text-[9px] font-mono text-red-500 uppercase tracking-widest block font-bold">BIOLOGICAL TARGET</span>
                    <h4 className="text-white text-xs font-black uppercase tracking-tight leading-tight">{hoveredZone.name}</h4>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-1">
                      <span className="text-zinc-500 uppercase font-mono font-bold text-[9px]">Threshold:</span>
                      <span className="text-red-400 font-bold text-right">{hoveredZone.incapacitationThreshold}</span>
                    </div>
                    <div className="flex justify-between gap-1">
                      <span className="text-zinc-500 uppercase font-mono font-bold text-[9px]">Recovery:</span>
                      <span className="text-zinc-300 font-bold text-right">{hoveredZone.recoveryTime}</span>
                    </div>
                  </div>
                  <div className="bg-red-950/20 border border-red-900/30 p-1.5 text-[10px] text-zinc-400 italic font-serif leading-snug">
                    {hoveredZone.title}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute bottom-3 text-zinc-500 text-xs font-mono font-bold">
            Interactive Model • Select target zone
          </div>
        </div>

        {/* Technical Specification Panel */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-950 p-6 border-2 border-zinc-800 space-y-4 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-500 text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" /> {activeZone.impactType}
                  </span>
                  <span className="bg-red-950/50 text-red-300 text-[10px] font-mono px-2 py-0.5 border border-red-800/50 font-bold">
                    Vulnerability: {activeZone.vulnerabilityFactor}
                  </span>
                </div>
                
                <h3 className="text-white text-xl font-black uppercase tracking-tight mb-2">
                  {activeZone.name}
                </h3>
                
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {activeZone.medicalDescription}
                </p>

                {/* Data metrics grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 bg-zinc-900 border border-zinc-800 p-3">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold mb-0.5">INCAPACITATION THRESHOLD</span>
                    <span className="text-red-500 font-black text-xs uppercase tracking-tight">{activeZone.incapacitationThreshold}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold mb-0.5">EST. RECOVERY TIME</span>
                    <span className="text-zinc-200 font-black text-xs uppercase tracking-tight">{activeZone.recoveryTime}</span>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-4 space-y-3">
                  <div>
                    <h4 className="text-red-500 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
                      <CheckCircle className="w-3.5 h-3.5" /> Tactical Application
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {activeZone.tacticalApplication}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800/60 p-3 flex items-start gap-2.5 mt-4">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-[11px] text-zinc-400 leading-normal">
                  <strong className="text-zinc-300 uppercase tracking-tight text-[10px] block mb-0.5">Empowerment Fact</strong>
                  Force required to induce autonomic collapse on this area is less than 10% of what is required to break a wooden board. Any woman, regardless of muscular build, possesses more than enough physical force to disable a massive attacker.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
