/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import story1 from "./stories/story1.md?raw";
import story2 from "./stories/story2.md?raw";
import story3 from "./stories/story3.md?raw";
import story4 from "./stories/story4.md?raw";
import story5 from "./stories/story5.md?raw";
import story6 from "./stories/story6.md?raw";
import story7 from "./stories/story7.md?raw";
import story8 from "./stories/story8.md?raw";
import story9 from "./stories/story9.md?raw";
import story10 from "./stories/story10.md?raw";
import story11 from "./stories/story11.md?raw";
import { Technique, Story, Scenario, Drill } from './types';

export const TECHNIQUES: Technique[] = [
  {
    id: 'snap-kick',
    title: 'The Snap Groin Kick',
    subtitle: 'Valkyrie Launch • Kinetic Whiplash Strike',
    difficulty: 'Beginner',
    powerLevel: 'Extreme (Instant Disruption)',
    idealDistance: 'Medium Range',
    steps: [
      'Establish Stance: Keep your hands up in a defensive, non-threatening posture. Keep your feet shoulder-width apart, dominant leg slightly back.',
      'Chamber the Knee: Lift your striking leg’s knee straight up toward the chest. This hides the attack and generates upward trajectory.',
      'Unleash the Whip: Snap your lower leg forward and upward like a whip. Extend your hips slightly forward for extra reach and power.',
      'Striking Surface: Impact with the hard top of your foot (instep) or the lower shinbone. Do NOT strike with toes, as this can break them.',
      'Drive and Retract: Imagine kicking *through* the target up to their throat. Retract your foot instantly back to the floor to regain balance and prevent them from catching your leg.'
    ],
    physiologicalImpact: 'Triggers the autonomic nervous system’s profound vagus nerve response. Causes immediate visceral shock, dynamic drop in blood pressure, severe local muscular spasm, loss of balance, and involuntary forward doubling-over.',
    tacticalKey: 'Keep your eyes on the attacker’s chest (do not look down at the groin, which telegraphs the kick) and strike with absolute speed rather than raw tension.',
    illustrationId: 'kick'
  },
  {
    id: 'knee-thrust',
    title: 'The Ascending Knee Thrust',
    subtitle: 'Valkyrie Surge • Brutal Close-Range Devastation',
    difficulty: 'Beginner',
    powerLevel: 'Maximum (Structural Collapse)',
    idealDistance: 'Close Range',
    steps: [
      'Clinch & Anchor: Securely grab the attacker’s shoulders, collar, back of the neck, or hair with both hands. This anchors them so they cannot back away.',
      'Load the Hip: Pull your hips back slightly while simultaneously pulling the attacker toward you.',
      'Drive the Point: Drive your knee straight up and forward with absolute explosive force. Keep your toes pointed downward to harden the knee muscle/bone structure.',
      'Target Penetration: Drive the hard, bony point of your kneecap directly up between their thighs into the groin nerve plexus.',
      'Push and Escape: Push the attacker away instantly as they double over, and sprint to safety.'
    ],
    physiologicalImpact: 'Delivers massive kinetic energy from the body’s strongest muscles (quadriceps and glutes). Induces intense physical trauma, immediate loss of standing capability, severe nausea, and absolute motor control termination.',
    tacticalKey: 'Pull the attacker DOWN while driving your knee UP. The opposing forces double the impact velocity and impact force.',
    illustrationId: 'knee'
  },
  {
    id: 'claw-twist',
    title: 'The Tactical Claw, Squeeze & Twist',
    subtitle: 'Valkyrie Claw • Ultimate Close-Quarters Neutralizer',
    difficulty: 'Intermediate',
    powerLevel: 'Catastrophic (Anatomical Shock)',
    idealDistance: 'Close Range',
    steps: [
      'Locate Instantly: If pinned, held against a wall, or in a bearhug, slide your hand directly down the center line of the attacker’s body.',
      'Form the Claw: Cup your hand into a firm, rigid claw-shape. Reach deep between their legs from the front, or from behind if wrapped.',
      'Engage Maximum Grip: Grasp the testicles/groin tissue with full, maximum-strength hand contraction. Grip as hard as physically possible.',
      'Squeeze and Twist: Forcefully squeeze and violently rotate your wrist 180 degrees downward, outward, or sideways.',
      'Yank and Separate: Rip your arm backward/downward while maintaining the grip to tear the attacker’s balance away, then immediately run.'
    ],
    physiologicalImpact: 'Causes instantaneous, excruciating pain that bypasses any high-adrenaline or drug-induced pain resistance. Triggers a massive parasympathetic crash, immediate loss of consciousness, muscular liquefaction, and complete physical immobilization.',
    tacticalKey: 'Do not hesitate. Commit 100% of your hand strength instantly. This technique requires zero physical size or weight leverage and is highly effective for smaller defenders.',
    illustrationId: 'grab'
  },
  {
    id: 'heel-stamp',
    title: 'The Rear Heel Stamp',
    subtitle: 'Valkyrie Hammer • Backwards Escape Strike',
    difficulty: 'Intermediate',
    powerLevel: 'High (Immediate Release)',
    idealDistance: 'Close Range',
    steps: [
      'Drop Center of Gravity: If grabbed from behind in a bearhug or choke, drop your weight down low to make yourself heavier and harder to move.',
      'Identify Target: Feel the position of their thighs behind you. The groin is directly aligned with your tailbone.',
      'Drive the Heel: Lift your foot slightly and drive your heel hard, fast, and backwards directly into their groin, or stomp down hard on their shins first to lower their guard, then drive backward into the groin.',
      'Combine with Back-Kick: Whip your foot in an upward-backward diagonal arc directly into the groin area.',
      'Whip out: Use the moment they loosen their grip to slide out sideways, pivot, and face them or run.'
    ],
    physiologicalImpact: 'Involves high-impact heel bone strike to sensitive nerve centers, forcing immediate release of grip due to sudden, intense pain reflex and loss of leg structural support.',
    tacticalKey: 'Scream loudly as you stamp to release maximal physical power and alert others nearby.',
    illustrationId: 'stamp'
  },
  {
    id: 'palm-shove-combo',
    title: 'The Hand-to-Groin Separator',
    subtitle: 'Valkyrie Shield • Dual-Level Defense',
    difficulty: 'Advanced',
    powerLevel: 'High (Total Separation)',
    idealDistance: 'Arm Length',
    steps: [
      'Dual Strike Launch: As the attacker approaches, strike their face/nose with a powerful heel-of-palm strike to force their head and eyes up.',
      'Simultaneous Knee/Kick: As their head moves back, their hips naturally tilt forward, exposing the groin. Immediately launch a front kick or knee strike into the exposed groin.',
      'Brace and Push: Use both hands to push off their chest, using their backward momentum to launch yourself away.',
      'Assess and Run: Turn and sprint toward public or populated areas.'
    ],
    physiologicalImpact: 'Forces the body in opposite directions (head backwards, hips forwards). Completely disrupts the attacker’s neurological coordination, rendering them unable to pursue.',
    tacticalKey: 'The palm strike blinds and disorients them, making the subsequent groin strike 100% undefendable.',
    illustrationId: 'palm'
  }
];

