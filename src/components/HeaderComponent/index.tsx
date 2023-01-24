// vendor imports
import React, { FC, useContext } from "react";
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
import TEXT from "../../constants/text";
// types
import { ModalsShowContext } from "../../providers/ModalsShowProvider";

const HeaderComponent: FC = () => {
  const theme = useTheme();
  const { handleOpenMenu } = useContext(ModalsShowContext);

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        background: theme.palette.background.default,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          height: "70px",
          boxSizing: "border-box",
          paddingLeft: "36px",
          paddingRight: "28px",
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
            paddingLeft: "11px",
          }}
        >
          {TEXT.mainTitle}
        </Typography>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
          sx={{ paddingRight: "14px" }}
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
