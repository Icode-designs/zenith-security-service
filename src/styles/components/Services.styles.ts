"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled from "styled-components";
import QUERY from "../Breakpoints.styles";

export const StyledServiceContent = styled.div`
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
  }

  > div {
    max-width: ${pxTorem(836)};
    width: 80%;
    height: fit-content;
    justify-self: center;
    transform: translateY(20%);

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center;
      border-radius: ${pxTorem(12)};
    }
  }
`;

export const StyledServiceDetailsHero = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  align-content: start;
  gap: ${pxTorem(40)};
  padding-bottom: ${pxTorem(40)};

  article {
    color: var(--col-100);
    display: grid;
    text-align: center;
    gap: ${pxTorem(16)};
    max-width: ${pxTorem(986)};
  }

  img {
    width: 70%;
    height: auto;
    max-height: ${pxTorem(560)};
    object-fit: cover;
    object-position: top;
    border-radius: ${pxTorem(12)};
  }
  a {
    border-color: var(--col-100);
    color: var(--col-100);
    &:hover {
      background-color: var(--col-100);
      color: var(--col-000);
    }
  }
`;

export const StyledServiceDetailContent = styled.div`
  display: grid;
  gap: ${pxTorem(50)};
  > div {
    gap: ${pxTorem(50)};
    article {
      display: grid;
      gap: ${pxTorem(16)};
    }
    &:nth-of-type(1) {
      img {
        width: 100%;
        object-fit: cover;
        border-radius: ${pxTorem(12)};
      }
    }

    @media ${QUERY.TABLET} {
      > * {
        max-width: 50%;
      }
    }
  }
`;

export const StyledFAQ = styled.section`
  position: relative;
  background-color: var(--col-200);
  width: 100%;
  padding: ${pxTorem(40)} ${pxTorem(16)};
  margin-top: ${pxTorem(50)};
  z-index: 5;
  overflow: none;

  > div {
    position: relative;
    max-width: ${pxTorem(1200)};
    margin: 0 auto;
    color: var(--col-100);
    display: grid;
    grid-template-columns: 1fr;
    gap: ${pxTorem(40)};
    justify-items: center;
    h2 {
      max-width: ${pxTorem(398)};
      justify-self: left;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 40%;
      width: 80%;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%) translateY(50%);
      z-index: -1;
      border-radius: 50%;
      background-image: radial-gradient(
        ellipse at center,
        var(--col-300),
        transparent 70%
      );
    }

    a {
      border-color: var(--col-100);
      color: var(--col-100);
      &:hover {
        background-color: var(--col-100);
        color: var(--col-000);
      }
    }

    > ul {
      display: grid;
      max-width: ${pxTorem(1142)};
      margin: 0 auto;
      border-radius: ${pxTorem(12)};
      border: ${pxTorem(1)} solid var(--col-100);
      grid-template-columns: 1fr;
      padding: ${pxTorem(50)} ${pxTorem(32)};
      gap: ${pxTorem(40)};

      li {
        h3 {
          margin-bottom: ${pxTorem(16)};
        }
      }

      @media ${QUERY.TABLET} {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;