export const STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'Ex-bf harassed me but I fought back with groin attacks',
    survivorName: 'Elena (26, Graphic Designer)',
    situation: 'I was walking to my car after a late shift in a poorly lit parking garage. My ex-bf Dan suddenly stepped out from between SUVs, blocked my path, and grabbed my arm tightly, whispering a threat of rape and harassment.',
    actionTaken: story1,
    outcome: 'He let out a high-pitched wheeze, dropped to his knees instantly, and clutched his groin with both hands, face hitting the concrete. I sprinted to the security booth. The police caught him right there, still unable to stand up five minutes later.',
    psychologicalInsight: 'Hesitation is the enemy. He expected me to scream and pull back, which would let him pull me closer. By attacking forward immediately, I turned his confidence into absolute helplessness.',
    dateAdded: 'July 12, 2026'
  },
  {
    id: 'story-2',
    title: 'Elevator Trapped No More',
    survivorName: 'Sarah (31, Architect)',
    situation: 'A large male passenger got on the elevator with me. When the doors closed, he stepped into my space, pinned me against the wall with his forearm against my shoulder, and reached for my skirt.',
    actionTaken: story2,
    outcome: 'He immediately collapsed forward onto his stomach, groaning in agonizing spasms, throwing up on the elevator floor. The door opened on the next floor; I ran out and alerted building security.',
    psychologicalInsight: 'A larger attacker believes their weight makes them safe. But the groin is a universal off-button. No amount of muscle or size protects them from a knee strike.',
    dateAdded: 'June 28, 2026'
  },
  {
    id: 'story-3',
    title: 'Escape 3 harassers in college',
    survivorName: 'Amara (19, College Student)',
    situation: 'I was alone in class college  in day when someone grabbed me from behind in a tight bearhug, pinning my arms to my sides and lifting me slightly.',
    actionTaken: story3, 
    outcome: 'He let out an earsplitting scream, let go of me instantly, and fell backwards onto the pavement not able to breath properly while others almost got fainted, I ran to the main campus road and safety.',
    psychologicalInsight: 'Even if your arms are pinned, your hands can often find a path down. The groin claw is incredibly powerful because it requires absolutely no wind-up or swing space.',
    dateAdded: 'May 15, 2026'
  },
  {
    id: 'story-4',
    title: 'University Parking Lot Escape',
    survivorName: 'College Student (United States)',
    situation: 'I was walking to my dorm in a poorly lit parking area when a man who was already naked and drunk grabbed me from behind and attempted to drag me away toward a dark corner.',
    actionTaken: story4,
    outcome: 'The groin strike created a sudden, severe pain response that made him let go of my collar. I sprinted toward nearby buildings where others were present, and the attacker fled before police arrived.',
    psychologicalInsight: 'The groin strike created a critical, momentary opportunity to escape, but yelling loudly and immediately running to safety were equally important to my survival.',
    dateAdded: 'July 18, 2026'
  },
  {
    id: 'story-5',
    title: 'Trail Jogger Avoids Assault',
    survivorName: 'Solo Jogger (28)',
    situation: 'I was jogging alone on an isolated trail when a stranger suddenly grabbed me from behind and tried to drag me toward the dense trees.',
    actionTaken: story5,
    outcome: 'He doubled over and clutched his pelvis, which let me break his grip entirely. I ran as fast as I could toward a nearby busy road where passing motorists noticed my distress and contacted the police.',
    psychologicalInsight: 'Continuing to move toward people and busy locations greatly increased my safety. Never stay to fight—use the strike to buy space, then run.',
    dateAdded: 'July 15, 2026'
  },
  {
    id: 'story-6',
    title: 'Groin Attack Saved from Marital Rape',
    survivorName: 'Rohni Kumar(Wife,35)',
   situation: story6,   
   actionTaken: 'Hard kick to the groin area',
    outcome: 'He bent over in intense pain and gasped for air. But i kicked him multiple times making him collapse on the floor',
    psychologicalInsight: 'If you are trained and active you cant be easily overpowered by anyone',
    dateAdded: 'July 10, 2026'
  },
  {
    id: 'story-7',
    title: 'Revenge On the Rapists',
    survivorName: 'Karen & Dana',
    situation: story7,
    actionTaken: "They approached the house with calm confidence, used their training to interrupt the attack, and helped Carla get to safety.",
    outcome: 'The confrontation ended with the attackers unable to continue their assault and the women able to leave the scene safely. The matter was reported to authorities, and the survivors were able to move forward with support and protection.',
    psychologicalInsight: 'When fear is met with preparation and resolve, it becomes a source of power rather than paralysis. Standing together can turn trauma into courage and action.',
    dateAdded: 'July 19, 2026'
  },
  {
    id: 'story-8',
    title: 'Escaping the Rape attempt By Groin Attack Defense tricks ',
    survivorName: 'Anjelina (25,student)',
    situation: story8,
    actionTaken: "She freed one leg, kneed him, punched his face, head-butted him when her arms were restrained, repeatedly kneed his groin and ribs, and yelled for help.",
    outcome: 'fought back using karate techniques—freeing a leg, striking the attacker, head-butting him when restrained, repeatedly kneeing him, and yelling for help',
    psychologicalInsight: 'Every assault is different. Fighting back, escaping, complying, or using verbal de-escalation may each be the safest option depending on the circumstances. A survivors actions should not be judged by the outcome, as no single strategy guarantees safety.',
    dateAdded: 'July 19, 2026'
  },
   {
    id: 'story-9',
    title: 'Pakistanis woman saves herself by attacking the balls of the rapist ',
    survivorName: 'Farida (Age 23)',
    situation: story9,
    actionTaken: "Farida stepped into a fighting stance, maintained focus on the attacker's movement, and when he lunged, she targeted a vulnerable area by grabbing and twisting his groin. She then immediately ran away",
    outcome: 'The attacker collapsed in pain, allowing Farida to run home, lock the door, and reach safety. The following day, her experience inspired other women in the village to consider self-defense training.',
    psychologicalInsight: 'Farida displayed situational awareness, emotional control, and decisive action. She remained focused on the movement of attacker rather than becoming overwhelmed by fear. Her goal was not revenge but creating a brief opportunity to escape. By using a targeted defensive technique and leaving immediately, she prioritized survival over continuing the confrontation.',
    dateAdded: 'July 19, 2026'
  },
  {
    id: 'story-10',
    title: 'Female Student saves herself by doing extreme and violent groin attacks on the rapist and killed him ',
    survivorName: 'Sophie (Student,22)',
    situation: story10,
    actionTaken: "Seizing the opportunity, the victim launched a sudden and determined counterattack, targeting the groin area and castrating him .",
    outcome: 'The attempted rape was interrupted,The attacker collapsed in pain, and the attacker lost the ability to maintain control.',
    psychologicalInsight: 'The victim survived and regained physical control of the situation and the attacker suffered catastrophic injuries, leaving him completely incapacitated.',
    dateAdded: 'July 19, 2026'
  },
   {
    id: 'story-11',
    title: 'Julie saves herself from his father\'s friend\'s attempt of rape',
    survivorName: 'Julie (Single,26)',
    situation: story11,
    actionTaken: "Seizing the opportunity, the victim launched a sudden and determined counterattack, targeting the groin area  .",
    outcome: 'The attempted rape was interrupted,The attacker collapsed in pain, and the attacker lost the ability to maintain control.',
    psychologicalInsight: 'The victim survived and regained physical control of the situation and the attacker suffered catastrophic injuries, leaving him completely incapacitated.',
    dateAdded: 'July 19, 2026'
  }




];

