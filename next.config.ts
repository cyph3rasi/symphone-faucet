import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Disable optimization to prevent component caching
    optimizeCss: false
  }
};

export default nextConfig;