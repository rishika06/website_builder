//@ts-nocheck

import React, { ChangeEvent } from "react";

type UploadFileProps = {
  imageFile: File;
  setImageFile: () => {};
};

function UploadFile({ imageFile, setImageFile }: UploadFileProps) {
  function handleFileChange(e: any) {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
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
        {imageFile !== undefined && "Image uploaded successfully!"}
      </span>
    </div>
  );
}

export default UploadFile;
