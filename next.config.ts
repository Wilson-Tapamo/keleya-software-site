import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // o2switch does not provide vinext's runtime image optimization endpoint.
  // Keep local assets as direct URLs instead of generating /_vinext/image URLs.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
