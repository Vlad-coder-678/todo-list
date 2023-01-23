// vendor imports
import React, { FC, useState } from "react";

// locale imports
// components
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import SettingsComponent from "./components/SettingsComponent";
import SnackComponent from "./components/shared/SnackComponent";
import StyledContainer from "./components/shared/StyledContainer";

const App: FC = () => {
  const [isSettingShow, setIsSettingsShow] = useState(false);
  const [isSnackShow, setIsSnackShow] = useState(false);

  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};

export default App;
