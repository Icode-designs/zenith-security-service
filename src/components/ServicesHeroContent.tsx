import { StyledServiceContent } from "@/styles/components/Services.styles";
import Image from "next/image";
import React from "react";
import image from "@/assets/servicesHeroImg.jpg";

const ServicesHeroContent = () => {
  return (
    <StyledServiceContent>
      <article>
        <h1>Our Security Services</h1>
        <p>
          {" "}
          0ur full range of security services is built to safeguard people,
          property, and businesses. Discover our specialized guard services
          tailored to your needs.
        </p>
      </article>
      <div>
        <Image
          src={image.src}
          width={1500}
          height={1000}
          alt="service page image"
        />
      </div>
    </StyledServiceContent>
  );
};

export default ServicesHeroContent;
