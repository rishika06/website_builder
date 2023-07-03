import React, { useRef, useState } from "react";
import Layout from "../../../../components/Layout";

import "./websiteForm.style.css";
import NavLink from "./components/Form_NavLink";
import HeroSection from "./components/Form_HeroSection";
import SideBar from "./components/SideBar";
import { setWebFormData } from "../../../../redux/formReducer";
import { useDispatch } from "react-redux";
import PreviewWebsiteLayout from "../../../PreviewWebsiteLayout";
import Modal from "../../../../components/Modal";
import Button from "../../../../lib/Button";

function WebsiteFrom() {
  const dispatch = useDispatch();

  const [formSection, setFromSection] = useState("Nav Links");
  const [activeFormSection, setActiveFromSection] = useState(false);
  const [allFormData, setAllFormData] = useState({});

  const [open, setOpen] = useState(false);

  function handleSideBarClick(e: any) {
    setFromSection(e.target.textContent);
    setActiveFromSection(true);
  }

  console.log(activeFormSection);

  // HANDLE SAVE
  function handleSave() {
    dispatch(setWebFormData({ ...allFormData }));
  }

  // HANDLE FORM DATA
  function handleFromSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <div className="website-form__wrapper">
      <Layout>
        <div className="website-form__preview-btn-wrapper">
          <button
            className="website-form__preview-btn"
            onClick={() => setOpen(true)}
          >
            Preview
          </button>
        </div>

        <div className="website-form__container">
          <section className="website-form__side-nav">
            <SideBar
              handleClick={handleSideBarClick}
              formSection={formSection}
            />
          </section>

          <section className="website-form__forms-container">
            <form onSubmit={handleFromSubmit}>
              {formSection === "Nav Links" && (
                <NavLink
                  setAllFormData={setAllFormData}
                  handleSave={handleSave}
                />
              )}
              {formSection === "Hero Section" && (
                <HeroSection
                  setAllFormData={setAllFormData}
                  handleSave={handleSave}
                />
              )}
            </form>
          </section>
        </div>
      </Layout>

      {open && (
        <Modal setOpen={setOpen} width="90%" height="90%">
          <PreviewWebsiteLayout />
        </Modal>
      )}
    </div>
  );
}

export default WebsiteFrom;
