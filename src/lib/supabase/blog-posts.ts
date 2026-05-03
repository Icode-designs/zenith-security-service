import { getSupabase } from "./client";

export type BlogPost = {
  id: string;
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

/** Maps a raw Supabase row → app type */
function mapRow(row: any): BlogPost {
  return {
    id: row.id,
    title: row.title,
    author: row.author,
    excerpt: row.excerpt,
    content: row.content,
    tags: row.tags ?? [],
    status: row.status,
    coverImageUrl: row.cover_image_url,
    sectionImages: row.section_images ?? [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

/** Fetch all published blog posts ordered newest first */
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Failed to fetch blog posts: ${error.message}`);
  return (data ?? []).map(mapRow);
}

/** Fetch a single published blog post by id */
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .eq("status", "published")
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // Not found
    throw new Error(`Failed to fetch blog post: ${error.message}`);
  }

  if (!data) return null;
  return mapRow(data);
}
