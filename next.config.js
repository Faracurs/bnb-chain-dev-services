/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com', 'assets.coingecko.com'],
    unoptimized: true,
  },
  // For Netlify deployment
  target: 'serverless',
};

module.exports = nextConfig;