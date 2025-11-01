import AboutHeroContent from "@/components/AboutHeroContent";
import Hero from "@/components/Hero";
import { AboutHeroImg } from "@/styles/components/About.styles";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import React from "react";
import heroImg from "@/assets/portrait-male-security-guard-with-uniform 1.png";
import AboutMainContent from "@/components/AboutMainContent";
import AboutCta from "@/components/AboutCta";

const page = () => {
  return (
    <StyledMainWrapper>
      <Hero>
        <AboutHeroContent />
        <AboutHeroImg
          src={heroImg.src}
          width={300}
          height={700}
          alt="about hero img"
        />
      </Hero>
      <AboutMainContent />
      <AboutCta />
    </StyledMainWrapper>
  );
};

export default page;
