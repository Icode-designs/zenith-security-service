import { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/lib/supabase/blog-posts";
import { getServices } from "@/lib/supabase/services";
import { slugify } from "@/utils/helpers/slugify";
import { LOCATIONS } from "@/utils/locations";

export const revalidate = 3600; // rebuild hourly so new posts/services appear

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.zenithprotectiveservice.site";
  const currentDate = new Date();

  // Only routes that actually exist in src/app
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Location landing pages: /security-guard-service-<city>-ca
  const locationUrls: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${baseUrl}/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Service detail pages: /services/[serviceId]
  let serviceUrls: MetadataRoute.Sitemap = [];
  try {
    const services = await getServices();
    serviceUrls = services.map((service) => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));
  } catch (error) {
    console.error("Error fetching services for sitemap:", error);
  }

  // Blog posts: /blog/[slug]
  let blogUrls: MetadataRoute.Sitemap = [];
  try {
    const blogPosts = await getPublishedBlogPosts();
    blogUrls = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${slugify(post.title)}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  return [...staticRoutes, ...locationUrls, ...serviceUrls, ...blogUrls];
}
