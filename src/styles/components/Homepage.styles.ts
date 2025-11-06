"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled, { css } from "styled-components";
import QUERY from "../Breakpoints.styles";

export const StyledHomeHeroContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxTorem(67)};
  padding: 0 ${pxTorem(20)};
  overflow: hidden;
  height: 100%;

  article {
    color: var(--col-100);
    text-align: center;
    display: grid;
    gap: ${pxTorem(16)};
    justify-items: center;
    align-content: start;
    margin-bottom: ${pxTorem(270)};
  }
`;

export const FloatingDiv = styled.div<{
  $bottom: string;
  $left?: string;
  $right?: string;
}>`
  position: absolute;
  background-color: var(--col-300);
  border: none;
  border-radius: ${pxTorem(50)};
  width: fit-content;
  height: fit-content;
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  padding: ${pxTorem(7.5)} ${pxTorem(13.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  p {
    color: var(--col-100);
    font-size: ${pxTorem(12)};
    font-weight: 500;
  }
`;
export const HomeImgBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  bottom: 0;
  justify-self: center;

  > div {
    position: relative;
    border: none;
    border-radius: ${pxTorem(12)};
    padding: ${pxTorem(6)};
    background-color: var(--col-100);
    min-height: ${pxTorem(209.67)};
    min-width: ${pxTorem(207.67)};
    width: 100%;
    height: fit-content;
    border-radius: ${pxTorem(12)};
    margin-bottom: ${pxTorem(8)};
    overflow-y: hidden;
    img {
      object-fit: cover;
      object-position: top;
      width: 100%;
      border-radius: ${pxTorem(12)} ${pxTorem(12)} 0 0;
    }

    p {
      font-weight: 600;
      font-size: ${pxTorem(11)};
    }

    &:nth-of-type(1),
    &:nth-of-type(5) {
      background: linear-gradient(
        to bottom right,
        var(--col-600),
        var(--col-700) 70%
      );
      z-index: -1;
      opacity: 0.5;
    }

    &:nth-of-type(1) {
      transform: translateY(60%) rotate(-30deg);
    }
    &:nth-of-type(2) {
      transform: translateY(15%) rotate(-15deg);
    }
    &:nth-of-type(3) {
      z-index: 4;
    }
    &:nth-of-type(4) {
      transform: translateY(15%) rotate(15deg);
    }
    &:nth-of-type(5) {
      transform: translateY(60%) rotate(30deg);
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      background: linear-gradient(to bottom, transparent, var(--col-200) 70%);
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      z-index: 5;
    }
  }
`;

export const StyledIntro = styled.div`
  > div {
    justify-content: space-between;
    gap: ${pxTorem(50)};

    > * {
      flex: 1;
    }

    article {
      display: grid;
      gap: ${pxTorem(24)};
      button {
        width: fit-content;
      }
    }
    > div {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
        border-radius: ${pxTorem(12)};
      }
    }
  }
`;

export const StyledServices = styled.div<{ $alternate?: boolean }>`
  display: grid;
  gap: ${pxTorem(52)};
  align-items: start;
  grid-template-columns: 1fr;
  ${({ $alternate }) =>
    $alternate &&
    css`
      margin-top: ${pxTorem(32)};
      padding-bottom: ${pxTorem(85)};
    `};
  > article {
    position: relative;
    display: grid;
    align-items: start;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0 ${pxTorem(16)};
    justify-self: center;
    max-width: ${pxTorem(654)};
    width: 100%;

    h2 {
      justify-self: start;
      max-width: ${({ $alternate }) => ($alternate ? "none" : pxTorem(347))};
    }
    p {
      justify-self: end;
      max-width: ${pxTorem(460)};
    }
  }
`;

export const StyledServiceCard = styled.li`
  padding: ${pxTorem(16)};
  border-radius: ${pxTorem(12)};
  border: none;
  background-color: var(--col-100);
  transition: all ease 0.3s;
  height: 100%;
  display: grid;

  &:hover {
    box-shadow: ${pxTorem(6)} ${pxTorem(12)} ${pxTorem(10)} rgba(0, 0, 0, 0.1);
  }
  img {
    width: 100%;
    height: ${pxTorem(235)};
    border-radius: ${pxTorem(12)};
    object-fit: cover;
    object-position: top;
    margin-bottom: ${pxTorem(16)};
  }

  article {
    display: grid;
    gap: ${pxTorem(16)};
    align-content: start;
    margin-bottom: ${pxTorem(24)};
  }
  a {
    align-self: end;
  }
`;

export const StyledServiceCardGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${pxTorem(300)}, 1fr));
  gap: ${pxTorem(16)};

  li {
    &:last-of-type {
      display: grid;
      gap: ${pxTorem(26)};
      align-content: center;
      p {
        font-weight: 500;
      }
      button {
        width: fit-content;
      }
    }
  }
