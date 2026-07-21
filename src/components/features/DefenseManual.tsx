/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  ShieldAlert, 
  AlertTriangle, 
  Activity, 
  Zap, 
  Heart,
  Eye,
  Crosshair,
  UserCheck,
  Book,
  FileText
} from 'lucide-react';

const BOOKS = [
  { title: "The Gift of Fear", author: "Gavin de Becker", url: "https://www.hachettebookgroup.com/titles/gavin-de-becker/the-gift-of-fear/9780316235020/" },
  { title: "Fear Less", author: "Gavin de Becker", url: "https://gdba.com/" },
  { title: "The Gift of Fear Workbook for Women", author: "Gavin de Becker", url: "https://gdba.com/" },
  { title: "Fight Like a Girl... and Win", author: "Lori Hartman Gervasi", url: "https://us.macmillan.com/books/9780312361518/fightlikeagirlandwin" },
  { title: "Strong on Defense", author: "Sanford Strong", url: "https://books.google.com/books?isbn=9780671522933" },
  { title: "The Martial Arts Woman", author: "Jennifer Lawler", url: "https://books.google.com/books?q=The+Martial+Arts+Woman" },
  { title: "Facing Violence", author: "Rory Miller", url: "https://ymaa.com/publishing/author/rory-miller" },
  { title: "Meditations on Violence", author: "Rory Miller", url: "https://ymaa.com/publishing/author/rory-miller" },
  { title: "The Little Black Book of Violence", author: "Lawrence Kane & Kris Wilder", url: "https://books.google.com/books?isbn=9781594391293" },
  { title: "Dead or Alive", author: "Geoff Thompson", url: "https://www.geoffthompsonofficial.com/" },
  { title: "The Fence: A Police Guide to Survival", author: "Rory Miller", url: "https://ymaa.com/publishing/author/rory-miller" },
  { title: "When Violence Is the Answer", author: "Tim Larkin", url: "https://www.hachettebookgroup.com/titles/tim-larkin/when-violence-is-the-answer/9780316354639/" },
  { title: "The Self-Defense Handbook", author: "John Wiseman", url: "https://books.google.com/books?q=The+Self-Defense+Handbook+John+Wiseman" },
  { title: "Women's Self-Defense: Physical Techniques to Avoid and Escape Dangerous Situations", author: "Jennifer Cassetta", url: "https://books.google.com/books?q=Women%27s+Self-Defense+Jennifer+Cassetta" },
  { title: "The Woman's Guide to Self-Defense", author: "Avital Zeisler", url: "https://avitalzeisler.com/" },
  { title: "The Modern Girl's Guide to Self-Defence", author: "Fay Goodman", url: "https://books.google.com/books?q=The+Modern+Girl%27s+Guide+to+Self-Defence+Fay+Goodman" },
  { title: "Tactical Escape Mandate", author: "Concept / Guide", url: "https://books.google.com/books?q=Tactical+Escape+Mandate" }
];

