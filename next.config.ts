import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Cloudflare Pages対応 (next-on-pages)
  // output: 'standalone', // next-on-pagesが自動設定

  // Cloudflare Pages用の設定
  serverExternalPackages: ["async_hooks"],

  webpack(config) {
    // パスエイリアスを追加
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/icons": path.resolve(process.cwd(), "public/icons"),
    };
    // Grab the existing rule that handles SVG imports
    // @ts-expect-error
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
