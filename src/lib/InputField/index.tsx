import React, { ChangeEvent } from "react";
import "./input.style.css";

type InputFieldProps = {
  htmlFor: string;
  type: string;
  name: string;
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({
  htmlFor,
  type,
  name,
  id,
  label,
  value,
  onChange,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="input__container">
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
