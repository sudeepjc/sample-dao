const STUNFT = artifacts.require("STUNFT");

module.exports = async function (deployer) {
  deployer.deploy(STUNFT,"baseURI");
};
