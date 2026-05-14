"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled from "styled-components";

export const StyledBlogHeroContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxTorem(67)};
  padding: 0 ${pxTorem(20)};

  article {
    color: var(--col-100);
    text-align: center;
    display: grid;
    gap: ${pxTorem(16)};
    justify-items: center;
    align-content: start;
    max-width: ${pxTorem(800)};
    margin: 0 auto;
  }
`;

export const StyledBlogGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${pxTorem(300)}, 1fr));
  gap: ${pxTorem(24)};
  padding: ${pxTorem(40)} ${pxTorem(20)};
  max-width: ${pxTorem(1200)};
  margin: 0 auto;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledBlogCard = styled.li`
  padding: ${pxTorem(16)};
  border-radius: ${pxTorem(12)};
  border: none;
  background-color: var(--col-100);
  transition: all ease 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${pxTorem(6)} ${pxTorem(12)} ${pxTorem(10)} rgba(0, 0, 0, 0.1);
  }

  img,
  .empty-image {
    width: 100%;
    height: ${pxTorem(235)};
    border-radius: ${pxTorem(12)};
    margin-bottom: ${pxTorem(16)};
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  .empty-image {
    background-color: var(--col-300);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--col-500);
  }

  article {
    display: grid;
    gap: ${pxTorem(12)};
    align-content: start;
    margin-bottom: ${pxTorem(24)};

    h3 {
      font-size: ${pxTorem(20)};
      line-height: 1.3;
    }

    p.excerpt {
      color: var(--col-700);
      font-size: ${pxTorem(14)};
    }

    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: ${pxTorem(12)};
      color: var(--col-400);
      font-weight: 500;
      margin-bottom: ${pxTorem(8)};
    }
  }

  a {
    margin-top: auto;
  }
`;

export const StyledBlogDetailHero = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  align-content: start;
  gap: ${pxTorem(40)};
  padding: ${pxTorem(20)} ${pxTorem(20)} ${pxTorem(40)} ${pxTorem(20)};
  width: 100%;
  max-width: 100%;

  .back-button-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: ${pxTorem(20)};
    padding: 0 ${pxTorem(10)};
  }

  .back-button {
    display: flex;
    align-items: center;
    gap: ${pxTorem(8)};
    padding: ${pxTorem(10)} ${pxTorem(16)};
    background-color: transparent;
    border: 1px solid var(--col-300);
    border-radius: ${pxTorem(8)};
    color: var(--col-600);
    font-size: ${pxTorem(14)};
    font-weight: 500;
    cursor: pointer;
    transition: all ease 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;

    &:hover {
      background-color: var(--col-100);
      border-color: var(--col-500);
      color: var(--col-000);
      gap: ${pxTorem(12)};
    }

    svg {
      transition: transform ease 0.3s;
      min-width: 18px;
      min-height: 18px;
    }

    &:hover svg {
      transform: translateX(${pxTorem(-4)});
    }

    @media (max-width: 480px) {
      padding: ${pxTorem(8)} ${pxTorem(12)};
      font-size: ${pxTorem(12)};
      gap: ${pxTorem(6)};

      svg {
        min-width: 16px;
        min-height: 16px;
      }
    }
  }

  article {
    color: var(--col-000);
    display: grid;
    text-align: center;
    gap: ${pxTorem(16)};
    max-width: ${pxTorem(986)};
    width: 100%;

    h1 {
      font-size: ${pxTorem(42)};
      line-height: 1.2;
      margin: 0;
      word-break: break-word;

      @media (max-width: 768px) {
        font-size: ${pxTorem(32)};
      }

      @media (max-width: 480px) {
        font-size: ${pxTorem(24)};
      }
    }

    .meta {
      display: flex;
      justify-content: center;
      gap: ${pxTorem(16)};
      font-size: ${pxTorem(14)};
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 1px;
      flex-wrap: wrap;
      margin: 0;

      @media (max-width: 480px) {
        font-size: ${pxTorem(12)};
        gap: ${pxTorem(8)};
        letter-spacing: 0.5px;
      }
    }
  }

  img,
  .empty-image {
    width: 100%;
    max-width: ${pxTorem(900)};
    height: auto;
    min-height: ${pxTorem(300)};
    max-height: ${pxTorem(600)};
    border-radius: ${pxTorem(12)};
    object-fit: cover;
    object-position: center;

    @media (max-width: 768px) {
      min-height: ${pxTorem(250)};
      max-height: ${pxTorem(400)};
    }

    @media (max-width: 480px) {
      min-height: ${pxTorem(200)};
      max-height: ${pxTorem(300)};
      border-radius: ${pxTorem(8)};
    }
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  .empty-image {
    background-color: var(--col-300);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--col-500);

    svg {
      width: 64px;
      height: 64px;
    }

    @media (max-width: 480px) {
      svg {
        width: 48px;
        height: 48px;
      }
    }
  }

  @media (max-width: 768px) {
    gap: ${pxTorem(32)};
    padding: ${pxTorem(16)} ${pxTorem(16)} ${pxTorem(32)} ${pxTorem(16)};

    .back-button-wrapper {
      padding: 0 ${pxTorem(6)};
    }
  }

  @media (max-width: 480px) {
    gap: ${pxTorem(24)};
    padding: ${pxTorem(12)} ${pxTorem(12)} ${pxTorem(24)} ${pxTorem(12)};

    .back-button-wrapper {
      margin-bottom: ${pxTorem(16)};
      padding: 0;
    }
  }
`;

