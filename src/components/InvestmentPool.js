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

const InvestmentPool = () => {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Total Pool (BNB)",
        data: [1000, 1050, 1100, 1150, 1200, 1250],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Investment Pool
      </h2>
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Pool Summary
        </h3>
        <p className="mb-4">
          Total Pool:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            1250 BNB
          </span>
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow">
          Reinvest
        </button>
        <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow ml-2">
          Withdraw
        </button>
      </div>
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Pool Growth
        </h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default InvestmentPool;
