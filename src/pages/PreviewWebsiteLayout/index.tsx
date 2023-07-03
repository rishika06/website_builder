import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/Navbar";
import PreviewHeroSection from "./components/Preview_HeroSection";

type PreviewWebsiteLayoutProps = {
  // setShowPreview: (value: boolean) => void;
};

function PreviewWebsiteLayout() {
  const formData = useSelector((state: any) => state.form.webFormData);

  return (
    <>
      <NavBar
        logoImage={formData?.navLinks?.imageFile}
        navLinkList={formData?.navLinks?.navigationLinks}
      />
      <PreviewHeroSection
        heroHeading={formData?.heroData?.heroHeading}
        heroSubHeading={formData?.heroData?.heroSubHeading}
        imageFile={formData?.heroData?.imageFile}
      />
    </>
  );
}

export default PreviewWebsiteLayout;
