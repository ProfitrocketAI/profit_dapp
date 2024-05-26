import React from "react";

function ProposalsVoting() {
  return (
    <section
      id="proposals-voting"
      className="bg-zinc-900 p-4 rounded-[18px] shadow-animated mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Proposals & Voting
      </h2>
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow mb-4">
        Submit Proposal
      </button>
      <div className="space-y-4">
        <div className="bg-zinc-800 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-xl font-semibold">Proposal 1</h3>
          <p className="mb-2">Description of proposal 1...</p>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow">
            Vote
          </button>
        </div>
        <div className="bg-zinc-800 p-4 rounded-[18px] shadow-animated">
          <h3 className="text-xl font-semibold">Proposal 2</h3>
          <p className="mb-2">Description of proposal 2...</p>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow">
            Vote
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProposalsVoting;
