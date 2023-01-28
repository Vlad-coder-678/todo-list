// vendor imports
import React, {
  createContext,
  FC,
  ReactNode,
  useState,
} from "react";

// local imports
// mock
import TASK_LIST from "../mock/task-list";
// types
import { CurrentTaskIdType, TaskListType } from "../types";
import { addNewTaskPropsType, TaskListContextType, updateTaskListPropsType } from "../types/contexts";

export const TaskListContext = createContext<TaskListContextType | null>(null);

const TaskListContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [taskList, setTaskList] = useState(TASK_LIST);

  const updateTaskList = ({
    date, id, property, value,
  }: updateTaskListPropsType) => {
    setTaskList((state) => {
      const newTaskListOfDate = (state as TaskListType)[date]?.map((task) => (task.id === id ? { ...task, [property]: value } : task));

      return ({ ...state, [date]: newTaskListOfDate });
    });
  };

  const removeTask = ({ date, id }: CurrentTaskIdType) => {
    setTaskList((state) => {
      const newTaskListOfDate = (state as TaskListType)[date]?.filter((task) => (task.id !== id))
        .map((task, index) => ({ ...task, id: index + 1 }));

      return ({ ...state, [date]: newTaskListOfDate });
    });
  };

  const addNewTask = ({ date, title, description, priority }: addNewTaskPropsType) => {
    setTaskList((state) => {
      if (typeof (state as TaskListType)[date] === "undefined" || (state as TaskListType)[date].length === 0) {
        const newTaskListOfDate = [{ id: 1, title, description, priority, isDone: false }];

        return ({ ...state, [date]: newTaskListOfDate });
      } else {
        const maxIndex = [...(state as TaskListType)[date]].sort((a, b) => (b.id - a.id))[0].id;
        const newTaskListOfDate = [...(state as TaskListType)[date], { id: (maxIndex + 1), title, description, priority, isDone: false }];

        return ({ ...state, [date]: newTaskListOfDate });
      }
    });
  };

  const value = {
    taskList,
    removeTask,
    updateTaskList,
    addNewTask,
  };

  return (
    <TaskListContext.Provider value={value}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