export const SCENARIOS: Scenario[] = [
  {
    id: 'scenario-front-grab',
    title: 'Scenario 1: The Front Wrist Grip',
    description: 'An aggressive individual approaches you on a quiet street. He suddenly reaches out and grabs your left wrist with his hand, attempting to drag you toward an alleyway. Your right arm is free.',
    threatLevel: 'High',
    attackerStance: 'Facing you, leaning forward, hips slightly exposed.',
    choices: [
      {
        id: 'choice-1a',
        text: 'Try to pull your wrist back with all your strength and yell for help.',
        resultText: 'The attacker is much larger and stronger than you. Pulling back only tightens his grip, and your pulling motion gives him leverage to drag you faster.',
        isCorrect: false,
        explanation: 'Do not play into the attacker’s strength. Pulling back is a natural reflex, but it fails against physical size differences.'
      },
      {
        id: 'choice-1b',
        text: 'Step in, look at his chest, and launch a powerful Snap Groin Kick with your rear leg.',
        resultText: 'CRITICAL HIT! Your shin and instep drive straight up into his groin. His grip instantly liquefies, he drops to his knees clutching himself, gasping for air.',
        isCorrect: true,
        explanation: 'Excellent choice. By stepping in, you close the distance to perfect kicking range and catch him off-guard. Groin strikes instantly disable grip strength.'
      },
      {
        id: 'choice-1c',
        text: 'Attempt to punch him in the face with your free right hand.',
        resultText: 'Your punch connects with his cheek, but because of the size difference, it only angers him. He grabs your other wrist, completely pinning you.',
        isCorrect: false,
        explanation: 'The head is a hard, mobile target. A punch is rarely decisive unless trained extensively. The groin is a soft, high-nerve-density target.'
      }
    ]
  },
  {
    id: 'scenario-rear-bearhug',
    title: 'Scenario 2: Pinned from Behind',
    description: 'While waiting for public transit, someone suddenly wraps both arms around you from behind in a tight bearhug, locking your arms to your sides. They try to lift you.',
    threatLevel: 'Extreme',
    attackerStance: 'Behind you, chest pressed to your back, arms locked.',
    choices: [
      {
        id: 'choice-2a',
        text: 'Wiggle and try to slide your arms up to break the lock.',
        resultText: 'Their grip is too tight. Wiggling only tires you out and allows them to adjust their hold to be even more secure.',
        isCorrect: false,
        explanation: 'Trying to overpower a rear hold from a bigger attacker is highly ineffective. You must target vulnerable areas instantly.'
      },
      {
        id: 'choice-2b',
        text: 'Drop your weight low, slide your hand between his thighs, claw-grip his groin, squeeze, and twist.',
        resultText: 'MAXIMUM DAMAGE! Your hand finds the target. You squeeze with full force and twist. He screams in agonizing shock, lets go instantly, and collapses in a fetal position.',
        isCorrect: true,
        explanation: 'Outstanding move! dropping your weight makes you hard to lift, and the claw-grip-and-twist is the single most devastating rear-escape option, requiring zero swing space.'
      },
      {
        id: 'choice-2c',
        text: 'Lean your head forward and try to headbutt them backwards.',
        resultText: 'You headbutt backwards, but you miss his nose and strike his hard forehead, dazing yourself while he maintains his hold.',
        isCorrect: false,
        explanation: 'Headbutts are risky and can injure the defender. Targeting the groin from behind is high-yield and low-risk.'
      }
    ]
  },
  {
    id: 'scenario-wall-pin',
    title: 'Scenario 3: Cornered and Pinned',
    description: 'An aggressor corners you in a corridor and pins you against the wall, placing one hand on your neck and the other on the wall beside you. He is very close, breathing in your face.',
    threatLevel: 'Extreme',
    attackerStance: 'Incredibly close, standing upright, neck and shoulders exposed.',
    choices: [
      {
        id: 'choice-3a',
        text: 'Reach up and try to pry his hand off your neck.',
        resultText: 'His hand is locked onto your throat. Prying with your fingers is weak and doesn’t stop his forward weight.',
        isCorrect: false,
        explanation: 'Never try to fight hand-against-hand when someone has a choke or leverage. You must strike a vital target to force a release.'
      },
      {
        id: 'choice-3b',
        text: 'Grab his shoulders/collar firmly to anchor him, pull your hips slightly back, and drive an explosive knee straight up between his thighs.',
        resultText: 'DEVASTATING BLOW! Your knee impacts his groin with full pelvic drive. His eyes roll back, he releases his neck grip instantly, and sinks to the floor, writhing in pain.',
        isCorrect: true,
        explanation: 'Flawless execution. Close quarters require knee strikes. Anchoring his shoulders prevents him from slipping off your knee, ensuring maximum energy transfer.'
      },
      {
        id: 'choice-3c',
        text: 'Scream as loud as you can while trying to kick his shins.',
        resultText: 'Your shin kicks do minimal damage due to his heavy shoes. He gets angry and tightens his grip on your neck, cutting off your air.',
        isCorrect: false,
        explanation: 'Shin kicks are painful but rarely disabling. In extreme threats, you must use high-force strikes directly to the groin to disable the attacker.'
      }
    ]
  }
];

