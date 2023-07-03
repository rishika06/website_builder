import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import UploadFile from "./UploadFile";
import Button from "../../../../../lib/Button";
import InputField from "../../../../../lib/InputField";

type NavLinkProps = {
  setAllFormData: any;
  handleSave: () => void;
};

function NavLink({ setAllFormData, handleSave }: NavLinkProps) {
  const [imageFile, setImageFile] = useState<any>();

  const formData = useSelector((state: any) => state.form.webFormData);

  const [inputRowsData, setInputRowsData] = useState<any>(
    formData?.navLinks?.navigationLinks || []
  );

  // UPLOAD LOGO IMAGE FILE
  function handleFileChange(e: any) {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  }

  // ADD INPUT ROWS
  function addInputRows() {
    const rowsInput = {
      id: uuidv4(),
      navLink: "",
      route: "/",
    };
    setInputRowsData([...inputRowsData, rowsInput]);
  }

  // DELETE INPUT ROWS
  function deleteInputRows(index: any) {
    const rows = [...inputRowsData];
    rows.splice(index, 1);
    setInputRowsData(rows);
  }

  // HANDLE INPUT DATA
  const handleInputChange = (
    index: any,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const rowsInput = [...inputRowsData];
    rowsInput[index][name] = value;
    setInputRowsData(rowsInput);
  };

  // SAVE DATA AND UPDATE STORE

  useEffect(() => {
    setAllFormData((prev: any) => {
      return {
        ...prev,
        navLinks: {
          navigationLinks: inputRowsData,
          imageFile: imageFile,
        },
      };
    });
  }, [inputRowsData]);

  return (
    <div>
      {/* UPLOAD LOGO */}
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

      {/* <UploadFile setImageFile={setImageFile} imageFile={imageFile} /> */}

      <div className="form-nav-link__add-rows">
        <Button label="Add input row" variant="dark" onClick={addInputRows} />
      </div>

      <div className="form-nav-link__rows-wrapper">
        {inputRowsData?.length > 0 &&
          inputRowsData?.map((item: any, index: any) => (
            <div style={{ position: "relative" }}>
              <InputField
                id="navLink"
                htmlFor="navLink"
                type="text"
                label=""
                placeholder="Enter nav link title"
                value={item.navLink || formData?.navData}
                onChange={(event) => handleInputChange(index, event)}
                name="navLink"
              />
              <button
                className="form-nav-link__delete-btn"
                onClick={() => deleteInputRows(index)}
              >
                x
              </button>
            </div>
          ))}
      </div>

      <Button variant="dark" onClick={handleSave} label="Save" />
    </div>
  );
}

export default NavLink;
