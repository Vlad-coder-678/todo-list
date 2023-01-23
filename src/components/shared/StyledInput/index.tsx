import React, { ChangeEventHandler, FC } from "react";
import { TextField } from "@mui/material";

interface StyledInputPropsType {
  value: string,
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
  label: string,
  name: string,
}

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
