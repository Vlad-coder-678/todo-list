// vendor imports
import React, {
  Dispatch,
  FC,
  SetStateAction,
} from "react";
import { Drawer } from "@mui/material";
import ToggleThemeModeComponent from "./ToggleThemeModeComponent";

interface SettingsPropsType {
  isSettingShow: boolean,
  setIsSettingsShow: Dispatch<SetStateAction<boolean>>,
};

const SettingsComponent: FC<SettingsPropsType> = ({
  isSettingShow,
  setIsSettingsShow,
}) => {
  return (
    <Drawer
      anchor="right"
      open={isSettingShow}
      onClose={() => setIsSettingsShow(false)}
      variant="temporary"
    >
      <ToggleThemeModeComponent />
    </Drawer>
  );
};

export default SettingsComponent;
