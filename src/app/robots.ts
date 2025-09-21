import type { MetadataRoute } from "next";

// Cloudflare Pages対応設定
export const runtime = "edge";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/ramens?*",
      },
    ],
    sitemap: "https://t4ichi.dev/sitemap.xml",
  };
}
