import React from "react";

function InvestmentPool() {
  return (
    <section
      id="investment-pool"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
    >
      <div class="bg-zinc-900 p-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]">
        <h2 class="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Investment Pool
        </h2>
        <p class="mb-4">
          Total Pool:{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            1000 BNB
          </span>
        </p>
        <button class="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000] hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]">
          Reinvest
        </button>
        <button class="bg-gradient-to-r from-red-400 to-pink-500 text-white py-2 px-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000] hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000] ml-2">
          Withdraw
        </button>
      </div>
    </section>
  );
}

export default InvestmentPool;
