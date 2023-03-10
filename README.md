# ERC20Lookup

Lookup multiple ERC20 token's metadata and store it in `contract.erc20` hash.

```javascript
import { lookup } from 'erc20lookup';
import { ethers } from 'ethers'; // ethers v6

const provider = new ethers.JsonRpcProvider('https://cloudflare-eth.com/v1/mainnet');
const usdt = new ethers.Contract('0xdAC17F958D2ee523a2206206994597C13D831ec7', ERC20_ABI, provider);
await lookup(provider, [ usdt ]);

console.log(usdt.erc20.symbol);
console.log(usdt.erc20.name);
console.log(usdt.erc20.decimals);
```

# Usage

See `test/erc20lookupTest.mjs`

# Deployments

Deployment addresses are hardcoded inside `index.mjs`.
