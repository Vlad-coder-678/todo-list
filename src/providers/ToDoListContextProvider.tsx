// vendor imports
import React, {
  createContext,
  FC,
  ReactNode,
  useState,
} from "react";

// mock
import toDoListMock from "../mock/todo-list-mock";
// types
import { ToDo, ToDoListContextType } from "../types/types";

export const ToDoListContext = createContext<ToDoListContextType | null>(null);

const ToDoListContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toDoList, setToDoList] = useState(toDoListMock);

  const updateToDoList = (task: ToDo) => {
    setToDoList(state => [...state, task]);
  };

  const value = {
    toDoList,
    updateToDoList,
  };

  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListContextProvider;
