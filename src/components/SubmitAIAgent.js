import React from "react";

function SubmitAIAgent() {
  return (
    <section
      id="submit-ai-agent"
      className="bg-zinc-900 p-4 rounded-[18px] shadow-animated mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Submit AI Agent
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="agent-name"
          >
            Agent Name
          </label>
          <input
            className="w-full p-2 bg-zinc-800 text-white rounded-lg"
            type="text"
            id="agent-name"
            placeholder="Enter agent name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="agent-strategy"
          >
            Strategy
          </label>
          <textarea
            className="w-full p-2 bg-zinc-800 text-white rounded-lg"
            id="agent-strategy"
            rows="4"
            placeholder="Describe the strategy"
          ></textarea>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow">
          Submit
        </button>
      </form>
    </section>
  );
}

export default SubmitAIAgent;
