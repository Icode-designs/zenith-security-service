"use client";
import { NAV_CONTEXT } from "@/providers/NavProvider";
import { StyledMobileNav } from "@/styles/components/Header.styles";
import { FlexBox, StyledLink } from "@/styles/components/Ui.styles";
import Link from "next/link";
import React, { useContext } from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const MobileNav = () => {
  const navCtx = useContext(NAV_CONTEXT);
  if (!navCtx) return null;
  const { isOpen, toggleNav } = navCtx;
  return (
    <StyledMobileNav $isOpen={isOpen}>
      <div>
        <button onClick={toggleNav} className="close-btn">
          <IoClose />
        </button>
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
            <StyledLink href="/contact" $variant="primary">
              <p>contact us</p>
            </StyledLink>
          </li>
          <li>
            <StyledLink $variant="tertiary" href="tel: (323) 952-1521">
              <BsFillTelephoneOutboundFill />
              <p>(323) 952-1521</p>
            </StyledLink>
          </li>
        </ul>
      </div>
    </StyledMobileNav>
  );
};

export default MobileNav;
