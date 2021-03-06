// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

//import "hardhat/console.sol";

contract Calculator {
    function add(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 + nb2;
    }

    function mul(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 * nb2;
    }

    function div(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        require(nb2 != 0, "Calculator can not divide digit 0");
        return nb1 / nb2;
    }

    function sub(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 - nb2;
    }

    function modulo(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 % nb2;
    }
}
