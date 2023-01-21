import { Dispatch, ReactNode, SetStateAction } from "react";

interface ToDo {
  id: number
  title: string
  description: string
  priority: string
  isDone: boolean
  startDate: number
}

type ToDoList = ToDo[];

interface ToDoListContextType {
  toDoList: ToDoList
  setToDoList: Dispatch<SetStateAction<ToDoList>>
}

interface ThemeContextProviderType {
  children: ReactNode
}

export type {
  ToDo,
  ToDoList,
  ToDoListContextType,
  ThemeContextProviderType,
};
