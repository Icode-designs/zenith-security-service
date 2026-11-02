"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled from "styled-components";
import QUERY from "../Breakpoints.styles";

// Hero content for location pages (sits inside <Hero>)
export const StyledLocationHero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxTorem(40)};
  align-items: center;
  padding: 0 ${pxTorem(20)} ${pxTorem(60)};
  color: var(--col-100);

  article {
    display: grid;
    gap: ${pxTorem(20)};
    justify-items: start;

    h1 {
      text-transform: none;
      font-size: ${pxTorem(36)};
      line-height: 1.15;

      span {
        display: block;
        margin-top: ${pxTorem(12)};
        font-size: ${pxTorem(20)};
        line-height: 1.3;
        font-weight: 500;
        color: var(--col-300);
      }
    }

    p {
      max-width: ${pxTorem(560)};
      line-height: 1.6;
    }

    .tagline {
      font-weight: 600;
    }
  }

  .ctas {
    display: flex;
    flex-wrap: wrap;
    gap: ${pxTorem(12)};

    a:nth-of-type(2) {
      border-color: var(--col-100);
      color: var(--col-100);
      &:hover {
        background-color: var(--col-100);
        color: var(--col-000);
      }
    }
  }

  img {
    width: 100%;
    height: auto;
    max-height: ${pxTorem(460)};
    object-fit: cover;
    border-radius: ${pxTorem(12)};
  }

  @media ${QUERY.TABLET} {
    grid-template-columns: 1.1fr 1fr;
    gap: ${pxTorem(60)};
    padding-bottom: ${pxTorem(80)};

    article h1 {
      font-size: ${pxTorem(52)};
      span {
        font-size: ${pxTorem(26)};
      }
    }
  }
`;

// City-specific copy above the shared services section
export const StyledLocalIntro = styled.div`
  display: grid;
  gap: ${pxTorem(16)};
  max-width: ${pxTorem(860)};
  margin: 0 auto;

  h2 {
    text-transform: none;
    margin-bottom: ${pxTorem(8)};
  }

  p {
    line-height: 1.7;
    color: var(--col-700);
  }

  /* Numbered service blocks */
  .items {
    list-style: none;
    counter-reset: item;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(100%, ${pxTorem(340)}), 1fr)
    );
    gap: ${pxTorem(16)};
    margin-top: ${pxTorem(8)};

    li {
      counter-increment: item;
      display: grid;
      align-content: start;
      gap: ${pxTorem(8)};
      padding: ${pxTorem(24)};
      border-radius: ${pxTorem(12)};
      border: 1px solid var(--col-600);
      border-top: ${pxTorem(3)} solid var(--col-400);
    }

    /* An odd last block spans the full row instead of sitting alone */
    li:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }

    h3 {
      text-transform: none;
      font-size: ${pxTorem(19)};
      line-height: 1.35;

      &::before {
        content: counter(item) ". ";
        color: var(--col-400);
      }
    }
  }
`;

// "Why Zenith" + service area, on navy
export const StyledWhy = styled.div`
  background-color: var(--col-200);
  color: var(--col-100);
  border-radius: ${pxTorem(12)};
  padding: ${pxTorem(40)} ${pxTorem(24)};
  display: grid;
  gap: ${pxTorem(40)};

  > ul {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(100%, ${pxTorem(260)}), 1fr)
    );
    gap: ${pxTorem(24)};

    li {
      display: grid;
      gap: ${pxTorem(8)};
      padding-left: ${pxTorem(16)};
      border-left: ${pxTorem(3)} solid var(--col-400);

      strong {
        font-size: ${pxTorem(18)};
      }
      span {
        line-height: 1.6;
        opacity: 0.9;
      }
    }
  }

  .area {
    display: grid;
    gap: ${pxTorem(16)};
    padding-top: ${pxTorem(32)};
    border-top: 1px solid rgba(255, 255, 255, 0.2);

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: ${pxTorem(10)};

      li {
        padding: ${pxTorem(6)} ${pxTorem(16)};
        border-radius: ${pxTorem(50)};
        border: 1px solid rgba(255, 255, 255, 0.4);
        font-size: ${pxTorem(14)};
      }
    }
  }

  @media ${QUERY.TABLET} {
    padding: ${pxTorem(60)} ${pxTorem(56)};
  }
`;

// FAQs
export const StyledLocationFAQ = styled.div`
  display: grid;
  gap: ${pxTorem(24)};

  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${pxTorem(16)};

    li {
      display: grid;
      gap: ${pxTorem(8)};
      padding: ${pxTorem(24)};
      border-radius: ${pxTorem(12)};
      border: 1px solid var(--col-600);

      h3 {
        text-transform: none;
      }
      p {
        line-height: 1.6;
        color: var(--col-700);
      }
    }

    @media ${QUERY.TABLET} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

// Final CTA above the quote form
export const StyledLocationCTA = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${pxTorem(16)};

  p {
    max-width: ${pxTorem(560)};
    line-height: 1.6;
  }

  .ctas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${pxTorem(12)};
  }

  .zips {
    font-style: italic;
    font-size: ${pxTorem(14)};
    color: var(--col-700);
  }
`;
