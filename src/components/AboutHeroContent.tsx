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
          Zenith Protective Services Inc. is a BSIS licensed security guard
          company (PPO #122193) headquartered in Hawthorne, California. We
          provide armed and unarmed security guards across Los Angeles and
          Southern California.
        </p>

        <StyledLink href="/contact" $variant="secondary">
          get a free quote
        </StyledLink>
      </article>
    </StyledAboutHeroContent>
  );
};

export default AboutHeroContent;
