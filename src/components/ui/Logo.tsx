import { StyledLogo } from "@/styles/components/Ui.styles";
import React from "react";
import logo from "@/assets/1x/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <StyledLogo
        src={logo.src}
        width={50}
        height={70}
        alt="Zenith protective service logo"
      />
    </Link>
  );
};

export default Logo;
