"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled from "styled-components";
import QUERY from "../Breakpoints.styles";

export const StyledFaqHero = styled.div`
  padding: ${pxTorem(20)} ${pxTorem(20)} ${pxTorem(70)};
  color: var(--col-100);
  text-align: center;
  display: grid;
  gap: ${pxTorem(16)};
  justify-items: center;

  h1 {
    font-size: ${pxTorem(36)};
    line-height: 1.15;
    max-width: ${pxTorem(820)};
  }

  p {
    max-width: ${pxTorem(640)};
    line-height: 1.6;
    opacity: 0.9;
  }

  nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${pxTorem(10)};
    margin-top: ${pxTorem(8)};

    a {
      display: inline-block;
      padding: ${pxTorem(6)} ${pxTorem(16)};
      border-radius: ${pxTorem(50)};
      border: 1px solid rgba(255, 255, 255, 0.4);
      font-size: ${pxTorem(14)};
      transition: background-color 0.2s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.12);
      }
    }
  }

  @media ${QUERY.TABLET} {
    h1 {
      font-size: ${pxTorem(52)};
    }
  }
`;

export const StyledFaqContent = styled.div`
  max-width: ${pxTorem(860)};
  margin: 0 auto;
  display: grid;
  gap: ${pxTorem(48)};
  padding-bottom: ${pxTorem(40)};

  .updated {
    font-size: ${pxTorem(14)};
    color: var(--col-700);
  }

  > section {
    display: grid;
    gap: ${pxTorem(16)};
    scroll-margin-top: ${pxTorem(24)};

    h2 {
      text-transform: none;
      font-size: ${pxTorem(24)};
      line-height: 1.3;
    }
  }

  /* Dropdown questions (native <details>, so answers stay in the HTML) */
  details {
    border: 1px solid var(--col-600);
    border-radius: ${pxTorem(12)};
    background-color: var(--col-100);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &[open] {
      border-color: var(--col-200);
      box-shadow: ${pxTorem(4)} ${pxTorem(8)} ${pxTorem(16)} rgba(3, 4, 94, 0.08);
    }
  }

  summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${pxTorem(16)};
    padding: ${pxTorem(18)} ${pxTorem(20)};

    &::-webkit-details-marker {
      display: none;
    }

    h3 {
      text-transform: none;
      font-size: ${pxTorem(17)};
      line-height: 1.4;
      font-weight: 600;
    }

    /* chevron */
    &::after {
      content: "";
      flex-shrink: 0;
      width: ${pxTorem(10)};
      height: ${pxTorem(10)};
      border-right: 2px solid var(--col-200);
      border-bottom: 2px solid var(--col-200);
      transform: rotate(45deg) translateY(-${pxTorem(3)});
      transition: transform 0.2s ease;
    }
  }

  details[open] > summary::after {
    transform: rotate(-135deg) translateY(-${pxTorem(1)});
  }

  .answer {
    display: grid;
    gap: ${pxTorem(10)};
    padding: 0 ${pxTorem(20)} ${pxTorem(20)};

    p {
      line-height: 1.7;
      color: var(--col-700);
    }

    a {
      color: var(--col-400);
      font-weight: 500;
      text-decoration: underline;
      width: fit-content;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    details,
    summary::after {
      transition: none;
    }
  }

  @media ${QUERY.TABLET} {
    > section h2 {
      font-size: ${pxTorem(28)};
    }

    summary h3 {
      font-size: ${pxTorem(19)};
    }
  }
`;

export const StyledFaqCta = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${pxTorem(14)};
  padding: ${pxTorem(36)} ${pxTorem(24)};
  border-radius: ${pxTorem(12)};
  background-color: var(--col-200);
  color: var(--col-100);

  h2 {
    text-transform: none;
    font-size: ${pxTorem(24)};
  }

  p {
    max-width: ${pxTorem(520)};
    line-height: 1.6;
    opacity: 0.9;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
`;
