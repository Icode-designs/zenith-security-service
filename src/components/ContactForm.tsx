"use client";
import React, { useState } from "react";
import SectionSwitcher from "./SectionWrapper";
import {
  FlexBox,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledTextarea,
} from "@/styles/components/Ui.styles";
import { SERVICES_LIST } from "@/utils/data";
import emailjs from "@emailjs/browser";
import { FormEvent } from "react";
import { StyledError } from "@/styles/components/Homepage.styles";

// Initialize EmailJS once outside the component
emailjs.init({
  publicKey: "stWw7uvY_czmhHtIB",
});

const ContactForm = () => {
  const [selectedValue, setSelectedValue] = useState(
    SERVICES_LIST[0]?.name || ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .sendForm("service_6xpf76g", "template_bvzl7eh", form)
      .then((result) => {
        console.log("Success:", result.text);
        setSubmitStatus("success");
        setIsSubmitting(false);

        // Reset form
        form.reset();
        setSelectedValue(SERVICES_LIST[0]?.name || "");

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitStatus("error");
        setIsSubmitting(false);
      });
  };

  return (
    <SectionSwitcher>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Get Professional Security Services Today</h3>

        {submitStatus === "error" && (
          <StyledError>
            Something went wrong. Please try again or contact us directly.
          </StyledError>
        )}

        <FlexBox $gap={16} $variant="secondary">
          <StyledInput
            type="text"
            name="first-name"
            placeholder="First Name"
            required
          />
          <StyledInput
            type="text"
            name="last-name"
            placeholder="Last Name"
            required
          />
          <StyledInput
            type="text"
            name="company-name"
            placeholder="Company Name"
          />
        </FlexBox>

        <StyledInput
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />

        <FlexBox $gap={16} $variant="secondary">
          <StyledInput
            type="tel"
            name="tel"
            placeholder="Phone Number"
            required
          />
          <StyledInput
            type="text"
            name="address"
            placeholder="City and State"
            required
          />
        </FlexBox>

        <StyledSelect
          id="service"
          name="service"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          required
        >
          {SERVICES_LIST.map((service, i) => (
            <option value={service.name} key={i}>
              {service.name}
            </option>
          ))}
        </StyledSelect>

        <StyledTextarea
          name="message"
          placeholder="Brief description of your security needs"
          required
        />

        <StyledButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </StyledButton>
      </StyledForm>
    </SectionSwitcher>
  );
};

export default ContactForm;
