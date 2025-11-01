import { StyledFAQ } from "@/styles/components/Services.styles";
import { StyledLink } from "@/styles/components/Ui.styles";
import { SERVICETYPE } from "@/utils/data";
import React from "react";

interface PROPS {
  service: SERVICETYPE;
}
const FAQ = ({ service }: PROPS) => {
  return (
    <StyledFAQ>
      <div>
        <h2>Frequently Asked Questions</h2>

        <ul>
          {service.FAQ.map((faq, i) => (
            <li key={i}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>

        <StyledLink href="/contact" $variant="secondary">
          {"let's get started"}
        </StyledLink>
      </div>
    </StyledFAQ>
  );
};

export default FAQ;
