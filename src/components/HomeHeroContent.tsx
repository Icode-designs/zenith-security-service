"use client";
import {
  FloatingDiv,
  HomeImgBox,
  StyledHomeHeroContent,
} from "@/styles/components/Homepage.styles";
import pxTorem from "@/utils/helpers/pxTorem";
import React from "react";
import commercialSecurity from "@/assets/commercialGuards2.jpg";
import armedSecurity from "@/assets/armedGuards.jpg";
import fireService from "@/assets/fireService.jpg";
import Image from "next/image";
import { StyledLink } from "@/styles/components/Ui.styles";

const HomeHeroContent = () => {
  return (
    <StyledHomeHeroContent>
      <article>
        <h1>US-based Multinational Security Services Company</h1>
        <p>
          Affordable, reliable, and trained security guards for fire watch,
          hospitals, businesses, and hotels.
        </p>
        <StyledLink $variant="primary" href="/contact">
          <p>{"let's get started"}</p>
        </StyledLink>
      </article>
      <FloatingDiv $bottom={pxTorem(122)} $right={pxTorem(20)}>
        <p>Professional and dependable</p>
      </FloatingDiv>{" "}
      <FloatingDiv $bottom={pxTorem(45)} $left={pxTorem(20)}>
        <p>Verified and highly trained guards</p>
      </FloatingDiv>{" "}
      <HomeImgBox>
        <div></div>
        <div>
          <Image
            src={commercialSecurity.src}
            height={189}
            width={189}
            alt="commercial security"
            loading="lazy"
          />
          <p>Commercial security</p>
        </div>
        <div>
          <Image
            src={armedSecurity.src}
            height={189}
            width={189}
            alt="commercial security"
            loading="lazy"
          />
          <p>Armed guards</p>
        </div>
        <div>
          <Image
            src={fireService.src}
            height={189}
            width={189}
            alt="fire service"
            loading="lazy"
          />
          <p>Fire service</p>
        </div>
        <div></div>
      </HomeImgBox>
    </StyledHomeHeroContent>
  );
};

export default HomeHeroContent;
