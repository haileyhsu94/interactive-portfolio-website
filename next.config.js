/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production build; dev server needs default mode to serve root and dynamic routes
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  assetPrefix: '/',
}

module.exports = nextConfig 