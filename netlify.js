// This file is used by Netlify to configure the build process
// It's a simple script that exports the Next.js configuration

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'assets.coingecko.com'],
    unoptimized: true,
  },
  // Ensure output is configured for Netlify
  output: 'standalone',
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;