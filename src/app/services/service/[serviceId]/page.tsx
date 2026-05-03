import Hero from "@/components/Hero";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetrailHero from "@/components/ServiceDetrailHero";
import FAQ from "@/components/ui/FAQ";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { getServiceById } from "@/lib/supabase/services";
import React from "react";

const Page = async ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const resolvedParams = await params;
  const id = resolvedParams.serviceId;
  const service = await getServiceById(id);

  if (!service) {
    return (
      <StyledMainWrapper>
        <h2>service not found</h2>
      </StyledMainWrapper>
    );
  }

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
