// vendor imports
import React, { useContext } from "react";
import { IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// local imports
// providers
import { ColorModeContext } from "../../../providers/ThemeContextProvider";
// icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ToggleThemeModeComponent () {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon color="action" />}
      </IconButton>
      {`${theme.palette.mode} mode`.toUpperCase()}
    </Box>
  );
}

export default ToggleThemeModeComponent;
