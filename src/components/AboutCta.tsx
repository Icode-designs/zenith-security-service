import React from "react";
import SectionSwitcher from "./SectionWrapper";
import { StyledAboutCta } from "@/styles/components/About.styles";
import { StyledLink } from "@/styles/components/Ui.styles";

const AboutCta = () => {
  return (
    <SectionSwitcher>
      <StyledAboutCta>
        <article>
          <h2>Get a Free Security Consultation in Los Angeles</h2>
          <p>
            To schedule a free consultation with a Zenith security consultant,
            call (323) 952-1521 or send us your details online. We’ll recommend
            the right armed or unarmed coverage for your site.
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
