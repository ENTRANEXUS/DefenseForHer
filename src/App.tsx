import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Layout from "./components/layout/Layout";
import useClock from "./hooks/useClock";
import { theme } from "./constants/theme";
import type { TabId } from "./constants/navigation";
import AboutManifesto from "./components/features/AboutManifesto";
import TechniqueModule from "./components/features/TechniqueModule";
import InteractiveAnatomy from "./components/features/InteractiveAnatomy";
import ScenarioSimulator from "./components/features/ScenarioSimulator";
import EmpowermentHub from "./components/features/EmpowermentHub";
import PracticeCoach from "./components/features/PracticeCoach";
import DefenseManual from "./components/features/DefenseManual";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("manifesto");
  const currentTime = useClock();

  const handleStartDrill = () => {
    setActiveTab("coach");
    setTimeout(() => {
      document.getElementById("practice-timer-coach")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Layout currentTime={currentTime} activeTab={activeTab} setActiveTab={setActiveTab}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: theme.animation.duration }}
        >
          {activeTab === "manifesto" && <AboutManifesto />}
          {activeTab === "techniques" && <TechniqueModule onStartDrill={handleStartDrill} />}
          {activeTab === "anatomy" && <InteractiveAnatomy />}
          {activeTab === "simulator" && <ScenarioSimulator />}
          {activeTab === "stories" && <EmpowermentHub />}
          {activeTab === "coach" && <PracticeCoach />}
          {activeTab === "manual" && <DefenseManual />}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
