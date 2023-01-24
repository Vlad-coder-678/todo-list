// vendor imports
import React, { FC, useContext } from "react";

// local import
// providers
import { ModalsShowContext } from "../../providers/ModalsShowProvider";
// components
import StyledMenu from "../shared/StyledMenu";
import ToggleThemeModeComponent from "./ToggleThemeModeComponent";
import ToggleNewsModelComponent from "../ToggleNewsModelComponent";

const SettingsComponent: FC = () => {
  const { isShowMenuModal, handleCloseMenu, showMenuButtonAnchor } = useContext(ModalsShowContext);

  return (
    <StyledMenu
      open={isShowMenuModal}
      onClose={handleCloseMenu}
      anchorEl={showMenuButtonAnchor}
    >
      <ToggleThemeModeComponent />
      <ToggleNewsModelComponent />
    </StyledMenu>
  );
};

export default SettingsComponent;
