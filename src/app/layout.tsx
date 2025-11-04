import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import NavContextProvider from "@/providers/NavProvider";
import LayoutInner from "@/components/LayoutInner";
import Script from "next/script";
import logo from "@/assets/logo.png";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Improves performance
});

// SEO-Optimized Metadata
export const metadata: Metadata = {
  // Primary Meta Tags
  title: {
    default:
      "Licensed Security Guards & 24/7 Protection Services | Zenith Protective Services CA",
    template: "%s | Zenith Protective Services", // For page-specific titles
  },
  description:
    "Zenith Protective Services Inc. offers 24/7 licensed security guard services for businesses, hospitals, hotels & properties in California. Affordable, professional protection you can trust.",

  // Keywords (though less important now, still good to have)
  keywords: [
    "security guards California",
    "24/7 security services",
    "licensed security officers",
    "property protection",
    "hospital security guards",
    "construction site security",
    "warehouse security services",
    "hotel security guards",
    "commercial security services",
    "security company Hawthorne CA",
    "private security guards",
    "armed security services",
    "unarmed security guards",
    "mobile patrol services",
    "event security California",
  ],

  // Author and Creator
  authors: [{ name: "Zenith Protective Services Inc." }],
  creator: "Osakwe Bonaventure Ifechukwu",
  publisher: "Zenith Protective Services Inc.",

  // Robots Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenith-security-service.vercel.app/",
    siteName: "Zenith Protective Services",
    title:
      "Licensed Security Guards & 24/7 Protection Services | Zenith Protective Services",
    description:
      "Professional 24/7 security guard services for businesses, hospitals, hotels, and properties in California. Licensed, experienced, and reliable security solutions.",
    images: [
      {
        url: logo.src,
        width: 1200,
        height: 630,
        alt: "Zenith Protective Services - Professional Security Guards",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Licensed Security Guards | Zenith Protective Services CA",
    description:
      "24/7 professional security guard services for businesses and properties in California",
    images: logo.src,
    creator: "@Alexanderosakwe",
  },

  // Verification (add these to Google Search Console and Bing Webmaster)
  verification: {
    google: "your-google-verification-code", // Get from Google Search Console
    yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Additional Meta
  category: "Security Services",

  // Alternate Languages (if you add Spanish version later)
  alternates: {
    canonical: "https://zenith-security-service.vercel.app/",
    // languages: {
    //   'es': 'https://zenith-security-service.vercel.app/es',
    // },
  },

  // App-specific (for PWA if you implement it)
  applicationName: "Zenith Protective Services",

  // Other important meta
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Hawthorne, California",
    "geo.position": "33.9164;-118.3526",
    ICBM: "33.9164, -118.3526",
    classification: "Security Services",
    coverage: "California, United States",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    "theme-color": "#03045e",
  },
};

// Structured Data for SEO (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SecurityService",
      "@id": "https://zenith-security-service.vercel.app/#organization",
      name: "Zenith Protective Services Inc.",
      alternateName: "Zenith Security Agency",
      url: "https://zenith-security-service.vercel.app/",
      logo: {
        "@type": "ImageObject",
        url: logo.src,
        width: 250,
        height: 60,
      },
      image: logo.src,
      description:
        "Professional 24/7 security guard services for businesses, hospitals, hotels, and properties in California.",
      telephone: "(323) 952-1521", // Add your phone number
      email: "info@zenithprotective.com", // Add your email****
      address: {
        "@type": "PostalAddress",
        streetAddress: "14030 Chadron Avenue Hawthorne, CA 90250",
        addressLocality: "Hawthorne",
        addressRegion: "CA",
        postalCode: "90250",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "33.9164",
        longitude: "-118.3526",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "$$",
      areaServed: [
        {
          "@type": "State",
          name: "California",
        },
        {
          "@type": "City",
          name: "Los Angeles",
        },
        {
          "@type": "City",
          name: "Hawthorne",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Security Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "24/7 Security Guard Services",
              description:
                "Round-the-clock security guard protection for businesses and properties",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hospital Security Services",
              description:
                "Specialized security services for healthcare facilities",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Construction Site Security",
              description:
                "Security and fire watch services for construction sites",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hotel Security Services",
              description:
                "Professional security guards for hotels and hospitality",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Property Security Services",
              description:
                "Security solutions for commercial and residential properties",
            },
          },
        ],
      },
      // sameAs: [
      //   "https://www.facebook.com/yourpage", // Add your social media links
      //   "https://www.linkedin.com/company/yourcompany",
      //   "https://twitter.com/yourhandle",
      //   "https://www.instagram.com/yourhandle",
      // ],
    },
    {
      "@type": "WebSite",
      "@id": "https://zenith-security-service.vercel.app/#website",
      url: "https://zenith-security-service.vercel.app/",
      name: "Zenith Protective Services",
      publisher: {
        "@id": "https://zenith-security-service.vercel.app/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://zenith-security-service.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />

        {/* Font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={poppins.variable}>
        <StyledComponentsRegistry>
          <NavContextProvider>
            <LayoutInner>{children}</LayoutInner>
          </NavContextProvider>
        </StyledComponentsRegistry>

        {/* Google Analytics - Replace with your GA4 measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Google Tag Manager (Optional but recommended) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
