require('@nomicfoundation/hardhat-chai-matchers');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-deploy');

module.exports = {
  solidity: {
    version: '0.8.15',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
