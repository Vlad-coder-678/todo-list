// vendor imports
import React, { FC } from "react";

// locale imports
// components
import AddNewTaskModal from "./components/modals/AddNewTaskModal";
import FullTaskDescriptionModal from "./components/modals/FullTaskDescriptionModal";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import MenuModal from "./components/modals/MenuModal";
import NewsModal from "./components/modals/NewsModal";
import StyledContainer from "./components/shared/StyledContainer";

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
