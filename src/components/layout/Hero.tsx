import { AlertOctagon, Shield } from "lucide-react";
import Badge from "../common/Badge";
import Card from "../common/Card";
import { siteConfig } from "../../constants/site";

export default function Hero() {
  return (
    <div className="relative bg-zinc-900 border-2 border-zinc-800 p-6 lg:p-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-zinc-800/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <Badge className="inline-flex items-center gap-2 bg-red-950/40 border border-red-900/60 px-3.5 py-1.5 text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold">
            <Shield className="w-3.5 h-3.5 text-red-600" /> {siteConfig.academyName}
          </Badge>

          <span className="block text-xs tracking-[0.4em] uppercase font-bold text-red-600">{siteConfig.tagline}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black italic tracking-tighter text-white leading-none uppercase">
            DEFEND HER
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
            {siteConfig.heroDescription}
          </p>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
          <Card className="bg-zinc-950 border border-zinc-800 p-4 space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Kinetic Force</span>
            <div className="text-2xl font-black text-red-500 font-mono tracking-tighter">&lt; 10 LBS</div>
            <p className="text-[10px] text-zinc-400 leading-snug">Required to collapse any attacker.</p>
          </Card>

          <Card className="bg-zinc-950 border border-zinc-800 p-4 space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Reaction Speed</span>
            <div className="text-2xl font-black text-red-500 font-mono tracking-tighter">0.4S</div>
            <p className="text-[10px] text-zinc-400 leading-snug">Average speed of a snap groin-kick.</p>
          </Card>

          <Card className="bg-zinc-950 border border-zinc-800 p-4 col-span-2 space-y-1 flex items-center gap-3">
            <AlertOctagon className="w-8 h-8 text-red-600 shrink-0" />
            <div>
              <span className="text-[9px] font-mono text-red-500 uppercase tracking-wider block font-bold">Constitutional Right</span>
              <div className="text-sm font-black text-white uppercase tracking-tight">Absolute Personal Sovereignty</div>
              <p className="text-[10px] text-zinc-400 leading-normal">You have 100% legal right to defend your body.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
