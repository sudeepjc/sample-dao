const ProposalHandler = artifacts.require("ProposalHandler");

module.exports = function (deployer) {
  deployer.deploy(ProposalHandler);
};
