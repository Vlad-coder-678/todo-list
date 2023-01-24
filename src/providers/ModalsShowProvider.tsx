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
  // menu (or settings) modal state
  const [showMenuButtonAnchor, setShowMenuButtonAnchor] = useState<null | HTMLElement>(null);
  const isShowMenuModal = Boolean(showMenuButtonAnchor);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => setShowMenuButtonAnchor(event.currentTarget);
  const handleCloseMenu = () => setShowMenuButtonAnchor(null);

  // task description modal state
  const [isShowFullTaskDescriptionModal, setIsShowFullTaskDescriptionModal] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState({ date: Object.keys(TASK_LIST)[0], id: 1 });

  const openFullTaskDescriptionModal = ({ date, id }: { date: string; id: number }) => {
    setCurrentTaskId({ date, id });
    setIsShowFullTaskDescriptionModal(true);
  };
  const closeFullDescriptionModal = () => setIsShowFullTaskDescriptionModal(false);

  // news modal state
  const [isShowNewsModal, setIsShowNewsModal] = useState(true);
  const toggleShowNewsModal = () => setIsShowNewsModal(!isShowNewsModal);

  // new task modal state
  const [isShowNewTaskModal, setIsShowNewTaskModal] = useState(false);
  const handleOpenNewTaskModal = () => {
    handleCloseMenu();
    setIsShowNewTaskModal(true);
  };
  const handleCloseNewTaskModal = () => setIsShowNewTaskModal(false);

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
    isShowNewTaskModal,
    handleOpenNewTaskModal,
    handleCloseNewTaskModal,
  };

  return (
    <ModalsShowContext.Provider value={value}>
      {children}
    </ModalsShowContext.Provider>
  );
};

export default ModalsShowProvider;