const ARTICLES = [
  { title: "Efficacy of a Sexual Assault Resistance Program for University Women", source: "NEJM, 2015", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1411131" },
  { title: "It's Worth the Fight! A Review of Research on Rape Resistance", source: "2018", url: "https://www.sciencedirect.com/science/article/pii/B9780128053805000049" },
  { title: "The Effects of Resistance Strategies on Rape", source: "American Journal of Epidemiology, 1990", url: "https://academic.oup.com/aje" },
  { title: "Women's Self-Defense Training and Its Relationship to Protective Behaviors and Assault Outcomes", source: "Journal of Interpersonal Violence, 2005", url: "https://journals.sagepub.com/home/jiv" },
  { title: "Effectiveness of Women's Self-Defense Interventions: An Integrative Review", source: "2024", url: "https://pubmed.ncbi.nlm.nih.gov/" },
  { title: "Rape and Resistance", source: "U.S. Office of Justice Programs", url: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/rape-and-resistance" },
  { title: "Resistance Strategies of Rape Victims", source: "Violence Against Women", url: "https://journals.sagepub.com/home/vaw" },
  { title: "Women's Resistance to Sexual Assault: A Meta-Analysis", source: "Trauma, Violence, & Abuse", url: "https://journals.sagepub.com/home/tva" },
  { title: "Risk Factors and Resistance Strategies in Sexual Assault", source: "Journal of Interpersonal Violence", url: "https://journals.sagepub.com/home/jiv" },
  { title: "Self-Defense Training as Sexual Violence Prevention", source: "Violence Against Women", url: "https://journals.sagepub.com/home/vaw" }
];

export default function DefenseManual() {
  const [activeSubTab, setActiveSubTab] = useState<'mechanism' | 'strikes' | 'literature'>('mechanism');

  return (
    <div className="space-y-8" id="defense-manual-module">
      {/* Intro Header */}
      <div className="bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-8" id="manual-header-card">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-900/60 px-3.5 py-1.5 text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold">
            <BookOpen className="w-3.5 h-3.5 text-red-600" /> Valkyrie Knowledge Base
          </div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Tactical Defense Manual
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            A comprehensive, professional study of the biological, neurological, and physiological dynamics of groin-based self-defense. Understand the science of autonomic interruption and master the catalog of emergency countermeasures.
          </p>
        </div>
      </div>

      {/* Manual Content Navigation */}
      <div className="flex border-b border-zinc-800" id="manual-sub-navigation">
        <button
          id="btn-sub-mechanism"
          onClick={() => setActiveSubTab('mechanism')}
          className={`px-6 py-3 text-xs font-black uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
            activeSubTab === 'mechanism'
              ? 'border-red-600 text-white bg-zinc-900/30'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          1. Biological Mechanisms
        </button>
        <button
          id="btn-sub-strikes"
          onClick={() => setActiveSubTab('strikes')}
          className={`px-6 py-3 text-xs font-black uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
            activeSubTab === 'strikes'
              ? 'border-red-600 text-white bg-zinc-900/30'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          2. Groin Attacks Types (Ballbusting)
        </button>
        <button
          id="btn-sub-literature"
          onClick={() => setActiveSubTab('literature')}
          className={`px-6 py-3 text-xs font-black uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
            activeSubTab === 'literature'
              ? 'border-red-600 text-white bg-zinc-900/30'
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          3. Related Books & Articles
        </button>
      </div>

      {/* Sub-tab content */}
      <div className="min-h-[400px]" id="manual-tab-container">
        {activeSubTab === 'mechanism' && (
          <div className="space-y-8" id="biological-mechanisms-section">
            {/* Core Definition Block */}
            <div className="bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-8 space-y-4" id="core-definition-block">
              <h3 className="text-xl font-black italic uppercase tracking-tight text-white flex items-center gap-2">
                <ShieldAlert className="w-5.5 h-5.5 text-red-600" />
                Self-Defense By Groin Attack
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                A groin attack is a highly effective, close-range defensive technique targeting the vulnerable pelvic organs and nerves (specifically the testicles, penis, and inguinal nerve plexus). Its primary objective is the <strong className="text-red-500 font-bold">immediate interruption of an active assault</strong>, disabling the attacker temporarily to create a critical window of opportunity to escape.
              </p>
              <div className="border-l-2 border-red-600 pl-4 py-1.5 bg-zinc-950/60 text-xs text-zinc-400 font-mono italic leading-relaxed">
                "It is generally considered a last-resort technique in self-defense, intended strictly to stop an imminent physical threat to your life or bodily integrity, rather than to cause unnecessary injury."
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                While a groin strike is exceptionally effective as an emergency countermeasure, its physical effects are complex and can vary significantly from person to person. Factors such as physical conditioning, clothing, adrenaline, and point of impact influence the outcome.
              </p>
            </div>

            {/* How it helps women escape (Grid of 4) */}
            <div className="space-y-4" id="how-it-helps-block">
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-1 font-bold">
                HOW IT HELPS THE DEFENDER ESCAPE AN EMERGENCY SITUATION
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Pain */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 space-y-2.5 hover:border-red-600/50 transition-colors" id="escape-factor-pain">
                  <div className="flex items-center gap-2 text-red-500 font-bold font-mono text-[10px] uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-red-600 animate-pulse" /> Immediate Neurological Pain
                  </div>
                  <h4 className="text-white text-base font-black uppercase tracking-tight">Profound Somatic Trauma</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    A direct impact to the male groin is typically excruciating. Because the testicles and genital area are densely packed with highly sensitive nociceptors (pain-detecting nerve endings) connected directly to the pelvic nerve plexus, the pain signal travels with high amplitude and velocity, bypassing general muscle shielding.
                  </p>
                </div>

                {/* 2. Impairment */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 space-y-2.5 hover:border-red-600/50 transition-colors" id="escape-factor-impairment">
                  <div className="flex items-center gap-2 text-red-500 font-bold font-mono text-[10px] uppercase tracking-wider">
                    <Activity className="w-4 h-4 text-red-600" /> Temporary Motor Impairment
                  </div>
                  <h4 className="text-white text-base font-black uppercase tracking-tight">Involuntary Reflex Interruption</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    The extreme trauma triggers an automatic physical response known as the flexor reflex. The attacker will instinctively double forward at the waist, drop their hips back, pause, lose visual focus, or collapse. This involuntary physical buckle creates the perfect, immediate opening to break any grip and flee.
                  </p>
                </div>

                {/* 3. Somatic After-Effects */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 space-y-2.5 hover:border-red-600/50 transition-colors" id="escape-factor-effects">
                  <div className="flex items-center gap-2 text-red-500 font-bold font-mono text-[10px] uppercase tracking-wider">
                    <Heart className="w-4 h-4 text-red-600" /> Cardiovascular Shock
                  </div>
                  <h4 className="text-white text-base font-black uppercase tracking-tight">Autonomic Collapse</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Depending on the impact's kinetic energy, the physical effects can trigger a vasovagal syncope response. This includes immediate, severe nausea, acute dizziness, difficulty standing upright, complete loss of coordination, and sweating. In severe cases, it causes temporary blackout or physical shock requiring medical intervention.
                  </p>
                </div>

                {/* 4. Variability */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 space-y-2.5 hover:border-red-600/50 transition-colors" id="escape-factor-variability">
                  <div className="flex items-center gap-2 text-zinc-500 font-bold font-mono text-[10px] uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-amber-500" /> Physiological Variability
                  </div>
                  <h4 className="text-white text-base font-black uppercase tracking-tight">Factors Influencing Results</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Tactical awareness requires recognizing that results vary. The force of the strike, angle of delivery, layers of clothing, and the attacker's systemic adrenaline or chemical intoxication level all influence the response. Some attackers may recover rapidly or press forward despite pain—making it vital to escape instantly rather than staying to assess.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'strikes' && (
          <div className="space-y-6" id="strike-variant-catalog-section">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-1 font-bold">
              PROFESSIONAL SELF-DEFENSE STRIKE CATALOG
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="strikes-grid">
              {/* 1. Front Groin Kick */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-front-kick">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Front Groin Kick</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Beginner</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  A rapid forward kick aimed directly at the groin area to deliver sudden kinetic trauma and distraction, forcing the attacker backwards.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  Often taught as the default long-distance kick in basic self-defense. Striking with the hard instep of the foot (laces) provides maximum surface coverage and lets the defender retain distance.
                </div>
              </div>

              {/* 2. Upward Groin Strike */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-upward-strike">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Upward Groin Strike</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Beginner</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  An upward striking motion using the solid knee, thigh, or a sweeping lower leg directed vertically into the pelvic cavity to break posture and balance.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  Forces the attacker's pelvis upward and backward, completely breaking their forward posture. It is highly effective when they rush you or lean in aggressively.
                </div>
              </div>

              {/* 3. Knee Strike to the Groin */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-knee-strike">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Knee Strike to the Groin</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Beginner</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  A high-power, close-range defensive technique utilizing the hard, bony point of the kneecap driven directly into the groin area.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  The absolute go-to when an attacker is within grappling or clutching range (e.g., bearhug or front strangle). Anchor to their shoulders or waist and drive your knee with your core hip muscles.
                </div>
              </div>

              {/* 4. Snap Kick to the Groin */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-snap-kick">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Snap Kick to the Groin</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Beginner</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  A lightning-fast, snapping kick utilizing ankle flex and quick knee recoil, intended for immediate distraction rather than prolonged engagement.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  Fired without telegraphing, relying on pure speed. Designed to cause instant reflex pain to break a grab so you can turn and run instantly.
                </div>
              </div>

              {/* 5. Inside Leg Strike */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-inside-strike">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Inside Leg Strike</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Intermediate</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  A strike delivered from the inside diagonal angle toward the groin region when the attacker’s stance is wide or frontal access is blocked.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  Slices past protective thigh-closing reflexes. Target the femoral nerve and pelvic center at an angle when the attacker stands sideways.
                </div>
              </div>

              {/* 6. Groin Slap/Strike */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-groin-slap">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Groin Slap / Hand Strike</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Intermediate</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  A close-range, sweeping strike using the open palm, a cupped hand, or the back of the hand directed forcefully into the groin area.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  An emergency close-quarters option if you are grabbed from behind or pinned. Squeezing or slapping forcefully requires very little space to generate extreme autonomic distress.
                </div>
              </div>

              {/* 7. Punching the Groin */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-groin-punch">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Punching the Groin</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Intermediate</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  A direct, compact fist punch or hammerfist strike driven vertically or horizontally straight into the groin area.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  Excellent for tight spaces or ground defense where your legs are pinned. A direct, forceful punch creates an immediate shock response to break locks.
                </div>
              </div>

              {/* 8. Defensive Groin Attack */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-defensive-groin-attack">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Defensive Groin Attack</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Core Concept</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  A general classification term referring to any deliberate technique targeting the groin solely to stop a violent assault and facilitate safe escape.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  The legal and strategic framework underlying all training: groin attacks are the universal equalizer. When facing imminent physical threat, there is no gender or size disparity when this target is compromised.
                </div>
              </div>

                {/* 9. Cut &/ Rip Dick Off */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-Cut-&/-Rip-Dick-Off">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Cut &/ Rip Dick Off</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Core Concept</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                   keep something sharp with you in your pockets and purse and socks too something sharp like boot knife,paper cutter etc and when culprit is about to penetrate his dick in your body from below than attack with that sharp object and cut his penis &/ balls down. If you dont have any sharp thing and if your arms cant move then you have teeth to do so if situation occurs.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  Often taught as a close-distance extreme self-defense option when the attacker’s genitals are exposed and you have something sharp like blade or cutter or knife etc. 
                </div>
              </div>

              {/* 10. Grab and Squeeze */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-grab-and-squeeze">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Grab and Squeeze</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Core Concept</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                 Using your right hand, take hold of his left testicle between your thumb and index finger, securing it firmly. Then wrap your remaining three fingers around his right testicle and begin applying pressure. Start gently, then gradually increase the force until it becomes intensely painful. While maintaining that pressure, use the palm of your hand to press both testicles together. The combined compression dramatically intensifies the pain. Continue holding the pressure until he cries out in pain or until he is weak and nearly fainting, then release your grip. (5-10 mins atleast for perfect results)
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  Often taught as a close-distance extreme self-defense option when the attacker’s genitals are exposed and you have something sharp like blade or cutter or knife etc. 
                </div>
              </div>

           {/* 11. Testicle Smash / Extreme Groin Control */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-5 space-y-3" id="catalog-testicle-smash">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-lg font-black uppercase tracking-tight">Testicle Smash</h4>
                  <span className="text-[9px] font-mono bg-red-950/40 border border-red-800/40 text-red-400 px-2 py-0.5 font-bold uppercase">Advanced</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  The application of the Testicle Smash requires that the attacker has already reached a stage in the assault where the genitals are exposed and accessible.

This situation may arise because the attack happened very quickly, the attacker had already undressed before initiating the assault, or the defender had no earlier opportunity to escape.

While the penis is relatively insensitive to pain, the testicles are extremely sensitive. Positioned externally rather than protected within the body, they are highly vulnerable to pain and can trigger an immediate physical reaction.

Try to grab one testicle in each hand, wrap your fingers around each of them and put your thumb on center, don't rely only on fingers strength, squeeze hard by closing your palms while adding force using your wrists and forearms, twist and squeeze with full force, push down with too much force, putting most of your body weight on, inside of tissue will start to tear and from inside it will burst , testicles will lose their shape and become flattened or mushy.

It will take 4 to 5 mins if your grip is strong or 10 to 15 mins if your grip is weak. The main trick is that no matter what happens the grip should not be released until the attacker is fully incapacitated. This technique demands a very high level of commitment, requiring the defender to remain completely focused on stopping the attack and creating the opportunity to escape.
                </p>
                <div className="bg-zinc-950/50 p-3 text-[11px] text-zinc-400 leading-relaxed border-l border-zinc-700">
                  <strong className="text-zinc-200 block mb-0.5 uppercase font-bold text-[9px] tracking-wide">Tactical Awareness:</strong>
                  Often taught as a close-distance extreme self-defense option when the attacker’s genitals are exposed. Striking, grabbing, and squeezing the testicles can create a sudden shock response that forces the attacker to disengage.
                </div>
              </div>
            </div>
          </div>

        )}

        {activeSubTab === 'literature' && (
          <div className="space-y-6 animate-fadeIn" id="literature-section">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-1 font-bold">
              RECOMMENDED READINGS & EMPIRICAL EVIDENCE
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Books */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                  <Book className="w-4 h-4 text-red-500" />
                  <h4 className="text-white text-xs font-mono uppercase tracking-widest font-bold">Foundational Books</h4>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {BOOKS.map((book, idx) => (
                    <a 
                      key={idx} 
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-900 border border-zinc-800 p-3.5 flex items-start gap-3 hover:border-red-600/40 hover:bg-zinc-900/60 transition-all group block cursor-pointer"
                    >
                      <Book className="w-4 h-4 text-zinc-500 group-hover:text-red-500 transition-colors shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-white text-xs font-bold block group-hover:text-red-500 transition-colors">{book.title}</span>
                        <span className="text-zinc-500 text-[10px] font-mono block uppercase tracking-wide">— {book.author}</span>
                        <span className="text-red-500/75 text-[9px] font-mono uppercase block group-hover:text-red-500 transition-colors mt-1 font-bold">View Publisher / Link &rarr;</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Articles */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
                  <FileText className="w-4 h-4 text-red-500" />
                  <h4 className="text-white text-xs font-mono uppercase tracking-widest font-bold">Research Papers & Articles</h4>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {ARTICLES.map((article, idx) => (
                    <a 
                      key={idx} 
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-900 border border-zinc-800 p-3.5 flex items-start gap-3 hover:border-red-600/40 hover:bg-zinc-900/60 transition-all group block cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-zinc-500 group-hover:text-red-500 transition-colors shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-white text-xs font-bold block group-hover:text-red-500 transition-colors">{article.title}</span>
                        <span className="text-zinc-500 text-[10px] font-mono block uppercase tracking-wide">Source: {article.source}</span>
                        <span className="text-red-500/75 text-[9px] font-mono uppercase block group-hover:text-red-500 transition-colors mt-1 font-bold">View Academic Source &rarr;</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Proactive Awareness Statement */}
      <div className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-400 font-sans" id="proactive-awareness-footer-card">
        <UserCheck className="w-8 h-8 text-red-600 shrink-0" />
        <div>
          <strong className="text-white uppercase block mb-1 font-bold">TACTICAL ESCAPE MANDATE</strong>
          A groin counter-attack is not designed to win a prolonged fight. Its biological purpose is to trigger an immediate, reflex-driven pause in the attacker, neutralizing their grip and focus. <strong className="text-red-500 font-bold">The absolute goal of the strike is to run to safety instantly.</strong>
        </div>
      </div>
    </div>
  );
}
