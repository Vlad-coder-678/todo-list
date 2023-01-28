// vendor imports
import React, { FC, useContext } from "react";
import { Box, useTheme } from "@mui/material";

// local imports
// constants
import TEXT from "../../constants/text";
// types
import { TaskCardComponentPropsType } from "../../types/types";
// providers
import { TaskListContext } from "../../providers/TaskListContextProvider";
import { ModalsShowContext } from "../../providers/ModalsShowProvider";
// components
import StyledSwitch from "../shared/StyledSwitch";
import TaskDescriptionComponent from "../TaskDescriptionComponent";
import TaskTitleComponent from "../TaskTitleComponent";

const TaskCardComponent: FC<TaskCardComponentPropsType> = ({
  date,
  id,
  title,
  description,
  isDone,
  priorityColor,
}) => {
  const theme = useTheme();
  const taskListContext = useContext(TaskListContext);
  const { openFullTaskDescriptionModal } = useContext(ModalsShowContext);

  const handleOpenFullTaskDescriptionModal = () => openFullTaskDescriptionModal({ date, id });

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
        onClick={handleOpenFullTaskDescriptionModal}
        sx={{
          width: "230px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <TaskTitleComponent isDone={isDone}>
          {title.length === 0 ? TEXT.emptyTitle : title}
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
