import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ setCurrentTab }) => {
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Investment Growth",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Staking Rewards",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Investment Pool Overview */}
        <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Investment Pool
          </h3>
          <p className="mb-4">
            Total Pool:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              1000 BNB
            </span>
          </p>
          <button
            onClick={() => setCurrentTab("investment-pool")}
            className="text-blue-500 underline"
          >
            View Details
          </button>
        </div>

        {/* Staking Overview */}
        <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Staking
          </h3>
          <p className="mb-4">
            Staked Tokens:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              500 PRAI
            </span>
          </p>
          <button
            onClick={() => setCurrentTab("staking")}
            className="text-blue-500 underline"
          >
            View Details
          </button>
        </div>

        {/* AI Hub Metrics Overview */}
        <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            AI Hub Metrics
          </h3>
          <p className="mb-4">
            Current Profit:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              150 BNB
            </span>
          </p>
          <button
            onClick={() => setCurrentTab("ai-hub-metrics")}
            className="text-blue-500 underline"
          >
            View Details
          </button>
        </div>

        {/* Proposals & Voting Overview */}
        <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Proposals & Voting
          </h3>
          <p className="mb-4">
            Active Proposals:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              2
            </span>
          </p>
          <button
            onClick={() => setCurrentTab("proposals-voting")}
            className="text-blue-500 underline"
          >
            View Details
          </button>
        </div>

        {/* Submit AI Agent Overview */}
        <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Submit AI Agent
          </h3>
          <p className="mb-4">
            Agents Submitted:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              5
            </span>
          </p>
          <button
            onClick={() => setCurrentTab("submit-ai-agent")}
            className="text-blue-500 underline"
          >
            View Details
          </button>
        </div>

        {/* Reinvestment Statistics Overview */}
        <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Reinvestment Statistics
          </h3>
          <p className="mb-4">
            Total Reinvested:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              200 BNB
            </span>
          </p>
          <button
            onClick={() => setCurrentTab("reinvestment-statistics")}
            className="text-blue-500 underline"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Investment Growth
          </h3>
          <Line data={lineData} />
        </div>

        <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Staking Rewards
          </h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
