import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import HomeHeroContent from "@/components/HomeHeroContent";
import HomeIntro from "@/components/HomeIntro";
import Outro from "@/components/Outro";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";
import { getServices } from "@/lib/supabase/services";

export default async function Home() {
  const services = await getServices();

  return (
    <StyledMainWrapper>
      <Hero>
        <HomeHeroContent />
      </Hero>
      <HomeIntro />
      <Services services={services} />
      <Testimonial />
      <ContactForm services={services} />
      <Outro />
    </StyledMainWrapper>
  );
}
