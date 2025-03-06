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
  // Use App Router exclusively
  experimental: {
    appDir: true,
  },
  // Disable Pages Router completely
  useFileSystemPublicRoutes: false,
};

module.exports = nextConfig;