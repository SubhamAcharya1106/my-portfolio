import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
