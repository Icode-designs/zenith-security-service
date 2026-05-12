import { StyledLogo } from "@/styles/components/Ui.styles";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" aria-label="Zenith Protective Services home">
      <StyledLogo
        src={logo.src}
        width={500}
        height={700}
        alt="Zenith Protective Services logo"
        priority
      />
    </Link>
  );
};

export default Logo;
