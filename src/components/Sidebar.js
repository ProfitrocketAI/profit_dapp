import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faPiggyBank,
  faChartLine,
  faRobot,
  faVoteYea,
  faFileSignature,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ currentTab, setCurrentTab }) {
  const tabs = [
    { name: "Dashboard", id: "dashboard", icon: faTachometerAlt },
    { name: "Investment Pool", id: "investment-pool", icon: faPiggyBank },
    { name: "Staking", id: "staking", icon: faChartLine },
    { name: "AI Hub Metrics", id: "ai-hub-metrics", icon: faRobot },
    { name: "Proposals & Voting", id: "proposals-voting", icon: faVoteYea },
    { name: "Submit AI Agent", id: "submit-ai-agent", icon: faFileSignature },
    {
      name: "Reinvestment Statistics",
      id: "reinvestment-statistics",
      icon: faRedoAlt,
    },
  ];

  return (
    <aside className="bg-zinc-900 dark:bg-zinc-800 w-64 p-4 border border-primary rounded-lg shadow-animated">
      <nav className="space-y-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`flex items-center space-x-2 block text-lg font-semibold ${
              currentTab === tab.id ? "text-blue-500" : "text-gray-500"
            } hover:text-blue-400 transition duration-200`}
          >
            <FontAwesomeIcon icon={tab.icon} />
            <span>{tab.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
