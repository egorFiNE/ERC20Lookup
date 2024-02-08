require('@nomicfoundation/hardhat-chai-matchers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`
    },
    blastTestnet: {
      url: `https://sepolia.blast.io`
    }
  },

  // this config has only been used for blast verification
  etherscan: {
    apiKey: {
      blastTestnet: 'blastTestnet', // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: 'blastTestnet',
        chainId: 168587773,
        urls: {
          apiURL: 'https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan',
          browserURL: 'https://testnet.blastscan.io'
        }
      }
    ]
  },

  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
