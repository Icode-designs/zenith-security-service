import type { StaticImageData } from "next/image";

// ---------------------------------------------------------------------------
// HERO IMAGES
// Placeholder photos from the existing site. When the client's photos arrive,
// drop them in src/assets/locations/ and change the imports below — nothing
// else needs to change.
// ---------------------------------------------------------------------------
import sbHero from "@/assets/location-img(1).jpeg";

import lancHero from "@/assets/location-img(2).jpeg";
import comptonHero from "@/assets/location-img(3).jpeg";
import carsonHero from "@/assets/commeercial-security-1.jpeg";
import gardenaHero from "@/assets/location-img(5).jpeg";
import vernonHero from "@/assets/hotel-security-1.jpeg";

export interface LocationPoint {
  label: string;
  text: string;
}

export interface LocationServiceItem {
  title: string;
  body: string;
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
  h1Sub?: string; // optional smaller line under the H1
  intro: string;
  tagline: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  callLabel: string;
  quoteLabel: string;
  // Local section: city-specific copy shown above the shared services
  localTitle: string;
  localParagraphs?: string[]; // free-text paragraphs
  localItems?: LocationServiceItem[]; // numbered service blocks (title + text)
  whyTitle: string;
  whyPoints: LocationPoint[];
  serviceArea: string[];
  faqTitle: string;
  faqs: LocationFAQ[];
  finalCtaTitle: string;
  finalCtaBody: string;
  finalCtaButton?: string; // optional quote button under the final call to action
  zipLine?: string;
}

export const PHONE_DISPLAY = "(323) 952-1521";
const PPO = "BSIS PPO #122193";
export const PHONE_TEL = "tel:+13239521521";

