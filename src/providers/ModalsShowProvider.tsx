// vendor import
import React, {
  createContext,
  MouseEvent,
  ReactNode,
  useState,
} from "react";

// local import
import TASK_LIST from "../mock/task-list";

export const ModalsShowContext = createContext<any>(null);

const ModalsShowProvider = ({ children }: { children: ReactNode }) => {
  const [currentTaskId, setCurrentTaskId] = useState({ date: Object.keys(TASK_LIST)[0], id: 1 });
  const [showMenuButtonAnchor, setShowMenuButtonAnchor] = useState<null | HTMLElement>(null);
  const isShowMenuModal = Boolean(showMenuButtonAnchor);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => setShowMenuButtonAnchor(event.currentTarget);
  const handleCloseMenu = () => setShowMenuButtonAnchor(null);

  const [isShowFullTaskDescriptionModal, setIsShowFullTaskDescriptionModal] = useState(false);

  const openFullTaskDescriptionModal = ({ date, id }: { date: string; id: number }) => {
    setCurrentTaskId({ date, id });
    setIsShowFullTaskDescriptionModal(true);
  };

  const closeFullDescriptionModal = () => setIsShowFullTaskDescriptionModal(false);

  const [isShowNewsModal, setIsShowNewsModal] = useState(true);

  const toggleShowNewsModal = () => setIsShowNewsModal(!isShowNewsModal);

  const value = {
    currentTaskId,
    setCurrentTaskId,
    showMenuButtonAnchor,
    isShowMenuModal,
    handleOpenMenu,
    handleCloseMenu,
    isShowFullTaskDescriptionModal,
    openFullTaskDescriptionModal,
    closeFullDescriptionModal,
    isShowNewsModal,
    toggleShowNewsModal,
  };

  return (
    <ModalsShowContext.Provider value={value}>
      {children}
    </ModalsShowContext.Provider>
  );
};

export default ModalsShowProvider;
