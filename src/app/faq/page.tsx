import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionSwitcher from "@/components/SectionWrapper";
import { StyledLink, StyledMainWrapper } from "@/styles/components/Ui.styles";
import {
  StyledFaqContent,
  StyledFaqCta,
  StyledFaqHero,
} from "@/styles/components/Faq.styles";
import { FAQ_GROUPS, FAQ_LAST_UPDATED } from "@/utils/faqs";
import { PHONE_DISPLAY, PHONE_TEL } from "@/utils/company";

const SITE_URL = "https://www.zenithprotectiveservice.site";

export const metadata: Metadata = {
  title: { absolute: "Security Guard Services FAQ | Zenith Protective Services" },
  description:
    "Answers about Zenith's licensed security guards: armed vs unarmed, fire watch, service areas, pricing, contracts, reporting, and how fast we can start.",
  alternates: { canonical: "/faq" },
};

// FAQPage markup describes the visible questions for search engines and AI
// assistants. (Google no longer shows FAQ rich results, so this is semantic only.)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faq`,
  url: `${SITE_URL}/faq`,
  dateModified: "2026-10-17",
  mainEntity: FAQ_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  ),
};

export default function FaqPage() {
  return (
    <StyledMainWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero>
        <StyledFaqHero>
          <h1>Security Guard Services: Frequently Asked Questions</h1>
          <p>
            Answers about our licensed security guards, services, service
            areas, pricing, and contracts. Can’t find your question? Call{" "}
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>.
          </p>
          <nav aria-label="FAQ topics">
            <ul>
              {FAQ_GROUPS.map((group) => (
                <li key={group.id}>
                  <a href={`#${group.id}`}>{group.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </StyledFaqHero>
      </Hero>

      <SectionSwitcher>
        <StyledFaqContent>
          <p className="updated">Last updated: {FAQ_LAST_UPDATED}</p>

          {FAQ_GROUPS.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
              <h2 id={`${group.id}-title`}>{group.title}</h2>
              {group.items.map((item) => (
                <details key={item.question}>
                  <summary>
                    <h3>{item.question}</h3>
                  </summary>
                  <div className="answer">
                    <p>{item.answer}</p>
                    {item.link && (
                      <Link href={item.link.href}>{item.link.label}</Link>
                    )}
                  </div>
                </details>
              ))}
            </section>
          ))}

          <StyledFaqCta>
            <h2>Still Have Questions?</h2>
            <p>
              Talk to a Zenith security consultant about your site. Consultations
              are free and carry no obligation.
            </p>
            <div>
              <StyledLink $variant="primary" href={PHONE_TEL}>
                Call {PHONE_DISPLAY}
              </StyledLink>
              <StyledLink $variant="secondary" href="/contact">
                Get a free quote
              </StyledLink>
            </div>
          </StyledFaqCta>
        </StyledFaqContent>
      </SectionSwitcher>
    </StyledMainWrapper>
  );
}
