import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
      {
        userAgent: "GPTBot", // OpenAI crawler
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "CCBot", // Common Crawl
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai", // Claude
        disallow: "/",
      },
      {
        userAgent: "Google-Extended", // Google AI training
        disallow: "/",
      },
    ],
    sitemap: "https://zenith-security-service.vercel.app/sitemap.xml",
  };
}
