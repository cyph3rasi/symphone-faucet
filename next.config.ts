import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // This ensures components are not cached inappropriately
    optimizeCss: false,
    optimizeServerComponents: false
  }
};

export default nextConfig;