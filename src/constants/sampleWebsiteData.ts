import { v4 as uuidv4 } from "uuid";
import sampleLogo from "../assests/logo-5.jpg";
import heroSectionImage from "../assests/bg-2.jpg";

export const sampleNavList = {
  navList: [
    {
      id: uuidv4(),
      navLink: "Home",
      route: "",
    },
    {
      id: uuidv4(),
      navLink: "About",
      route: "",
    },
    {
      id: uuidv4(),
      navLink: "Blogs",
      route: "",
    },
    {
      id: uuidv4(),
      navLink: "Contact",
      route: "",
    },
  ],
  logoImage: sampleLogo,
};

export const sampleHeroSection = {
  heroHeading: "Hello, my name is Mary",
  heroSubHeading: "I am a gardener",
  imageFile: heroSectionImage,
};
