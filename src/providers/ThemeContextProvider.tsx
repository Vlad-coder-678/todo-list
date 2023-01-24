// vendor imports
import React, {
  createContext,
  FC,
  useMemo,
  useState,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

// local imports
// types
import { ThemeContextProviderType } from "../types/types";
// utilities
import getDesignTokens from "../utilities/getDesignToken";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeContextProvider: FC<ThemeContextProviderType> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
  }), []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeContextProvider;
