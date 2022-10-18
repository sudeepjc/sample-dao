const STUDAO = artifacts.require("STUDAO");
const ProposalHandler = artifacts.require("ProposalHandler");

module.exports = async function (deployer) {
  const p =await ProposalHandler.deployed();
  deployer.deploy(STUDAO, p.address,"0x4088Eb03e0f2e4F1bC3CD4720F55769436AB6403");
};
