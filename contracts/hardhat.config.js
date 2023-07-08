require('@nomicfoundation/hardhat-chai-matchers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  // uncomment for deployment
  // networks: {
  //   arbitrum: {
  //     url: `https://arbitrum-mainnet.infura.io/v3/CENSORED`,
  //     chainId: 42161
  //   }
  // },

  solidity: {
    version: '0.8.19', // do not use 0.8.20 due to PUSH0 compatibility issues with other networks
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
