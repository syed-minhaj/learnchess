import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";

const withSerwist = withSerwistInit({
  swSrc: "sw.ts",
  swDest: "public/sw.js",
  reloadOnOnline: true,
  cacheOnNavigation: true,
});

const nextConfig: NextConfig = {
  turbopack: {},
};

export default withSerwist(nextConfig);
