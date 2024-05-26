import React from "react";

function ReinvestmentStatistics() {
  return (
    <section
      id="reinvestment-statistics"
      className="bg-zinc-900 p-4 rounded-[18px] shadow-animated mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Reinvestment Statistics
      </h2>
      <div className="mb-4">
        <label
          className="block text-sm font-medium mb-2"
          htmlFor="month-select"
        >
          Select Month
        </label>
        <select
          className="w-full p-2 bg-zinc-800 text-white rounded-lg"
          id="month-select"
        >
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
        </select>
      </div>
      <div id="stats" className="space-y-4">
        <div className="bg-zinc-800 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-xl font-semibold">Current Month</h3>
          <p className="mb-2">
            Total Pool:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              1000 BNB
            </span>
          </p>
          <p className="mb-2">
            Total Earned:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              200 BNB
            </span>
          </p>
          <p className="mb-2">
            Payout:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              150 BNB
            </span>
          </p>
          <p className="mb-2">
            Overall Profit:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              500 BNB
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReinvestmentStatistics;
