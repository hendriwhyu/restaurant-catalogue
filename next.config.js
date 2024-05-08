/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'restaurant-api.dicoding.dev',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
