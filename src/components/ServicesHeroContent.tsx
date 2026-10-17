import { StyledServiceContent } from "@/styles/components/Services.styles";
import Image from "next/image";
import React from "react";
import image from "@/assets/servicesHeroImg.jpg";

const ServicesHeroContent = () => {
  return (
    <StyledServiceContent>
      <article>
        <h1>Our Security Guard Services in California</h1>
        <p>
          Licensed armed and unarmed security guards for construction sites,
          hospitals, hotels, commercial properties, and fire watch, available
          24/7 across Los Angeles, the Inland Empire, and Antelope Valley.
        </p>
      </article>
      <div>
        <Image
          src={image.src}
          width={1500}
          height={1000}
          alt="Zenith security guard on duty"
          priority
        />
      </div>
    </StyledServiceContent>
  );
};

export default ServicesHeroContent;
