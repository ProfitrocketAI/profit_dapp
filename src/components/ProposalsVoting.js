import React from "react";

const ProposalsVoting = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Proposals & Voting
      </h2>
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Active Proposals
        </h3>
        <p className="mb-4">
          Total Proposals:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            2
          </span>
        </p>
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
      </div>
    </div>
  );
};

export default ProposalsVoting;
