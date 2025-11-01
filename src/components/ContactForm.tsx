"use client";
import React, { useState } from "react";
import SectionSwitcher from "./SectionWrapper";
import {
  FlexBox,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledTextarea,
} from "@/styles/components/Ui.styles";
import { SERVICES_LIST } from "@/utils/data";

const ContactForm = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <SectionSwitcher>
      <StyledForm>
        <h3>Get Professional Security Services Today</h3>
        <FlexBox $gap={16} $variant="secondary">
          <StyledInput type="text" name="first-name" placeholder="First Name" />
          <StyledInput type="text" name="last-name" placeholder="Last Name" />
          <StyledInput
            type="text"
            name="company-name"
            placeholder="Company Name"
          />
        </FlexBox>
        <StyledInput type="email" name="email" placeholder="Email Address" />
        <FlexBox $gap={16} $variant="secondary">
          <StyledInput type="number" name="tel" placeholder="Phone Number" />
          <StyledInput
            type="text"
            name="address"
            placeholder="City and State"
          />
        </FlexBox>
        <StyledSelect
          id="service"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
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
        />
      </StyledForm>
    </SectionSwitcher>
  );
};

export default ContactForm;
