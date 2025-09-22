/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensures all pages end with a slash in static export (e.g., /shop/ instead of /shop)
  trailingSlash: true,

  // Explicitly tell Next.js which pages to export for Amplify hosting
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/shop': { page: '/shop' }
    };
  }
};

module.exports = nextConfig;
