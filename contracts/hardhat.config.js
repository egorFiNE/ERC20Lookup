require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-web3');

module.exports = {
  solidity: {
    version: '0.8.14',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
