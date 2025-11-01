"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import styled from "styled-components";

export const StyledContactContent = styled.div`
  position: relative;
  padding: 0 ${pxTorem(16)};
  padding-bottom: ${pxTorem(65)};
  z-index: 5;

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 40%;
    width: 80%;
    top: 30%;
    z-index: -1;
    border-radius: 50%;
    background-image: radial-gradient(
      ellipse at center,
      var(--col-300),
      transparent 70%
    );
  }
  article {
    color: var(--col-100);
    text-align: center;
    margin-bottom: ${pxTorem(65)};
  }

  form {
    max-width: ${pxTorem(900)};
    margin: 0 auto;
    transform: none;
  }
`;
