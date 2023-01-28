import { ChangeEventHandler, Dispatch, ReactNode, SetStateAction } from "react";
import { TaskType } from ".";

interface RestTaskListComponentProps {
  date: string,
  taskList: TaskType[],
  index: number,
}

interface EditTaskFormComponenProps {
  onClose: () => void,
}

interface SnackComponentProps {
  autoHideDuration: number,
  isShow: boolean,
  snackText: string,
  handleSnackClose: Dispatch<SetStateAction<boolean>>,
  snackMessage: string,
  snackAction: ReactNode,
  snackSeverity?: "success" | "info" | "warning" | "error",
}

interface StyledInputProps {
  value: string,
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
  label: string,
  name: string,
}

interface TaskCardComponentProps {
  date: string,
  id: number,
  title: string,
  description: string,
  isDone: boolean,
  priorityColor: string,
}

interface TaskDescriptionComponentProps {
  handleOpenForm: () => void,
  handleRemoveTask: () => void,
}

export type {
  StyledInputProps,
  RestTaskListComponentProps,
  EditTaskFormComponenProps,
  SnackComponentProps,
  TaskCardComponentProps,
  TaskDescriptionComponentProps,
};
