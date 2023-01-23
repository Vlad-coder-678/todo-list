// vendor imports
import React, { FC, MouseEvent, useState } from "react";
import FullTaskDescriptionModal from "./components/FullTaskDescriptionModal";

// locale imports
// components
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import SettingsComponent from "./components/SettingsComponent";
import SnackComponent from "./components/shared/SnackComponent";
import StyledContainer from "./components/shared/StyledContainer";
import TASK_LIST from "./mock/task-list";

const App: FC = () => {
  const [isSnackShow, setIsSnackShow] = useState(false);
  const [isShowFullTaskDescriptionModal, setIsShowFullTaskDescriptionModal] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState({ date: Object.keys(TASK_LIST)[0], id: 1 });
  const [showMenuButtonAnchor, setShowMenuButtonAnchor] = useState<null | HTMLElement>(null);
  const isSettingShow = Boolean(showMenuButtonAnchor);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => setShowMenuButtonAnchor(event.currentTarget);
  const handleCloseMenu = () => setShowMenuButtonAnchor(null);
  const openFullDescriptionModal = ({ date, id }: { date: string; id: number }) => {
    setCurrentTaskId({ date, id });
    setIsShowFullTaskDescriptionModal(true);
  };

  return (
    <StyledContainer>
      <HeaderComponent handleClick={handleOpenMenu} />
      <MainComponent openFullDescriptionModal={openFullDescriptionModal} />

      {/* modals */}
      <SettingsComponent
        anchorEl={showMenuButtonAnchor}
        open={isSettingShow}
        onClose={handleCloseMenu}
      />

      <FullTaskDescriptionModal
        open={isShowFullTaskDescriptionModal}
        onClose={() => setIsShowFullTaskDescriptionModal(false)}
        currentTaskId={currentTaskId}
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
