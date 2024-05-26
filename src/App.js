import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import { Web3Provider } from "./context/Web3Context"; // Import Web3Provider

const Widget = lazy(() => import("./components/Dapp_Dashboard"));

function App() {
  return (
    <Web3Provider>
      {" "}
      {/* Wrap the application in Web3Provider */}
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Widget />
          </Suspense>
        </main>
      </div>
    </Web3Provider>
  );
}

export default App;