export const StyledBlogDetailContent = styled.div`
  max-width: ${pxTorem(800)};
  margin: 0 auto;
  margin-bottom: ${pxTorem(80)};
  padding: ${pxTorem(0)} ${pxTorem(20)};
  display: grid;
  gap: ${pxTorem(24)};
  color: var(--col-700);
  line-height: 1.8;
  font-size: ${pxTorem(16)};
  width: 100%;

  h2 {
    color: var(--col-000);
    margin-top: ${pxTorem(32)};
    margin-bottom: ${pxTorem(16)};
    font-size: ${pxTorem(28)};

    @media (max-width: 768px) {
      font-size: ${pxTorem(24)};
      margin-top: ${pxTorem(24)};
      margin-bottom: ${pxTorem(12)};
    }

    @media (max-width: 480px) {
      font-size: ${pxTorem(20)};
      margin-top: ${pxTorem(20)};
      margin-bottom: ${pxTorem(10)};
    }
  }

  h3 {
    color: var(--col-000);
    margin-top: ${pxTorem(24)};
    margin-bottom: ${pxTorem(12)};
    font-size: ${pxTorem(20)};

    @media (max-width: 768px) {
      font-size: ${pxTorem(18)};
      margin-top: ${pxTorem(18)};
      margin-bottom: ${pxTorem(10)};
    }

    @media (max-width: 480px) {
      font-size: ${pxTorem(16)};
      margin-top: ${pxTorem(16)};
      margin-bottom: ${pxTorem(8)};
    }
  }
  a {
    color: var(--col-200) !important;
  }
  p {
    margin-bottom: ${pxTorem(16)};
    font-size: ${pxTorem(16)};

    @media (max-width: 480px) {
      font-size: ${pxTorem(14)};
      margin-bottom: ${pxTorem(12)};
    }
  }

  ul,
  ol {
    margin-bottom: ${pxTorem(24)};
    padding-left: ${pxTorem(24)};

    @media (max-width: 480px) {
      margin-bottom: ${pxTorem(16)};
      padding-left: ${pxTorem(16)};
    }

    li {
      margin-bottom: ${pxTorem(8)};

      @media (max-width: 480px) {
        margin-bottom: ${pxTorem(6)};
      }
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: ${pxTorem(12)};
    margin: ${pxTorem(32)} 0;

    @media (max-width: 768px) {
      margin: ${pxTorem(24)} 0;
    }

    @media (max-width: 480px) {
      margin: ${pxTorem(16)} 0;
      border-radius: ${pxTorem(8)};
    }
  }

  @media (max-width: 768px) {
    padding: ${pxTorem(0)} ${pxTorem(16)};
    margin-bottom: ${pxTorem(60)};
    gap: ${pxTorem(20)};
  }

  @media (max-width: 480px) {
    padding: ${pxTorem(0)} ${pxTorem(12)};
    margin-bottom: ${pxTorem(40)};
    gap: ${pxTorem(16)};
  }
`;

export const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${pxTorem(100)} ${pxTorem(20)};
  text-align: center;
  color: var(--col-500);

  svg {
    margin-bottom: ${pxTorem(24)};
    opacity: 0.5;
  }

  h2 {
    color: var(--col-600);
    margin-bottom: ${pxTorem(16)};
  }
