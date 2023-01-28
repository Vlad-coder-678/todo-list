import { ChangeEventHandler, Dispatch, ReactNode, SetStateAction } from "react";
import { TaskType } from ".";

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
  StyledInputPropsType,
  RestTaskListComponentPropTypes,
  EditTaskFormComponenPropsType,
  SnackComponentType,
  TaskCardComponentPropsType,
};
