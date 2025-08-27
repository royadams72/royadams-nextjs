import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      // /games/black-jack  -> /games/black-jack/index.html
      { source: "/games/:slug", destination: "/games/:slug/index.html" },
    ];
  },
};
export default nextConfig;
