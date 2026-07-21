/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORIES } from '../../selfDefenseData';
import { Story } from '../../types';
import { Heart, Send, Sparkles, BookOpen, UserCheck, MessageSquarePlus } from 'lucide-react';

const MOTIVATION_QUOTES = [
  "Your safety is non-negotiable. You have the absolute right and power to defend your body.",
  "An attacker counts on your hesitation. Groin strikes exploit physical vulnerability, rendering muscular strength completely obsolete.",
  "The groin is a universal biological off-switch. No amount of training, muscle, or aggression can override autonomic shock.",
  "Self-defense isn't violence; it is the absolute assertion of your personal boundaries and survival.",
  "Walk with your head up. Speak with authority. If your safety is compromised, strike with absolute, zero-hesitation commitment."
];

export default function EmpowermentHub() {
  const [activeStory, setActiveStory] = useState<Story>(STORIES[0]);
  const [quoteIdx, setQuoteIdx] = useState<number>(0);
  const [userNotes, setUserNotes] = useState<{ id: string; author: string; content: string; date: string }[]>([]);
  const [authorName, setAuthorName] = useState<string>('');
  const [noteContent, setNoteContent] = useState<string>('');

  useEffect(() => {
    const saved = localStorage.getItem('valkyrie_encouragement_board');
    if (saved) {
      try {
        setUserNotes(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Seed initial messages
      const initial = [
        {
          id: 'note-1',
          author: 'Maya S.',
          content: 'Just practiced the Snap Groin Kick 30 times in my room today. My balance is getting so much better, and I feel incredibly capable!',
          date: 'July 18, 2026'
        },
        {
          id: 'note-2',
          author: 'Priya K.',
          content: 'Knowing that size literally does not matter when striking the pelvic nerve plexus took a massive weight off my shoulders. Valkyrie rules!',
          date: 'July 15, 2026'
        }
      ];
      setUserNotes(initial);
      localStorage.setItem('valkyrie_encouragement_board', JSON.stringify(initial));
    }
  }, []);

  const handleNextQuote = () => {
    setQuoteIdx((prev) => (prev + 1) % MOTIVATION_QUOTES.length);
  };

  const handleAddNote = (e: FormEvent) => {
    e.preventDefault();
    if (!noteContent.trim()) return;

    const newNote = {
      id: `user-note-${Date.now()}`,
      author: authorName.trim() || 'Anonymous Defender',
      content: noteContent.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const updated = [newNote, ...userNotes];
    setUserNotes(updated);
    localStorage.setItem('valkyrie_encouragement_board', JSON.stringify(updated));

    setAuthorName('');
    setNoteContent('');
  };

  return (
    <div className="space-y-8" id="empowerment-vault">
      {/* Mindset Coach Box */}
      <div className="bg-zinc-900 border-2 border-zinc-800 p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-650/10 rounded-full blur-3xl -z-10" />
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-red-600" />
            <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">Mental Armor Coach</span>
          </div>
          <div className="min-h-[64px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white text-base md:text-lg font-serif italic leading-relaxed"
              >
                "{MOTIVATION_QUOTES[quoteIdx]}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <button
          onClick={handleNextQuote}
          className="px-4 py-2 bg-zinc-950 hover:bg-zinc-900 text-red-400 border border-zinc-800 text-xs font-black font-mono transition-all shrink-0 cursor-pointer uppercase tracking-wider"
        >
          Next Insight &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Survivor Case Studies */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 px-1">
            <BookOpen className="w-5 h-5 text-red-600" />
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Valkyrie Survivor Stories</h3>
          </div>

          <div className="bg-zinc-900 border-2 border-zinc-800 p-6 space-y-6">
            {/* Nav tabs for stories */}
            <div className="flex gap-2 overflow-x-auto pb-1 border-b border-zinc-800/80">
              {STORIES.map((story) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(story)}
                  className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 border shrink-0 transition-all ${
                    activeStory.id === story.id
                      ? 'bg-red-950/30 border-red-800 text-red-400'
                      : 'bg-transparent border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {story.survivorName.split(' ')[0]}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-white">{activeStory.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold">Survivor: {activeStory.survivorName}</span>
                    <span className="text-[10px] text-zinc-500 font-bold">•</span>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold">{activeStory.dateAdded}</span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs md:text-sm leading-relaxed">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">THE INTRUSION</span>
                    <p className="text-zinc-300 bg-zinc-950 p-3.5 border border-zinc-800/50 font-serif italic">
                      "{activeStory.situation}"
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">VALKYRIE COUNTER-ATTACK</span>
                    <p className="text-zinc-300 bg-red-950/10 border border-red-900/20 p-3.5">
                      {activeStory.actionTaken}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold text-emerald-400">THE RE-SECURED FREEDOM</span>
                    <p className="text-emerald-300 bg-emerald-950/10 border border-emerald-900/20 p-3.5">
                      {activeStory.outcome}
                    </p>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-4 flex gap-3">
                  <UserCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-wider text-zinc-200">Survivor Psychological Advice</span>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {activeStory.psychologicalInsight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Interactive Encouragement Wall */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 px-1">
            <MessageSquarePlus className="w-5 h-5 text-red-600" />
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Interactive Safe Wall</h3>
          </div>

          <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-5">
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              This board is a safe, encouraging space. Share your mental/physical training accomplishments, notes of motivation, or support to encourage women worldwide to stand powerful and safe.
            </p>

            <form onSubmit={handleAddNote} className="space-y-3 bg-zinc-950 p-4 border border-zinc-800/60">
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">YOUR NAME / CALLSIGN</label>
                <input
                  type="text"
                  placeholder="e.g. Shield Maiden, Anonymous, Maya"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-600 font-sans"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">MESSAGE OF STRENGTH</label>
                <textarea
                  placeholder="Write a message of motivation, or your experience practicing..."
                  rows={3}
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 p-3 text-xs text-white focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-600 resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> Post to Encouragement Board
              </button>
            </form>

            {/* Scroller for messages */}
            <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
              <AnimatePresence initial={false}>
                {userNotes.map((note) => (
                  <motion.div
                    key={note.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="bg-zinc-950 p-3.5 border border-zinc-800/40 space-y-1.5 hover:border-zinc-800 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-red-500 text-red-500 shrink-0" />
                        {note.author}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono font-bold">{note.date}</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {note.content}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
