"use client";
import pxTorem from "@/utils/helpers/pxTorem";
import { createGlobalStyle } from "styled-components";
import QUERY from "./Breakpoints.styles";

interface GlobalStyleProps {
  navOpen: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
:root{
    // Colors
    --col-000: #000000;
    --col-100: #ffffff;
    --col-200: #03045e;
    --col-300: #00b4d8;
    --col-400: #ed2024;
    --col-500: #ff7174;
    --col-600: #c4c4c4;
    --col-700: #717680;

    //  Others
    --radius-100: ${pxTorem(12)};
    --radius-200: ${pxTorem(50)};

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Switzer';
    background-color: var(--col-100);
    color: var(--col-000);
     overflow-x: hidden;
     overflow-y: ${({ navOpen }) => (navOpen ? "hidden" : "auto")};
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${pxTorem(16)};
}

a{
    text-decoration: none;
    color: unset;
    cursor: pointer;
}

ol, ul{
    list-style: none;
}

button{
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 600;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
}

buutton:disabled, input:disabled{
    cursor: not-allowed;
}

h1{
    font-size: ${pxTorem(40)}; 
    line-height: ${pxTorem(55)};
    text-transform: capitalize;
    letter-spacing: 0;
    font-weight: 500;

    @media ${QUERY.TABLET} {
    font-size: ${pxTorem(60)}; 
    line-height: ${pxTorem(71.2)};
    }

    @media ${QUERY.DESKTOP} {
    font-size: ${pxTorem(78)}; 
    line-height: ${pxTorem(85)};
    }
}

h2{
    font-size: ${pxTorem(32)};
    line-height: ${pxTorem(42)};
    text-transform: capitalize;
    letter-spacing: 0;
    font-weight: 600;

     @media ${QUERY.TABLET} {
    font-size: ${pxTorem(35)}; 
    line-height: ${pxTorem(41.2)};
    }

    @media ${QUERY.DESKTOP} {
    font-size: ${pxTorem(42)}; 
    line-height: ${pxTorem(55)};
    }
}

h3{
    font-size: ${pxTorem(18)};
    line-height: auto;
    text-transform: capitalize;
    letter-spacing: 0;
    font-weight: 600;

     @media ${QUERY.TABLET} {
    font-size: ${pxTorem(20)}; 
    }

    @media ${QUERY.DESKTOP} {
    font-size: ${pxTorem(24)}; 
    }
}

h4{
    font-size: ${pxTorem(14)};
    line-height: ${pxTorem(32)};
    text-transform: capitalize;
    letter-spacing: 0;
    font-weight: 600;

    @media ${QUERY.TABLET} {
    font-size: ${pxTorem(16)}; 
    }
}

h5{
    font-size: ${pxTorem(20)};
    line-height: ${pxTorem(32)};
    text-transform: capitalize;
    letter-spacing: 0;
    font-weight: 600;
}

p,li{
    font-size: ${pxTorem(16)};
    line-height: ${pxTorem(30)};
    font-weight: 400;
}

`;
