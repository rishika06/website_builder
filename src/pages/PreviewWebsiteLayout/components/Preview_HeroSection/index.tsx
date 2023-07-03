import React from "react";
import "./heroSection.css";

type PreviewHeroSectionProps = {
  heroHeading: string;
  heroSubHeading: string;
  imageFile: string;
};

function PreviewHeroSection({
  heroHeading,
  heroSubHeading,
  imageFile,
}: PreviewHeroSectionProps) {
  return (
    <div className="hero-section__container">
      <div className="hero-section__image">
        <img src={imageFile} height="100%" alt="hello" />
      </div>
      {/* <p>{heroHeading}</p>
      <p>{heroSubHeading}</p> */}
    </div>
  );
}

export default PreviewHeroSection;
