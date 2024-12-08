import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    // Disable static optimization for dynamic content
    styledComponents: true
  },
  webpack: (config) => {
    // Force React refresh for all components
    config.cache = false;
    return config;
  }
};

export default nextConfig;