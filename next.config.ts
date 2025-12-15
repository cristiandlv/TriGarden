import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixes ambiguous workspace root detection for Turbopack in some CI/deploy environments
  turbopack: {
    root: './',
  },
};

export default nextConfig;
