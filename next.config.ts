/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
    unoptimized: true,
  },
  eslint: {
    // Ne bloque PAS le build en cas d'erreurs eslint
    ignoreDuringBuilds: true,
  },
  // Ensure static assets are properly served
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Force static asset optimization
  staticPageGenerationTimeout: 120,
  // Ensure public directory is properly handled
  trailingSlash: false,
  // Optimize for production builds
  swcMinify: true,
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig;
