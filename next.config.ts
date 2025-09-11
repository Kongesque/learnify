import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { 
    remotePatterns: [
      { hostname: 'images.clerk.com' }, // Clerk profile images
    ]
  }
  
};

export default nextConfig;
