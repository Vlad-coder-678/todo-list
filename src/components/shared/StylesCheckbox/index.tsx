// vendor imports
import React from "react";
import { Checkbox, CheckboxProps, styled } from "@mui/material";
import { Check } from "@mui/icons-material";

const StylesCheckbox = styled((props: CheckboxProps) => (
  <Checkbox
    checkedIcon={<Check />}
    icon={<Check className="unchecked" />}
    {...props}
  />
))(({ theme }) => ({
  width: "23px",
  height: "23px",
  backgroundColor: theme.palette.text.primary,
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: theme.palette.text.disabled,
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
  "& .MuiSvgIcon-root": {
    fontSize: "16px",
    color: theme.palette.background.default,
    "&.unchecked": {
      opacity: 0,
    },
  },
}));

export default StylesCheckbox;
