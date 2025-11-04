import React from "react";
import SectionSwitcher from "./SectionWrapper";
import {
  StyledServiceCardGrid,
  StyledServices,
} from "@/styles/components/Homepage.styles";
import { SERVICES_LIST } from "@/utils/data";
import ServiceCard from "./ui/ServiceCard";
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
        </StyledServiceCardGrid>
      </StyledServices>
    </SectionSwitcher>
  );
};

export default Services;
