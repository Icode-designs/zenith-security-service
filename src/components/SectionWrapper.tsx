"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
}

export default function SectionSwitcher({ children, id }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ width: "100%", scrollMarginTop: 24 }}
    >
      {children}
    </motion.section>
  );
}
