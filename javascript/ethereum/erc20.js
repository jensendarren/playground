import Web3 from "web3";
import IERC20 from "IERC20.json";
const HDWalletProvider = require("@truffle/hdwallet-provider");

web3 = new Web3(new HDWalletProvider(pks, `https://ropsten.infura.io/v3/${infuraProjectId}`))

contractAddress = '0x41a89be9073918e0938d98268b7a103cf958209e'

this.meta = new web3.eth.Contract(
  IERC20.abi,
  contractAddress
);

// console.log(contractABI)

var tokenContract = web3.eth.contract(contractABI).at(contractAddress)
var tokenName = tokenContract.name()
var tokenSymbol = tokenContract.symbol()

console.log('Token Name: ', tokenName)
console.log('Token Symbol: ', tokenSymbol)

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    );
  }

  App.start();
});
