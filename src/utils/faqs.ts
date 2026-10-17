// General FAQ page content (/faq).
// Every answer is based on facts already published on the site or supplied by
// the client (licence, services, service areas, terms). Keep answers short and
// lead with the direct answer so search engines and AI assistants can quote them.

import { ADDRESS, PHONE_DISPLAY, PPO_LICENSE } from "./company";

export const FAQ_LAST_UPDATED = "October 17, 2026";

export interface FaqItem {
  question: string;
  answer: string;
  // Optional internal link shown under the answer
  link?: { href: string; label: string };
}

export interface FaqGroup {
  id: string; // used for in-page anchors
  title: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "licensing",
    title: "Licensing, Insurance & Our Guards",
    items: [
      {
        question: "Is Zenith Protective Services a licensed security company?",
        answer: `Yes. Zenith Protective Services Inc. is a licensed Private Patrol Operator in California, regulated by the Bureau of Security and Investigative Services (BSIS). Our license number is BSIS ${PPO_LICENSE}. We are a private security company, not law enforcement, and we have no affiliation with any police department.`,
      },
      {
        question: "Are your security guards background-checked?",
        answer:
          "Yes. Every Zenith security guard holds a California guard card and passes a background check before working a post. Our armed guards are also licensed and firearm-permitted.",
      },
      {
        question: "What training do your security guards have?",
        answer:
          "Our guards are trained in fire watch and first aid (CPR). Armed guards are firearm-permitted and de-escalation trained. We also match officers to the environment they protect, such as construction sites, hospitals, hotels, warehouses, and commercial properties.",
      },
      {
        question: "Is Zenith Protective Services insured?",
        answer: `Yes. We carry General Liability and Workers Compensation insurance. A certificate of insurance is available on request; call ${PHONE_DISPLAY} and we will send it over.`,
      },
    ],
  },
  {
    id: "services",
    title: "Security Guard Services",
    items: [
      {
        question: "What security guard services do you offer?",
        answer:
          "We provide armed and unarmed security guards, commercial security guards, construction site security, fire watch security guards, hospital security, and hotel security services. We also offer mobile patrol and alarm response with marked vehicles for after-hours checks across multiple lots.",
        link: { href: "/services", label: "See all security guard services" },
      },
      {
        question: "Do you provide both armed and unarmed security guards?",
        answer:
          "Yes. We provide both armed and unarmed security guards. We recommend armed or unarmed coverage based on your site, your hours, and your risk level, and we can explain the difference during a free consultation.",
        link: {
          href: "/services/armed-and-unarmed-guards",
          label: "Armed & unarmed guards",
        },
      },
      {
        question: "What is a fire watch guard, and when do I need one?",
        answer:
          "A fire watch guard patrols your building to spot and respond to fire hazards when fire safety systems are down, under maintenance, or when the fire marshal or another authority requires a fire watch. Coverage can run 24/7 until your systems are restored.",
        link: {
          href: "/services/fire-watch-security-guards",
          label: "Fire watch security guards",
        },
      },
      {
        question: "What types of properties do you protect?",
        answer:
          "We protect construction sites, hospitals and medical facilities, warehouses and distribution centers, financial institutions, apartment complexes, hotels, retail centers, and commercial buildings. Every site gets a security plan built around its own risks and hours.",
      },
      {
        question: "Do you offer 24/7 security guard coverage?",
        answer:
          "Yes. Our security guards are available 24 hours a day, 7 days a week, including overnight and weekend shifts. Coverage can be short-term, such as fire watch until repairs are complete, or ongoing.",
      },
    ],
  },
  {
    id: "areas",
    title: "Service Areas",
    items: [
      {
        question: "Where is Zenith Protective Services located?",
        answer: `Our office is at ${ADDRESS}, in Los Angeles County. You can reach us by phone at ${PHONE_DISPLAY}.`,
        link: { href: "/contact", label: "Contact Zenith" },
      },
      {
        question: "What areas do you provide security guards in?",
        answer:
          "We provide security guards across Southern California, including Los Angeles County, the Inland Empire (San Bernardino, Fontana, Ontario, Rancho Cucamonga, Redlands, Rialto, and Colton), and Antelope Valley (Lancaster, Palmdale, Rosamond, Quartz Hill, and Mojave).",
      },
      {
        question: "Do you provide security guards in San Bernardino?",
        answer:
          "Yes. We provide armed and unarmed security guards in San Bernardino and across the Inland Empire, with a focus on warehouse and distribution security, construction sites, industrial plants, and retail centers.",
        link: {
          href: "/security-guard-service-san-bernardino-ca",
          label: "Security guard service in San Bernardino",
        },
      },
      {
        question: "Do you provide security guards in Lancaster and Palmdale?",
        answer:
          "Yes. We cover Lancaster, Palmdale, and all of Antelope Valley, including aerospace and manufacturing plants, warehouses on the Sierra Hwy corridor, construction sites, retail centers, and remote sites such as solar farms.",
        link: {
          href: "/security-guard-service-lancaster-ca",
          label: "Security guard service in Lancaster",
        },
      },
    ],
  },
  {
    id: "quotes",
    title: "Quotes, Pricing & Contracts",
    items: [
      {
        question: "How much does a security guard cost?",
        answer:
          "Pricing depends on your site assessment, whether you need armed or unarmed guards, your risk level, and the hours of coverage. Quotes given on our website or by phone are estimates, and we confirm final pricing after we understand your site.",
        link: { href: "/contact", label: "Request a free quote" },
      },
      {
        question: "How do I get a security guard quote?",
        answer: `Call ${PHONE_DISPLAY} or fill out the quote form with your site details. Consultations are free and carry no obligation. We will recommend the right armed or unarmed coverage and give you a quote.`,
        link: { href: "/contact", label: "Get a free quote" },
      },
      {
        question: "How quickly can you start?",
        answer: `Often the same day, depending on your location. For same-day coverage, call ${PHONE_DISPLAY} before 2 PM. We also accept emergency requests, such as an urgent fire watch.`,
      },
      {
        question: "Do I have to sign a long-term contract?",
        answer:
          "No. Our security services are month-to-month. Services do require a signed Security Services Agreement, and cancelling needs 14 days' written notice. Same-day cancellation of a shift may incur a full shift charge.",
        link: {
          href: "/terms-and-conditions",
          label: "Read our terms and conditions",
        },
      },
    ],
  },
  {
    id: "working-together",
    title: "Reporting & Working Together",
    items: [
      {
        question: "How will I know my security guards are doing their job?",
        answer:
          "You receive Daily Activity Reports (DARs), incident reports, and GPS patrol logs, with photo logs on sites that need them. These records show what happened on every shift and give you documentation for contractors, insurers, and property managers.",
      },
      {
        question: "Can security guards guarantee there will be no theft?",
        answer:
          "No security company can guarantee that. Our guards provide professional presence and deterrence, which reduces the risk of theft, vandalism, and trespassing, and they respond quickly when something does happen.",
      },
      {
        question: "What do you need from me as a client?",
        answer:
          "We ask clients to provide safe working conditions for our guards, access to the site, and accurate information about any hazards on the property. That lets us plan coverage correctly from the first shift.",
      },
      {
        question: "Do you sell or share my personal information?",
        answer:
          "No. We do not sell your personal information. We share it only with service providers we need to run our business, such as website hosting, and we use it to provide quotes, dispatch guards, and send reports and invoices.",
        link: { href: "/privacy-policy", label: "Read our privacy policy" },
      },
    ],
  },
];
