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
import { SERVICETYPE } from "@/utils/data";
import emailjs from "@emailjs/browser";
import { FormEvent, useEffect } from "react";
import { StyledError } from "@/styles/components/Homepage.styles";
import { createSubmission } from "@/lib/supabase/form-submissions";
import styled from "styled-components";

// Visually hidden label helper (accessible but invisible)
const VisuallyHidden = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

// Initialize EmailJS once outside the component
emailjs.init({
  publicKey: "stWw7uvY_czmhHtIB",
});

interface Props {
  services: SERVICETYPE[];
}

const ContactForm = ({ services }: Props) => {
  const [selectedValue, setSelectedValue] = useState(services[0]?.name || "");

  useEffect(() => {
    if (services.length > 0 && !selectedValue) {
      setSelectedValue(services[0].name);
    }
    // Only re-run when the services list changes, not on every selectedValue update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Extract form values
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("tel") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Step 1: Send email via EmailJS (preserve existing behavior)
      await emailjs.sendForm("service_6xpf76g", "template_bvzl7eh", form);
      console.log("EmailJS success: Email sent");

      // Step 2: Submit to backend (Supabase)
      const submission = await createSubmission({
        name: `${firstName} ${lastName}`.trim(),
        email,
        phone: phone.trim() || null, // nullable if empty
        service,
        message,
        status: "new",
      });

      console.log("Submission saved:", submission.id);

      // Success: Reset form and show success message
      setSubmitStatus("success");
      form.reset();
      setSelectedValue(services[0]?.name || "");

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionSwitcher>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Get Professional Security Services Today</h3>

        {submitStatus === "error" && (
          <StyledError role="alert" aria-live="assertive">
            Something went wrong. Please try again or contact us directly.
          </StyledError>
        )}

        {submitStatus === "success" && (
          <StyledError
            role="alert"
            aria-live="polite"
            style={{ background: "#16a34a" }}
          >
            Message sent successfully! We&apos;ll be in touch soon.
          </StyledError>
        )}

        <FlexBox $gap={16} $variant="secondary">
          <VisuallyHidden htmlFor="first-name">First Name</VisuallyHidden>
          <StyledInput
            id="first-name"
            type="text"
            name="first-name"
            placeholder="First Name"
            required
            aria-required="true"
          />
          <VisuallyHidden htmlFor="last-name">Last Name</VisuallyHidden>
          <StyledInput
            id="last-name"
            type="text"
            name="last-name"
            placeholder="Last Name"
            required
            aria-required="true"
          />
          <VisuallyHidden htmlFor="company-name">Company Name</VisuallyHidden>
          <StyledInput
            id="company-name"
            type="text"
            name="company-name"
            placeholder="Company Name"
          />
        </FlexBox>

        <VisuallyHidden htmlFor="email">Email Address</VisuallyHidden>
        <StyledInput
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          aria-required="true"
        />

        <FlexBox $gap={16} $variant="secondary">
          <VisuallyHidden htmlFor="tel">Phone Number</VisuallyHidden>
          <StyledInput
            id="tel"
            type="tel"
            name="tel"
            placeholder="Phone Number"
            required
            aria-required="true"
          />
          <VisuallyHidden htmlFor="address">City and State</VisuallyHidden>
          <StyledInput
            id="address"
            type="text"
            name="address"
            placeholder="City and State"
            required
            aria-required="true"
          />
        </FlexBox>

        <VisuallyHidden htmlFor="service">Service Required</VisuallyHidden>
        <StyledSelect
          id="service"
          name="service"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          required
          aria-required="true"
        >
          {services.map((service, i) => (
            <option value={service.name} key={i}>
              {service.name}
            </option>
          ))}
        </StyledSelect>

        <VisuallyHidden htmlFor="message">Message</VisuallyHidden>
        <StyledTextarea
          id="message"
          name="message"
          placeholder="Brief description of your security needs"
          required
          aria-required="true"
        />

        <StyledButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </StyledButton>
      </StyledForm>
    </SectionSwitcher>
  );
};

export default ContactForm;
