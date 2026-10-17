import { FlexBox, StyledLink, StyledCTA } from "@/styles/components/Ui.styles";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Callus() {
  return (
    <StyledCTA>
      <FlexBox $variant="secondary">
        <article>
          <h2 className="cta-heading">
            Call us today at (323) 952-1521 to schedule a free, no-obligation
            consultation with a Zenith security expert.
          </h2>
          <p>
            We’ll assess your site, recommend armed or unarmed coverage, and
            give you a free quote.
          </p>
        </article>

        <StyledLink as={Link} href="tel:+13239521521" $variant="tertiary" aria-label="Call us today at (323) 952-1521">
          CALL US TODAY <FaArrowRightLong aria-hidden="true" />
        </StyledLink>
      </FlexBox>
    </StyledCTA>
  );
}

export default Callus;
