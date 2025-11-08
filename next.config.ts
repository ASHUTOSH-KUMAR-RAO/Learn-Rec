import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // todo Basically Isese kya hota hai n let suppose maine deploye kiya apne project ko thik hai aur uske baaad bahut typescript mein error or warning aate hai to usko ye ignore kr deta hai
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "learn-rec.b-cdn.net",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
