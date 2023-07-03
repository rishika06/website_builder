import React, { FormEvent } from "react";

import "./radioCards.style.css";

type RadioCardProps = {
  id: string;
  htmlFor: string;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  radioCardDesc: string;
  value: string;
  disable: boolean;
  // checked: boolean;
};

function RadioCard({
  id,
  htmlFor,
  handleRadioChange,
  label,
  radioCardDesc,
  value,
  disable,
}: // checked,
RadioCardProps) {
  return (
    <div
      className={
        disable
          ? "radio-card__container radio-card__disable"
          : "radio-card__container"
      }
    >
      <input
        type="radio"
        name="radio-card"
        value={value}
        id={id}
        aria-describedby="hint-radio-card"
        className="radio-card__input"
        onChange={handleRadioChange}
        // checked={checked}
      />
      <label htmlFor={htmlFor} className="radio-card__label">
        {label}
      </label>
      <p className="radio-card__description" id="hint-radio-card">
        {radioCardDesc}
      </p>
    </div>
  );
}

export default RadioCard;
