import React from "react";

function Staking() {
  return (
    <section
      id="staking"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
    >
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
        <h2 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Staking
        </h2>
        <p className="mb-2">
          Staked Tokens:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            500 PRAI
          </span>
        </p>
        <p className="mb-2">
          Earning Rate:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            5 PRAI/day
          </span>
        </p>
        <p className="mb-4">
          Earned to Date:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            50 PRAI
          </span>
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow">
          Stake More
        </button>
        <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow ml-2">
          Unstake
        </button>
      </div>
    </section>
  );
}

export default Staking;
