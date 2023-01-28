// vendor imports
import React, { FC } from "react";
import { TextField } from "@mui/material";

// local imports
// types
import { StyledInputProps } from "../../../types/components";

const StyledInput: FC<StyledInputProps> = ({
  value,
  onChange,
  label,
  name,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label={label}
      name={name}
      type="text"
      variant="standard"
    />
  );
};

export default StyledInput;
