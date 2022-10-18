pragma solidity >=0.8.0 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/EvenStore.sol";

contract TestEvenStore {
    function testEvenStoreCreation() public {
        EvenStore es = EvenStore(DeployedAddresses.EvenStore());
        Assert.notEqual(
            address(es),
            address(0x00),
            "Failed to create and instance of EvenStore"
        );
    }

    function testEvenStoreNewCreation() public {
        EvenStore es = new EvenStore();
        Assert.notEqual(
            address(es),
            address(0x00),
            "Failed to create and instance of EvenStore"
        );
    }

    function testNumValue() public {
        EvenStore es = EvenStore(DeployedAddresses.EvenStore());
        uint256 actualNum = es.getNum();
        Assert.equal(
            actualNum,
            uint256(0),
            "Failed to create and instance of EvenStore"
        );
    }

    function testStore2() public {
        EvenStore es = EvenStore(DeployedAddresses.EvenStore());
        es.storeEven(uint256(2));
        uint256 actualNum = es.getNum();
        Assert.equal(
            actualNum,
            uint256(2),
            "Failed to create and instance of EvenStore"
        );
    }

    function testStore3() public {
        EvenStore es = EvenStore(DeployedAddresses.EvenStore());
        try es.storeEven(uint256(3)) {
            Assert.fail("Not expected to reach here");
        } catch (bytes memory s) {
            // Assert.equal(
            //     string(s),
            //     "Not Even",
            //     "Store odd numbers successfully"
            //  );
        }
    }
}
