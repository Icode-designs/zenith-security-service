import React from "react";
import { notFound } from "next/navigation";
import {
  getPublishedBlogPosts,
} from "@/lib/supabase/blog-posts";
import { StyledMainWrapper, FlexBox } from "@/styles/components/Ui.styles";
import { StyledBlogDetailContent } from "@/styles/components/Blog.styles";
import BlogDetailHero from "@/components/BlogDetailHero";
import SectionSwitcher from "@/components/SectionWrapper";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Image from "next/image";
import { getServices } from "@/lib/supabase/services";
import ContactForm from "@/components/ContactForm";
import { slugify } from "@/utils/helpers/slugify";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  try {
    const posts = await getPublishedBlogPosts();
    return posts.map((post) => ({
      slug: slugify(post.title),
    }));
  } catch {
    return [];
  }
}

const services = await getServices();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const allPosts = await getPublishedBlogPosts();
  const post = allPosts.find((p) => slugify(p.title) === resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Zenith Protective Services Blog`,
    description: post.excerpt,
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const resolvedParams = await params;
  const allPosts = await getPublishedBlogPosts();
  const post = allPosts.find((p) => slugify(p.title) === resolvedParams.slug);

  if (!post) {
    notFound();
  }

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
      <RelatedBlogPosts posts={allPosts} currentPostId={post.id} />
    </StyledMainWrapper>
  );
};

export default BlogDetailsPage;
