// vendor imports
import React, { FC } from "react";
import ToggleThemeModeComponent from "./ToggleThemeModeComponent";
import StyledMenu from "../shared/StyledMenu";
import ToggleNewsModelComponent from "../ToggleNewsModelComponent";

interface SettingsPropsType {
  anchorEl: HTMLElement | null,
  open: boolean,
  onClose: () => void,
  isShowNewsModal: boolean,
  toggleShowNewsModal: () => void,
};

const SettingsComponent: FC<SettingsPropsType> = ({
  anchorEl,
  open,
  onClose,
  isShowNewsModal,
  toggleShowNewsModal,
}) => {
  return (
    <StyledMenu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
    >
      <ToggleThemeModeComponent />

      <ToggleNewsModelComponent
        isShowNewsModal={isShowNewsModal}
        toggleShowNewsModal={toggleShowNewsModal}
      />
    </StyledMenu>
  );
};

export default SettingsComponent;
