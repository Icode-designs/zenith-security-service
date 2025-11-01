"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import Image from "next/image";
import styled from "styled-components";
import QUERY from "../Breakpoints.styles";

export const StyledAboutHeroContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxTorem(67)};
  padding: 0 ${pxTorem(20)};
  overflow: hidden;

  article {
    color: var(--col-100);
    display: grid;
    gap: ${pxTorem(16)};
    align-content: start;
    margin-bottom: ${pxTorem(220)};
    margin-top: ${pxTorem(50)};
    max-width: ${pxTorem(468)};

    span {
      color: var(--col-300);
      font-style: italic;
    }

    a {
      border-color: var(--col-100);
      color: var(--col-100);

      &:hover {
        background-color: var(--col-100);
        color: var(--col-000);
      }
    }
  }

  @media ${QUERY.TABLET} {
    article {
      max-width: ${pxTorem(568)};
    }
  }

  @media ${QUERY.DESKTOP} {
    article {
      max-width: ${pxTorem(768)};
    }
  }
`;
export const AboutHeroImg = styled(Image)`
  position: absolute;
  height: 100%;
  width: auto;
  right: 0;
  top: 0;
  z-index: -1;
`;

export const StyledAboutContent = styled.div`
  display: grid;
  gap: ${pxTorem(24)};
  h2 {
    max-width: ${pxTorem(672)};
  }
  div {
    img {
      border-top-right-radius: ${pxTorem(12)};
      border-bottom-right-radius: ${pxTorem(12)};
      object-fit: cover;
      max-width: ${pxTorem(538)};
      height: auto;
      width: 100%;
    }
    article {
      display: grid;
      gap: ${pxTorem(24)};

      div {
        justify-self: start;
        width: fit-content;
      }
    }
  }

  @media ${QUERY.TABLET} {
    > div:nth-of-type(1) {
      display: flex;
      gap: ${pxTorem(52)};
    }
  }
`;

export const StyledAboutCta = styled.div`
  max-width: ${pxTorem(1104)};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(10%);
  background-color: var(--col-100);
  border-radius: ${pxTorem(12)};
  padding: ${pxTorem(87)} ${pxTorem(16)};
  article {
    max-width: ${pxTorem(847)};
    display: grid;
    gap: ${pxTorem(16)};
    justify-items: center;
    text-align: center;
    a {
      margin-top: ${pxTorem(16)};
    }
  }
`;
