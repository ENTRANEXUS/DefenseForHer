/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DRILLS } from '../selfDefenseData';
import { Drill } from '../types';
import { Play, Square, RefreshCw, Volume2, VolumeX, ShieldAlert, Award, Clock } from 'lucide-react';

function playBeep(freq: number, duration: number) {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const audioCtx = new AudioContextClass();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    console.warn('Web Audio beep block/unsupported', err);
  }
}

export default function PracticeCoach() {
  const [selectedDrill, setSelectedDrill] = useState<Drill>(DRILLS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const [currentRound, setCurrentRound] = useState<number>(1);
  const [timerState, setTimerState] = useState<'warmup' | 'work' | 'rest' | 'complete'>('warmup');
  const [secondsLeft, setSecondsLeft] = useState<number>(5); // 5s initial warmup

  const [commandIdx, setCommandIdx] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sound triggers
  const triggerSound = (freq: number, dur: number) => {
    if (!isMuted) {
      playBeep(freq, dur);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            handlePhaseTransition();
            return 0;
          }
          // Periodic action beeps during work interval to command rapid strikes
          if (timerState === 'work' && prev % 8 === 0) {
            triggerSound(880, 0.15); // High strike beep
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, timerState, currentRound, secondsLeft]);

  // Command cycler
  useEffect(() => {
    if (isPlaying && timerState === 'work') {
      const interval = setInterval(() => {
        setCommandIdx((prev) => (prev + 1) % selectedDrill.voiceCommands.length);
      }, 7000); // cycle command every 7s
      return () => clearInterval(interval);
    }
  }, [isPlaying, timerState, selectedDrill]);

  const handlePhaseTransition = () => {
    if (timerState === 'warmup') {
      // Transition to WORK
      triggerSound(660, 0.4); // Start work beep
      setTimerState('work');
      setSecondsLeft(selectedDrill.workInterval);
      setCommandIdx(0);
    } else if (timerState === 'work') {
      if (currentRound < selectedDrill.rounds) {
        // Transition to REST
        triggerSound(440, 0.5); // Rest beep
        setTimerState('rest');
        setSecondsLeft(selectedDrill.restInterval);
      } else {
        // Workout COMPLETE
        triggerSound(880, 0.8); // Success chime
        setTimerState('complete');
        setIsPlaying(false);
      }
    } else if (timerState === 'rest') {
      // Transition to WORK for next round
      triggerSound(660, 0.4);
      setCurrentRound((prev) => prev + 1);
      setTimerState('work');
      setSecondsLeft(selectedDrill.workInterval);
      setCommandIdx(0);
    }
  };

  const handleStart = () => {
    triggerSound(520, 0.25);
    setIsPlaying(true);
    setTimerState('warmup');
    setSecondsLeft(5); // 5s warmup
    setCurrentRound(1);
  };

  const handleStop = () => {
    triggerSound(330, 0.3);
    setIsPlaying(false);
    setTimerState('warmup');
    setSecondsLeft(5);
    setCurrentRound(1);
    setCommandIdx(0);
  };

  const activeCommand = timerState === 'work' 
    ? selectedDrill.voiceCommands[commandIdx] 
    : timerState === 'rest' 
    ? 'REST AND RECOVER. KEEP HANDS UP, DEEP BREATHS.'
    : timerState === 'warmup'
    ? 'GET READY. CLEAR YOUR MIND, ESTABLISH DEFENSIVE STANCE.'
    : 'WORKOUT COMPLETED! YOU ARE EMPOWERED.';

  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-8" id="practice-timer-coach">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800 pb-5 mb-6">
        <div>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white flex items-center gap-2.5">
            <Clock className="w-6 h-6 text-red-600 animate-pulse" />
            Empowerment Practice Coach
          </h2>
          <p className="text-zinc-400 text-xs mt-1 font-bold uppercase tracking-wider">
            Rehearse and train strike reaction times and kinetic loops at home. No bag needed (Shadow Practice).
          </p>
        </div>

        {/* Audio / Controls */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="px-3.5 py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-xs font-black uppercase tracking-widest text-zinc-300 flex items-center gap-2 transition-all cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-red-500" /> Sound Muted
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400" /> Coach Beeps Active
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Drill Selector */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-1 font-bold">CHOOSE TRAINING DRILL</h3>
          <div className="space-y-3">
            {DRILLS.map((drill) => {
              const isSelected = selectedDrill.id === drill.id;
              return (
                <button
                  key={drill.id}
                  disabled={isPlaying}
                  onClick={() => setSelectedDrill(drill)}
                  className={`w-full text-left p-4 border transition-all ${
                    isSelected
                      ? 'bg-red-950/25 border-red-500/80'
                      : isPlaying
                      ? 'bg-zinc-950 border-zinc-900 text-zinc-650 cursor-not-allowed opacity-50'
                      : 'bg-zinc-950 border-zinc-800 hover:border-red-600 hover:bg-zinc-900 text-zinc-200 cursor-pointer'
                  }`}
                >
                  <div className="font-black text-sm text-zinc-200 mb-1 uppercase tracking-tight">{drill.title}</div>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                    {drill.description}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-[10px] font-mono text-zinc-500 font-bold">
                    <span>ROUNDS: {drill.rounds}</span>
                    <span>WORK: {drill.workInterval}s</span>
                    <span>REST: {drill.restInterval}s</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Interactive Coach Timer Display */}
        <div className="lg:col-span-7 bg-zinc-950 border-2 border-zinc-800 p-6 flex flex-col items-center justify-between min-h-[380px] relative overflow-hidden">
          {/* Active stats bar */}
          <div className="w-full flex justify-between items-center text-xs font-mono text-zinc-500 border-b border-zinc-900 pb-3 mb-4 font-bold">
            <span className="uppercase">
              PHASE:{' '}
              <strong className={`font-bold ${
                timerState === 'work' 
                  ? 'text-red-500' 
                  : timerState === 'rest' 
                  ? 'text-amber-500' 
                  : timerState === 'warmup' 
                  ? 'text-blue-400' 
                  : 'text-emerald-400'
              }`}>
                {timerState}
              </strong>
            </span>
            <span>
              ROUND: <strong className="text-zinc-200 font-bold">{currentRound} / {selectedDrill.rounds}</strong>
            </span>
          </div>

          {/* Large Interactive Ring and Clock */}
          <div className="relative w-44 h-44 flex items-center justify-center my-4">
            {/* Pulsing visual circles */}
            {isPlaying && timerState === 'work' && (
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0, 0.15] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-red-500/10 border border-red-500/20"
              />
            )}

            <svg className="absolute inset-0 -rotate-90 w-full h-full" viewBox="0 0 100 100">
              {/* background ring */}
              <circle cx="50" cy="50" r="44" fill="transparent" stroke="#27272a" strokeWidth="4" />
              {/* progress ring */}
              {isPlaying && (
                <motion.circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="transparent"
                  stroke={timerState === 'work' ? '#dc2626' : timerState === 'rest' ? '#f59e0b' : '#60a5fa'}
                  strokeWidth="4"
                  strokeDasharray="276"
                  strokeDashoffset={
                    276 - (276 * secondsLeft) / 
                    (timerState === 'work' 
                      ? selectedDrill.workInterval 
                      : timerState === 'rest' 
                      ? selectedDrill.restInterval 
                      : 5)
                  }
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
              )}
            </svg>

            {/* Inner text countdown */}
            <div className="text-center z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${timerState}-${secondsLeft}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-4xl font-black font-mono tracking-tight text-white leading-none"
                >
                  {timerState === 'complete' ? 'Done' : secondsLeft}
                </motion.div>
              </AnimatePresence>
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1 font-bold">
                {timerState === 'complete' ? 'Empowered' : 'Seconds'}
              </div>
            </div>
          </div>

          {/* Voice Coach Command Banner */}
          <div className="w-full bg-zinc-900 border border-zinc-900 p-4 text-center mt-3 min-h-[76px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeCommand}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={`text-xs font-bold leading-relaxed max-w-sm uppercase tracking-wide ${
                  timerState === 'work' ? 'text-red-400 font-bold' : 'text-zinc-300 font-bold'
                }`}
              >
                {activeCommand}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action Trigger Buttons */}
          <div className="w-full grid grid-cols-2 gap-3 mt-5">
            {!isPlaying ? (
              <button
                onClick={handleStart}
                className="col-span-2 py-3 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" /> Start Practice Loop
              </button>
            ) : (
              <button
                onClick={handleStop}
                className="col-span-2 py-3 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-800 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Square className="w-4 h-4 fill-zinc-300" /> Stop Workout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
