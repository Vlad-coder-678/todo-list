// vendor imports
import React, {
  createContext,
  FC,
  ReactNode,
  useState,
} from "react";

// mock
import TASK_LIST from "../mock/task-list";
// types
import { TaskListContextType, TaskListType, updateTaskListPropsType } from "../types/types";

export const TaskListContext = createContext<TaskListContextType | null>(null);

const TaskListContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [taskList, setTaskList] = useState(TASK_LIST);

  const updateTaskList = ({
    date,
    id,
    property,
    value,
  }: updateTaskListPropsType) => {
    setTaskList((state) => {
      const newTaskListOfDate = (state as TaskListType)[date]?.map((task) => (task.id === id ? { ...task, [property]: value } : task));

      return ({ ...state, [date]: newTaskListOfDate });
    });
  };

  const value = {
    taskList,
    updateTaskList,
  };

  return (
    <TaskListContext.Provider value={value}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
