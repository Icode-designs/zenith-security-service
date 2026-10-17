import {
  StyledImgGrid,
  StyledOutro,
} from "@/styles/components/Homepage.styles";
import Image from "next/image";
import React from "react";
import gridImg1 from "@/assets/gridImg1.jpg";
import gridImg2 from "@/assets/gridImg2.jpg";
import gridImg3 from "@/assets/gridImg3.jpg";
import { StyledLink } from "@/styles/components/Ui.styles";

const Outro = () => {
  return (
    <StyledOutro>
      <div>
        <article>
          <h2>
            Why Choose Zenith for Security Guard Services in Los Angeles?
          </h2>
          <p>
            Zenith Protective Services Inc. provides affordable, professional
            security guard services for businesses, hospitals, hotels,
            construction sites, and property owners across Los Angeles and
            Southern California. Our licensed guards are trained in fire watch
            and first aid (CPR), and we protect your site 24 hours a day, 7 days
            a week.
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
              alt="Trained security guards on duty"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <article>
              <h3>Guards Trained for Your Site</h3>
              <p>
                Our guards are trained in fire watch and first aid (CPR), and we
                staff construction sites, hospitals, hotels, and commercial
                properties with officers suited to each environment.
              </p>
            </article>
          </div>
          <div>
            <Image
              src={gridImg2.src}
              width={300}
              height={300}
              alt="Customized Security Plans"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <article>
              <h3>Customized Security Plans</h3>
              <p>
                Every property has different risks. We build your security plan
                around your site, your hours, and your risk level, whether you
                run a hospital, a hotel, or a business of any size.
              </p>
            </article>
          </div>
          <div>
            <Image
              src={gridImg3.src}
              width={300}
              height={300}
              alt="Armed and unarmed security guards on patrol"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <article>
              <h3>24/7 Armed & Unarmed Protection</h3>
              <p>
                Our armed and unarmed guards are available around the clock to
                secure your property, monitor risks, and respond to emergencies,
                day or night.
              </p>
            </article>
          </div>
        </StyledImgGrid>
      </div>
    </StyledOutro>
  );
};

export default Outro;
