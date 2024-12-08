/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ahalaffiyxmywkxeffzc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/stuff/**',
      },
    ],
  },
}

module.exports = nextConfig
