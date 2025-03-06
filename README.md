# BNB Chain Developer Services Website

This is a modern, responsive website for a blockchain development agency specializing in BNB Chain development. Built with Next.js, Tailwind CSS, and Web3 integration, the site showcases BNB Chain development services, displays token prices, allows users to interact with smart contracts, mint NFTs, and contact the team.

## Features

- **Modern UI/UX**: Built with Next.js and Tailwind CSS for a responsive, modern design
- **Web3 Integration**: Connect wallets using RainbowKit and wagmi
- **BNB Chain Focus**: All smart contract interactions are on BNB Chain (BSC)
- **Token Display**: View cryptocurrency prices (using mock data for development)
- **Smart Contract Interaction**: Transfer BEP-20 tokens using Web3 integration
- **NFT Minting**: Mint sample NFTs on BNB Chain
- **Contact Form**: Reach out to the team for BNB Chain development services

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Faracurs/bnb-chain-dev-services.git
cd bnb-chain-dev-services
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following variables (optional for development):
```
# Blockchain API Keys
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id

# Other API Keys
NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_api_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Notes

- The application uses mock data for token prices during development
- Smart contract interactions are configured to work with BNB Chain and its testnet
- For production, you'll need to obtain actual API keys for WalletConnect and CoinGecko

## BNB Chain Resources

- [BNB Chain Official Website](https://www.bnbchain.org)
- [BNB Chain Documentation](https://docs.bnbchain.org)
- [BSCScan](https://bscscan.com) - BNB Chain Explorer
- [PancakeSwap](https://pancakeswap.finance) - Leading DEX on BNB Chain
- [Binance Academy](https://academy.binance.com) - Educational resources

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion
- **Web3**: wagmi, ethers.js, RainbowKit
- **Form Handling**: React Hook Form, Zod
- **Styling**: Tailwind CSS, CSS Modules

## License

MIT