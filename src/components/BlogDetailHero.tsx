"use client";

import { StyledBlogDetailHero } from "@/styles/components/Blog.styles";
import { BlogPost } from "@/lib/supabase/blog-posts";
import Image from "next/image";
import React from "react";
import { MdOutlineImageNotSupported, MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";

interface PROPS {
  post: BlogPost;
}

const BlogDetailHero = ({ post }: PROPS) => {
  const router = useRouter();
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleBack = () => {
    router.back();
  };

  return (
    <StyledBlogDetailHero>
      <div className="back-button-wrapper">
        <button className="back-button" onClick={handleBack}>
          <MdArrowBack size={18} />
          Back to Blog
        </button>
      </div>
      <article>
        <h1>{post.title}</h1>
        <div className="meta">
          <span>{post.author}</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
      </article>
      {post.coverImageUrl ? (
        <Image
          src={post.coverImageUrl}
          width={1000}
          height={600}
          alt={post.title}
          priority
        />
      ) : (
        <div className="empty-image">
          <MdOutlineImageNotSupported size={64} />
        </div>
      )}
    </StyledBlogDetailHero>
  );
};

export default BlogDetailHero;
