import { TextField } from "@mui/material";
import React from "react";

const InputComponent = () => {
  const handleChange = () => { console.log("change input value"); };

  return (
    <TextField
      value={"123"}
      onChange={handleChange}
      label="input"
      type="text"
      variant="standard"
    />
  );
};

export default InputComponent;
