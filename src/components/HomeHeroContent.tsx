"use client";
import {
  FloatingDiv,
  HomeImgBox,
  StyledHomeHeroContent,
} from "@/styles/components/Homepage.styles";
import pxTorem from "@/utils/helpers/pxTorem";
import React from "react";
import commercialSecurity from "@/assets/commeercial-security-1.jpeg";
import armedSecurity from "@/assets/armed-guards.jpeg";
import fireService from "@/assets/firewatch.jpeg";
import Image from "next/image";
import { StyledLink } from "@/styles/components/Ui.styles";

const HomeHeroContent = () => {
  return (
    <StyledHomeHeroContent>
      <article>
        <h1>Security Guard Services in Los Angeles & Southern California</h1>
        <p>
          Affordable, licensed armed and unarmed security guards for fire
          watch, hospitals, construction sites, businesses, and hotels.
        </p>
        <StyledLink $variant="primary" href="/contact">
          <p>get a free quote</p>
        </StyledLink>
      </article>
      <FloatingDiv $bottom={pxTorem(122)} $right={pxTorem(20)}>
        <p>BSIS licensed: PPO #122193</p>
      </FloatingDiv>{" "}
      <FloatingDiv $bottom={pxTorem(45)} $left={pxTorem(20)}>
        <p>Background-checked guards</p>
      </FloatingDiv>{" "}
      <HomeImgBox>
        <div></div>
        <div>
          <Image
            src={commercialSecurity.src}
            height={189}
            width={189}
            alt="Zenith security guards checking in a driver at a warehouse gate"
            priority
          />
          <p>Commercial security</p>
        </div>
        <div>
          <Image
            src={armedSecurity.src}
            height={189}
            width={189}
            alt="Zenith security team outside a hospital"
            priority
          />
          <p>Armed guards</p>
        </div>
        <div>
          <Image
            src={fireService.src}
            height={189}
            width={189}
            alt="Zenith fire watch guard completing a fire watch log"
            priority
          />
          <p>Fire watch</p>
        </div>
        <div></div>
      </HomeImgBox>
    </StyledHomeHeroContent>
  );
};

export default HomeHeroContent;
