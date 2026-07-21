import type { Dispatch, SetStateAction } from "react";
import { navigationTabs, type TabId } from "../../constants/navigation";

interface NavigationProps {
  activeTab: TabId;
  setActiveTab: Dispatch<SetStateAction<TabId>>;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 p-1 flex flex-wrap gap-1" id="valkyrie-primary-navigation">
      {navigationTabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-[120px] py-3.5 px-4 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
              isActive
                ? "bg-red-600 text-white border-red-600"
                : "text-zinc-400 hover:text-white border-transparent hover:bg-zinc-800"
            }`}
          >
            <Icon className={`w-4 h-4 shrink-0${tab.iconClassName ? ` ${tab.iconClassName}` : ""}`} /> {tab.title}
          </button>
        );
      })}
    </div>
  );
}
