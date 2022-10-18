const STUNFT = artifacts.require("STUNFT");
const { BN, constants,expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

contract("Testing STUNFT contract ", (accounts) => {
    let nftowner =  accounts[0];
    let buyer1 =  accounts[1];
    let buyer2 =  accounts[2];

  it("NFT is deployed and instance canbe created", async () => {
    const nftInstance = await STUNFT.deployed();
    // const balance = await EvenStoreInstance.getBalance.call(accounts[0]);

    assert.notEqual(nftInstance, null, "NFT instance could not be created");
  });

  it("Check for Owner is correct", async () => {
    const nftInstance = await STUNFT.deployed();
    const owner = await nftInstance.owner.call();

    assert.equal(owner, nftowner, "NFT instance could not be created");
  });

  it("Check is tokenURI is correct", async () => {
    const nftInstance = await STUNFT.deployed();
    const response = await nftInstance.mint({from: buyer1, value: web3.utils.toWei("0.0001","ether")});

    // await debug(nftInstance.mint({from: buyer1, value: web3.utils.toWei("0.0001","ether")}));
    
    expectEvent.inLogs(response.logs, 'Transfer', {
        from: constants.ZERO_ADDRESS,
        to: buyer1,
        tokenId: new BN('0'),
    });
    
    const tokenURI = await nftInstance.tokenURI.call(0);
    console.log(tokenURI);
    
    assert.equal(tokenURI, "baseURI0.json", "tokenURI is not as expected");
  });

});