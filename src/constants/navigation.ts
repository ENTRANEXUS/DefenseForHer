import {
  Activity,
  BookOpen,
  Clock,
  FileText,
  Heart,
  Shield,
  Skull,
} from "lucide-react";

export type TabId = "techniques" | "anatomy" | "simulator" | "stories" | "coach" | "manual" | "manifesto";

export interface NavigationTab {
  id: TabId;
  title: string;
  icon: typeof Shield;
  iconClassName?: string;
}

export const navigationTabs: NavigationTab[] = [
  { id: "manifesto", title: "Empowerment Manifesto", icon: Heart, iconClassName: "text-red-500 animate-pulse" },
  { id: "techniques", title: "Strike Library", icon: Shield },
  { id: "anatomy", title: "Target Anatomy", icon: Activity },
  { id: "simulator", title: "Threat Simulator", icon: Skull },
  { id: "stories", title: "Empowerment Vault", icon: FileText },
  { id: "coach", title: "Practice Coach", icon: Clock },
  { id: "manual", title: "Defense Manual", icon: BookOpen },
];
