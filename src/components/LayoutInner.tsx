"use client";

import { useContext } from "react";
import { NAV_CONTEXT } from "@/providers/NavProvider";
import { GlobalStyle } from "@/styles/Global.style";
import Header from "./Header";
import MobileNav from "./ui/MobileNav";
import Footer from "./Footer";
import Callus from "./Callus";

const LayoutInner = ({ children }: { children: React.ReactNode }) => {
  const nav = useContext(NAV_CONTEXT);
  const isOpen = nav?.isOpen ?? false;

  return (
    <>
      <GlobalStyle navOpen={isOpen} />
      {children}
      <MobileNav />
      <Callus />
      <Footer />
    </>
  );
};

export default LayoutInner;
