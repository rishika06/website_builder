import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadFile from "./UploadFile";
import InputField from "../../../../../lib/InputField";
import Button from "../../../../../lib/Button";

type HeroSectionProps = {
  setAllFormData: any;
  handleSave: () => void;
};

function HeroSection({ setAllFormData, handleSave }: HeroSectionProps) {
  const [heroHeading, setHeroHeading] = useState();
  const [heroSubHeading, setHeroSubHeading] = useState();
  const [imageFile, setImageFile] = useState<any>();

  const formData = useSelector((state: any) => state.form.webFormData);

  // UPLOAD BACKGROUND IMAGE FILE
  function handleFileChange(e: any) {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    setAllFormData((prev: any) => {
      return {
        ...prev,
        heroData: { heroHeading, heroSubHeading, imageFile: imageFile },
      };
    });
  }, [heroHeading, heroSubHeading, imageFile]);

  return (
    <div>
      {/* UPLOAD IMAGE */}
      <div className="form-nav-link__upload">
        <p className="form-nav-link__upload-title">Upload logo image</p>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
          className="inputfile"
        />
        <label htmlFor="file">Choose a file</label>
        <span className="form-nav-link__success-msg">
          {imageFile !== undefined && "Logo image uploaded successfully!"}
        </span>
      </div>

      <InputField
        id="heroHeading"
        htmlFor="heroHeading"
        name="heroHeading"
        type="text"
        label=""
        placeholder="Enter hero section heading"
        value={heroHeading || formData?.heroData?.heroHeading}
        onChange={(e: any) => setHeroHeading(e.target.value)}
      />

      <InputField
        id="heroSubHeading"
        htmlFor="heroSubHeading"
        name="heroSubHeading"
        type="text"
        label=""
        placeholder="Enter hero sub section heading"
        value={heroSubHeading || formData?.heroData?.heroSubHeading}
        onChange={(e: any) => setHeroSubHeading(e.target.value)}
      />

      <Button variant="dark" onClick={handleSave} label="Save" />
    </div>
  );
}

export default HeroSection;
