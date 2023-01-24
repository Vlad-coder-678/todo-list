import { ChangeEventHandler, Dispatch, ReactNode, SetStateAction } from "react";

interface TaskType {
  id: number,
  title: string,
  description: string,
  priority: string,
  isDone: boolean,
}

interface TaskListType {
  [date: string]: TaskType[],
}

interface updateTaskListPropsType {
  date: string,
  id: number,
  property: string,
  value: string | number | boolean,
}

interface TaskListContextType {
  taskList: TaskListType,
  updateTaskList: (props: updateTaskListPropsType) => void,
  removeTask: ({ date, id }: { date: string; id: number }) => void,
}

interface ThemeContextProviderType {
  children: ReactNode,
}

interface RestTaskListComponentPropTypes {
  date: string,
  taskList: TaskType[],
  index: number,
}

interface EditTaskFormComponenPropsType {
  onClose: () => void,
}

interface SnackComponentType {
  autoHideDuration: number,
  isShow: boolean,
  snackText: string,
  handleSnackClose: Dispatch<SetStateAction<boolean>>,
  snackMessage: string,
  snackAction: ReactNode,
  snackSeverity?: "success" | "info" | "warning" | "error",
}

interface StyledInputPropsType {
  value: string,
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
  label: string,
  name: string,
}

interface TaskCardComponentPropsType {
  date: string,
  id: number,
  title: string,
  description: string,
  isDone: boolean,
  priorityColor: string,
}

export type {
  TaskType,
  TaskListType,
  TaskListContextType,
  ThemeContextProviderType,
  updateTaskListPropsType,
  RestTaskListComponentPropTypes,
  EditTaskFormComponenPropsType,
  SnackComponentType,
  StyledInputPropsType,
  TaskCardComponentPropsType,
};
