import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocation } from "@/utils/locations";

const location = getLocation("security-guard-service-san-bernardino-ca");

export const metadata: Metadata = {
  // absolute: use the client's exact title, without the site-wide suffix
  title: { absolute: location.seoTitle },
  description: location.metaDescription,
  alternates: { canonical: `/${location.slug}` },
};

export default function Page() {
  return <LocationPage location={location} />;
}
