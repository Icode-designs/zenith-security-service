import type { Metadata } from "next";

export const SITE_URL = "https://www.zenithprotectiveservice.site";
export const SITE_NAME = "Zenith Protective Services";

// Served from src/app/opengraph-image.png (1200x630)
const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Zenith Protective Services, licensed 24/7 security guards in Hawthorne, California",
};

interface OpenGraphInput {
  path: string; // e.g. "/about" or "/blog/my-post"
  title: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Per-page Open Graph tags. Next.js replaces (not merges) a parent's openGraph
 * object, so every page sets its own url/title/description here; otherwise it
 * would inherit the homepage values. Setting openGraph on a page also stops
 * Next.js applying src/app/opengraph-image.png, so the image is added here.
 */
export function pageOpenGraph({
  path,
  title,
  description,
  type = "website",
  publishedTime,
  modifiedTime,
}: OpenGraphInput): NonNullable<Metadata["openGraph"]> {
  const base = {
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    title,
    description,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [DEFAULT_OG_IMAGE],
  };

  return type === "article"
    ? { ...base, type: "article", publishedTime, modifiedTime }
    : { ...base, type: "website" };
}
