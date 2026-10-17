import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import NavContextProvider from "@/providers/NavProvider";
import LayoutInner from "@/components/LayoutInner";
import Script from "next/script";
import logo from "@/assets/logo.png";
import { getServicesSafe } from "@/lib/supabase/services";
import { SERVICETYPE } from "@/utils/data";
import { SITE_NAME, SITE_URL } from "@/utils/seo";
import { PHONE_TEL } from "@/utils/company";

// Switzer (Indian Type Foundry, free via Fontshare), self-hosted so there is no
// render-blocking third-party stylesheet. Files live in src/assets/fonts.
const switzer = localFont({
  src: [
    { path: "../assets/fonts/switzer-300.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/switzer-400.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/switzer-500.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/switzer-600.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/switzer-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

// Analytics load only when real IDs are configured (see README). With no IDs
// set, no tracking scripts are added to the page.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const viewport: Viewport = {
  themeColor: "#03045e",
};

// Site-wide defaults. Every page sets its own title, description, canonical
// and Open Graph tags; these apply only where a page doesn't.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Licensed Security Guards & 24/7 Protection Services | Zenith Protective Services CA",
    template: "%s | Zenith Protective Services",
  },
  description:
    "Zenith Protective Services Inc. offers 24/7 licensed security guard services for businesses, hospitals, hotels & properties in California. Affordable, professional protection you can trust.",

  authors: [{ name: "Zenith Protective Services Inc." }],
  creator: "Osakwe Bonaventure Ifechukwu",
  publisher: "Zenith Protective Services Inc.",
  applicationName: SITE_NAME,
  category: "Security Services",

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

  // Pages add url/title/description via pageOpenGraph() in src/utils/seo.ts.
  // The share image comes from src/app/opengraph-image.png.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
  },

  // No title/description here so X falls back to each page's Open Graph tags.
  // The share image comes from src/app/twitter-image.png.
  twitter: {
    card: "summary_large_image",
    creator: "@Alexanderosakwe",
  },

  // Google Search Console is verified with public/google3cfb27c699fa6524.html.
};

// Structured data (JSON-LD). Services come from the database so the catalogue
// always matches the service pages that actually exist.
function buildStructuredData(services: SERVICETYPE[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SecurityService",
        "@id": `${SITE_URL}/#organization`,
        name: "Zenith Protective Services Inc.",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}${logo.src}`,
          width: logo.width,
          height: logo.height,
        },
        image: `${SITE_URL}${logo.src}`,
        description:
          "BSIS licensed security guard company (PPO #122193) providing armed and unarmed security guards 24/7 across Los Angeles and Southern California.",
        telephone: PHONE_TEL.replace("tel:", ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: "14030 Chadron Avenue",
          addressLocality: "Hawthorne",
          addressRegion: "CA",
          postalCode: "90250",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 33.9164,
          longitude: -118.3526,
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
          { "@type": "State", name: "California" },
          { "@type": "City", name: "Los Angeles" },
          { "@type": "City", name: "Hawthorne" },
          { "@type": "City", name: "San Bernardino" },
          { "@type": "City", name: "Lancaster" },
          { "@type": "City", name: "Palmdale" },
        ],
        ...(services.length > 0 && {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Security Guard Services",
            itemListElement: services.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.name,
                description: service.description,
                url: `${SITE_URL}/services/${service.id}`,
              },
            })),
          },
        }),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Never let a Supabase hiccup take down every page: render with no services
  // (empty footer list) instead of throwing.
  const services = await getServicesSafe();

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildStructuredData(services)),
          }}
        />
      </head>
      <body className={switzer.variable}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <StyledComponentsRegistry>
          <NavContextProvider>
            <LayoutInner services={services}>{children}</LayoutInner>
          </NavContextProvider>
        </StyledComponentsRegistry>

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {GTM_ID && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
