// vendor imports
import React, { FC, useContext } from "react";

// local import
// providers
import { ModalsShowContext } from "../../../providers/ModalsShowProvider";
// components
import StyledMenu from "../../shared/StyledMenu";
import ToggleThemeModeComponent from "./ToggleThemeModeComponent";
import ToggleNewsModalComponent from "./ToggleNewsModalComponent";
import ToggleNewTaskModalComponent from "./ToggleNewTaskModalComponent";

const MenuModal: FC = () => {
  const modalsShowState = useContext(ModalsShowContext);

  return (
    <StyledMenu
      open={modalsShowState?.isShowMenuModal ?? false}
      onClose={modalsShowState?.handleCloseMenu}
      anchorEl={modalsShowState?.showMenuButtonAnchor}
    >
      <ToggleThemeModeComponent />
      <ToggleNewsModalComponent />
      <ToggleNewTaskModalComponent />
    </StyledMenu>
  );
};

export default MenuModal;
