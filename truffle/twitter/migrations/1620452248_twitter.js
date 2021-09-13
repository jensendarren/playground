const Twitter = artifacts.require("Twitter");
const TwitterSeed = artifacts.require("TwitterSeed");

module.exports = function(deployer) {
  deployer.deploy(Twitter).then(()=> {
    return deployer.deploy(TwitterSeed, Twitter.address)
  });
};