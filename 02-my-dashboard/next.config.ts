import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        search: '',
      }
    ]
  }
}

export default nextConfig;
