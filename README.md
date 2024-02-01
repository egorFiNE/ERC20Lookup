# ERC20Lookup

Lookup multiple ERC20 token's metadata and store it in `contract.erc20` hash.

```javascript
import { lookup } from 'erc20lookup';
import { ethers } from 'ethers'; // ethers v6 or v5 supported

const provider = new ethers.JsonRpcProvider('https://cloudflare-eth.com/v1/mainnet');
const usdt = new ethers.Contract('0xdAC17F958D2ee523a2206206994597C13D831ec7', ERC20_ABI, provider);
await lookup(provider, [ usdt ]);

console.log(usdt.erc20.symbol);
console.log(usdt.erc20.name);
console.log(usdt.erc20.decimals);
```

# Usage

See `test/erc20lookupTest.mjs`

# Deployments and networks

Deployment addresses are hardcoded inside `index.mjs`.

The following networks are currently supported:

| chainId | Network | Address |
| --- | --- | --- |
| 0x01 | Ethereum | [`0x6e7285c3E47c242e3aD62eDD5D0F19886F1e7ef0`](https://etherscan.io/address/0x6e7285c3E47c242e3aD62eDD5D0F19886F1e7ef0) |
| 0x89 | Polygon | [`0xFe35BC1Ff694883dE8D31f3a87C5a668BCE765B0`](https://polygonscan.com/address/0xFe35BC1Ff694883dE8D31f3a87C5a668BCE765B0) |
| 0xa4b1 | Arbitrum | [`0x2a20c66948373c7F619b32737c0bFa1dDa94E6E4`](https://arbiscan.io/address/0x2a20c66948373c7F619b32737c0bFa1dDa94E6E4) |
| 0x2105 | Base | [`0x2C923114fC052D93BDda932DAe1a49668C17b0F0`](https://basescan.org/address/0x2C923114fC052D93BDda932DAe1a49668C17b0F0) |
| 0x38 | BNB | [`0x9a8D6BB3c45E100c8456a8295C8b90b993bE20D4`](https://bscscan.com/address/0x9a8D6BB3c45E100c8456a8295C8b90b993bE20D4) |
| 43114 | Avalanche | [`0xCbCB78054731a6FCCa53920959033810Ff0A7D1d`](https://snowtrace.io/address/0xCbCB78054731a6FCCa53920959033810Ff0A7D1d) |
| 0xfa | Fantom | [`0xD07b8Ddbb60aA59648F8697A2faCbDa4C8ed4994`](https://ftmscan.com/address/0xD07b8Ddbb60aA59648F8697A2faCbDa4C8ed4994) |
| 0x0a | Optimistic | [`0xEF0Bb05F544b8540E538B958257C466dcB7347D0`](https://optimistic.etherscan.io/address/0xEF0Bb05F544b8540E538B958257C466dcB7347D0) |
| 0x4e454152 | Aurora | `0x48cF154a086bAB5492A8D150f4d87a74eCf90743` |
| 0x05 | Goerli Testnet | [`0x1a7f041dDC8919D26dB38E186E00e6E36dCCA0E6`](https://goerli.etherscan.io/address/0x1a7f041dDC8919D26dB38E186E00e6E36dCCA0E6) |
| 0x61 | BNB Testnet | [`0x73E068e9c7ffc91F463ca5464E77E6826D84E3A5`](https://testnet.bscscan.com/address/0x73E068e9c7ffc91F463ca5464E77E6826D84E3A5) |

# Overriding contract address

Need to use your own deployment? Specify the contract address in the `ERC20_LOOKUP_CONTRACT_ADDRESS` env variable or supply it as a third argument to `lookup`:

```javascript
await lookup(provider, [ usdt ], '0x....');
```

# Ethers support

We support both v5 and v6, but none is listed in this module's dependencies. You'll have to install ethers manually to run tests:

```bash
npm install --no-save ethers
```

# Tests

## Node module tests

```bash
npm install --no-save ethers
npm run test
```

## Solidity tests

```bash
npm install
hardhat test
```
