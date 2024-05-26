import React, { createContext, useState, useEffect } from "react";
import Web3 from "web3";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.log("Please install MetaMask!");
    }
  }, []);

  const connectWallet = async () => {
    if (web3) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  return (
    <Web3Context.Provider
      value={{ web3, account, connectWallet, disconnectWallet }}
    >
      {children}
    </Web3Context.Provider>
  );
};
