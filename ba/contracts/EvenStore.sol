pragma solidity >=0.8.0 <0.9.0;

contract EvenStore {
    uint256 num;

    function getNum() external returns (uint256) {
        return num;
    }

    function storeEven(uint256 _num) public {
        require(_num % 2 == 0, "Not Even");
        num = _num;
    }
}
