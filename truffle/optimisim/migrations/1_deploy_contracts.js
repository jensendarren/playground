var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage, { gasPrice: 15000000, gas: 1820000 });
};