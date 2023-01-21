// vendor imports
import React, {
  Dispatch,
  FC,
  SetStateAction,
} from "react";
import {
  IconButton,
  Toolbar,
  Typography,
  AppBar,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import text from "../../constants/text";

interface HeaderComponentType {
  setIsSettingsShow: Dispatch<SetStateAction<boolean>>,
}

const HeaderComponent: FC<HeaderComponentType> = ({
  setIsSettingsShow,
}) => {
  return (
    <AppBar
      position="fixed"
    >
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {text.mainTitle}
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => { setIsSettingsShow(true); }}
        >
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
