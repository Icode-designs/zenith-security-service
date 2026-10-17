import { FlexBox, StyledLink } from "@/styles/components/Ui.styles";
import Image from "next/image";
import React from "react";
import cctv from "@/assets/hotel-security-1.jpeg";
import { StyledIntro } from "@/styles/components/Homepage.styles";
import SectionSwitcher from "./SectionWrapper";

const HomeIntro = () => {
  return (
    <SectionSwitcher>
      <StyledIntro>
        <FlexBox $variant="secondary">
          <article>
            <h2>Armed & Unarmed Security Guards, Available 24/7</h2>
            <p>
              Zenith Protective Services is a BSIS licensed security guard
              company (PPO #122193) based in Hawthorne, California. Our armed
              and unarmed security guards protect your property, staff, and
              customers, from fire watch and hospital security to construction
              sites, commercial buildings, and hotels.
            </p>
            <p>
              Every guard holds a California guard card and passes a background
              check, and we staff posts around the clock across Los Angeles
              County, the Inland Empire, and Antelope Valley.
            </p>

            <StyledLink href="/contact" $variant="secondary">
              Get a free quote
            </StyledLink>
          </article>
          <div>
            <Image
              src={cctv.src}
              alt="Zenith security officer monitoring CCTV cameras"
              width={600}
              height={400}
              priority
            />
          </div>
        </FlexBox>
      </StyledIntro>
    </SectionSwitcher>
  );
};

export default HomeIntro;
