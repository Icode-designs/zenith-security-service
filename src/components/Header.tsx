"use client";
import { StyledHeader } from "@/styles/components/Header.styles";
import React, { useContext } from "react";
import Logo from "./ui/Logo";
import useMedia from "@/hooks/useMedia";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FlexBox, StyledLink } from "@/styles/components/Ui.styles";
import Link from "next/link";
import { NAV_CONTEXT } from "@/providers/NavProvider";
import { p } from "framer-motion/client";

const Header = () => {
  const isTablet = useMedia("TABLET");
  const navCtx = useContext(NAV_CONTEXT);
  if (!navCtx) return null;

  const { toggleNav } = navCtx;

  return (
    <StyledHeader>
      <div>
        <Logo />

        <nav>
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
          </ul>
        </nav>

        <FlexBox $gap={16}>
          <a href="tel:(323) 952-1521">
            <FlexBox $gap={16}>
              {" "}
              <BsFillTelephoneOutboundFill />
              {isTablet && <p>(323) 952-1521</p>}
            </FlexBox>
          </a>
          {!isTablet && (
            <button onClick={toggleNav}>
              <HiOutlineMenuAlt3 />
            </button>
          )}
          {isTablet && (
            <StyledLink $variant="primary" href="/contact">
              contact us
            </StyledLink>
          )}
        </FlexBox>
      </div>
    </StyledHeader>
  );
};

export default Header;
