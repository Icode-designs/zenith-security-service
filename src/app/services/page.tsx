import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesHeroContent from "@/components/ServicesHeroContent";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { getServices } from "@/lib/supabase/services";
import React from "react";

const page = async () => {
  const services = await getServices();

  return (
    <StyledMainWrapper>
      <Hero>
        <ServicesHeroContent />
      </Hero>
      <Services alternate services={services} />
    </StyledMainWrapper>
  );
};

export default page;
