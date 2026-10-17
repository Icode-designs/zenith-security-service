import React from "react";
import {
  StyledAccreditation,
  StyledFooter,
  StyledFooterContent,
} from "@/styles/components/Footer.styles";
import Logo from "./ui/Logo";
import { StyledLink } from "@/styles/components/Ui.styles";
import Link from "next/link";
import { SERVICETYPE } from "@/utils/data";
import { LOCATIONS } from "@/utils/locations";
import { PPO_LICENSE } from "@/utils/company";

interface Props {
  services: SERVICETYPE[];
}

const Footer = ({ services }: Props) => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <Logo />
        <div>
          <h3>Contact us</h3>
          <ul>
            <li>
              {" "}
              <a href="tel:+13239521521" aria-label="Call us at (323) 952-1521">(323) 952-1521</a>
            </li>
            <li>14030 Chadron Avenue Hawthorne, CA 90250</li>

            <StyledLink href="/contact" $variant="secondary">
              get in touch
            </StyledLink>
          </ul>
        </div>
        <div>
          <h3>Our services</h3>
          <ul>
            {services.map((service, i) => (
              <li key={i}>
                <StyledLink href={`/services/${service.id}`}>
                  {service.name}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Zenith</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Service areas</h3>
          <ul>
            {LOCATIONS.map((location) => (
              <li key={location.slug}>
                <Link href={`/${location.slug}`}>{location.city}, CA</Link>
              </li>
            ))}
          </ul>
        </div>
      </StyledFooterContent>
      <StyledAccreditation>
        <div>
          {/* <FlexBox $gap={10}>
            <AiFillInstagram />
            <FaFacebookSquare />
            <FaTwitter />
          </FlexBox> */}
          <div className="legal">
            <span>BSIS {PPO_LICENSE}</span>
            {" | "}
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            {" | "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <p>
            © {new Date().getFullYear()} Zenith Protective Services Inc. | All Rights Reserved |
            Professional Security Solutions 24/7
          </p>
        </div>
      </StyledAccreditation>
    </StyledFooter>
  );
};

export default Footer;
