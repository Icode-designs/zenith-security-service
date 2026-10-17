import { cache } from "react";
import { getSupabase } from "./client";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
  status: "published" | "draft";
  coverImageUrl: string | null;
  sectionImages: string[];
  createdAt: string;
  updatedAt: string;
};

// Columns for lists and cards (everything except the full article body)
const SUMMARY_COLUMNS =
  "id, slug, title, author, excerpt, tags, status, cover_image_url, created_at, updated_at";

/** Maps a raw Supabase row to the app type */
function mapRow(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    author: row.author,
    excerpt: row.excerpt ?? "",
    content: row.content ?? "",
    tags: row.tags ?? [],
    status: row.status,
    coverImageUrl: row.cover_image_url,
    sectionImages: row.section_images ?? [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

/** All published posts, newest first (summaries only, no article body) */
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(SUMMARY_COLUMNS)
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Failed to fetch blog posts: ${error.message}`);
  return (data ?? []).map(mapRow);
}

/** Slugs of all published posts (for static generation) */
export async function getPublishedBlogSlugs(): Promise<string[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("status", "published");

  if (error) throw new Error(`Failed to fetch blog slugs: ${error.message}`);
  return (data ?? []).map((row: { slug: string }) => row.slug);
}

/**
 * One published post by its slug. Cached per render, so generateMetadata and
 * the page share a single query.
 */
export const getBlogPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error) throw new Error(`Failed to fetch blog post: ${error.message}`);
    return data ? mapRow(data) : null;
  },
);

/** The latest published posts other than the current one */
export async function getRelatedBlogPosts(
  excludeId: string,
  limit = 4,
): Promise<BlogPost[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(SUMMARY_COLUMNS)
    .eq("status", "published")
    .neq("id", excludeId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw new Error(`Failed to fetch related posts: ${error.message}`);
  return (data ?? []).map(mapRow);
}
