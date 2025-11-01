import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesHeroContent from "@/components/ServicesHeroContent";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import React from "react";

const page = () => {
  return (
    <StyledMainWrapper>
      <Hero>
        <ServicesHeroContent />
      </Hero>
      <Services alternate />
    </StyledMainWrapper>
  );
};

export default page;
