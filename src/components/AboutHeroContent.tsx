import { StyledAboutHeroContent } from "@/styles/components/About.styles";
import { StyledLink } from "@/styles/components/Ui.styles";
import React from "react";

const AboutHeroContent = () => {
  return (
    <StyledAboutHeroContent>
      <article>
        <h1>
          About <span>Zenith</span> Protective Services
        </h1>
        <p>
          Zenith Protective Services Inc is a US-based multinational security
          services company headquartered in Hawthorne, California that provides
          a full range of comprehensive security services.
        </p>

        <StyledLink href="/contact" $variant="secondary">
          lets get started
        </StyledLink>
      </article>
    </StyledAboutHeroContent>
  );
};

export default AboutHeroContent;
