// @ts-nocheck
import NavBar from "../../components/Navbar";
import {
  sampleNavList,
  sampleHeroSection,
} from "../../constants/sampleWebsiteData";
import PreviewHeroSection from "../PreviewWebsiteLayout/components/Preview_HeroSection";

function SampleWebsite() {
  return (
    <div>
      <NavBar
        logoImage={sampleNavList?.logoImage}
        navLinkList={sampleNavList?.navList}
      />
      <PreviewHeroSection
        heroHeading={sampleHeroSection?.heroHeading}
        heroSubHeading={sampleHeroSection?.heroSubHeading}
        imageFile={sampleHeroSection?.imageFile}
      />
    </div>
  );
}

export default SampleWebsite;
