import React from "react";
import Hero from "@/components/Hero";
import SectionSwitcher from "@/components/SectionWrapper";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import {
  StyledLegalContent,
  StyledLegalHero,
} from "@/styles/components/Legal.styles";
import {
  COMPANY_NAME,
  LEGAL_EFFECTIVE_DATE,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/utils/company";

interface Props {
  title: string;
  children: React.ReactNode;
}

// Shared layout for Terms and Privacy pages
const LegalPage = ({ title, children }: Props) => {
  return (
    <StyledMainWrapper>
      <Hero>
        <StyledLegalHero>
          <h1>{title}</h1>
          <p>Effective Date: {LEGAL_EFFECTIVE_DATE}</p>
        </StyledLegalHero>
      </Hero>

      <SectionSwitcher>
        <StyledLegalContent>
          <div className="meta">
            <span>
              <strong>Effective Date:</strong> {LEGAL_EFFECTIVE_DATE}
            </span>
            <span>
              <strong>Contact:</strong> {COMPANY_NAME} | Phone:{" "}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </span>
          </div>
          {children}
        </StyledLegalContent>
      </SectionSwitcher>
    </StyledMainWrapper>
  );
};

export default LegalPage;
