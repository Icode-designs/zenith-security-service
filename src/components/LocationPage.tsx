import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionSwitcher from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import Services from "@/components/Services";
import { StyledLink, StyledMainWrapper } from "@/styles/components/Ui.styles";
import {
  StyledLocationCTA,
  StyledLocationFAQ,
  StyledLocationHero,
  StyledLocalIntro,
  StyledWhy,
} from "@/styles/components/Location.styles";
import { getServices } from "@/lib/supabase/services";
import {
  LocationPageData,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/utils/locations";

const SITE_URL = "https://www.zenithprotectiveservice.site";

interface Props {
  location: LocationPageData;
}

const LocationPage = async ({ location }: Props) => {
  const services = await getServices();
  const pageUrl = `${SITE_URL}/${location.slug}`;

  // Structured data: the business serving this area + the page FAQs.
  // No street address here — the office is in Hawthorne; these are service areas.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SecurityService",
        "@id": `${pageUrl}#service`,
        name: `Zenith Protective Services — ${location.city}`,
        url: pageUrl,
        telephone: PHONE_DISPLAY,
        description: location.metaDescription,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        areaServed: location.serviceArea.map((name) => ({
          "@type": "City",
          name: `${name}, CA`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: location.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <StyledMainWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero>
        <StyledLocationHero>
          <article>
            <h1>
              {location.h1}{" "}
              <span>{location.h1Sub}</span>
            </h1>
            <p>{location.intro}</p>
            <p className="tagline">{location.tagline}</p>
            <div className="ctas">
              <StyledLink $variant="primary" href={PHONE_TEL}>
                {location.callLabel}
              </StyledLink>
              <StyledLink $variant="secondary" href="#quote">
                {location.quoteLabel}
              </StyledLink>
            </div>
          </article>
          <Image
            src={location.heroImage}
            alt={location.heroImageAlt}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </StyledLocationHero>
      </Hero>

      <SectionSwitcher>
        <StyledLocalIntro>
          <h2>{location.localTitle}</h2>
          {location.localParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </StyledLocalIntro>
      </SectionSwitcher>

      <Services services={services} />

      <SectionSwitcher>
        <StyledWhy>
          <h2>{location.whyTitle}</h2>
          <ul>
            {location.whyPoints.map((point) => (
              <li key={point.label}>
                <strong>{point.label}</strong>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
          <div className="area">
            <h3>Service Area</h3>
            <ul>
              {location.serviceArea.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </StyledWhy>
      </SectionSwitcher>

      <SectionSwitcher>
        <StyledLocationFAQ>
          <h2>{location.faqTitle}</h2>
          <ul>
            {location.faqs.map((faq) => (
              <li key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </StyledLocationFAQ>
      </SectionSwitcher>

      <SectionSwitcher>
        <StyledLocationCTA>
          <h2>{location.finalCtaTitle}</h2>
          <p>{location.finalCtaBody}</p>
          <StyledLink $variant="primary" href={PHONE_TEL}>
            Call {PHONE_DISPLAY}
          </StyledLink>
          <p className="zips">{location.zipLine}</p>
        </StyledLocationCTA>
      </SectionSwitcher>

      <ContactForm services={services} id="quote" />
    </StyledMainWrapper>
  );
};

export default LocationPage;
