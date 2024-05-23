import React from "react";
import logo from "../token.svg"; // Ensure the path to your logo is correct

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        PRAI Token Dashboard
      </h1>
      <button
        id="login-button"
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
      >
        Connect Wallet
      </button>
    </header>
  );
}

export default Header;
