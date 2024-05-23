import React from "react";

function ReinvestmentStatistics() {
  return (
    <section
      id="reinvestment-statistics"
      className="p-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
    >
      <h2 className="text-2xl font-semibold mb-4">Reinvestment Statistics</h2>
      <div className="mb-4">
        <label
          className="block text-sm font-medium mb-2"
          htmlFor="month-select"
        >
          Select Month
        </label>
        <select
          className="w-full p-2 bg-zinc-300 dark:bg-zinc-900 text-black dark:text-white rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
          id="month-select"
        >
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
        </select>
      </div>
      <div id="stats" className="space-y-4">
        <div className="p-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]">
          <h3 className="text-xl font-semibold">Current Month</h3>
          <p className="mb-2">
            Total Pool: <span className="text-gradient">1000 BNB</span>
          </p>
          <p className="mb-2">
            Total Earned: <span className="text-gradient">200 BNB</span>
          </p>
          <p className="mb-2">
            Payout: <span className="text-gradient">150 BNB</span>
          </p>
          <p className="mb-2">
            Overall Profit: <span className="text-gradient">500 BNB</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReinvestmentStatistics;
