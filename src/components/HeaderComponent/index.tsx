// vendor imports
import React, { FC } from "react";
import {
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  useTheme,
} from "@mui/material";
import { Settings } from "@mui/icons-material";

// locale imports
// constants
import text from "../../constants/text";
// types
import { HeaderComponentPropsType } from "../../types/types";
// styles
import "./styles.css";

const HeaderComponent: FC<HeaderComponentPropsType> = ({ setIsSettingsShow }) => {
  const theme = useTheme();
  const handleClickSettingsButton = () => setIsSettingsShow(true);

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        background: theme.palette.background.default,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="h1"
          noWrap
          sx={{
            fontSize: "36px",
            lineHeight: "36px",
            fontWeight: "700",
            letterSpacing: "0",
          }}
        >
          {text.mainTitle}
        </Typography>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClickSettingsButton}
        >
          <Settings
            sx={{ fontSize: "36px" }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
