import React, { useState, useEffect, ChangeEvent } from "react";
import { useDropzone } from "react-dropzone";

type UploadFileProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setImageFile: (vlaue: File[]) => [];
};

function UploadFile({ handleChange, setImageFile }: UploadFileProps) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  useEffect(() => {
    setImageFile(acceptedFiles);
  }, []);

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  );
}

export default UploadFile;
