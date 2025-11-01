import { FlexBox, StyledLink } from "@/styles/components/Ui.styles";
import Image from "next/image";
import React from "react";
import cctv from "@/assets/cctyMonitor.jpg";
import { StyledIntro } from "@/styles/components/Homepage.styles";
import SectionSwitcher from "./SectionWrapper";
import Link from "next/link";

const HomeIntro = () => {
  return (
    <SectionSwitcher>
      <StyledIntro>
        <FlexBox $variant="secondary">
          <article>
            <h2>we understand that safety is a top priority</h2>
            <p>
              At Zenith Protective Services, safety is our top priority. We
              provide highly trained, licensed security professionals armed or
              unarmed to protect your property, staff, and customers. From fire
              watch and hospital security to commercial and hotel protection,
              our team delivers reliable, cost-effective security solutions
              24/7.
            </p>

            <StyledLink href="/contact" $variant="secondary">
              Get a free quote
            </StyledLink>
          </article>
          <div>
            <Image
              src={cctv.src}
              alt="security guard"
              width={600}
              height={400}
              loading="lazy"
            />
          </div>
        </FlexBox>
      </StyledIntro>
    </SectionSwitcher>
  );
};

export default HomeIntro;
