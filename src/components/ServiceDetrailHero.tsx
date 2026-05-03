import { StyledServiceDetailsHero } from "@/styles/components/Services.styles";
import { StyledLink } from "@/styles/components/Ui.styles";
import { SERVICETYPE } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";

interface PROPS {
  service: SERVICETYPE;
}

const ServiceDetrailHero = ({ service }: PROPS) => {
  const heroImage = service.url[1] || service.url[0];

  return (
    <StyledServiceDetailsHero>
      <article>
        <h1>{service.name}</h1>
        <p>{service.description}</p>
      </article>
      {heroImage ? (
        <Image src={heroImage} width={500} height={500} alt={service.name} />
      ) : (
        <div className="empty-image">
          <MdOutlineImageNotSupported size={64} />
        </div>
      )}
      <StyledLink href="/contact" $variant="secondary">
        {"let's get started"}
      </StyledLink>
    </StyledServiceDetailsHero>
  );
};

export default ServiceDetrailHero;
