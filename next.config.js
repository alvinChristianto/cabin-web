/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        port: '',
        pathname: '/photo-1566073771259-6a8506099945/**',
      },
    ],
  },
}

module.exports = nextConfig
