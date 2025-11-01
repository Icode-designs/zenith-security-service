"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled from "styled-components";
import QUERY from "../Breakpoints.styles";

export const StyledHeader = styled.header<{ $isOpen?: boolean }>`
  width: 100%;
  padding: 0 ${pxTorem(24)};
  margin-bottom: ${pxTorem(73)};
  > div {
    max-width: ${pxTorem(1325)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    > div {
      color: var(--col-100);
      align-items: center;
      > a svg {
        font-size: ${pxTorem(24)};
        transform: translateY(${pxTorem(5)});
      }
      button {
        padding: ${pxTorem(16)};
        p {
          height: fit-content;
          padding: 0;
        }
        svg {
          color: var(--col-100);
          font-size: ${pxTorem(40)};
        }
      }
    }
  }

  nav {
    display: none;
  }

  @media ${QUERY.TABLET} {
    > div {
      padding: ${pxTorem(12)} ${pxTorem(44)};
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: ${pxTorem(50)};

      > button {
        display: none;
      }

      nav {
        display: block;
        ul {
          display: flex;
          align-items: center;
          gap: ${pxTorem(26)};
          color: var(--col-100);
        }
      }
    }
  }

  @media ${QUERY.DESKTOP} {
    > div {
      padding: ${pxTorem(12)} ${pxTorem(99)};
    }
  }
`;

export const StyledMobileNav = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  bottom: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  display: grid;
  align-items: end;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(${pxTorem(10)});
  z-index: 10;
  transition: bottom ease 0.3s;
  > div {
    background: radial-gradient(circle at bottom, #022561, var(--col-200) 80%);
    z-index: 11;
    padding: ${pxTorem(24)};
    padding-bottom: ${pxTorem(105)};
    border-top-right-radius: ${pxTorem(45)};
    border-top-left-radius: ${pxTorem(45)};
    > button.close-btn {
      justify-self: end;
      padding: ${pxTorem(8)};
      background: none;
      border: none;
      color: var(--col-100);
      cursor: pointer;
      background-color: var(--col-400);
      border-radius: 50%;
      border: none;

      svg {
        font-size: ${pxTorem(32)};
      }
    }
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      display: block;
      background: linear-gradient(
        to bottom,
        transparent 29%,
        var(--col-200) 70%
      );
      bottom: 0;
      left: 0;
      width: 100%;
      height: 15%;
      opacity: 0.7;
      z-index: 5;
      border-top-right-radius: 50%;
      border-top-left-radius: 50%;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: repeating-linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.2) 0px,
          rgba(255, 255, 255, 0.2) 1px,
          transparent 1px,
          transparent 120px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.2) 0px,
          rgba(255, 255, 255, 0.2) 1px,
          transparent 1px,
          transparent 120px
        );
      opacity: 0.25;
      pointer-events: none;
    }

    ul {
      text-align: center;
      font-size: ${pxTorem(24)};
      font-weight: 500;
      color: var(--col-100);
      li {
        padding: ${pxTorem(16)};
        border-bottom: var(--col-600) solid 1px;

        a {
          justify-self: center;
        }

        &:last-of-type,
        &:nth-of-type(4) {
          border: none;
        }
      }
    }
  }

  @media ${QUERY.TABLET} {
    display: none;
  }
`;
