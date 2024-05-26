import React from "react";

function AIHubMetrics() {
  return (
    <section
      id="ai-hub-metrics"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
    >
      <div className="bg-zinc-900 p-4 rounded-[18px] shadow-animated">
        <h2 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          AI Hub Metrics
        </h2>
        <p className="mb-4">
          Current Profit:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            150 BNB
          </span>
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-animated hover:shadow-glow">
          View Details
        </button>
      </div>
    </section>
  );
}

export default AIHubMetrics;
