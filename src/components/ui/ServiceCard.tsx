import { StyledServiceCard } from "@/styles/components/Homepage.styles";
import { StyledLink } from "@/styles/components/Ui.styles";
import trimTextLength from "@/utils/helpers/trimText";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  id: string;
  img: string;
  title: string;
  description: string;
}

const ServiceCard = ({ id, img, title, description }: Props) => {
  return (
    <StyledServiceCard>
      <Image width={400} height={400} src={img} alt={title} />
      <article>
        <h3>{title}</h3>
        <p>{trimTextLength(description)}</p>
      </article>
      <StyledLink href={`/services/service/${id}`} $variant="tertiary">
        <p>find out more</p>
        <FaArrowRightLong />
      </StyledLink>
    </StyledServiceCard>
  );
};

export default ServiceCard;
