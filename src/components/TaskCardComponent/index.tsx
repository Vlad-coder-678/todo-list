// vendor imports
import React, { FC, useContext } from "react";
import { Box, useTheme } from "@mui/material";

// local imports
// components
import TaskDescriptionComponent from "../TaskDescriptionComponent";
import TaskTitleComponent from "../TaskTitleComponent";
import StyledSwitch from "../shared/StyledSwitch";
import { TaskListContext } from "../../providers/TaskListContextProvider";

interface TaskCardComponentPropsType {
  date: string,
  id: number,
  title: string,
  description: string,
  isDone: boolean,
  priorityColor: string,
  openFullDescriptionModal: ({ date, id }: { date: string; id: number }) => void,
}

const TaskCardComponent: FC<TaskCardComponentPropsType> = ({
  date,
  id,
  title,
  description,
  isDone,
  priorityColor,
  openFullDescriptionModal,
}) => {
  const theme = useTheme();
  const taskListContext = useContext(TaskListContext);
  const handleChangeTaskStatus = () => {
    taskListContext?.updateTaskList({
      date,
      id,
      property: "isDone",
      value: !isDone,
    });
  };

  return (
    <Box
      sx={{
        width: "310px",
        height: "40px",
        backgroundColor: "inherit",
        display: "flex",
        gap: "13px",
      }}
    >
      <Box
        sx={{
          width: "5px",
          height: "40px",
          backgroundColor: priorityColor,
        }}
      />

      <Box
        onClick={() => openFullDescriptionModal({ date, id })}
        sx={{
          width: "230px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <TaskTitleComponent
          isDone={isDone}
        >
          {title}
        </TaskTitleComponent>
        <TaskDescriptionComponent>
          {description}
        </TaskDescriptionComponent>
      </Box>

      <StyledSwitch
        checked={isDone}
        onChange={handleChangeTaskStatus}
        theme={theme}
      />
    </Box>
  );
};

export default TaskCardComponent;
