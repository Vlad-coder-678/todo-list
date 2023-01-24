// vendor imports
import React, { FC } from "react";
import { TextField } from "@mui/material";

// local imports
// types
import { StyledInputPropsType } from "../../../types/types";

const StyledInput: FC<StyledInputPropsType> = ({
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
