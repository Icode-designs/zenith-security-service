import { StyledServiceDetailsHero } from "@/styles/components/Services.styles";
import { StyledLink } from "@/styles/components/Ui.styles";
import { SERVICETYPE } from "@/utils/data";
import Image from "next/image";
import React from "react";

interface PROPS {
  service: SERVICETYPE;
}

const ServiceDetrailHero = ({ service }: PROPS) => {
  return (
    <StyledServiceDetailsHero>
      <article>
        <h1>{service.name}</h1>
        <p>{service.description}</p>
      </article>
      <Image src={service.url[1]} width={500} height={500} alt={service.name} />
      <StyledLink href="/contact" $variant="secondary">
        {"let's get started"}
      </StyledLink>
    </StyledServiceDetailsHero>
  );
};

export default ServiceDetrailHero;
