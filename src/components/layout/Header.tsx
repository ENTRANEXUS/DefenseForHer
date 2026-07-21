import { Clock } from "lucide-react";
import { siteConfig } from "../../constants/site";

interface HeaderProps {
  currentTime: string;
}

export default function Header({ currentTime }: HeaderProps) {
  return (
    <div className="bg-zinc-900 border-b border-zinc-800 px-4 lg:px-8 py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-zinc-500">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
        <span className="uppercase tracking-widest font-bold text-[10px] text-red-500">{siteConfig.websiteName} • Online</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline text-zinc-600">IP SECURED</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-red-600" /> {currentTime || "LOADING VIGILANCE TIMER..."}
        </span>
      </div>
    </div>
  );
}
