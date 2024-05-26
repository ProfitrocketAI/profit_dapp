import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import InvestmentPool from "./components/InvestmentPool";
import Staking from "./components/Staking";
import AIHubMetrics from "./components/AIHubMetrics";
import ProposalsVoting from "./components/ProposalsVoting";
import SubmitAIAgent from "./components/SubmitAIAgent";
import ReinvestmentStatistics from "./components/ReinvestmentStatistics";

export default function Widget() {
  const [currentTab, setCurrentTab] = useState("dashboard");

  const renderContent = () => {
    switch (currentTab) {
      case "dashboard":
        return <Dashboard setCurrentTab={setCurrentTab} />;
      case "investment-pool":
        return <InvestmentPool />;
      case "staking":
        return <Staking />;
      case "ai-hub-metrics":
        return <AIHubMetrics />;
      case "proposals-voting":
        return <ProposalsVoting />;
      case "submit-ai-agent":
        return <SubmitAIAgent />;
      case "reinvestment-statistics":
        return <ReinvestmentStatistics />;
      default:
        return <Dashboard setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="flex-1 container mx-auto p-4">{renderContent()}</div>
    </div>
  );
}
