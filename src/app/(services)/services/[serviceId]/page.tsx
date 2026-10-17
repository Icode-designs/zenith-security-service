import Hero from "@/components/Hero";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServiceDetrailHero from "@/components/ServiceDetrailHero";
import FAQ from "@/components/ui/FAQ";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { getServiceById } from "@/lib/supabase/services";
import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params;
  const service = await getServiceById(serviceId);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.id}` },
  };
}

const Page = async ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const resolvedParams = await params;
  const id = resolvedParams.serviceId;
  const service = await getServiceById(id);

  if (!service) {
    notFound();
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