`;

export const StyledTestimonialsBox = styled.section`
  position: relative;
  background-color: var(--col-200);
  color: var(--col-100);
  max-width: unset !important;
  width: 100%;
  padding: ${pxTorem(88)} ${pxTorem(20)} !important;
  display: grid;
  align-items: start;
  z-index: 5;
  overflow-y: hidden;
  gap: ${pxTorem(88)};

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
    z-index: -1;
  }

  > * {
    max-width: ${pxTorem(1200)};
    margin: 0 auto;
  }
  > div:nth-of-type(1) {
    gap: ${pxTorem(40)};
    h2 {
      justify-self: start;
      max-width: ${pxTorem(576)};
    }
    img {
      max-width: ${pxTorem(657)};
      justify-self: center;
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center;
      border-radius: ${pxTorem(12)};
    }
  }

  > div:nth-of-type(2) {
    > div:nth-of-type(2) {
      display: grid;
      gap: ${pxTorem(5)};
      svg {
        color: var(--col-600);
        font-size: ${pxTorem(16)};
        cursor: pointer;
        &.active {
          color: var(--col-400);
        }
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 40%;
    width: 80%;
    border-radius: 50%;
    background-image: radial-gradient(
      ellipse at center,
      var(--col-300),
      transparent 70%
    );
    bottom: 0;
    justify-self: center;
    transform: translateY(50%);
    z-index: -1;
    opacity: 0.5;
  }

  @media ${QUERY.DESKTOP} {
    > div:nth-of-type(1) {
      align-items: center;
    }
  }
`;

export const StyledTesimonialCard = styled.article`
  border: var(--col-600) solid 1px;
  padding: ${pxTorem(32)};
  border-radius: ${pxTorem(12)};
  text-align: center;
  max-width: ${pxTorem(872)};
`;

export const StyledOutro = styled.section`
  padding: ${pxTorem(150)} ${pxTorem(20)} !important;
  padding-bottom: ${pxTorem(69)};
  background-color: var(--col-200);
  color: var(--col-100);
  max-width: none !important;
  > div {
    display: grid;
    gap: ${pxTorem(79)};
    max-width: ${pxTorem(1200)};
    width: 100%;
    margin: 0 auto;

    article {
      display: grid;
      max-width: ${pxTorem(896)};
      gap: ${pxTorem(22)};
      justify-self: center;
      h2 {
        max-width: ${pxTorem(702)};
        justify-self: left;
      }
      a {
        border-color: var(--col-100);
        color: var(--col-100);
        width: fit-content;

        &:hover {
          background-color: var(--col-100);
          color: var(--col-000);
        }
      }
    }
  }
`;

export const StyledImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${pxTorem(300)}, 1fr));
  gap: ${pxTorem(20)};
  justify-items: stretch;
  margin: 0 auto;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    padding: ${pxTorem(119)} 0;
    position: relative;
    z-index: 5;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: ${pxTorem(20)};
      filter: brightness(60%);
      z-index: -1;
    }
    article {
      display: grid;
      gap: ${pxTorem(14)};
      color: var(--col-100);
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const StyledError = styled.div`
  padding: 12px;
  background: #ef4444;
  color: white;
  border-radius: 4px;
  margin-bottom: 16px;
`;
