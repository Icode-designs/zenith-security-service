"use client";
import React, { createContext, useState, ReactNode } from "react";

interface NavContext {
  isOpen: boolean;
  toggleNav: () => void;
}

export const NAV_CONTEXT = createContext<NavContext | null>(null);

interface NavContextProviderProps {
  children: ReactNode;
}

const NavContextProvider: React.FC<NavContextProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <NAV_CONTEXT.Provider value={{ isOpen, toggleNav }}>
      {children}
    </NAV_CONTEXT.Provider>
  );
};

export default NavContextProvider;
