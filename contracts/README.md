# BNB Chain NFT Contract

This directory contains a simple ERC721 NFT contract for deployment on BNB Chain.

## Contract Details

- Name: BNB Chain NFT Collection
- Symbol: BNBNFT
- Features:
  - Minting with payment
  - Customizable mint price
  - Maximum supply limit
  - Metadata URI storage
  - Owner withdrawal function

## Deployment Instructions

### Prerequisites

1. Install Hardhat:
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

2. Install OpenZeppelin contracts:
```bash
npm install @openzeppelin/contracts
```

3. Create a `.env` file in the project root with your private key and BNB Chain RPC URLs:
```
PRIVATE_KEY=your_private_key_here
BSC_TESTNET_URL=https://data-seed-prebsc-1-s1.binance.org:8545/
BSC_MAINNET_URL=https://bsc-dataseed.binance.org/
```

### Deployment Steps

1. Initialize Hardhat:
```bash
npx hardhat init
```

2. Configure Hardhat for BNB Chain in `hardhat.config.js`:
```javascript
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    bscTestnet: {
      url: process.env.BSC_TESTNET_URL || "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    bsc: {
      url: process.env.BSC_MAINNET_URL || "https://bsc-dataseed.binance.org/",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY
  }
};
```

3. Create a deployment script in `scripts/deploy.js`:
```javascript
const hre = require("hardhat");

async function main() {
  // Base URI for NFT metadata
  const baseURI = "https://your-metadata-server.com/api/";
  
  // Deploy the contract
  const BNBChainNFT = await hre.ethers.getContractFactory("BNBChainNFT");
  const nft = await BNBChainNFT.deploy(baseURI);

  await nft.deployed();

  console.log("BNBChainNFT deployed to:", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

4. Deploy to BNB Chain Testnet:
```bash
npx hardhat run scripts/deploy.js --network bscTestnet
```

5. Verify the contract on BSCScan:
```bash
npx hardhat verify --network bscTestnet DEPLOYED_CONTRACT_ADDRESS "https://your-metadata-server.com/api/"
```

## Integration with the Frontend

After deployment, update the NFT contract address in `src/app/components/NFTMinter.tsx` with your deployed contract address.