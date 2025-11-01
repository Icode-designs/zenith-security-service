import React from "react";
import SectionSwitcher from "./SectionWrapper";
import { StyledAboutContent } from "@/styles/components/About.styles";
import Image from "next/image";
import aboutImg from "@/assets/aboutImg.jpg";
import { FlexBox, StyledLink } from "@/styles/components/Ui.styles";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutMainContent = () => {
  return (
    <SectionSwitcher>
      <StyledAboutContent>
        <h2>
          US-based Multinational Security Services Company in Hawthorne,
          California.
        </h2>
        <div>
          <Image
            src={aboutImg.src}
            width={500}
            height={500}
            alt="about content image"
          />
          <article>
            <p>
              Zenith  protective services Inc is a leading security company
              based in Hawthorne, California. We specialize in providing
              customized security solutions for construction sites, hospitals,
              warehouses, financial institution, and apartment complexes. Our
              highly trained guards undergo advanced training in fire watch ,
              first aid(CPR) ensuring that they are prepared to handle any
              situation.  and , offering our clients peace of mind knowing that
              their property is protected. Our commitment to excellence and
              customer satisfaction sets us apart in the security industry.
              Trust Zenith Protective Services to provide the highest level of
              security for your needs. At Zenith Protective Services Inc., we
              take pride in the quality and reliability of the protection we
              deliver. We’re not a corporate giant, nor do we strive to be.
              Simply put, we are committed to providing only the most effective
              security solutions tailored to your unique needs. Our mission is
              to ensure that every client feels safe, supported, and satisfied
              with the services we provide throughout our entire working
              relationship. Every member of the Zenith team is dedicated to
              performance and integrity; our success depends on your safety and
              peace of mind.
            </p>
            <FlexBox $variant="secondary">
              <StyledLink $variant="secondary" href="/contact">
                ready to get started?
              </StyledLink>
              <StyledLink $variant="tertiary" href="/tel:(323) 952-1521">
                <p>(323) 952-1521</p>
                <FaArrowRightLong />
              </StyledLink>
            </FlexBox>
          </article>
        </div>
      </StyledAboutContent>
    </SectionSwitcher>
  );
};

export default AboutMainContent;
