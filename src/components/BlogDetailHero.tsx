import { StyledBlogDetailHero } from "@/styles/components/Blog.styles";
import { BlogPost } from "@/lib/supabase/blog-posts";
import Image from "next/image";
import React from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";

interface PROPS {
  post: BlogPost;
}

const BlogDetailHero = ({ post }: PROPS) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <StyledBlogDetailHero>
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
