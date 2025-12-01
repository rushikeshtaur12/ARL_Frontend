import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
