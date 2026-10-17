import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { StyledContactContent } from "@/styles/components/Contact.styles";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { getServices } from "@/lib/supabase/services";
import React from "react";

export const metadata = {
  title: { absolute: "Contact Zenith | Free Security Guard Quote, Los Angeles" },
  description:
    "Request a free security guard quote from Zenith Protective Services. Call (323) 952-1521 or send your details. Licensed guards in Los Angeles, 24/7.",
  alternates: { canonical: "/contact" },
};

const page = async () => {
  const services = await getServices();

  return (
    <StyledMainWrapper>
      <Hero>
        <StyledContactContent>
          <article>
            <h1>Request a Free Security Guard Quote</h1>
            <p>
              Tell us about your site and we’ll recommend armed or unarmed
              coverage. Prefer to talk? Call (323) 952-1521.
            </p>
          </article>
          <ContactForm services={services} />
        </StyledContactContent>
      </Hero>
    </StyledMainWrapper>
  );
};

export default page;
