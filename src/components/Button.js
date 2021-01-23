import React, { useState } from "react";

const Button = () => {
  const [value, setValue] = useState("Press Here");

  const dummyMethod = () => {
    setValue("You Clicked");
  };
  return (
    <button onClick={dummyMethod} title="dummyButton">
      {value}
    </button>
  );
};

export default Button;
