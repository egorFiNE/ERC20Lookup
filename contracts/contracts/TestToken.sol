// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract TestToken {
    string public name;
    string public symbol;
    uint8 public decimals;

    constructor(string memory _symbol, string memory _name, uint8 _decimals)  {
        symbol = _symbol;
        name = _name;
        decimals = _decimals;
    }
}
