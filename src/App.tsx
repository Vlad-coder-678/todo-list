// vendor imports
import React, { FC, useState } from "react";
import {
  Container, useTheme,
} from "@mui/material";

// locale imports
// components
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import SettingsComponent from "./components/SettingsComponent";
import SnackComponent from "./components/SnackComponent";

const App: FC = () => {
  const [isSettingShow, setIsSettingsShow] = useState(false);
  const [isSnackShow, setIsSnackShow] = useState(false);
  const theme = useTheme();

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.default,
        height: "844px",
        width: "390px",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <HeaderComponent
        setIsSettingsShow={setIsSettingsShow}
      />

      <MainComponent />

      {/* modals */}
      <SettingsComponent
        isSettingShow={isSettingShow}
        setIsSettingsShow={setIsSettingsShow}
      />

      <SnackComponent
        autoHideDuration={3000}
        isShow={isSnackShow}
        snackSeverity="success"
        snackText="snackText"
        snackMessage="snackMessage"
        snackAction="snackAction"
        handleSnackClose={() => setIsSnackShow(!isSnackShow)}
      />
    </Container>
  );
};

export default App;
