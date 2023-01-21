// vendor imports
import React, { FC } from "react";
import { Checkbox } from "@mui/material";
import { Check } from "@mui/icons-material";

// locale imports
// types
import { CheckboxComponentPropsType } from "../../types/types";
// styles
import "./styles.css";

const CheckboxComponent: FC<CheckboxComponentPropsType> = ({
  isChecked,
  setIsChecked,
}) => {
  const handleChangeChecked = () => setIsChecked(!isChecked);

  return (
    <Checkbox
      checked={isChecked}
      onChange={handleChangeChecked}
      color="default"
      checkedIcon={<Check />}
      icon={<Check className="unchecked" />}
    />
  );
};

export default CheckboxComponent;
