import type { StaticImageData } from "next/image";

// ---------------------------------------------------------------------------
// HERO IMAGES
// Placeholder photos from the existing site. When the client's photos arrive,
// drop them in src/assets/locations/ and change the imports below — nothing
// else needs to change.
// ---------------------------------------------------------------------------
import sbHero from "@/assets/commercialGuards2.jpg";

import lancHero from "@/assets/armedGuard2.jpg";

export interface LocationPoint {
  label: string;
  text: string;
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationPageData {
  slug: string; // URL path, no leading slash
  city: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  h1Sub: string;
  intro: string;
  tagline: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  callLabel: string;
  quoteLabel: string;
  // Local section: city-specific copy shown above the shared services
  localTitle: string;
  localParagraphs: string[];
  whyTitle: string;
  whyPoints: LocationPoint[];
  serviceArea: string[];
  faqTitle: string;
  faqs: LocationFAQ[];
  finalCtaTitle: string;
  finalCtaBody: string;
  zipLine: string;
}

export const PHONE_DISPLAY = "(323) 952-1521";
export const PHONE_TEL = "tel:+13239521521";

export const LOCATIONS: LocationPageData[] = [
  {
    slug: "security-guard-service-san-bernardino-ca",
    city: "San Bernardino",
    seoTitle:
      "Security Guard Service in San Bernardino, CA | 24/7 Guards",
    metaDescription:
      "BSIS licensed security guard company in San Bernardino, CA. Armed & unarmed guards for warehouses, construction & retail. Same-day deployment. Free quote.",
    h1: "Security Guard Service in San Bernardino, CA",
    h1Sub: "Same-Day Warehouse Protection",
    intro:
      "San Bernardino moves California's freight, and thieves know it. Zenith Protective Services is a BSIS licensed security guard company providing armed & unarmed security guards in San Bernardino for warehouses, construction sites, and commercial properties across the Inland Empire.",
    tagline: "We deploy in hours, not days.",
    heroImage: sbHero,
    heroImageAlt: "Licensed Zenith security guards on duty in San Bernardino, CA",
    callLabel: "Call for 24/7 Dispatch",
    quoteLabel: "Get a Free Quote in 30 Minutes",
    localTitle: "Security Guard Services for San Bernardino Properties",
    localParagraphs: [
      "Warehouse and distribution security is our specialty. You have $1M+ in inventory sitting behind a chain-link fence, so our San Bernardino security guards run gate control, BOL verification, driver logs, trailer seal checks, dock watch, and GPS-verified yard patrol. We stop cargo theft before you file a police report.",
      "Our security guard service in San Bernardino also covers construction sites, where overnight theft of lumber, copper, and equipment is rampant across the county. We secure your perimeter, verify crews, and send morning photo reports. For manufacturing and industrial plants along the I-10 / I-215 corridor, we provide access control, employee badging, and perimeter patrol.",
      "For retail, our uniformed guards deter theft at shopping centers on Inland Center Dr, Hospitality Lane, and commercial buildings. Managing multiple lots? Our mobile patrol and alarm response units use marked vehicles for after-hours checks.",
    ],
    whyTitle: "Why Zenith Beats National Security Companies in San Bernardino",
    whyPoints: [
      {
        label: "Same-Day Deployment",
        text: "Guards staged in San Bernardino, Fontana, Ontario.",
      },
      {
        label: "Logistics-Trained",
        text: "Guards who know docks, seals, and driver check-in.",
      },
      {
        label: "Proof You Get What You Pay For",
        text: "Daily Activity Reports (DARs), incident reports, GPS patrol logs.",
      },
      {
        label: "No Long Contract",
        text: "Month-to-month. We earn it monthly.",
      },
    ],
    serviceArea: [
      "San Bernardino",
      "Fontana",
      "Ontario",
      "Rancho Cucamonga",
      "Redlands",
      "Rialto",
      "Colton",
      "Bloomington",
      "Jurupa Valley",
    ],
    faqTitle: "San Bernardino Security Guard FAQs",
    faqs: [
      {
        question: "Are your San Bernardino security guards licensed?",
        answer:
          "Yes, California BSIS licensed (PPO #122193) & insured. All guards have guard cards + background checks.",
      },
      {
        question: "How fast can you deploy?",
        answer: "Same-day if you call before 2 PM.",
      },
      {
        question: "Do you provide armed security guards in San Bernardino?",
        answer:
          "Yes. We provide both armed and unarmed security guards for warehouses, construction sites, industrial plants, and retail properties across the Inland Empire.",
      },
      {
        question: "Which Inland Empire cities do you cover?",
        answer:
          "San Bernardino, Fontana, Ontario, Rancho Cucamonga, Redlands, Rialto, Colton, Bloomington, and Jurupa Valley, all of the Inland Empire.",
      },
      {
        question: "How will I know my security guard service is working?",
        answer:
          "You get Daily Activity Reports (DARs), incident reports, and GPS patrol logs for every shift.",
      },
    ],
    finalCtaTitle: "Need Coverage Tonight in San Bernardino?",
    finalCtaBody: `Call ${PHONE_DISPLAY} now or request a quote. We can cover your site today.`,
    zipLine: "Serving 92401, 92407, 92408, 92410 and all of Inland Empire.",
  },
  {
    slug: "security-guard-service-lancaster-ca",
    city: "Lancaster",
    seoTitle:
      "Security Guard Service in Lancaster, CA | Antelope Valley",
    metaDescription:
      "BSIS licensed security guard company in Lancaster, CA. Armed & unarmed guards for aerospace, warehouses & retail across Antelope Valley. Same-day quote.",
    h1: "Security Guard Service in Lancaster, CA",
    h1Sub: "Protecting Antelope Valley 24/7",
    intro:
      "Lancaster's industrial growth needs serious security. Zenith Protective Services is a BSIS licensed security guard company providing armed & unarmed security guards in Lancaster for aerospace plants, warehouses, solar farms, and retail across Palmdale and Antelope Valley.",
    tagline: "Local officers. Real reporting. Same-day coverage.",
    heroImage: lancHero,
    heroImageAlt: "Armed Zenith security guard on patrol in Lancaster, CA",
    callLabel: "Call 24/7 Dispatch",
    quoteLabel: "Get a Free Lancaster Quote",
    localTitle: "Security Guard Services for Lancaster & Antelope Valley",
    localParagraphs: [
      "For aerospace contractors and manufacturing plants near Fox Field & Plant 42, our Lancaster security guards provide perimeter patrol, access control, visitor logs, and ITAR-aware protocols.",
      "Along the Sierra Hwy corridor, our security guard service in Lancaster gives warehouses and logistics yards on Ave H, Ave G, and Sierra Hwy gate control, truck verification, and overnight yard patrol built to stop pallet and trailer theft. Antelope Valley is building non-stop, so we also protect construction sites from overnight theft of materials and equipment with active patrol and morning reports.",
      "For high-value sites, isolated industrial parks, and after-hours facilities, we provide armed security guards in Lancaster who are licensed, firearm-permitted, and de-escalation trained. We also deter theft and vandalism at retail centers on 10th St West and the Antelope Valley Mall area, and run mobile patrol for solar farms and remote utility sites that need isolated coverage.",
    ],
    whyTitle: "Why Lancaster Chooses Zenith",
    whyPoints: [
      {
        label: "Antelope Valley Based",
        text: "Officers live in Lancaster/Palmdale, not LA.",
      },
      {
        label: "Industrial Ready",
        text: "Guards trained for OSHA sites, visitor logs, and safety compliance.",
      },
      {
        label: "Same-Day Deployment",
        text: "Cover your post today across AV.",
      },
      {
        label: "Transparent Reporting",
        text: "Time-stamped DARs and photo logs every shift.",
      },
      {
        label: "Flexible Terms",
        text: "Month-to-month, no 12-month lock-in.",
      },
      {
        // License number to be added when provided
        label: "Licensed & Insured",
        text: "BSIS PPO #122193. Fully insured.",
      },
    ],
    serviceArea: [
      "Lancaster",
      "Palmdale",
      "Rosamond",
      "Quartz Hill",
      "Littlerock",
      "Mojave",
      "Edwards AFB",
      "Acton",
    ],
    faqTitle: "Lancaster Security Guard FAQs",
    faqs: [
      {
        question: "Do you provide armed security guards in Lancaster?",
        answer:
          "Yes, BSIS licensed armed guards available across Antelope Valley.",
      },
      {
        question: "Do you cover Palmdale too?",
        answer: "Yes, all of AV including Palmdale, Rosamond, and Mojave.",
      },
      {
        question: "Are your security guards local?",
        answer:
          "Yes. Our officers live locally in Antelope Valley, not LA, so we can cover your post the same day.",
      },
      {
        question: "Do I have to sign a long-term security contract?",
        answer:
          "No. Our security guard service in Lancaster is month-to-month, with no 12-month lock-in.",
      },
      {
        question: "What reporting do I get?",
        answer: "Time-stamped DARs and photo logs every shift.",
      },
    ],
    finalCtaTitle: "Need Security in Lancaster Tonight?",
    finalCtaBody: `Call ${PHONE_DISPLAY} for a free 30-minute security assessment.`,
    zipLine:
      "Serving 93534, 93535, 93536, 93551, 93552 and all of Antelope Valley.",
  },
];

export function getLocation(slug: string): LocationPageData {
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) throw new Error(`Unknown location page: ${slug}`);
  return location;
}
