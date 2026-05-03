import BlogCard from "@/components/ui/BlogCard";
import BlogHeroContent from "@/components/BlogHeroContent";
import Hero from "@/components/Hero";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { StyledBlogGrid, StyledEmptyState } from "@/styles/components/Blog.styles";
import { getPublishedBlogPosts } from "@/lib/supabase/blog-posts";
import { MdOutlineArticle } from "react-icons/md";
import React from "react";

export const metadata = {
  title: "Blog | Zenith Protective Services",
  description:
    "Stay up to date with the latest security trends, company updates, and expert advice from the team at Zenith Protective Services.",
};

export const revalidate = 60; // Revalidate every 60 seconds

const BlogPage = async () => {
  const posts = await getPublishedBlogPosts();

  return (
    <StyledMainWrapper>
      <Hero>
        <BlogHeroContent />
      </Hero>
      
      {posts && posts.length > 0 ? (
        <StyledBlogGrid>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </StyledBlogGrid>
      ) : (
        <StyledEmptyState>
          <MdOutlineArticle size={80} />
          <h2>No posts available right now</h2>
          <p>Please check back later for the latest news and insights.</p>
        </StyledEmptyState>
      )}
    </StyledMainWrapper>
  );
};

export default BlogPage;
