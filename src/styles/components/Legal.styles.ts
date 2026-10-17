"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled from "styled-components";
import QUERY from "../Breakpoints.styles";

export const StyledLegalHero = styled.div`
  padding: ${pxTorem(20)} ${pxTorem(20)} ${pxTorem(70)};
  color: var(--col-100);
  text-align: center;
  display: grid;
  gap: ${pxTorem(12)};
  justify-items: center;

  h1 {
    font-size: ${pxTorem(36)};
    line-height: 1.15;
  }

  p {
    opacity: 0.85;
  }

  @media ${QUERY.TABLET} {
    h1 {
      font-size: ${pxTorem(52)};
    }
  }
`;

export const StyledLegalContent = styled.article`
  max-width: ${pxTorem(820)};
  margin: 0 auto;
  display: grid;
  gap: ${pxTorem(36)};
  padding-bottom: ${pxTorem(40)};

  .meta {
    display: grid;
    gap: ${pxTorem(4)};
    padding: ${pxTorem(20)} ${pxTorem(24)};
    border-radius: ${pxTorem(12)};
    border: 1px solid var(--col-600);
    color: var(--col-700);
    font-size: ${pxTorem(15)};

    strong {
      color: var(--col-000);
    }
  }

  section {
    display: grid;
    gap: ${pxTorem(12)};
  }

  h2 {
    font-size: ${pxTorem(24)};
    line-height: 1.3;
    text-transform: none;
  }

  p,
  li {
    line-height: 1.7;
    color: var(--col-700);
  }

  ul {
    list-style: disc;
    padding-left: ${pxTorem(22)};
    display: grid;
    gap: ${pxTorem(6)};
  }

  a {
    color: var(--col-400);
    text-decoration: underline;
  }

  @media ${QUERY.TABLET} {
    h2 {
      font-size: ${pxTorem(28)};
    }
  }
`;
