import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Configure external packages for server components
  serverExternalPackages: [],
  // Configure turbopack root to avoid lockfile warnings
  turbopack: {
    root: "C:\\Users\\yeshu\\Documents\\Codes\\WEB DEVELOPMENT\\yeshwanth\\portfolio",
  },
};

export default nextConfig;
