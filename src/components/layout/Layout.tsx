import type { ReactNode } from "react";
import type { Dispatch, SetStateAction } from "react";
import AgeWarning from "../common/AgeWarning";
import Header from "./Header";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Footer from "./Footer";
import type { TabId } from "../../constants/navigation";

interface LayoutProps {
  currentTime: string;
  activeTab: TabId;
  setActiveTab: Dispatch<SetStateAction<TabId>>;
  children: ReactNode;
}

export default function Layout({ currentTime, activeTab, setActiveTab, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600/30 selection:text-white pb-16">
      <AgeWarning />
      <Header currentTime={currentTime} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        <Hero />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="min-h-[400px]">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
