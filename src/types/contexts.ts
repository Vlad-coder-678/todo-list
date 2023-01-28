import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";
import { CurrentTaskIdType, TaskListType } from ".";

interface updateTaskListPropsType {
  date: string,
  id: number,
  property: string,
  value: string | number | boolean,
}

interface addNewTaskPropsType {
  date: string,
  title: string,
  description: string,
  priority: string,
}

interface TaskListContextType {
  taskList: TaskListType,
  updateTaskList: (props: updateTaskListPropsType) => void,
  removeTask: (props: CurrentTaskIdType) => void,
  addNewTask: (props: addNewTaskPropsType) => void,
}

interface ModalsShowContextType {
  currentTaskId: CurrentTaskIdType,
  setCurrentTaskId: Dispatch<SetStateAction<CurrentTaskIdType>>,
  showMenuButtonAnchor: HTMLElement | null,
  isShowMenuModal: boolean,
  handleOpenMenu: (event: MouseEvent<HTMLElement>) => void,
  handleCloseMenu: () => void,
  isShowFullTaskDescriptionModal: boolean,
  openFullTaskDescriptionModal: (props: CurrentTaskIdType) => void,
  closeFullDescriptionModal: () => void,
  isShowNewsModal: boolean,
  toggleShowNewsModal: () => void,
  isShowNewTaskModal: boolean,
  handleOpenNewTaskModal: () => void,
  handleCloseNewTaskModal: () => void,
}

interface DefaultPropsType {
  children: ReactNode,
}

export type {
  TaskListContextType,
  DefaultPropsType,
  addNewTaskPropsType,
  updateTaskListPropsType,
  ModalsShowContextType,
};
