// vendor imports
import React, { FC } from "react";

// locale imports
// components
import StyledContainer from "./components/shared/StyledContainer";
import FullTaskDescriptionModal from "./components/FullTaskDescriptionModal";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import MenuModal from "./components/modals/MenuModal";
import NewsModal from "./components/modals/NewsModal";
import AddNewTaskModal from "./components/modals/AddNewTaskModal";

const App: FC = () => {
  return (
    <StyledContainer>
      <HeaderComponent />
      <MainComponent />

      {/* modals */}
      <MenuModal />
      <FullTaskDescriptionModal />
      <AddNewTaskModal />
      <NewsModal />
    </StyledContainer>
  );
};

export default App;
