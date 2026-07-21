import { AlertOctagon, UserCheck } from "lucide-react";

export interface FooterSection {
  title: string;
  text: string;
  icon: typeof AlertOctagon;
}

export interface FooterLink {
  label: string;
  href: string;
}

export const footerSections: FooterSection[] = [
  {
    title: "Law Enforcement & Ethical Directives",
    text:
      "This is an educational research portal committed exclusively to social, lawful, defensive counter-measures against severe personal violence, assault, and harassment. Groin-strike physical counter-measures are classified globally by defense professionals as maximum-impact escape enablers to neutralize risk immediately and facilitate flight.",
    icon: AlertOctagon,
  },
  {
    title: "Mental Sovereignty Mantra",
    text:
      "By utilizing this training resource, you commit to maintaining situational awareness, pre-planning emergency routes, rehearsing strike biomechanics, and carrying yourself with absolute physical authority. You are never a victim; you are a highly trained, sovereign, and dangerous defender.",
    icon: UserCheck,
  },
];

export const footerSocialLinks: FooterLink[] = [
  { label: "Hit The Groin To Save Yourself", href: "#" },
];
