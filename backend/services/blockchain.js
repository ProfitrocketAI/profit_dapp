const Web3 = require("web3");
const web3 = new Web3(process.env.INFURA_URL);

const contractABI = require("../contractABI.json");
const contractAddress = process.env.CONTRACT_ADDRESS;

const contract = new web3.eth.Contract(contractABI, contractAddress);

const getTotalSupply = async () => {
  try {
    const totalSupply = await contract.methods.totalSupply().call();
    return totalSupply;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch total supply");
  }
};

module.exports = {
  getTotalSupply,
};
