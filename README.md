# ERC20Lookup

Lookup multiple ERC20 token's metadata.

```javascript
import { lookup } from 'ERC20Lookup';
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('https://cloudflare-eth.com/v1/mainnet');
const usdt = new ethers.Contract('0xdAC17F958D2ee523a2206206994597C13D831ec7', ERC20_ABI, provider);
await lookup(provider, [ usdt ]);

console.log(usdt.erc20.symbol);
console.log(usdt.erc20.name);
console.log(usdt.erc20.decimals);
```

# Usage

See `test/ERC20LookupTest.js`

# Deployments

Deployment addresses are listed inside `ERC20Lookup.mjs`.
