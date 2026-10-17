import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesHeroContent from "@/components/ServicesHeroContent";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { getServices } from "@/lib/supabase/services";
import React from "react";

export const metadata = {
  title: { absolute: "Armed, Unarmed & Fire Watch Security Services | Zenith" },
  description:
    "Zenith's security guard services in California: armed & unarmed guards, fire watch, construction site, hospital, hotel & commercial security.",
  alternates: { canonical: "/services" },
};

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
