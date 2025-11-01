import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import HomeHeroContent from "@/components/HomeHeroContent";
import HomeIntro from "@/components/HomeIntro";
import Outro from "@/components/Outro";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import { StyledMainWrapper } from "@/styles/components/Ui.styles";

export default function Home() {
  return (
    <StyledMainWrapper>
      <Hero>
        <HomeHeroContent />
      </Hero>
      <HomeIntro />
      <Services />
      <Testimonial />
      <ContactForm />
      <Outro />
    </StyledMainWrapper>
  );
}
