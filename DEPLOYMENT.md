# Deployment Guide for BNB Chain Developer Services Website

This guide will walk you through the process of deploying the BNB Chain Developer Services website to production.

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- A WalletConnect Project ID (for wallet connections)
- A private key for deploying smart contracts to BNB Chain
- A hosting service for the Next.js application (Vercel, Netlify, etc.)

## Step 1: Smart Contract Deployment

Before deploying the website, you need to deploy the NFT smart contract to BNB Chain.

### Setting Up the Development Environment

1. Install Hardhat and dependencies:
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @openzeppelin/contracts dotenv
```

2. Create a `.env` file in the project root with your private key and BNB Chain RPC URLs:
```
PRIVATE_KEY=your_private_key_here
BSC_TESTNET_URL=https://data-seed-prebsc-1-s1.binance.org:8545/
BSC_MAINNET_URL=https://bsc-dataseed.binance.org/
BSCSCAN_API_KEY=your_bscscan_api_key
```

3. Initialize Hardhat:
```bash
npx hardhat init
```

4. Configure Hardhat for BNB Chain in `hardhat.config.js` as shown in the `contracts/README.md` file.

### Deploying the NFT Contract

1. Deploy to BNB Chain Testnet first for testing:
```bash
npx hardhat run scripts/deploy.js --network bscTestnet
```

2. Note the deployed contract address and verify the contract on BSCScan:
```bash
npx hardhat verify --network bscTestnet DEPLOYED_CONTRACT_ADDRESS "https://your-metadata-server.com/api/"
```

3. Once tested, deploy to BNB Chain Mainnet:
```bash
npx hardhat run scripts/deploy.js --network bsc
```

4. Verify the mainnet contract:
```bash
npx hardhat verify --network bsc DEPLOYED_CONTRACT_ADDRESS "https://your-metadata-server.com/api/"
```

## Step 2: Update Contract Addresses in the Frontend

1. Update the NFT contract address in `src/app/components/NFTMinter.tsx`:
```typescript
// Replace with your actual deployed contract address
const nftAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
```

2. Update the token address in `src/app/components/Web3Integration.tsx` if needed:
```typescript
// BUSD token on BNB Chain (BSC)
const tokenAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
```

## Step 3: Set Up Environment Variables

1. Create a `.env.local` file with your API keys:
```
# Blockchain API Keys
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id

# Other API Keys
NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_api_key
```

2. For production deployment, add these environment variables to your hosting platform (Vercel, Netlify, etc.).

## Step 4: Build and Deploy the Next.js Application

### Local Build Test

1. Build the application locally:
```bash
npm run build
```

2. Test the production build:
```bash
npm run start
```

### Deployment to Vercel (Recommended)

1. Install the Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. For production deployment:
```bash
vercel --prod
```

### Deployment to Netlify

1. Install the Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the application:
```bash
npm run build
```

3. Deploy to Netlify:
```bash
netlify deploy
```

4. For production deployment:
```bash
netlify deploy --prod
```

## Step 5: Post-Deployment Verification

After deploying, verify the following:

1. The website loads correctly
2. Wallet connections work properly
3. NFT minting functionality works
4. Token transfers work correctly
5. Contact form submissions are processed

## Troubleshooting

### Wallet Connection Issues

- Ensure your WalletConnect Project ID is correct
- Check that the allowed domains in WalletConnect Cloud include your production domain

### Smart Contract Interaction Issues

- Verify that the contract addresses are correct
- Ensure the contract ABIs match the deployed contracts
- Check that the correct chain is selected in the user's wallet

### API Issues

- Verify that all environment variables are set correctly
- Check server logs for any API errors

## Maintenance

Regular maintenance tasks include:

1. Updating dependencies
2. Monitoring smart contract interactions
3. Backing up any stored data
4. Monitoring API usage and limits