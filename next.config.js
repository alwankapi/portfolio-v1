/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Tree-shakes the icon barrel files so only the icons actually used end up
  // in the client bundle instead of the whole library.
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion"],
  },
};

module.exports = nextConfig;
