import fireService from "@/assets/fireService.jpg";
import fireServiceHero from "@/assets/fireService2.jpg";
import hospitalGuard from "@/assets/hospitalSecurity.jpg";
import hospitalGuardHero from "@/assets/hospitaSecurity2.jpg";
import bussinessGuard from "@/assets/commercialGuards2.jpg";
import bussinessGuardHero from "@/assets/commercialGuards3.jpg";
import hotelGuard from "@/assets/hotelSecurity.jpg";
import hotelGuardHero from "@/assets/hotelGuard2.jpg";
import armedGuard from "@/assets/armedGuards.jpg";
import armedGuardHero from "@/assets/armedGuard2.jpg";
import constructionSec from "@/assets/constructionSec.jpeg";
import constructionSec1 from "@/assets/constructionSec1.jpeg";

interface FAQ {
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

export const SERVICES_LIST: SERVICETYPE[] = [
  {
    id: "fire-watch-security-guards",
    name: "Fire Watch Security Guards",
    description:
      "Our Fire Watch Security Guards provide vigilant monitoring to prevent hazards, ensure fire code compliance, and protect your property and people.",
    intro: {
      title: "24 Hour Fire Watch Guard",
      description:
        "When your fire alarm or sprinkler system is down, our 24/7 fire watch guards step in to ensure compliance and safety. Our trained professionals conduct routine patrols, monitor at-risk areas, and are ready to respond instantly to hazards—helping you avoid costly fines and keep your property secure.The cost may also depend on how many fire watch guards you need, how experienced they are, and several other factors. In cases of emergency, the prices are much higher as we may need to send all the guards we have and use more resources to handle the situation.Again, if you know you will require the services of 24 hour fire watch guards, we advise you to act as soon as possible and call us instead of waiting for the fire marshal’s orders. If you leave it to the fire marshal to staff the premises, you will face significantly higher costs. On top of these costs, you may face a hefty fine that you can’t afford.",
    },
    url: [fireService.src, fireServiceHero.src],
    questioniar: {
      question: "Why Do Businesses Need Our Fire Watch Security?",
      answer:
        "When your fire alarm or sprinkler system is down, Zenith Protective Services’ 24/7 Fire Watch Guards step in to ensure compliance and safety. Our trained professionals conduct routine patrols, monitor at-risk areas, and are ready to respond instantly to hazards—helping you avoid costly fines and keeping your property secure. The cost of Fire Watch services may depend on how many guards you need, how experienced they are, and several other factors. In cases of emergency, prices are often higher since we may need to deploy multiple guards and resources to properly handle the situation. If you know you will require Fire Watch Security services, we strongly advise you to contact Zenith Protective Services as soon as possible rather than waiting for the fire marshal’s orders. By acting early, you can significantly reduce costs and avoid penalties. On top of this, you’ll gain peace of mind knowing that your property is under constant protection.",
    },
    offer: {
      title: "Stay Protected with 24/7 Fire Watch Coverage",
      description:
        "Unexpected issues with your fire alarm or sprinkler system can put your property, staff, and customers at serious risk. That’s why Zenith Protective Services provides dependable Fire Watch Security Guards who patrol your premises, identify hazards, and maintain safety logs until your systems are fully restored. Our guards are trained to follow strict fire safety protocols, ensuring your business stays compliant with local regulations. Whether you need short-term coverage during repairs or long-term monitoring for high-risk areas, we tailor our Fire Watch services to your exact needs. Don’t wait until an emergency forces action—partner with Zenith Protective Services today for proactive fire risk prevention and reliable, round-the-clock security.",
    },

    FAQ: [
      {
        question: "Are your Fire Watch Guards trained and certified?",
        answer:
          "Yes. Our Fire Watch Guards are fully trained to identify fire risks, maintain safety logs, patrol properties, and follow emergency protocols to ensure compliance with fire codes.",
      },
      {
        question: "Can Fire Watch services operate 24/7?",
        answer:
          "Yes. We provide 24/7 Fire Watch coverage to ensure continuous protection until your fire safety systems are restored.",
      },
      {
        question: "How quickly can you provide Fire Watch Guards?",
        answer:
          "We can often deploy Fire Watch Guards within hours, depending on your location and needs. Our team is available for emergency requests.",
      },
      {
        question: "When do I need Fire Watch services?",
        answer:
          "You need Fire Watch services when your fire safety systems are under maintenance, not functioning, or required by local fire codes and authorities until repairs are complete.",
      },
    ],
  },
  {
    id: "construction-site-security",
    name: "Construction Site Security",
    description:
      "Our Construction Site Security Guards protect your equipment, materials, and workers from theft, vandalism, and unauthorized access, ensuring a safe and compliant job site around the clock.",
    intro: {
      title: "Professional Construction Site Security Guards",
      description:
        "Construction sites are high-risk environments that require constant vigilance. Our Construction Site Security Guards provide 24/7 protection to prevent theft, control site access, and ensure worker safety. We deploy trained guards who patrol perimeters, monitor entry points, and secure valuable materials and equipment. Whether it’s during active building hours or overnight, our guards maintain detailed activity reports and communicate regularly with site supervisors. From small projects to large-scale developments, we tailor our services to fit your site’s specific layout and security needs—minimizing losses, deterring intruders, and helping projects stay on schedule.",
    },
    url: [constructionSec.src, constructionSec1.src],
    questioniar: {
      question: "Why Do Construction Companies Need Our Site Security?",
      answer:
        "Construction sites often contain valuable tools, machinery, and materials that attract theft and vandalism. With Zenith Protective Services’ Construction Site Security Guards on duty, you gain constant monitoring and rapid response capabilities to safeguard your assets. Our guards enforce strict access control, verify worker credentials, and patrol critical zones to detect suspicious activity before it escalates. In addition to crime prevention, our team also helps maintain compliance with safety regulations and reduces the risk of accidents caused by unauthorized personnel. By choosing our construction site security service, you ensure your project stays protected, efficient, and on track.",
    },
    offer: {
      title: "Comprehensive Security Solutions for Construction Sites",
      description:
        "Every construction site faces unique challenges, from theft and vandalism to safety hazards and unauthorized access. Our Construction Site Security Guards offer tailored solutions to protect your property day and night. We provide on-site patrols, CCTV monitoring, vehicle inspections, and controlled access points to ensure complete perimeter protection. With Zenith Protective Services, you get proactive, reliable, and highly visible security presence that keeps your site secure and your workers confident. Partner with us to reduce losses, prevent delays, and maintain a safe, compliant construction environment.",
    },
    FAQ: [
      {
        question:
          "Do you provide overnight and weekend construction site security?",
        answer:
          "Yes. We provide 24/7 coverage, including nights, weekends, and holidays, ensuring your site remains protected at all times.",
      },
      {
        question: "Can guards monitor heavy equipment and materials?",
        answer:
          "Absolutely. Our guards patrol areas containing valuable machinery and materials, logging their inspections to prevent theft or tampering.",
      },
      {
        question: "Do your guards handle access control?",
        answer:
          "Yes. Our Construction Site Security Guards verify worker IDs, manage visitor logs, and monitor entry and exit points to prevent unauthorized access.",
      },
      {
        question: "Can you provide temporary or long-term security coverage?",
        answer:
          "We offer both. Whether you need short-term protection during critical project phases or continuous coverage throughout your build, we can adjust our services accordingly.",
      },
    ],
  },

  {
    id: "hospital-security",
    name: "Hospital Security",
    description:
      "Our Hospital Security Guards protect patients, staff, and visitors by controlling access, handling emergencies, and ensuring a safe environment.",
    intro: {
      title: "24 Hour Hospital Security",
      description:
        "Hospitals demand a higher level of protection. Our hospital security guards prevent unauthorized access, safeguard restricted areas, and ensure the safety of patients, staff, and visitors. With Zenith Protective Services, your healthcare environment stays safe, controlled, and compliant. Hiring a hotel security guard team is a necessity for all hotel owners, operators, and managers. It provides a safe feeling for guests and employees, as well as lowering the risk of danger within the environment. In nearly every hotel across the country, there are at least a few security guards, whether they are visible to incoming or outgoing guests. Our highly trained guards here at Zenith Protective Services are dedicated to being the absolute best that your hotel has ever experienced in the realm of security. Our hotel security guards take care of numerous duties on the hotel premises to keep everyone inside safe. First, there are the doorman and lobby security guards. These guards assess the people entering and exiting, looking to spot any potential situations that may require a response. Larger hotels may desire security guards that oversee the doors to be armed, and our guards are fully certified to be armed in any situation.",
    },
    url: [hospitalGuard.src, hospitalGuardHero.src],
    questioniar: {
      question: "Why Do Hospitals Need Professional Security?",
      answer:
        "Hospitals are busy environments where patient safety, staff protection, and visitor management are critical. Zenith Protective Services provides trained Hospital Security Guards who help maintain order, protect sensitive areas, and ensure a safe environment for everyone on the premises. Our security personnel are experienced in handling high-stress situations such as emergencies, unauthorized access, and disruptive behavior. They are trained in crisis response, de-escalation techniques, and compliance with healthcare regulations to ensure minimal disruption to medical operations. Whether it’s securing entrances, monitoring patient wards, or safeguarding valuable medical equipment, Zenith Protective Services delivers 24/7 hospital security solutions designed to give healthcare providers peace of mind while they focus on saving lives.",
    },
    offer: {
      title: "Protecting Healthcare Facilities with Confidence",
      description:
        "Hospitals operate around the clock, and with constant activity comes unique security challenges. Zenith Protective Services provides professional Hospital Security Guards who safeguard entrances, monitor sensitive areas, and ensure the safety of patients, visitors, and staff.  Our team is trained to respond quickly to emergencies, prevent unauthorized access, and maintain a calm, controlled environment—even in high-stress situations. From emergency rooms to restricted medical storage, we keep every corner of your facility secure. With Zenith Protective Services on-site, healthcare providers can focus on delivering care while we focus on delivering protection.",
    },
    FAQ: [
      {
        question:
          "Are your hospital security guards trained for medical environments?",
        answer:
          "Yes. Our guards receive specialized training in hospital security, including visitor management, crisis response, de-escalation techniques, and compliance with healthcare regulations.",
      },
      {
        question: "How quickly can you deploy hospital security guards?",
        answer:
          "In most cases, we can provide immediate deployment depending on your location and urgency. For emergency requests, we prioritize rapid response.",
      },
      {
        question: "Do your guards handle emergencies inside hospitals?",
        answer:
          "Absolutely. Our guards are trained to assist during emergencies such as evacuations, code situations, unauthorized access, or disruptive behavior, while coordinating with hospital staff and law enforcement if needed.",
      },
      {
        question: "Do you provide 24/7 hospital security services?",
        answer:
          "Yes. Our hospital security services are available round-the-clock, ensuring continuous protection for patients, staff, and visitors.",
      },
    ],
  },
  {
    id: "commercial-security-guards",
    name: "Commercial Security Guards",
    description:
      "Our Commercial Security Guards safeguard your business by controlling access, deterring threats, and protecting employees, customers, and assets.",
    intro: {
      title: "Protecting Businesses with Confidence",
      description:
        "From small businesses to corporate buildings, our commercial security guards help prevent theft, vandalism, and unauthorized access. We enforce company policies, monitor surveillance systems, and perform regular patrols—ensuring your employees and assets are always protected. Commercial properties face constant risks, from theft and vandalism to unauthorized access and workplace disruptions. Zenith Protective Services provides professional Commercial Security Guards who safeguard entrances, monitor business environments, and ensure the safety of staff, customers, and assets. Our team is trained to respond quickly to emergencies, deter criminal activity, and maintain a calm, professional presence—even in high-pressure situations. From office buildings to retail centers and warehouses, we keep every corner of your business secure. With Zenith Protective Services on-site, business owners can focus on growth and operations while we focus on delivering reliable protection.",
    },
    url: [bussinessGuard.src, bussinessGuardHero.src],
    questioniar: {
      question: "Why Do Businesses Need Professional Security?",
      answer:
        "Commercial environments are often busy and face challenges such as theft, vandalism, and unauthorized access. Zenith Protective Services provides trained Commercial Security Guards who help maintain order, protect assets, and create a safe environment for employees and customers. Our security personnel are experienced in handling high-stress situations such as emergencies, workplace disturbances, and suspicious activity. They are trained in crisis response, de-escalation techniques, and surveillance monitoring to ensure minimal disruption to business operations. Whether it’s securing entrances, monitoring retail spaces, or safeguarding warehouses and office complexes, Zenith Protective Services delivers 24/7 commercial security solutions designed to give business owners peace of mind while they focus on growth and success",
    },
    offer: {
      title: "Keeping Your Business Safe, Day and Night",
      description:
        "Every business faces unique security challenges, from protecting valuable inventory to maintaining a safe environment for employees and customers. Zenith Protective Services provides reliable Commercial Security Guards who offer visible deterrence and rapid response when it matters most. Our guards are trained in access control, surveillance monitoring, and emergency response, ensuring your property stays protected against theft, vandalism, and other risks. With flexible deployment options, we provide both short-term and long-term coverage to fit your business needs. At Zenith Protective Services, we don’t just guard buildings—we protect the people, assets, and reputation that drive your success.",
    },
    FAQ: [
      {
        question: "What types of businesses do you provide security for?",
        answer:
          "We provide commercial security for offices, retail stores, warehouses, shopping centers, construction sites, and other business properties.",
      },
      {
        question: "Can security guards also monitor CCTV systems?",
        answer:
          "Yes. Our guards are trained in surveillance monitoring and can manage CCTV systems, alarm panels, and access control technology to enhance on-site security.",
      },
      {
        question: "Can your guards handle both day and night shifts?",
        answer:
          "Absolutely. We offer 24/7 security services with flexible scheduling to cover regular business hours, overnight monitoring, or round-the-clock protection.",
      },
      {
        question: "How quickly can guards be deployed to a business location?",
        answer:
          "In most cases, we can provide rapid deployment within hours, depending on your business location and security requirements.",
      },
    ],
  },
  {
    id: "hotel-security-services",
    name: "Hotel Security Services",
    description:
      "Our Hotel Security Guards protect guests, staff, and property while maintaining a safe and welcoming environment.",
    intro: {
      title: "Discreet, Professional Hotel Security You Can Rely On",
      description:
        "Hotels require visible yet discreet protection. Our trained hotel security guards manage entrances, monitor CCTV, patrol parking lots, and respond to alarms—ensuring the safety of guests, staff, and property while maintaining a welcoming atmosphere. Our security personnel are skilled in managing entrances, monitoring CCTV systems, and patrolling parking lots to deter threats before they arise. In the event of an emergency, they respond swiftly and professionally, ensuring minimal disruption to hotel operations. Beyond protection, our guards uphold a courteous presence that reflects the hospitality standards of your hotel. Whether it’s maintaining order in busy lobbies, assisting guests with directions, or coordinating with management during special events, Zenith Protective Services ensures that safety seamlessly integrates into the guest experience. With our hotel security services, you can focus on delivering exceptional hospitality—while we focus on keeping every corner of your property secure.",
    },
    url: [hotelGuard.src, hotelGuardHero.src],
    questioniar: {
      question: "Why Do Hotels Need Professional Security?",
      answer:
        "Hotels operate 24/7, welcoming guests from all walks of life, which creates unique security challenges. Zenith Protective Services provides trained Hotel Security Guards who ensure the safety of guests, staff, and property while maintaining a welcoming atmosphere. Our guards are experienced in handling issues such as unauthorized access, disruptive behavior, and emergencies with professionalism and discretion. They are trained in guest interaction, crowd management, and crisis response to keep hotel operations running smoothly. Whether it’s safeguarding lobbies, monitoring guest floors, or securing parking areas, Zenith Protective Services delivers 24/7 hotel security solutions designed to give hoteliers peace of mind while enhancing the guest experience.",
    },
    offer: {
      title: "Creating a Safe and Welcoming Hotel Environment",
      description:
        "Your hotel is more than just a building—it’s a place where guests expect safety, comfort, and peace of mind. Zenith Protective Services provides professional Hotel Security Guards who balance strong protective presence with courteous guest interaction. From managing access points and patrolling facilities to responding swiftly to emergencies, our guards ensure your property stays secure around the clock. With flexible coverage tailored to your hotel’s size and needs, we help protect both your reputation and your guests. At Zenith Protective Services, we make safety part of the hospitality experience.",
    },
    FAQ: [
      {
        question: "Do your guards handle emergencies inside hotels?",
        answer:
          "Yes. Our guards are experienced in event security and can manage access control, monitor large gatherings, and ensure guest safety during functions or peak seasons.",
      },
      {
        question: "Can your security team assist with event crowd control?",
        answer:
          "Yes. Our guards are trained in surveillance monitoring and can manage CCTV systems, alarm panels, and access control technology to enhance on-site security.",
      },
      {
        question: "Can security guards monitor different areas of the hotel?",
        answer:
          "Yes. We provide comprehensive coverage including lobby patrols, guest floor monitoring, event spaces, and parking lot security.",
      },
      {
        question: "Is your hotel security available around the clock?",
        answer:
          "Yes. We provide 24/7 security services to ensure continuous protection for your property, staff, and guests.",
      },
    ],
  },
  {
    id: "armed-and-unarmed-guards",
    name: "Armed & Unarmed Guards",
    description:
      "Our licensed Armed and Unarmed Guards provide reliable protection tailored to your security needs, ensuring safety and peace of mind.",
    intro: {
      title: "Flexible Armed & Unarmed Security for Every Environment",
      description:
        "Whether you need visible deterrence with armed guards or professional unarmed security for controlled environments, Zenith Protective Services delivers both. Our licensed guards are highly trained, reliable, and available 24/7 to meet your security needs. Every property has unique security needs, and at Zenith Protective Services, we provide the right solution with our armed and unarmed guard services. Whether you require a visible deterrent with armed guards for high-risk environments, or professional unarmed security for controlled settings, we deliver tailored protection you can trust. Our licensed guards undergo rigorous training in crisis response, surveillance, and conflict de-escalation, ensuring they are fully prepared to handle any situation. Armed guards offer an additional layer of defense where greater risks are present, while unarmed guards provide professional monitoring, access control, and customer service without disrupting your environment.",
    },
    url: [armedGuard.src, armedGuardHero.src],
    questioniar: {
      question: "Why Choose Armed & Unarmed Guards?",
      answer:
        "Different environments and/or situations require different levels of protection. Zenith Protective Services offers both Armed and Unarmed Security Guards to meet the unique needs of our clients. Our unarmed guards provide a strong security presence for locations where visibility, deterrence, and access control are key. Armed guards, on the other hand, are deployed in high-risk environments where greater protection is required. Each guard is licensed, thoroughly trained, and equipped to handle emergencies with professionalism. Whether you need visible deterrence or high-level protection, Zenith Protective Services provides the right balance of safety and security.",
    },
    offer: {
      title: "Tailored Protection for Every Environment",
      description:
        "Not every situation requires the same security approach. That’s why Zenith Protective Services gives you the flexibility to choose between armed or unarmed guards based on your risk level and environment. Our unarmed guards are skilled in surveillance, access control, and customer service, making them ideal for low to moderate risk locations. For higher-risk facilities, our armed guards provide an additional layer of protection with advanced training and rapid response capability. With Zenith Protective Services, you can be confident that your property, staff, and visitors are protected by the right level of security at all times.",
    },
    FAQ: [
      {
        question: "How do I know if I need armed or unarmed security?",
        answer:
          "Our team will conduct a risk assessment of your property and recommend the best option based on your location, industry, and security concerns.",
      },
      {
        question: "Are your armed guards licensed to carry weapons?",
        answer:
          "Yes. All our armed guards are fully licensed, trained, and authorized to carry firearms in compliance with local and state regulations.",
      },
      {
        question: "Are unarmed guards effective without weapons?",
        answer:
          "Yes. Unarmed guards are highly effective for environments where deterrence, monitoring, and quick response are more important than carrying firearms. They are trained in conflict resolution and emergency response.",
      },
      {
        question: "How quickly can you deploy guards to my location?",
        answer:
          "In most cases, we can deploy both armed and unarmed guards within hours, depending on your location and urgency.",
      },
    ],
  },
];

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
