import React from "react";
import SectionSwitcher from "./SectionWrapper";
import {
  StyledServiceCardGrid,
  StyledServices,
} from "@/styles/components/Homepage.styles";
import { SERVICETYPE } from "@/utils/data";
import ServiceCard from "./ui/ServiceCard";
interface Props {
  alternate?: boolean;
  services: SERVICETYPE[];
}

const Services = ({ alternate, services }: Props) => {
  return (
    <SectionSwitcher>
      <StyledServices $alternate={alternate}>
        <article>
          {!alternate ? (
            <>
              <h2>Our Security Guard Services</h2>
              <p>
                From armed guards to fire watch, choose the security guard
                service that fits your site. Every post is staffed by licensed,
                background-checked officers and can run 24/7.
              </p>
            </>
          ) : (
            <h2>Choose the Right Security Guard Service for Your Site</h2>
          )}
        </article>
        <StyledServiceCardGrid>
          {services.map((service, i) => (
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
