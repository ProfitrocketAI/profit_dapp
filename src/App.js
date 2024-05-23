import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";

const Widget = lazy(() => import("./Dapp_Dashboard"));

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Widget />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
