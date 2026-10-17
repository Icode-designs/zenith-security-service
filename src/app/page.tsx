import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import HomeHeroContent from "@/components/HomeHeroContent";
import HomeIntro from "@/components/HomeIntro";
import Outro from "@/components/Outro";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { getServicesSafe } from "@/lib/supabase/services";
import { SHOW_TESTIMONIALS } from "@/utils/data";
import { pageOpenGraph } from "@/utils/seo";

export const metadata = {
  title: {
    absolute: "Security Guard Services in Los Angeles, CA | Zenith",
  },
  description:
    "BSIS licensed security guard company in Hawthorne, CA. Armed & unarmed guards for businesses, hospitals, hotels & construction sites, 24/7. Free quote.",
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph({
    path: "/",
    title: "Security Guard Services in Los Angeles, CA | Zenith",
    description: "BSIS licensed security guard company in Hawthorne, CA. Armed & unarmed guards for businesses, hospitals, hotels & construction sites, 24/7. Free quote.",
  }),
};

export default async function Home() {
  const services = await getServicesSafe();

  return (
    <StyledMainWrapper>
      <Hero>
        <HomeHeroContent />
      </Hero>
      <HomeIntro />
      <Services services={services} />
      {SHOW_TESTIMONIALS && <Testimonial />}
      <ContactForm services={services} />
      <Outro />
    </StyledMainWrapper>
  );
}
