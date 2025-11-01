import { StyledHero } from "@/styles/components/Ui.styles";
import React from "react";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

const Hero = ({ children }: Props) => {
  return (
    <StyledHero>
      <Header />
      {children}
    </StyledHero>
  );
};

export default Hero;
