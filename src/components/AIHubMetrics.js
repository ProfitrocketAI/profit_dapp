import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AIHubMetrics = () => {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Profit (BNB)",
        data: [20, 25, 30, 35, 40, 45],
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        AI Hub Metrics
      </h2>
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Current Metrics
        </h3>
        <p className="mb-4">
          Current Profit:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            45 BNB
          </span>
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow">
          View Details
        </button>
      </div>
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Monthly Profit
        </h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default AIHubMetrics;
