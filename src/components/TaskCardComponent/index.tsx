// vendor imports
import React, { FC, useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";

// local imports
// constants
import TEXT from "../../constants/text";
// types
import { TaskCardComponentProps } from "../../types/components";
// providers
import { TaskListContext } from "../../providers/TaskListContextProvider";
import { ModalsShowContext } from "../../providers/ModalsShowProvider";
// components
import StyledSwitch from "../shared/StyledSwitch";

const TaskCardComponent: FC<TaskCardComponentProps> = ({
  date,
  id,
  title,
  description,
  isDone,
  priorityColor,
}) => {
  const theme = useTheme();
  const taskListState = useContext(TaskListContext);
  const modalsShowState = useContext(ModalsShowContext);

  const handleOpenFullTaskDescriptionModal = () => modalsShowState?.openFullTaskDescriptionModal({ date, id });

  const handleChangeTaskStatus = () => {
    taskListState?.updateTaskList({
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
        <Typography variant="h3" noWrap sx={{ textDecoration: isDone ? "line-through" : "none" }}>
          {title.length === 0 ? TEXT.emptyTitle : title}
        </Typography>
        <Typography variant="subtitle1" noWrap>
          {description}
        </Typography>
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
