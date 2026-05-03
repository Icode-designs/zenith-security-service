export interface FAQ {
  question: string;
  answer: string;
}

export interface SERVICETYPE {
  id: string;
  name: string;
  description: string;
  url: string[];
  intro: {
    title: string;
    description: string;
  };
  questioniar: {
    question: string;
    answer: string;
  };
  offer: {
    title: string;
    description: string;
  };
  FAQ: FAQ[];
}

export const TESTIMONIALS = [
  {
    quote:
      "Working with Zenith has been a game-changer for our organization. Their team’s reliability, quick response time, and attention to detail make them stand out from every other company we’ve used in the past. They don’t just meet expectations — they consistently go beyond them. Our staff and clients feel safer knowing Zenith is on duty.",
    author: "Oakridge Medical Center",
  },
  {
    quote:
      "Zenith Protective Services has set a new standard for professionalism. Every guard we’ve interacted with is well-trained, polite, and fully committed to their job. Their constant communication and proactive approach have eliminated so many headaches for us. It’s reassuring to know our properties are in capable hands at all times.",
    author: "Northbridge Commercial Properties",
  },
  {
    quote:
      "From the very first call, Zenith made the process seamless and transparent. Their management team kept us informed at every step, ensuring our fire watch coverage was fully compliant and dependable. We’ve worked with several providers before, but none have delivered the consistency and peace of mind that Zenith offers.",
    author: "Silverstone Manufacturing Co.",
  },
  {
    quote:
      "We needed immediate security coverage on short notice, and Zenith delivered without hesitation. Their professionalism and efficiency were beyond what we expected. The guards were courteous, alert, and clearly trained to handle any situation with calm confidence. I can’t recommend their team highly enough.",
    author: "Rivergate Logistics",
  },
  {
    quote:
      "Zenith’s team has gone above and beyond to keep our facilities secure day and night. Their responsiveness to emergencies and willingness to adapt to our changing schedules are truly impressive. It’s rare to find a company that values client satisfaction as much as they do. They’ve earned our trust through consistent excellence.",
    author: "BrightPath Residential Group",
  },
  {
    quote:
      "What sets Zenith apart is their complete dedication to quality and accountability. Every detail — from scheduling to reporting — is handled with professionalism and care. Their guards take pride in what they do, and it shows. Our tenants have noticed the difference, and we couldn’t be happier with the partnership.",
    author: "Evergreen Corporate Suites",
  },
];
