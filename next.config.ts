import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kept for Next.js compatibility. Vinext currently requires the
  // `unoptimized` prop on each Image to avoid its /_vinext/image endpoint.
  images: {
    unoptimized: true,
  },
  output: "standalone",
};

export default nextConfig;
