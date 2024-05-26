import React, { useContext } from "react";
import { Web3Context } from "../context/Web3Context"; // Import Web3Context
import logo from "../token.svg"; // Make sure the path to your logo is correct

function Header() {
  const { account, connectWallet, disconnectWallet } = useContext(Web3Context); // Use Web3Context

  // Function to format the wallet address
  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  };

  // Handle button click
  const handleButtonClick = () => {
    if (account) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        PRAI Token Dashboard
      </h1>
      <button
        id="login-button"
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-[18px] shadow-[0_0_0_1px_#FF0000] shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000] hover:shadow-glow-[0_0_10px_#FF7F00,0_0_20px_#FFFF00,0_0_30px_#00FF00,0_0_40px_#00FFFF,0_0_50px_#0000FF,0_0_60px_#8B00FF,0_0_70px_#FF00FF,0_0_80px_#FF0080,0_0_90px_#800000,0_0_100px_#008000]"
        onClick={handleButtonClick}
      >
        {account ? `Connected: ${formatAddress(account)}` : "Connect Wallet"}
      </button>
    </header>
  );
}

export default Header;
