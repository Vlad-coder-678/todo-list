// vendor imports
import React, { FC } from "react";
import ToggleThemeModeComponent from "./ToggleThemeModeComponent";
import StyledMenu from "../shared/StyledMenu";

interface SettingsPropsType {
  anchorEl: HTMLElement | null,
  open: boolean,
  onClose: () => void,
};

const SettingsComponent: FC<SettingsPropsType> = ({
  anchorEl,
  open,
  onClose,
}) => {
  return (
    <StyledMenu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
    >
      <ToggleThemeModeComponent />
    </StyledMenu>
  );
};

export default SettingsComponent;
