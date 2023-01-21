// vendor imports
import React, { FC, useState } from "react";
import {
  Container,
} from "@mui/material";

// locale imports
// components
import HeaderComponent from "../HeaderComponent";
import SettingsComponent from "../SettingsComponent";
import SnackComponent from "../SnackComponent";

const MainComponent: FC = () => {
  const [isSettingShow, setIsSettingsShow] = useState(false);
  const [isSnackShow, setIsSnackShow] = useState(false);

  return (
    <Container
      fixed
      maxWidth="xs"
    >
      <HeaderComponent
        setIsSettingsShow={setIsSettingsShow}
      />

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
        handleSnackClose={() => { setIsSnackShow(!isSnackShow); }}
      />
    </Container>
  );
};

export default MainComponent;
