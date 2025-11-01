"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled, { css } from "styled-components";
import QUERY from "../Breakpoints.styles";
import Link from "next/link";

export const StyledLink = styled(Link)<{
  $variant?: "primary" | "secondary" | "tertiary";
}>`
  display: flex;
  align-items: center;
  padding: ${pxTorem(8)} ${pxTorem(24)};
  transition: all 0.3s ease-in-out;
  border-radius: ${pxTorem(50)};
  width: fit-content;

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          background-color: var(--col-400);
          color: var(--col-100);
          border: var(--col-400) 1px solid;

          &:hover {
            background-color: var(--col-500);
            border: var(--col-500) 1px solid;
          }
        `
      : $variant === "secondary"
      ? css`
          border: var(--col-000) 1px solid;
          color: var(--col-000);
          background-color: transparent;
          &:hover {
            background-color: var(--col-000);
            color: var(--col-100);
          }
        `
      : css`
          color: var(--col-400);
          text-transform: uppercase;
          gap: ${pxTorem(14)};
          background: none;
          border: none;
          &:hover {
            color: var(--col-200);
          }
        `}
`;

export const StyledMainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxTorem(85)};
  > section {
    max-width: ${pxTorem(1200)};
    width: 100%;
    margin: 0 auto;
    padding: 0 ${pxTorem(20)};
  }
`;

export const StyledLogo = styled.h3`
  color: var(--col-100);
  font-size: ${pxTorem(32)};
`;

export const FlexBox = styled.div<{ $variant?: "secondary"; $gap?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? pxTorem($gap) : pxTorem(8))};
  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      @media ${QUERY.TABLET} {
        flex-direction: row;
      }
    `}
`;

export const StyledHero = styled.div`
  position: relative;
  background: radial-gradient(circle at bottom, #022561, var(--col-200) 80%);
  /* height: ${pxTorem(780)}; */
  width: 100%;
  height: fit-content;
  z-index: 5;
  > div {
    max-width: ${pxTorem(1200)};
    margin: 0 auto;
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
  > div {
    width: 100%;
    height: 100%;
  }

  @media ${QUERY.TABLET} {
    padding-top: ${pxTorem(25)};
  }
`;

export const StyledForm = styled.form`
  position: relative;
  display: grid;
  gap: ${pxTorem(24)};
  z-index: 10;
  transform: translateY(30%);
  width: 100% !important;
  border-radius: ${pxTorem(12)};
  box-shadow: ${pxTorem(6)} ${pxTorem(-6)} ${pxTorem(10)} rgba(0, 0, 0, 0.1);
  padding: ${pxTorem(37)} ${pxTorem(24)};
  background-color: var(--col-100);
`;
export const StyledInput = styled.input`
  border-radius: ${pxTorem(12)};
  flex: 1;
  width: 100%;
  padding: ${pxTorem(10)} ${pxTorem(16)};
  border: var(--col-700) solid 1px;
  outline: none;

  &:focus {
    border-color: var(--col-200);
  }

  &.error {
    border-color: var(--col-400);
  }
`;

export const StyledTextarea = styled.textarea`
  border-radius: ${pxTorem(12)};
  flex: 1;
  width: 100%;
  padding: ${pxTorem(10)} ${pxTorem(16)};
  border: var(--col-700) solid 1px;
  height: ${pxTorem(180)};
  outline: none;
  &:focus {
    border-color: var(--col-200);
  }

  &.error {
    border-color: var(--col-400);
  }
`;

export const StyledSelect = styled.select`
  border-radius: ${pxTorem(12)};
  flex: 1;
  width: 100%;
  padding: ${pxTorem(10)} ${pxTorem(16)};
  border: var(--col-700) solid 1px;
  outline: none;
  &:focus {
    border-color: var(--col-200);
  }

  &.error {
    border-color: var(--col-400);
  }
`;

export const StyledCTA = styled.section`
  background-color: var(--col-200);
  width: 100%;
  padding: ${pxTorem(60)} ${pxTorem(24)};
  color: var(--col-100);
  div {
    justify-self: center;
    text-align: center;
    align-items: center;
    article {
      max-width: ${pxTorem(450)};
    }
    button {
      &:hover {
        color: var(--col-300);
      }
    }
  }
  @media ${QUERY.DESKTOP} {
    > div {
      align-items: start;
      justify-content: space-between;
      text-align: left;
      article {
      }
    }
  }
`;
