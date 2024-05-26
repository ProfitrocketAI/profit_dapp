import React from "react";

function InvestmentPool() {
  return (
    <section
      id="investment-pool"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
    >
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
        <h2 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Investment Pool
        </h2>
        <p className="mb-4">
          Total Pool:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            1000 BNB
          </span>
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow ml-2">
          Reinvest
        </button>
        <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow ml-2">
          Withdraw
        </button>
      </div>
    </section>
  );
}

export default InvestmentPool;
