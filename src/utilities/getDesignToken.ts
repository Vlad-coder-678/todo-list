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
});

export default getDesignTokens;
