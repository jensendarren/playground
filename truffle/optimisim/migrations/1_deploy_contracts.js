var SimpleStorage = artifacts.require("SimpleStorage");
// need to slightly reduce the estimated gas set by truffle
// otherwise it results in a "exceeded the block limit" error!
SimpleStorage.gasMultiplier = 0.9

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage, { gasPrice: 15000000 });
};