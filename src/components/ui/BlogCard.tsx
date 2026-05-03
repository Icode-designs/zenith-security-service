import { StyledBlogCard } from "@/styles/components/Blog.styles";
import { StyledLink } from "@/styles/components/Ui.styles";
import trimTextLength from "@/utils/helpers/trimText";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { BlogPost } from "@/lib/supabase/blog-posts";

interface Props {
  post: BlogPost;
}

const BlogCard = ({ post }: Props) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <StyledBlogCard>
      {post.coverImageUrl ? (
        <Image
          width={400}
          height={400}
          src={post.coverImageUrl}
          alt={post.title}
        />
      ) : (
        <div className="empty-image">
          <MdOutlineImageNotSupported size={48} />
        </div>
      )}
      <article>
        <div className="meta">
          <span>{post.author}</span>
          <span>{formattedDate}</span>
        </div>
        <h3>{post.title}</h3>
        <p className="excerpt">{trimTextLength(post.excerpt)}</p>
      </article>
      <StyledLink href={`/blog/${post.id}`} $variant="tertiary">
        <p>read more</p>
        <FaArrowRightLong />
      </StyledLink>
    </StyledBlogCard>
  );
};

export default BlogCard;
