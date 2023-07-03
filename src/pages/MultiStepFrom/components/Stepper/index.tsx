import React, { ReactElement } from "react";
import "./stepper.style.css";

type StepperProps = {
  currentStepIndex: number;
  steps: ReactElement[];
};

function Stepper({ currentStepIndex, steps }: StepperProps) {
  return (
    <div className="stepper__container">
      <div className="stepper__step-container">
        <span
          className={
            currentStepIndex === 0
              ? "stepper__number stepper-active"
              : "stepper__number"
          }
        >
          1
        </span>
        <span className="stepper__name">Website Type</span>

        <p className="stepper_line"></p>
      </div>

      <div className="stepper__step-container">
        <span
          className={
            currentStepIndex === 1
              ? "stepper__number stepper-active"
              : "stepper__number"
          }
        >
          2
        </span>
        <span className="stepper__name">Website Name</span>
        <p className="stepper_line"></p>
      </div>

      <div className="stepper__step-container">
        <span
          className={
            currentStepIndex === 2
              ? "stepper__number stepper-active"
              : "stepper__number"
          }
        >
          3
        </span>
        <span className="stepper__name">Website Layout</span>
        <p className="stepper_line"></p>
      </div>

      <div className="stepper__step-container">
        <span
          className={
            currentStepIndex === 3
              ? "stepper__number stepper-active"
              : "stepper__number"
          }
        >
          4
        </span>
        <span className="stepper__name">Website Form</span>
        <p className="stepper_line"></p>
      </div>

      {/* {currentStepIndex + 1} / {steps?.length} */}
    </div>
  );
}

export default Stepper;
