import React from "react";
import SectionSwitcher from "./SectionWrapper";
import {
  StyledServiceCardGrid,
  StyledServices,
} from "@/styles/components/Homepage.styles";
import { SERVICES_LIST } from "@/utils/data";
import ServiceCard from "./ui/ServiceCard";
import { StyledLink } from "@/styles/components/Ui.styles";

interface Props {
  alternate?: boolean;
}

const Services = ({ alternate }: Props) => {
  return (
    <SectionSwitcher>
      <StyledServices $alternate={alternate}>
        <article>
          {!alternate ? (
            <>
              <h2>our specialized security services</h2>
              <p>
                At Zenith Protective Services, our full range of security
                services is built to safeguard people, property, and businesses.
                Discover our specialized guard services tailored to your needs.
              </p>
            </>
          ) : (
            <h2>
              Discover Our Specialized Guard Services Tailored to Your Needs
            </h2>
          )}
        </article>
        <StyledServiceCardGrid>
          {SERVICES_LIST.map((service, i) => (
            <ServiceCard
              key={i}
              id={service.id}
              img={service.url[0]}
              title={service.name}
              description={service.description}
            />
          ))}
          <li>
            <p>
              Zenith Protective Services is committed to protecting your people,
              property, and business. Our security experts provide affordable,
              professional, and reliable protection 24/7—so you can focus on
              what matters most.
            </p>
            <StyledLink href="/contact" $variant="secondary">
              <p>get a free quote</p>
            </StyledLink>
          </li>
        </StyledServiceCardGrid>
      </StyledServices>
    </SectionSwitcher>
  );
};

export default Services;
