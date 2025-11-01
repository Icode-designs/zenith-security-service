import { FlexBox, StyledLink, StyledCTA } from "@/styles/components/Ui.styles";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Callus() {
  return (
    <StyledCTA>
      <FlexBox $variant="secondary">
        <article>
          <h4>
            Call us today at (323) 952-1521 to schedule a free, no-obligation
            consultation with a Zenith security expert.
          </h4>
          <p>
            We’ll see if our team is good fit for you and brainstorm some ways
            we can help your business thrive.
          </p>
        </article>

        <StyledLink as={Link} href="tel:(323) 952-1521 " $variant="tertiary">
          CALL US TODAY <FaArrowRightLong />
        </StyledLink>
      </FlexBox>
    </StyledCTA>
  );
}

export default Callus;
