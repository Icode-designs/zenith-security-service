import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { StyledContactContent } from "@/styles/components/Contact.styles";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { getServices } from "@/lib/supabase/services";
import React from "react";

const page = async () => {
  const services = await getServices();

  return (
    <StyledMainWrapper>
      <Hero>
        <StyledContactContent>
          <article>
            <h1>Get In Touch With Us Today</h1>
            <p>
              Safeguarding people, property, and peace of mind—reach out today.
            </p>
          </article>
          <ContactForm services={services} />
        </StyledContactContent>
      </Hero>
    </StyledMainWrapper>
  );
};

export default page;
