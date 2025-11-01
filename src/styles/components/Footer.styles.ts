"use client";

import pxTorem from "@/utils/helpers/pxTorem";
import styled from "styled-components";
import QUERY from "../Breakpoints.styles";

export const StyledFooter = styled.footer`
  background-color: var(--col-200);
`;

export const StyledFooterContent = styled.div`
  display: grid;
  justify-items: center;
  align-content: start;
  grid-template-columns: repeat(auto-fill, minmax(${pxTorem(300)}, 1fr));
  gap: ${pxTorem(40)};
  max-width: ${pxTorem(1200)};
  margin: 0 auto;
  padding: ${pxTorem(47)};
  ul {
    color: var(--col-100);
    text-align: center;
    text-transform: capitalize;
    li {
      transition: color ease 0.3s;
      &:hover {
        color: var(--col-400);
      }
    }

    &:nth-of-type(1) {
      a {
        justify-self: center;
        margin-top: ${pxTorem(24)};
        color: var(--col-100);
        border-color: var(--col-100);

        &:hover {
          background-color: var(--col-100);
          color: var(--col-000);
        }
      }
    }
    h4 {
      margin-bottom: ${pxTorem(24)};
    }
  }
  @media (min-width: 768px) {
    justify-items: stretch;
    > h3 {
      justify-self: start;
    }
    ul {
      text-align: left;
      &:nth-of-type(1) {
        button {
          justify-self: start;
        }
      }
    }
  }

  @media ${QUERY.TABLET} {
    display: flex;
    justify-content: space-between;

    ul {
      text-align: left;
      &:nth-of-type(1) {
        button {
          justify-self: start;
        }
      }
    }
  }
`;

export const StyledAccreditation = styled.div`
  position: relative;
  z-index: 5;
  display: flex;

  > div {
    height: fit-content;
    display: flex;
    text-align: center;
    color: var(--col-100);
    align-items: center;
    flex-direction: column;
    max-width: ${pxTorem(1200)};
    margin-top: ${pxTorem(40)};
    gap: ${pxTorem(24)};
    padding: ${pxTorem(47)};
    max-width: ${pxTorem(1200)};
    margin: 0 auto;

    > div {
      svg {
        cursor: pointer;
        &:hover {
          color: var(--col-400);
        }
      }
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.2;
    background-color: var(--col-300);
    height: 100%;
    width: 100%;
  }

  &::before {
    border-top-left-radius: 100%;
  }

  &::after {
    border-top-right-radius: 100%;
  }

  @media ${QUERY.TABLET} {
    > div {
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
      width: 100%;

      > div {
        order: 2;
        justify-self: end;
      }
    }
  }
`;
