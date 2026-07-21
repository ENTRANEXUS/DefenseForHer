/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Technique {
  id: string;
  title: string;
  subtitle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  powerLevel: string; // e.g., "Critical / Disabling"
  idealDistance: 'Close Range' | 'Medium Range' | 'Arm Length' | 'Ground';
  steps: string[];
  physiologicalImpact: string;
  tacticalKey: string;
  illustrationId: 'kick' | 'knee' | 'grab' | 'stamp' | 'palm';
}

export interface Story {
  id: string;
  title: string;
  survivorName: string;
  situation: string;
  actionTaken: string;
  outcome: string;
  psychologicalInsight: string;
  dateAdded: string;
}

export interface Choice {
  id: string;
  text: string;
  resultText: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  threatLevel: 'Medium' | 'High' | 'Extreme';
  attackerStance: string;
  choices: Choice[];
}

export interface Drill {
  id: string;
  title: string;
  description: string;
  totalDuration: number; // in seconds
  rounds: number;
  workInterval: number; // in seconds
  restInterval: number; // in seconds
  voiceCommands: string[];
}
