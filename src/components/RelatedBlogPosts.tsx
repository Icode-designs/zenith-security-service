"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/supabase/blog-posts";
import {
  StyledRelatedPostsContainer,
  StyledRelatedPostsWrapper,
  StyledRelatedPostItem,
} from "@/styles/components/Blog.styles";
import trimTextLength from "@/utils/helpers/trimText";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineImageNotSupported } from "react-icons/md";

interface Props {
  posts: BlogPost[];
  currentPostId: string;
}

const RelatedBlogPosts = ({ posts, currentPostId }: Props) => {
  // Filter out the current post and limit to 4 related posts
  const relatedPosts = posts
    .filter((post) => post.id !== currentPostId)
    .slice(0, 4);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <StyledRelatedPostsContainer>
      <h2>More Topics</h2>
      <StyledRelatedPostsWrapper>
        {relatedPosts.map((post) => {
          const formattedDate = new Date(post.createdAt).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            },
          );

          return (
            <StyledRelatedPostItem key={post.id}>
              <Link href={`/blog/${post.id}`}>
                {post.coverImageUrl ? (
                  <Image
                    width={300}
                    height={200}
                    src={post.coverImageUrl}
                    alt={post.title}
                  />
                ) : (
                  <div className="empty-image">
                    <MdOutlineImageNotSupported size={32} />
                  </div>
                )}
              </Link>

              <div className="content">
                <div className="meta">
                  <span>{post.author}</span>
                  <span>{formattedDate}</span>
                </div>
                <h3>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="excerpt">{trimTextLength(post.excerpt)}</p>
                <Link href={`/blog/${post.id}`} className="read-more">
                  <span>read more</span>
                  <FaArrowRightLong size={14} />
                </Link>
              </div>
            </StyledRelatedPostItem>
          );
        })}
      </StyledRelatedPostsWrapper>
    </StyledRelatedPostsContainer>
  );
};

export default RelatedBlogPosts;
