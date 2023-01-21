import { Dispatch, ReactNode, SetStateAction } from "react";

interface ToDo {
  id: number,
  title: string,
  description: string,
  priority: string,
  isDone: boolean,
  startDate: string,
}

type ToDoList = ToDo[];

interface ToDoListContextType {
  toDoList: ToDoList,
  setToDoList: Dispatch<SetStateAction<ToDoList>>,
}

interface ThemeContextProviderType {
  children: ReactNode,
}

interface HeaderComponentPropsType {
  setIsSettingsShow: Dispatch<SetStateAction<boolean>>,
}

interface CheckboxComponentPropsType {
  isChecked: boolean,
  setIsChecked: Dispatch<SetStateAction<boolean>>,
}

export type {
  ToDo,
  ToDoList,
  ToDoListContextType,
  ThemeContextProviderType,
  HeaderComponentPropsType,
  CheckboxComponentPropsType,
};