export const DRILLS: Drill[] = [
  {
    id: 'drill-shadow-kick',
    title: 'Snap-Kick Shadow Training',
    description: 'Develop speed, snapping motion, and dynamic balance without a partner. Focus on high-frequency, rapid retraction of the foot.',
    totalDuration: 180,
    rounds: 3,
    workInterval: 45,
    restInterval: 15,
    voiceCommands: [
      'Get into defensive stance... Hands up, eyes forward.',
      'Chamber the knee... SNAP! Kick and snap back!',
      'Again! Rapid snap! Keep hands guarding your face.',
      'Fast retraction! Do not let them catch your foot.',
      'Exhale sharply on every single strike!',
      'Switch legs! Train both sides for absolute versatility.'
    ]
  },
  {
    id: 'drill-knee-clinch',
    title: 'Knee-Thrust Clinch Simulation',
    description: 'Train the explosive close-range knee drive. Practice grabbing the imaginary attacker, loading hips, and driving the knee upward.',
    totalDuration: 240,
    rounds: 4,
    workInterval: 45,
    restInterval: 15,
    voiceCommands: [
      'Grab collar/neck! Pull down hard!',
      'Hips back... DRIVE the knee straight up!',
      'Point your toes down! Hard kneecap strike!',
      'Drive... step back... DRIVE again!',
      'Power! Explode from the glutes and hips!',
      'Double strike! Right knee then Left knee!'
    ]
  },
  {
    id: 'drill-claw-reflex',
    title: 'Bearhug Escape & Claw Reflex',
    description: 'Mental and physical muscle-memory drill to immediately transition from a surprised rear state into dropping weight and reaching for the groin grab.',
    totalDuration: 120,
    rounds: 2,
    workInterval: 40,
    restInterval: 20,
    voiceCommands: [
      'Relax... walk in place...',
      'PINNED! Drop your weight low immediately!',
      'Reach back... CLAW & GRIP!',
      'Squeeze with 100% force and TWIST!',
      'Break out, turn, and sprint!',
      'Excellent. Reset and walk again.'
    ]
  }
];
