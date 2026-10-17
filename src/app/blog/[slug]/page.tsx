import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogPostBySlug,
  getPublishedBlogSlugs,
  getRelatedBlogPosts,
} from "@/lib/supabase/blog-posts";
import { StyledMainWrapper, FlexBox } from "@/styles/components/Ui.styles";
import { StyledBlogDetailContent } from "@/styles/components/Blog.styles";
import BlogDetailHero from "@/components/BlogDetailHero";
import SectionSwitcher from "@/components/SectionWrapper";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Image from "next/image";
import { pageOpenGraph } from "@/utils/seo";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  try {
    const slugs = await getPublishedBlogSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: pageOpenGraph({
      path: `/blog/${post.slug}`,
      title: `${post.title} | Zenith Protective Services`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
    }),
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related posts are a nice-to-have: never let them break the article
  const relatedPosts = await getRelatedBlogPosts(post.id).catch(() => []);

  return (
    <StyledMainWrapper>
      <BlogDetailHero post={post} />

      <SectionSwitcher>
        <StyledBlogDetailContent>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Render extra section images if they exist */}
          {post.sectionImages && post.sectionImages.length > 0 && (
            <FlexBox
              $gap={20}
              style={{
                flexDirection: "column",
                width: "100%",
                marginTop: "40px",
              }}
            >
              {post.sectionImages.map((imgUrl, index) => (
                <Image
                  key={index}
                  src={imgUrl}
                  width={800}
                  height={500}
                  alt={`${post.title} section image ${index + 1}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
              ))}
            </FlexBox>
          )}
        </StyledBlogDetailContent>
      </SectionSwitcher>
      {/* Related Blog Posts Section */}
      <RelatedBlogPosts posts={relatedPosts} currentPostId={post.id} />
    </StyledMainWrapper>
  );
};

export default BlogDetailsPage;
