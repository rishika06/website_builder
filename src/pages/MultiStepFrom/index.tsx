import React, { useState, FormEvent } from "react";
import { useMultiStepForm } from "../../hooks/multiStepForm";
import WebsiteType from "./components/WebsiteType";
import WebsiteName from "./components/WebsiteName";

import "./multiStepFrom.style.css";
import Button from "../../lib/Button";
import WebsiteLayout from "./components/WebsiteLayout";
import WebsiteFrom from "./components/WebsiteForm";
import Stepper from "./components/Stepper";

type FormData = {
  websiteType: string;
  websiteName: string;
};

const INITAIL_DATA: FormData = {
  websiteType: "",
  websiteName: "",
};

function MultiStepForm() {
  const [data, setData] = useState(INITAIL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    step,
    steps,
    currentStepIndex,
    next,
    back,
    goTo,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <WebsiteType {...data} updateFields={updateFields} />,
    <WebsiteName {...data} updateFields={updateFields} />,
    <WebsiteLayout />,
    <WebsiteFrom />,
  ]);

  function handleFormSubmit() {
    if (!isLastStep) {
      next(data);
    }
  }
  return (
    <div className="multi-step-form__container">
      <Stepper currentStepIndex={currentStepIndex} steps={steps} />
      {step}

      <div className="multi-step-form__btn-container">
        {isFirstStep && <Button onClick={back} variant="light" label="Back" />}
        <Button
          label={isLastStep ? "Finish" : "Next"}
          onClick={handleFormSubmit}
          variant="light"
        />
      </div>
    </div>
  );
}

export default MultiStepForm;
