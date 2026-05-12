import React from "react";
import { notFound } from "next/navigation";
import {
  getBlogPostById,
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

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  try {
    const posts = await getPublishedBlogPosts();
    return posts.map((post) => ({
      id: post.id,
    }));
  } catch {
    return [];
  }
}

const services = await getServices();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const post = await getBlogPostById(resolvedParams.id);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Zenith Protective Services Blog`,
    description: post.excerpt,
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const resolvedParams = await params;
  const post = await getBlogPostById(resolvedParams.id);

  if (!post) {
    notFound();
  }

  // Fetch all blog posts for related posts section
  const allPosts = await getPublishedBlogPosts();

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

      {/* Contact Form Section */}
      <ContactForm services={services} />

      {/* Related Blog Posts Section */}
      <RelatedBlogPosts posts={allPosts} currentPostId={post.id} />
    </StyledMainWrapper>
  );
};

export default BlogDetailsPage;
