# BNB Chain Development Services

A modern web application showcasing blockchain development services on BNB Chain.

## Features

- Modern, responsive UI built with Next.js and Tailwind CSS
- Web3 integration with wallet connection capabilities
- Token price display and NFT minting functionality
- Contact form for service inquiries
- Optimized for performance and SEO

## Technologies Used

- **Frontend**: Next.js 15, React, Tailwind CSS
- **Blockchain**: Ethers.js, wagmi, WalletConnect
- **Deployment**: Netlify

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file with required environment variables
4. Run the development server:
   ```
   npm run dev
   ```

## Deployment

This project is deployed on Netlify. The site is automatically deployed when changes are pushed to the main branch.

Current deployment: [lucent-centaur-532c4c.netlify.app](https://lucent-centaur-532c4c.netlify.app)

## License

MIT

## Updates

- Completely removed Pages Router in favor of App Router only (March 6, 2025)
- Fixed React version compatibility issues (March 6, 2025)
- Updated Netlify configuration for optimal deployment (March 6, 2025)
- Moved pino-pretty to dependencies to fix WalletConnect warnings (March 6, 2025)