export const LOCATIONS: LocationPageData[] = [
  {
    slug: "security-guard-service-san-bernardino-ca",
    city: "San Bernardino",
    seoTitle: "Security Guard Service in San Bernardino, CA | 24/7 Guards",
    metaDescription:
      "BSIS licensed security guard company in San Bernardino, CA. Armed & unarmed guards for warehouses, construction & retail. Same-day deployment. Free quote.",
    h1: "Security Guard Service in San Bernardino, CA",
    h1Sub: "Same-Day Warehouse Protection",
    intro:
      "San Bernardino moves California's freight, and thieves know it. Zenith Protective Services is a BSIS licensed security guard company providing armed & unarmed security guards in San Bernardino for warehouses, construction sites, and commercial properties across the Inland Empire.",
    tagline: "We deploy in hours, not days.",
    heroImage: sbHero,
    heroImageAlt:
      "Licensed Zenith security guards on duty in San Bernardino, CA",
    callLabel: "Call for 24/7 Dispatch",
    quoteLabel: "Get a Free Quote in 30 Minutes",
    localTitle: "Security Guard Services for San Bernardino Properties",
    localItems: [
      {
        title: "Warehouse & Distribution Centers (Our Specialty)",
        body: "You have $1M+ in inventory sitting behind a chain-link fence. Our San Bernardino security guards run gate control, BOL verification, driver logs, trailer seal checks, dock watch, and GPS-verified yard patrol. We stop cargo theft before you file a police report.",
      },
      {
        title: "Construction Sites",
        body: "Overnight theft of lumber, copper, and equipment is rampant across San Bernardino County. Our security guard service in San Bernardino secures your perimeter, verifies crews, and sends morning photo reports.",
      },
      {
        title: "Manufacturing & Industrial",
        body: "Access control, employee badging, and perimeter patrol for plants along the I-10 / I-215 corridor.",
      },
      {
        title: "Retail & Commercial",
        body: "Uniformed deterrence for shopping centers on Inland Center Dr, Hospitality Lane, and commercial buildings.",
      },
      {
        title: "Mobile Patrol & Alarm Response",
        body: "Marked vehicles for after-hours checks, ideal if you manage multiple lots.",
      },
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
    seoTitle: "Security Guard Service in Lancaster, CA | Antelope Valley",
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
    localItems: [
      {
        title: "Aerospace & Manufacturing Plants",
        body: "For contractors and plants near Fox Field & Plant 42, our Lancaster security guards provide perimeter patrol, access control, visitor logs, and ITAR-aware protocols.",
      },
      {
        title: "Warehouses & Logistics: Sierra Hwy Corridor",
        body: "Gate control, truck verification, and overnight yard patrol for warehouses on Ave H, Ave G, and Sierra Hwy. Our security guard service in Lancaster is built to stop pallet and trailer theft.",
      },
      {
        title: "Construction Sites",
        body: "Antelope Valley is building non-stop. We stop overnight theft of materials and equipment with active patrol and morning reports.",
      },
      {
        title: "Armed Security Guards",
        body: "For high-value sites, isolated industrial parks, and after-hours facilities, we provide armed security guards in Lancaster who are licensed, firearm-permitted, and de-escalation trained.",
      },
      {
        title: "Retail & Commercial Plazas",
        body: "Theft and vandalism deterrence for centers on 10th St West and the Antelope Valley Mall area.",
      },
      {
        title: "Renewable Energy & Remote Sites",
        body: "Mobile patrol for solar farms and remote utility sites that need isolated coverage.",
      },
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
  // ---------------------------------------------------------------------
  // South Bay / Alameda Corridor industrial pages (client copy, Nov 2026)
  // ---------------------------------------------------------------------
  {
    slug: "warehouse-security-compton-ca",
    city: "Compton",
    seoTitle: "Warehouse & Industrial Security in Compton CA | Alameda Corridor",
    metaDescription:
      "Warehouse & industrial security guards in Compton, CA. Night guards for Alameda Corridor warehouses, truck yards & industrial parks. Hawthorne-based, same-day deployment.",
    h1: "Warehouse & Industrial Security Guards in Compton, CA",
    intro:
      "Cargo theft and break-ins in your Compton warehouse? Zenith Protective Services Inc., based 6 minutes away in Hawthorne, provides overnight and 24/7 security guards for warehouses, industrial parks, and truck yards in Compton, Carson, Gardena, and Lynwood.",
    tagline: "We specialize in industrial security, not events.",
    heroImage: comptonHero,
    heroImageAlt:
      "Zenith security guards checking in a truck at a Compton-area warehouse gate",
    callLabel: `Call ${PHONE_DISPLAY}`,
    quoteLabel: "Get Quote for Compton Warehouse Security",
    localTitle: "Our Warehouse Security Services in Compton",
    localItems: [
      {
        title: "Overnight Industrial Park Security",
        body: "Our guards patrol industrial parks along Alameda St, Santa Fe Ave, and the 710 corridor when theft happens most. We secure docks, monitor cameras, and check fences.",
      },
      {
        title: "Truck Yard & Heavy Equipment Security",
        body: "Gate control, trailer checks, and yard patrol. We prevent catalytic converter theft, diesel theft, and trailer theft that Compton yards face daily.",
      },
      {
        title: "Distribution Center Access Control",
        body: "A guard at your entrance to verify drivers, log trucks, and stop unauthorized entry into your Compton facility.",
      },
      {
        title: "Emergency 24-Hour Coverage",
        body: "Need a guard tonight? Your current guard didn't show? Weekend coverage? Big companies say no. We say yes. Same-day guards available in Compton.",
      },
    ],
    whyTitle: "Why Compton Warehouses Hire Us Instead of Big Companies",
    whyPoints: [
      {
        label: "Based in Hawthorne",
        text: "6 minutes to Compton, so we can replace a guard fast.",
      },
      {
        label: "We Take Small Jobs",
        text: "1 night, weekends, 8-hour shifts.",
      },
      {
        label: "Specialized in Industrial & Warehouses",
        text: "Not malls.",
      },
      {
        label: "Licensed, Insured, Uniformed Guards",
        text: `${PPO}. Every guard holds a California guard card.`,
      },
      {
        label: "No Long-Term Contract Required",
        text: "Month-to-month service.",
      },
    ],
    serviceArea: [
      "Compton",
      "Carson",
      "Gardena",
      "Lynwood",
      "Paramount",
      "Hawthorne",
      "Long Beach",
    ],
    faqTitle: "Compton Warehouse Security FAQs",
    faqs: [
      {
        question: "Do you provide overnight security guards for Compton warehouses?",
        answer:
          "Yes. We provide overnight and 24/7 security guards for warehouses, industrial parks, and truck yards in Compton, including sites along Alameda St, Santa Fe Ave, and the 710 corridor.",
      },
      {
        question: "Can you send a guard to my Compton yard tonight?",
        answer: `Often, yes. We are based in Hawthorne and frequently deploy the same day. Call ${PHONE_DISPLAY}.`,
      },
      {
        question: "Do you take short jobs, like one night or a weekend?",
        answer:
          "Yes. We take 1-night, weekend, and 8-hour shifts, and no long-term contract is required.",
      },
      {
        question: "Are your Compton security guards licensed?",
        answer: `Yes. Zenith is a licensed, insured California security company (${PPO}), and our guards are uniformed.`,
      },
    ],
    finalCtaTitle: "Need a Guard in Your Compton Yard Tonight?",
    finalCtaBody:
      "If you manage a warehouse, industrial building, or truck yard in Compton and need guards now, call Zenith Protective Services Inc. today. We often deploy same day.",
    finalCtaButton: "Get Quote for Compton Warehouse Security",
  },
  {
    slug: "warehouse-security-carson-ca",
    city: "Carson",
    seoTitle:
      "Warehouse & Truck Yard Security in Carson CA | Zenith Protective Services",
    metaDescription:
      "Warehouse & truck yard security guards in Carson, CA. Night guards, gate control, theft prevention for logistics & distribution centers. Hawthorne-based, fast response.",
    h1: "Warehouse & Truck Yard Security Guards in Carson, CA",
    intro:
      "Tired of cargo theft and unauthorized access in your Carson warehouse or truck yard? Zenith Protective Services Inc., based 15 minutes away in Hawthorne, provides specialized overnight and 24/7 security guards for warehouses, distribution centers, and truck yards in Carson, Torrance, Long Beach, and Gardena.",
    tagline:
      "We don't do everything. We specialize in warehouse and logistics security.",
    heroImage: carsonHero,
    heroImageAlt:
      "Zenith security guards checking a driver in at a Carson-area distribution center",
    callLabel: `Call ${PHONE_DISPLAY}`,
    quoteLabel: "Get Quote for Carson Warehouse Security",
    localTitle: "Our Warehouse Security Services in Carson",
    localItems: [
      {
        title: "Overnight Warehouse Security",
        body: "Our guards stay on-site overnight when theft happens most. We secure loading docks, monitor cameras, and patrol inventory areas. Perfect for warehouses along the 405 and Alameda corridor.",
      },
      {
        title: "Truck Yard & Logistics Yard Security",
        body: "Gate control, driver check-in/out, trailer monitoring, and yard patrol. We prevent catalytic converter theft, fuel theft, and cargo theft that Carson yards face daily.",
      },
      {
        title: "Distribution Center Access Control",
        body: "A guard at your entrance to verify trucks, log visitors, and prevent unauthorized entry into your Carson facility.",
      },
      {
        title: "Short-Term & Emergency Coverage",
        body: "Need a guard tonight? Weekend coverage? 1-day or 3-day jobs? Big companies say no. We say yes. Same-day guards available in Carson.",
      },
    ],
    whyTitle: "Why Carson Warehouses Hire Us Instead of Big Companies",
    whyPoints: [
      {
        label: "Based in Hawthorne",
        text: "We can be in Carson in 15 minutes if a guard calls out.",
      },
      {
        label: "We Take Small Jobs",
        text: "1 night, weekends, 8-hour shifts.",
      },
      {
        label: "Specialized in Warehouses",
        text: "Not malls or events.",
      },
      {
        label: "Licensed, Insured, Uniformed Guards",
        text: `${PPO}. Every guard holds a California guard card.`,
      },
      {
        label: "No Long-Term Contract Required",
        text: "Month-to-month service.",
      },
    ],
    serviceArea: [
      "Carson",
      "Torrance",
      "Gardena",
      "Long Beach",
      "Compton",
      "Wilmington",
      "Hawthorne",
      "Lawndale",
    ],
    faqTitle: "Carson Warehouse & Truck Yard Security FAQs",
    faqs: [
      {
        question: "Do you provide truck yard security in Carson?",
        answer:
          "Yes. Our Carson truck yard guards handle gate control, driver check-in and check-out, trailer monitoring, and yard patrol to prevent catalytic converter, fuel, and cargo theft.",
      },
      {
        question: "How fast can you get a guard to Carson?",
        answer:
          "We are based in Hawthorne and can be in Carson in about 15 minutes if a guard calls out. We can often deploy a guard the same day.",
      },
      {
        question: "Do you take 1-day or weekend security jobs?",
        answer:
          "Yes. We take 1-night, weekend, 1-day, and 3-day jobs, and no long-term contract is required.",
      },
      {
        question: "Are your Carson security guards licensed?",
        answer: `Yes. Zenith is a licensed, insured California security company (${PPO}), and our guards are uniformed.`,
      },
    ],
    finalCtaTitle: "Need a Guard in Your Carson Yard Tonight?",
    finalCtaBody:
      "If you manage a warehouse, truck yard, or distribution center in Carson and need guards, call Zenith Protective Services Inc. today for a fast quote. We can often deploy a guard the same day.",
    finalCtaButton: "Get Quote for Carson Warehouse Security",
  },
  {
    slug: "truck-yard-security-gardena-ca",
    city: "Gardena",
    seoTitle: "Truck Yard & Warehouse Security in Gardena CA | 2 Mins Away",
    metaDescription:
      "Truck yard & warehouse security guards in Gardena, CA. Overnight guards for truck yards, auto yards & warehouses on Figueroa & Western. Based 2 mins away, same-day guards.",
    h1: "Truck Yard & Warehouse Security Guards in Gardena, CA",
    intro:
      "Truck theft on Figueroa or Western Ave? Zenith Protective Services Inc. is based 2 minutes from Gardena in Hawthorne. We provide overnight security guards for truck yards, auto yards, warehouses, and industrial lots in Gardena, Hawthorne, Carson, and Torrance.",
    tagline: "We are your Gardena neighbors, not a downtown LA company.",
    heroImage: gardenaHero,
    heroImageAlt:
      "Zenith security guard patrolling a Gardena-area lot in a security cart",
    callLabel: `Call ${PHONE_DISPLAY}`,
    quoteLabel: "Get Quote for Gardena Security",
    localTitle: "Our Security Services in Gardena",
    localItems: [
      {
        title: "Overnight Truck Yard Security",
        body: "Our guards stay in your Gardena yard overnight for gate control, trailer checks, and patrol. We stop cargo theft, catalytic converter theft, and diesel theft at yards on Figueroa St and Western Ave.",
      },
      {
        title: "Auto Yard & Equipment Lot Security",
        body: "Gardena has hundreds of auto yards. We patrol and protect vehicles, parts, and heavy equipment from theft.",
      },
      {
        title: "Warehouse & Industrial Building Patrol",
        body: "Night patrol for warehouses on Rosecrans Ave, Gardena Blvd, and Alondra Blvd. We check docks and doors and secure your building.",
      },
      {
        title: "Emergency Guard Tonight: 2-Minute Response",
        body: "Your guard didn't show? Need a guard in 2 hours? We are 2 minutes away in Hawthorne, so we can be in your Gardena yard tonight. Big companies can't do that.",
      },
    ],
    whyTitle: "Why Gardena Yards Hire Us",
    whyPoints: [
      {
        label: "2 Minutes Away",
        text: "Based in Hawthorne, next to Gardena.",
      },
      {
        label: "We Take Small Jobs",
        text: "1 night, weekends, 8 hours.",
      },
      {
        label: "We Can Replace a Guard in 20 Minutes",
        text: "No other company can.",
      },
      {
        label: "Licensed, Insured, Uniformed",
        text: `${PPO}. Every guard holds a California guard card.`,
      },
      {
        label: "No Contract",
        text: "Month-to-month service.",
      },
    ],
    serviceArea: [
      "Gardena",
      "Hawthorne",
      "Carson",
      "Torrance",
      "Lawndale",
      "Compton",
    ],
    faqTitle: "Gardena Truck Yard Security FAQs",
    faqs: [
      {
        question: "Do you provide overnight truck yard security in Gardena?",
        answer:
          "Yes. Our guards stay in your Gardena yard overnight for gate control, trailer checks, and patrol, including yards on Figueroa St and Western Ave.",
      },
      {
        question: "Do you protect auto yards and equipment lots?",
        answer:
          "Yes. We patrol and protect vehicles, parts, and heavy equipment at Gardena auto yards and equipment lots.",
      },
      {
        question: "Can you replace a guard who didn't show up?",
        answer:
          "Yes. We are based 2 minutes away in Hawthorne and can replace a guard in about 20 minutes, so we can be in your Gardena yard tonight.",
      },
      {
        question: "Are your Gardena security guards licensed?",
        answer: `Yes. Zenith is a licensed, insured California security company (${PPO}), and our guards are uniformed.`,
      },
    ],
    finalCtaTitle: "Need a Guard in Your Gardena Yard Tonight?",
    finalCtaBody:
      "If you manage a truck yard, auto yard, or warehouse in Gardena and need a guard now, call Zenith Protective Services Inc. We are 2 minutes away.",
    finalCtaButton: "Get Quote for Gardena Security",
  },
  {
    slug: "warehouse-security-vernon-ca",
    city: "Vernon",
    seoTitle: "Warehouse Security in Vernon CA | Zenith Protective Services Inc.",
    metaDescription:
      "Warehouse security guards in Vernon, CA. Overnight guards for cold storage, food warehouses & industrial parks on Bandini Blvd & Santa Fe Ave. Hawthorne-based, same-day.",
    h1: "Warehouse Security Guards in Vernon, CA",
    intro:
      "Cargo theft in your Vernon warehouse? Zenith Protective Services Inc., based in Hawthorne, provides overnight and 24/7 security guards for warehouses, cold storage, and industrial buildings in the City of Vernon.",
    tagline: "Vernon is 100% industrial, and we know it.",
    heroImage: vernonHero,
    heroImageAlt:
      "Zenith security officer monitoring warehouse cameras for a Vernon facility",
    callLabel: `Call ${PHONE_DISPLAY}`,
    quoteLabel: "Get Quote for Vernon Warehouse Security",
    localTitle: "Our Vernon Warehouse Security Services",
    localItems: [
      {
        title: "Overnight Cold Storage Security",
        body: "Guards for cold storage, food processing, and meat packing facilities on Bandini Blvd and Santa Fe Ave, with dock checks, temperature logs, and camera monitoring.",
      },
      {
        title: "Truck Yard Security",
        body: "Gate control, trailer checks, and yard patrol. We stop catalytic converter theft, diesel theft, and trailer theft.",
      },
      {
        title: "Access Control",
        body: "A guard at your entrance to verify drivers, log BOLs, and stop unauthorized entry.",
      },
      {
        title: "Same-Day Emergency Coverage",
        body: "Need a guard tonight? We deploy same-day in Vernon. Big companies say no. We say yes.",
      },
    ],
    whyTitle: "Why Vernon Warehouses Hire Us",
    whyPoints: [
      {
        label: "15 Minutes from Vernon",
        text: "Fast guard replacement.",
      },
      {
        label: "1 Night / Weekend Shifts OK",
        text: "No long contract.",
      },
      {
        label: "Industrial Only",
        text: "Not malls or events.",
      },
      {
        label: "Licensed, Insured, Uniformed",
        text: `${PPO}. Every guard holds a California guard card.`,
      },
      {
        label: "GPS Patrol Logs",
        text: "Proof of every patrol, every shift.",
      },
    ],
    serviceArea: ["Vernon", "Commerce", "Maywood", "Huntington Park", "Bell"],
    faqTitle: "Vernon Warehouse Security FAQs",
    faqs: [
      {
        question: "Do you provide cold storage security in Vernon?",
        answer:
          "Yes. We provide overnight guards for cold storage, food processing, and meat packing facilities on Bandini Blvd and Santa Fe Ave, with dock checks, temperature logs, and camera monitoring.",
      },
      {
        question: "Can you deploy a guard in Vernon the same day?",
        answer: `Yes. We deploy same-day in Vernon. Call ${PHONE_DISPLAY}.`,
      },
      {
        question: "Do you take 1-night or weekend shifts?",
        answer: "Yes. 1-night and weekend shifts are fine, with no long contract.",
      },
      {
        question: "Are your Vernon security guards licensed?",
        answer: `Yes. Zenith is a licensed, insured California security company (${PPO}), and our guards are uniformed.`,
      },
    ],
    finalCtaTitle: "Need a Guard Tonight?",
    finalCtaBody:
      "Call Zenith Protective Services Inc. today for your Vernon warehouse.",
    finalCtaButton: "Get Quote for Vernon Warehouse Security",
  },
];

export function getLocation(slug: string): LocationPageData {
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) throw new Error(`Unknown location page: ${slug}`);
  return location;
}
