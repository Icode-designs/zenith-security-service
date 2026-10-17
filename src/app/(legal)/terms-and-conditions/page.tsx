import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PHONE_DISPLAY, PHONE_TEL, PPO_LICENSE } from "@/utils/company";
import { pageOpenGraph } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Zenith Protective Services, a BSIS licensed Private Patrol Operator in California.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: pageOpenGraph({
    path: "/terms-and-conditions",
    title: "Terms and Conditions | Zenith Protective Services",
    description: "Terms and conditions for Zenith Protective Services, a BSIS licensed Private Patrol Operator in California.",
  }),
};

const Phone = () => <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>;

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <p>
        Welcome to Zenith Protective Services. By visiting our website or
        requesting a quote at <Phone />, you agree to these terms.
      </p>

      <section>
        <h2>1. Licensing</h2>
        <p>
          Zenith Protective Services is a licensed Private Patrol Operator (PPO)
          in California.
        </p>
        <p>
          <strong>BSIS PPO License: {PPO_LICENSE}</strong>
        </p>
        <p>
          We are a private security company. We are not law enforcement and
          have no affiliation with any police department.
        </p>
      </section>

      <section>
        <h2>2. Quotes and Service Agreements</h2>
        <p>
          All quotes given on our website or by phone at <Phone /> are estimates.
          Final pricing is based on site assessment, armed vs unarmed, risk
          level, and hours. Services require a signed Security Services
          Agreement.
        </p>
      </section>

      <section>
        <h2>3. No Guarantee</h2>
        <p>
          We provide professional security presence and deterrence. We cannot
          guarantee prevention of theft, vandalism, trespassing, or loss. Our
          services reduce risk, not eliminate it.
        </p>
      </section>

      <section>
        <h2>4. Client Responsibilities</h2>
        <p>
          Client agrees to provide safe working conditions, site access, and
          accurate information about hazards at the site.
        </p>
      </section>

      <section>
        <h2>5. Liability Limit</h2>
        <p>
          To the fullest extent allowed by California law, our liability is
          limited to the amount paid for services in the last 30 days. We carry
          General Liability and Workers Compensation insurance. Certificate
          available on request by calling <Phone />.
        </p>
      </section>

      <section>
        <h2>6. Cancellation Policy</h2>
        <p>
          Month-to-month service. Requires 14-day written notice to cancel.
          Same-day cancellation may incur a full shift charge.
        </p>
      </section>

      <section>
        <h2>7. Website Content</h2>
        <p>
          All content on this site is property of Zenith Protective Services. Do
          not copy without permission.
        </p>
      </section>

      <section>
        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of California. Any
          disputes will be resolved in Los Angeles County.
        </p>
      </section>

      <p>
        For questions, call <Phone />.
      </p>
    </LegalPage>
  );
}
