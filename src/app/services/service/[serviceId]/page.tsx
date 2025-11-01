import Hero from "@/components/Hero";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetrailHero from "@/components/ServiceDetrailHero";
import FAQ from "@/components/ui/FAQ";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { SERVICES_LIST } from "@/utils/data";
import React, { use } from "react";

const Page = ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const resolvedParams = use(params);
  const id = resolvedParams.serviceId;
  const service = SERVICES_LIST.find((serv) => serv.id === id);
  console.log(id);

  if (!service) return;
  <StyledMainWrapper>
    <h2>service not found</h2>
  </StyledMainWrapper>;

  return (
    <>
      <StyledMainWrapper>
        <Hero>
          <ServiceDetrailHero service={service} />
        </Hero>
        <ServiceDetailContent service={service} />
      </StyledMainWrapper>
      <FAQ service={service} />
    </>
  );
};

export default Page;
