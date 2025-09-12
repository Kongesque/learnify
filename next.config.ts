import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { 
    remotePatterns: [
      { hostname: 'img.clerk.com' }, // Clerk profile images
    ]
  }
  
};

export default nextConfig;
