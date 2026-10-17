import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PHONE_DISPLAY, PHONE_TEL } from "@/utils/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Zenith Protective Services collects, uses, and protects your information, including your California (CCPA) privacy rights.",
  alternates: { canonical: "/privacy-policy" },
};

const Phone = () => <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>;

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        <strong>Your privacy is important to us.</strong> This policy explains
        what we collect and how we use it.
      </p>

      <section>
        <h2>What We Collect</h2>
        <p>
          When you call <Phone /> or fill out a quote form, we collect: Name,
          Phone, Email, Company Name, Site Address, Service Type. We also
          collect basic website analytics via Google Analytics.
        </p>
      </section>

      <section>
        <h2>How We Use It</h2>
        <ul>
          <li>To provide quotes and dispatch security guards</li>
          <li>To send Daily Activity Reports (DARs) and invoices</li>
          <li>
            To respond to your inquiries at <Phone />
          </li>
          <li>To improve our website</li>
        </ul>
        <p>
          We do NOT sell your personal information. We do NOT share it except
          with service providers needed to run our business (e.g., website
          hosting).
        </p>
      </section>

      <section>
        <h2>Your California Rights (CCPA)</h2>
        <p>If you are a California resident, you have the right to:</p>
        <ul>
          <li>Request what data we have about you</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of sale (we don&apos;t sell data)</li>
        </ul>
        {/* TODO: add the company email here once provided, e.g. "or email info@..." */}
        <p>
          To exercise your rights, call <Phone />.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We take reasonable steps to protect your data. Data is stored in the
          United States.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Our website uses cookies for analytics. You can disable cookies in
          your browser settings.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Our services are for businesses. We do not knowingly collect data
          from children under 16.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>If we update this policy, we will post the new date above.</p>
      </section>

      <p>
        <strong>Questions?</strong> Call <Phone />.
      </p>
    </LegalPage>
  );
}
