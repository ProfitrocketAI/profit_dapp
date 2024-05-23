import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import InvestmentPool from "./components/InvestmentPool";
import Staking from "./components/Staking";
import AIHubMetrics from "./components/AIHubMetrics";
import ProposalsVoting from "./components/ProposalsVoting";
import SubmitAIAgent from "./components/SubmitAIAgent";
import ReinvestmentStatistics from "./components/ReinvestmentStatistics";

export default function Widget() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      <div className="flex-1 container mx-auto p-4">
        <InvestmentPool />
        <Staking />
        <AIHubMetrics />
        <ProposalsVoting />
        <SubmitAIAgent />
        <ReinvestmentStatistics />
      </div>
    </div>
  );
}
