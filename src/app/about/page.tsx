import AboutHeroContent from "@/components/AboutHeroContent";
import Hero from "@/components/Hero";
import { AboutHeroImg } from "@/styles/components/About.styles";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import React from "react";
import heroImg from "@/assets/portrait-male-security-guard-with-uniform 1.png";
import AboutMainContent from "@/components/AboutMainContent";
import AboutCta from "@/components/AboutCta";

export const metadata = {
  title: {
    absolute: "About Zenith Protective Services | Hawthorne, CA Security",
  },
  description:
    "Zenith Protective Services is a BSIS licensed security guard company (PPO #122193) in Hawthorne, CA, serving Los Angeles and Southern California 24/7.",
  alternates: { canonical: "/about" },
};

const page = () => {
  return (
    <StyledMainWrapper>
      <Hero>
        <AboutHeroContent />
        <AboutHeroImg
          src={heroImg.src}
          width={300}
          height={700}
          alt="Uniformed Zenith Protective Services security guard"
          priority
        />
      </Hero>
      <AboutMainContent />
      <AboutCta />
    </StyledMainWrapper>
  );
};

export default page;
