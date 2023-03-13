import { ethers } from 'ethers';

const LOOKUP_CONTRACT_ADDRESSES_BY_CHAINID = {
  0x7a69: '0x6e7285c3E47c242e3aD62eDD5D0F19886F1e7ef0', // developer code, anything

  0x01: '0x6e7285c3E47c242e3aD62eDD5D0F19886F1e7ef0',
  0x89: '0xFe35BC1Ff694883dE8D31f3a87C5a668BCE765B0', // polygon
  0x4e454152: '0x48cF154a086bAB5492A8D150f4d87a74eCf90743', // aurora
  43114: '0xCbCB78054731a6FCCa53920959033810Ff0A7D1d', // avalanche
  0x38: '0x9a8D6BB3c45E100c8456a8295C8b90b993bE20D4', // BNB
  0xfa: '0xD07b8Ddbb60aA59648F8697A2faCbDa4C8ed4994', // Fantom
  0x0a: '0xEF0Bb05F544b8540E538B958257C466dcB7347D0', // Optimistic

  0x05: '0x1a7f041dDC8919D26dB38E186E00e6E36dCCA0E6', // goerli testnet
  0x61: '0x73E068e9c7ffc91F463ca5464E77E6826D84E3A5' // BNB testnet
};

const LOOKUP_ABI = [
  {
    'inputs': [
      {
        'internalType': 'address[]',
        'name': 'tokens',
        'type': 'address[]'
      }
    ],
    'name': 'lookup',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'string',
            'name': 'symbol',
            'type': 'string'
          },
          {
            'internalType': 'string',
            'name': 'name',
            'type': 'string'
          },
          {
            'internalType': 'uint8',
            'name': 'decimals',
            'type': 'uint8'
          }
        ],
        'internalType': 'struct ERC20Lookup.LookupResult[]',
        'name': 'result',
        'type': 'tuple[]'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  }
];

export async function lookup(provider, contracts) {
  let chainId;
  if (provider.chainId) {
    chainId = Number(provider.chainId);
  } else {
    const network = await provider.getNetwork();
    chainId = Number(network.chainId);
  }

  const chainIdHumanReadable = '0x' + chainId.toString(16);

  const contractAddress = process.env.ERC20_LOOKUP_CONTRACT_ADDRESS || LOOKUP_CONTRACT_ADDRESSES_BY_CHAINID[chainId];
  if (!contractAddress) {
    throw new Error(`No lookup contract for chainId ${chainIdHumanReadable}`);
  }

  const addresses = [];
  for (const contract of contracts) {
    if (contract.getAddress) {
      addresses.push(await contract.getAddress());
    } else {
      addresses.push(contract.address);
    }
  }

  const lookupContract = new ethers.Contract(contractAddress, LOOKUP_ABI, provider);

  let results = null;
  try {
    results = await lookupContract.lookup(addresses);
  } catch (e) {
    throw new Error(`ERC20Lookup can't lookup contracts ${addresses.join(',')} via ${contractAddress} at ${chainIdHumanReadable}`);
  }

  for (let i=0; i<contracts.length; i++) {
    contracts[i].erc20 = {
      name: results[i].name,
      symbol: results[i].symbol,
      decimals: parseInt(results[i].decimals, 10)
    };
  }
}
