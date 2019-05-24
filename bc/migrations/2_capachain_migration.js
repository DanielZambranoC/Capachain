const Capachain = artifacts.require("CAPAFactory");

module.exports = function(deployer) {
  deployer.deploy(Capachain);
};