`;

export const StyledRelatedPostsContainer = styled.section`
  max-width: ${pxTorem(1200)};
  margin: ${pxTorem(80)} auto ${pxTorem(40)};
  padding: 0 ${pxTorem(20)};
  width: 100%;
  overflow-x: auto;

  h2 {
    color: var(--col-000);
    font-size: ${pxTorem(28)};
    margin-bottom: ${pxTorem(32)};
    text-align: center;
  }

  @media (max-width: 768px) {
    margin: ${pxTorem(60)} auto ${pxTorem(30)};

    h2 {
      font-size: ${pxTorem(24)};
      margin-bottom: ${pxTorem(24)};
    }
  }
`;

export const StyledRelatedPostsWrapper = styled.div`
  display: flex;
  gap: ${pxTorem(20)};
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: ${pxTorem(12)};
  scroll-behavior: smooth;

  /* Smooth scrollbar styling */
  &::-webkit-scrollbar {
    height: ${pxTorem(6)};
  }

  &::-webkit-scrollbar-track {
    background: var(--col-200);
    border-radius: ${pxTorem(12)};
  }

  &::-webkit-scrollbar-thumb {
    background: var(--col-400);
    border-radius: ${pxTorem(12)};

    &:hover {
      background: var(--col-500);
    }
  }

  /* Firefox scrollbar */
  scrollbar-color: var(--col-400) var(--col-200);
  scrollbar-width: thin;

  @media (max-width: 640px) {
    gap: ${pxTorem(16)};
  }
`;

export const StyledRelatedPostItem = styled.article`
  flex: 0 0 ${pxTorem(280)};
  min-height: ${pxTorem(400)};
  background-color: var(--col-100);
  border-radius: ${pxTorem(12)};
  padding: ${pxTorem(14)};
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${pxTorem(6)} ${pxTorem(12)} ${pxTorem(10)} rgba(0, 0, 0, 0.1);
    transform: translateY(${pxTorem(-4)});
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color ease 0.3s;

    &:hover {
      color: var(--col-600);
    }
  }

  img,
  .empty-image {
    width: 100%;
    height: ${pxTorem(170)};
    border-radius: ${pxTorem(12)};
    margin-bottom: ${pxTorem(12)};
    object-fit: cover;
    object-position: center;
  }

  .empty-image {
    background-color: var(--col-300);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--col-500);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: ${pxTorem(12)};
    flex-grow: 1;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${pxTorem(11)};
    color: var(--col-400);
    font-weight: 500;
  }

  h3 {
    font-size: ${pxTorem(16)};
    line-height: 1.4;
    color: var(--col-000);
    margin: 0;
    min-height: ${pxTorem(45)};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .excerpt {
    color: var(--col-700);
    font-size: ${pxTorem(13)};
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex-grow: 1;
  }

  .read-more {
    display: flex;
    align-items: center;
    gap: ${pxTorem(8)};
    color: var(--col-600);
    font-size: ${pxTorem(12)};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all ease 0.3s;
    margin-top: auto;

    &:hover {
      color: var(--col-000);
      gap: ${pxTorem(12)};
    }

    span {
      line-height: 1;
      color: var(--col-500);
    }

    svg {
      transition: transform ease 0.3s;
    }

    &:hover svg {
      transform: translateX(${pxTorem(4)});
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 ${pxTorem(260)};
    min-height: ${pxTorem(380)};

    img,
    .empty-image {
      height: ${pxTorem(150)};
    }

    h3 {
      font-size: ${pxTorem(15)};
      min-height: ${pxTorem(42)};
    }

    .excerpt {
      font-size: ${pxTorem(12)};
    }
  }

  @media (max-width: 640px) {
    flex: 0 0 ${pxTorem(240)};
    min-height: ${pxTorem(360)};
    padding: ${pxTorem(12)};

    img,
    .empty-image {
      height: ${pxTorem(140)};
      margin-bottom: ${pxTorem(10)};
    }

    h3 {
      font-size: ${pxTorem(14)};
      min-height: ${pxTorem(40)};
    }

    .meta {
      font-size: ${pxTorem(10)};
    }

    .excerpt {
      font-size: ${pxTorem(11)};
    }

    .read-more {
      font-size: ${pxTorem(11)};
    }
  }
`;
