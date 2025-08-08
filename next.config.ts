import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
export default nextConfig;
