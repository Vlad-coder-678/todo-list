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
import { ToDoListContextType } from "../types/types";

const ToDoListContext = createContext<ToDoListContextType | null>(null);

const ToDoListContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toDoList, setToDoList] = useState(toDoListMock);

  const value = {
    toDoList,
    setToDoList,
  };

  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListContextProvider;
