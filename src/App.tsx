// vendor imports
import React, { FC } from "react";

// locale imports
// components
import StyledContainer from "./components/shared/StyledContainer";
import FullTaskDescriptionModal from "./components/FullTaskDescriptionModal";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import SettingsComponent from "./components/SettingsComponent";
import NewsModal from "./components/NewsModal";

const App: FC = () => {
  return (
    <StyledContainer>
      <HeaderComponent />
      <MainComponent />

      {/* modals */}
      <SettingsComponent />
      <FullTaskDescriptionModal />
      <NewsModal />
    </StyledContainer>
  );
};

export default App;
