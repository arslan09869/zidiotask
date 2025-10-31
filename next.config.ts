import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optional: Keep strict mode enabled
  reactStrictMode: true,
};

export default nextConfig;
