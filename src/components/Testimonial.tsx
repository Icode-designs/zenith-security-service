"use client";
import React, { useState, useEffect } from "react";
import {
  StyledTesimonialCard,
  StyledTestimonialsBox,
} from "@/styles/components/Homepage.styles";
import { FlexBox } from "@/styles/components/Ui.styles";
import missionImg from "@/assets/missionImg.jpg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/utils/data";
import { GoDotFill } from "react-icons/go";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate testimonials every 10 seconds
  useEffect(() => {
    if (paused) return; // stop rotation while paused

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [paused]);

  const testimonial = TESTIMONIALS[index];

  return (
    <StyledTestimonialsBox>
      {/* --- Mission Section --- */}
      <FlexBox $variant="secondary">
        <h2>What Is Our Mission At Zenith Protective Services?</h2>
        <Image
          src={missionImg.src}
          width={500}
          height={500}
          alt="mission img"
          priority
        />
      </FlexBox>

      {/* --- Testimonials Section --- */}
      <FlexBox>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <StyledTesimonialCard
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <p>{testimonial.quote}</p>
              <h4>— {testimonial.author}</h4>
            </StyledTesimonialCard>
          </motion.div>
        </AnimatePresence>

        {/* --- Dots Navigation --- */}
        <div className="testimonial-dots">
          {TESTIMONIALS.map((_, i) => (
            <GoDotFill
              key={i}
              size={20}
              onClick={() => setIndex(i)}
              className={i === index ? "active" : undefined}
            />
          ))}
        </div>
      </FlexBox>
    </StyledTestimonialsBox>
  );
};

export default Testimonial;
