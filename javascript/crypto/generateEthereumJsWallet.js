const Wallet = require('ethereumjs-wallet');
const EthWallet = Wallet.default.generate();

// Now generate the private key & ethereum address
console.log("Private Key: " + EthWallet.getPrivateKeyString());
console.log("Ethereum Address: " + EthWallet.getAddressString());