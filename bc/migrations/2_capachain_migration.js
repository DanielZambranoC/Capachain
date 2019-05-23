const Capachain = artifacts.require("CAPAChain");

module.exports = function(deployer) {
  deployer.deploy(Capachain);
};
