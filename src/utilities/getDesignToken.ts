// vendor imports
import { PaletteMode } from "@mui/material";

// constants
import darkThemePalette from "../constants/darkThemePalette";
import lightThemePalette from "../constants/lightThemePalette";

/**
 * @function getDesignTokens
 *
 * @description возвращает набор цветовой палитры в зависимости от имени цветового режима
 *
 * @param {PaletteMode} mode - название цветовой палитры
 *
 * @returns {object}
 */
const getDesignTokens = (mode: PaletteMode): object => ({
  palette: {
    mode,
    common: {
      black: "#000",
      white: "#f4f4f4",
    },
    error: {
      main: "#fe0000",
      light: "#111",
      dark: "#333",
      contrastText: "#f4f4f4",
    },
    warning: {
      main: "#ffeb34",
      light: "#2c2c2c",
      dark: "#333",
      contrastText: "#f4f4f4",
    },
    info: {
      main: "#366eff",
      light: "#111",
      dark: "#333",
      contrastText: "#f4f4f4",
    },
    success: {
      main: "#11c200",
      light: "#111",
      dark: "#333",
      contrastText: "#f4f4f4",
    },
    ...(mode === "light" ? lightThemePalette : darkThemePalette),
  },
  typography: {
    h1: {
      fontSize: "36px",
      lineHeight: 1.12,
      fontWeight: 700,
      paddingLeft: "11px",
    },
    h2: {
      fontSize: "24px",
      lineHeight: "24px",
      fontWeight: "700",
      letterSpacing: "-0.7px",
    },
    h3: {
      fontSize: "20px",
      lineHeight: "20px",
      fontWeight: "700",
      letterSpacing: "1.7px",
    },
    subtitle1: {
      fontSize: "13px",
      lineHeight: "15px",
      fontWeight: "700",
      letterSpacing: "0",
      maxWidth: "169px",
      color: mode === "light" ? "#777" : "#a9a9a9",
    },
  },
});

export default getDesignTokens;
