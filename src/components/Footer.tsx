import React from "react";
import {
  StyledAccreditation,
  StyledFooter,
  StyledFooterContent,
} from "@/styles/components/Footer.styles";
import Logo from "./ui/Logo";
import { FlexBox, StyledLink } from "@/styles/components/Ui.styles";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SERVICES_LIST } from "@/utils/data";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <Logo />
        <ul>
          <h4>Contact us</h4>

          <li>
            {" "}
            <a href="tel:(323) 952-1521">(323) 952-1521</a>
          </li>
          <li>14030 Chadron Avenue Hawthorne, CA 90250</li>

          <StyledLink href="/contact" $variant="secondary">
            get in touch
          </StyledLink>
        </ul>
        <ul>
          <h4>our services</h4>
          {SERVICES_LIST.map((service, i) => (
            <li key={i}>
              <StyledLink href={`/services/service/${service.id}`}>
                {service.name}
              </StyledLink>
            </li>
          ))}
        </ul>

        <ul>
          <h4>Quick links</h4>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">about zenith</Link>
          </li>
          <li>
            <Link href="/services">services</Link>
          </li>
          <li>
            <Link href="/contact">contact us</Link>
          </li>
        </ul>
      </StyledFooterContent>
      <StyledAccreditation>
        <div>
          {/* <FlexBox $gap={10}>
            <AiFillInstagram />
            <FaFacebookSquare />
            <FaTwitter />
          </FlexBox> */}
          <p>
            © 2025 Zenith Protective Services Inc. | All Rights Reserved |
            Professional Security Solutions 24/7
          </p>
        </div>
      </StyledAccreditation>
    </StyledFooter>
  );
};

export default Footer;
