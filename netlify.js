// This file is used by Netlify to configure the build process
// It's a simple script that exports the Next.js configuration

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com', 'assets.coingecko.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;