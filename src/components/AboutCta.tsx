import React from "react";
import SectionSwitcher from "./SectionWrapper";
import { StyledAboutCta } from "@/styles/components/About.styles";
import { StyledLink } from "@/styles/components/Ui.styles";

const AboutCta = () => {
  return (
    <SectionSwitcher>
      <StyledAboutCta>
        <article>
          <h2>
            We Are A Results-Driven Security Company That Is Committed To Your
            Safety
          </h2>
          <p>
            To schedule a free consultation with your dedicated Security
            Solutions Consultant, contact us today at (323) 952-1521 or reach
            out to us online.
          </p>
          <StyledLink href="/contact" $variant="secondary">
            get in touch with us today
          </StyledLink>
        </article>
      </StyledAboutCta>
    </SectionSwitcher>
  );
};

export default AboutCta;
