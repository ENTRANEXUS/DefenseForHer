/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCENARIOS } from '../selfDefenseData';
import { Shield, Zap, AlertTriangle, ArrowRight, RotateCcw, CheckCircle2, Skull, Heart } from 'lucide-react';

export default function ScenarioSimulator() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [simulatorComplete, setSimulatorComplete] = useState<boolean>(false);

  const scenario = SCENARIOS[currentIdx];

  const handleChoiceSelect = (choiceId: string) => {
    setSelectedChoiceId(choiceId);
    setHasAnswered(true);
  };

  const handleNext = () => {
    setHasAnswered(false);
    setSelectedChoiceId(null);
    if (currentIdx + 1 < SCENARIOS.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setSimulatorComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedChoiceId(null);
    setHasAnswered(false);
    setSimulatorComplete(false);
  };

  const selectedChoice = scenario?.choices.find(c => c.id === selectedChoiceId);

  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-8" id="scenario-simulator">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <Skull className="w-6 h-6 text-red-600" />
          <div>
            <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">Active Threat Simulator</h2>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Interactive decision-tree training</p>
          </div>
        </div>
        {!simulatorComplete && (
          <div className="text-xs font-mono text-zinc-500 font-bold">
            ENCOUNTER {currentIdx + 1} OF {SCENARIOS.length}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {simulatorComplete ? (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8 max-w-xl mx-auto space-y-6"
          >
            <div className="w-16 h-16 bg-red-950 text-red-400 flex items-center justify-center mx-auto border border-red-800/80 shadow-lg shadow-red-950/40">
              <Shield className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">Valkyrie Training Certified</h3>
              <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                You have successfully navigated every threat scenario. You have shown the ability to bypass natural panic, reject useless struggling, and immediately deploy high-yield, biological counter-offensives.
              </p>
            </div>

            <div className="bg-zinc-950 border-2 border-zinc-800 p-5 text-left space-y-3.5">
              <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold border-b border-zinc-800 pb-1.5 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" /> Tactical Core Mindsets
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400 font-sans">
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong className="text-zinc-200">Reclaim Your Space:</strong> You have an absolute right to exist and be safe. Hesitation is removed when you realize the attacker’s physical fragile points.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong className="text-zinc-200">Bypass Size Constraints:</strong> Attacking the pelvis and groin requires zero muscle-leverage. A 100 lb girl can easily collapse a 250 lb attacker with a simple snap.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong className="text-zinc-200">Escape Priority:</strong> Never stay to fight or argue. Once they drop, your sole mission is to run immediately, scream, and find security.</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" /> Restart Simulator
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left: Scenario Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border font-bold ${
                  scenario.threatLevel === 'Extreme'
                    ? 'bg-red-950/40 border-red-800 text-red-400'
                    : 'bg-amber-950/40 border-amber-800 text-amber-400'
                }`}>
                  Threat Level: {scenario.threatLevel}
                </span>
                <span className="text-xs text-zinc-500 font-mono font-bold">
                  Target Stance: {scenario.attackerStance}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-200">
                  {scenario.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed bg-zinc-950 p-4 border border-zinc-800 font-serif italic">
                  "{scenario.description}"
                </p>
              </div>

              {/* Selection Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">TACTICAL DECISION</h4>
                <div className="space-y-2.5">
                  {scenario.choices.map((choice) => {
                    const isSelected = selectedChoiceId === choice.id;
                    return (
                      <button
                        key={choice.id}
                        disabled={hasAnswered}
                        onClick={() => handleChoiceSelect(choice.id)}
                        className={`w-full text-left p-4 border text-xs font-bold uppercase tracking-wider leading-relaxed transition-all duration-200 relative flex items-center justify-between ${
                          hasAnswered
                            ? isSelected
                              ? choice.isCorrect
                                ? 'bg-emerald-950/20 border-emerald-500 text-emerald-300'
                                : 'bg-red-950/20 border-red-500 text-red-300'
                              : 'bg-zinc-950 border-zinc-900 text-zinc-500 opacity-60'
                            : 'bg-zinc-950 border-zinc-800 hover:border-red-600 hover:bg-zinc-900 text-zinc-200 hover:text-white cursor-pointer'
                        }`}
                      >
                        <span className="pr-4">{choice.text}</span>
                        {hasAnswered && isSelected && (
                          <span className="shrink-0">
                            {choice.isCorrect ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <AlertTriangle className="w-5 h-5 text-red-400" />
                            )}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Response / Educational Feedback */}
            <div className="lg:col-span-6 bg-zinc-950 border-2 border-zinc-800 p-5 min-h-[300px] flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2 mb-4 font-bold">
                  DECISION ANALYSIS
                </h4>

                <AnimatePresence mode="wait">
                  {!hasAnswered ? (
                    <motion.div
                      key="prompt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-3"
                    >
                      <Zap className="w-10 h-10 text-red-500/20 mx-auto animate-pulse" />
                      <p className="text-xs text-zinc-400 max-w-[240px] mx-auto leading-relaxed uppercase tracking-wider font-bold">
                        Assess the distance, the attacker’s grip state, and choose your physical action to run analysis.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2">
                        {selectedChoice?.isCorrect ? (
                          <span className="bg-emerald-950 border border-emerald-800 text-emerald-400 text-[10px] font-mono px-2 py-0.5 font-bold uppercase tracking-wider">
                            CRITICAL SUCCESS
                          </span>
                        ) : (
                          <span className="bg-red-950 border border-red-800 text-red-400 text-[10px] font-mono px-2 py-0.5 font-bold uppercase tracking-wider">
                            TACTICAL FAILURE
                          </span>
                        )}
                      </div>

                      <p className="text-zinc-200 text-sm font-sans leading-relaxed">
                        {selectedChoice?.resultText}
                      </p>

                      <div className="bg-zinc-900 border border-zinc-800 p-4 space-y-1 mt-2">
                        <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider block font-bold">
                          Biomechanical Explanation:
                        </span>
                        <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                          {selectedChoice?.explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {hasAnswered && (
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between mt-6">
                  {!selectedChoice?.isCorrect ? (
                    <button
                      onClick={() => {
                        setHasAnswered(false);
                        setSelectedChoiceId(null);
                      }}
                      className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Try Another Option
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    disabled={!selectedChoice?.isCorrect}
                    onClick={handleNext}
                    className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                      selectedChoice?.isCorrect
                        ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer'
                        : 'bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed'
                    }`}
                  >
                    {currentIdx + 1 === SCENARIOS.length ? 'Finish Evaluation' : 'Next Encounter'} 
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
