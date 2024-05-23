import React from "react";

function ProposalsVoting() {
  return (
    <section
      id="proposals-voting"
      className="p-4 mb-8 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
    >
      <h2 className="text-2xl font-semibold mb-4">Proposals & Voting</h2>
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg mb-4">
        Submit Proposal
      </button>
      <div className="space-y-4">
        <div className="bg-zinc-800 dark:bg-zinc-700 p-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]">
          <h3 className="text-xl font-semibold">Proposal 1</h3>
          <p className="mb-2">Description of proposal 1...</p>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg">
            Vote
          </button>
        </div>
        <div className="bg-zinc-800 dark:bg-zinc-700 p-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]">
          <h3 className="text-xl font-semibold">Proposal 2</h3>
          <p className="mb-2">Description of proposal 2...</p>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg">
            Vote
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProposalsVoting;
