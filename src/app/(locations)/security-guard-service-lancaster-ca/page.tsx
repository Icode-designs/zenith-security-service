import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocation } from "@/utils/locations";
import { pageOpenGraph } from "@/utils/seo";

const location = getLocation("security-guard-service-lancaster-ca");

export const metadata: Metadata = {
  // absolute: use the client's exact title, without the site-wide suffix
  title: { absolute: location.seoTitle },
  description: location.metaDescription,
  alternates: { canonical: `/${location.slug}` },
  openGraph: pageOpenGraph({
    path: `/${location.slug}`,
    title: location.seoTitle,
    description: location.metaDescription,
  }),
};

export default function Page() {
  return <LocationPage location={location} />;
}
