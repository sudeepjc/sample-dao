const EvenStore = artifacts.require("EvenStore");

module.exports = async function (deployer) {
  deployer.deploy(EvenStore);
};
