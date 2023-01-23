// vendor imports
import React, { FC, MouseEvent, useState } from "react";

// locale imports
// components
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import SettingsComponent from "./components/SettingsComponent";
import SnackComponent from "./components/shared/SnackComponent";
import StyledContainer from "./components/shared/StyledContainer";

const App: FC = () => {
  const [isSnackShow, setIsSnackShow] = useState(false);
  const [showMenuButtonAnchor, setShowMenuButtonAnchor] = useState<null | HTMLElement>(null);
  const isSettingShow = Boolean(showMenuButtonAnchor);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setShowMenuButtonAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setShowMenuButtonAnchor(null);
  };

  return (
    <StyledContainer>
      <HeaderComponent handleClick={handleClick} />
      <MainComponent />

      {/* modals */}
      <SettingsComponent
        anchorEl={showMenuButtonAnchor}
        open={isSettingShow}
        onClose={handleClose}
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
