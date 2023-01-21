// vendor imports
import { PaletteMode } from "@mui/material";

// constants
import darkThemePalette from "../constants/darkThemePalette";
import lightThemePalette from "../constants/lightThemePalette";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightThemePalette : darkThemePalette),
  },
  typography: {
    h1: {
      fontSize: "36px",
      lineHeight: 1.12,
      fontWeight: 700,
    },
    h2: {
      fontSize: "36px",
    },
  },
});

export default getDesignTokens;
