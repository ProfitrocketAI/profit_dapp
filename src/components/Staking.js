import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Staking = () => {
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Staked Tokens (PRAI)",
        data: [500, 550, 600, 650, 700, 750],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Staking
      </h2>
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Staking Summary
        </h3>
        <p className="mb-4">
          Staked Tokens:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            750 PRAI
          </span>
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow">
          Stake More
        </button>
        <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow ml-2">
          Unstake
        </button>
      </div>
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Staking Growth
        </h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default Staking;
