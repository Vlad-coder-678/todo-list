import { ReactNode } from "react";
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

interface ThemeContextProviderType {
  children: ReactNode,
}

export type {
  TaskListContextType,
  ThemeContextProviderType,
  addNewTaskPropsType,
  updateTaskListPropsType,
};
