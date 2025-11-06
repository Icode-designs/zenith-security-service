import {
  StyledImgGrid,
  StyledOutro,
} from "@/styles/components/Homepage.styles";
import Image from "next/image";
import React from "react";
import gridImg1 from "@/assets/gridImg1.png";
import gridImg2 from "@/assets/gridImg2.png";
import gridImg3 from "@/assets/gridImg3.png";
import { StyledLink } from "@/styles/components/Ui.styles";

const Outro = () => {
  return (
    <StyledOutro>
      <div>
        <article>
          <h2>
            Why Choose Zenith Protective Services for Your Security Needs?
          </h2>
          <p>
            At Zenith Protective Services Inc., your safety is our top priority.
            We provide affordable, professional, and reliable security solutions
            tailored to meet the unique needs of businesses, hospitals, hotels,
            and property owners. With years of experience and a team of licensed
            security guards, we deliver unmatched protection 24 hours a day, 7
            days a week.
          </p>
          <StyledLink href="/about" $variant="secondary">
            learn more about us
          </StyledLink>
        </article>
        <StyledImgGrid>
          <div>
            <Image
              src={gridImg1.src}
              width={300}
              height={300}
              alt="Proven Expertise in Security"
            />
            <article>
              <h4>Proven Expertise in Security</h4>
              <p>
                We have years of experience delivering high-quality protection.
                From fire watch services to commercial security, our guards are
                trained to handle all environments with professionalism.
              </p>
            </article>
          </div>
          <div>
            <Image
              src={gridImg2.src}
              width={300}
              height={300}
              alt="Customized Security Plans"
            />
            <article>
              <h4>Customized Security Plans</h4>
              <p>
                Every property has unique risks. We create tailored security
                strategies to meet your specific needs, whether for hospitals,
                hotels, or businesses of any size.
              </p>
            </article>
          </div>
          <div>
            <Image
              src={gridImg3.src}
              width={300}
              height={300}
              alt="Full-Service Protection 24/7"
            />
            <article>
              <h4>Full-Service Protection 24/7</h4>
              <p>
                Our armed and unarmed guards are available around the clock to
                secure your property, monitor risks, and respond to
                emergencies—day or night.
              </p>
            </article>
          </div>
        </StyledImgGrid>
      </div>
    </StyledOutro>
  );
};

export default Outro;
