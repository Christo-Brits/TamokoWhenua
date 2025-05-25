/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'tamoko-whenua.vercel.app',
      'tamokowhenua.nz',
      'images.unsplash.com',
      'www.sitesafe.org.nz',
      'amotai.nz',
      'www.fndc.govt.nz',
      'ngapuhi.iwi.nz',
      'www.civilcontractors.co.nz',
      'www.northtec.ac.nz'
    ],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Disable image optimization in development
  },
  // Enable static exports for static site generation
  // output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Change the output directory
  distDir: 'out',
};

// Conditionally enable image optimization in development
if (process.env.NODE_ENV === 'development') {
  nextConfig.images.unoptimized = false;
}

module.exports = nextConfig;
