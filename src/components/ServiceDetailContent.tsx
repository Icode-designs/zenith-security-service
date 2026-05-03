import React from "react";
import SectionSwitcher from "./SectionWrapper";
import { StyledServiceDetailContent } from "@/styles/components/Services.styles";
import { FlexBox } from "@/styles/components/Ui.styles";
import { SERVICETYPE } from "@/utils/data";
import Image from "next/image";
import { MdOutlineImageNotSupported } from "react-icons/md";

interface PROPS {
  service: SERVICETYPE;
}

const ServiceDetailContent = ({ service }: PROPS) => {
  return (
    <SectionSwitcher>
      <StyledServiceDetailContent>
        <FlexBox $variant="secondary">
          <article>
            <h2>{service.intro.title}</h2>
            <p>{service.intro.description}</p>
          </article>
          {service.url[0] ? (
            <Image
              src={service.url[0]}
              width={500}
              height={500}
              alt={service.intro.title}
            />
          ) : (
            <div className="empty-image">
              <MdOutlineImageNotSupported size={64} />
            </div>
          )}
        </FlexBox>
        <FlexBox $variant="secondary">
          <article>
            <h2>{service.questioniar.question}</h2>
            <p>{service.questioniar.answer}</p>
          </article>
          <article>
            <h2>{service.offer.title}</h2>
            <p>{service.offer.description}</p>
          </article>
        </FlexBox>
      </StyledServiceDetailContent>
    </SectionSwitcher>
  );
};

export default ServiceDetailContent;
