import { MouseEvent, ReactNode } from "react";

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
}

interface ThemeContextProviderType {
  children: ReactNode,
}

interface HeaderComponentPropsType {
  handleClick: (event: MouseEvent<HTMLElement>) => void,
}

export type {
  TaskType,
  TaskListType,
  TaskListContextType,
  ThemeContextProviderType,
  HeaderComponentPropsType,
  updateTaskListPropsType,
};
