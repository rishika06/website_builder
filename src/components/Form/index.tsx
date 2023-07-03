import React, { useState } from "react";
import InputField from "../../lib/InputField";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <form>
      {/* <InputField
        htmlFor="First Name"
        type="text"
        name={firstName}
        value={firstName}
        id="First Name"
        label="First Name"
      />
      <InputField
        htmlFor="Last Name"
        type="text"
        name={lastName}
        value={lastName}
        id="Last Name"
        label="Last Name"
      /> */}
    </form>
  );
}

export default Form;
