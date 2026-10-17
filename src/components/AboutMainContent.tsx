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
        <h2>A Licensed Security Guard Company in Hawthorne, California</h2>
        <div>
          <Image
            src={aboutImg.src}
            width={500}
            height={500}
            alt="Zenith security guard patrolling an apartment complex with a radio"
            loading="lazy"
          />
          <article>
            <p>
              Zenith Protective Services Inc. is a security guard company based
              in Hawthorne, California. We build customized security plans for
              construction sites, hospitals, warehouses, financial
              institutions, apartment complexes, hotels, and commercial
              properties across Los Angeles, the Inland Empire, and Antelope
              Valley.
            </p>
            <p>
              Our guards are trained in fire watch and first aid (CPR), hold
              California guard cards, and pass background checks, so they are
              ready for the situations your site actually faces. You get Daily
              Activity Reports that show what happened on every shift.
            </p>
            <p>
              We’re not a corporate giant, nor do we strive to be. We focus on
              security that fits your site, and on making every client feel
              safe, supported, and satisfied for as long as we work together.
              Every member of the Zenith team is committed to performance and
              integrity, because our success depends on your safety.
            </p>
            <FlexBox $variant="secondary">
              <StyledLink $variant="secondary" href="/contact">
                ready to get started?
              </StyledLink>
              <StyledLink
                $variant="tertiary"
                href="tel:+13239521521"
                aria-label="Call us at (323) 952-1521"
              >
                <p>(323) 952-1521</p>
                <FaArrowRightLong aria-hidden="true" />
              </StyledLink>
            </FlexBox>
          </article>
        </div>
      </StyledAboutContent>
    </SectionSwitcher>
  );
};

export default AboutMainContent;
