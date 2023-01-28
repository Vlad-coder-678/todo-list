import React, { FC, useContext } from "react";
import {
  Box,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteForever, Edit } from "@mui/icons-material";

// local imports
// constants
import TEXT from "../../../../constants/text";
// providers
import { TaskListContext } from "../../../../providers/TaskListContextProvider";
import { ModalsShowContext } from "../../../../providers/ModalsShowProvider";
// types
import { TaskListType } from "../../../../types";
import { TaskDescriptionComponentProps } from "../../../../types/components";
// utilities
import getTodayDate from "../../../../utilities/getTodayDate";

const TaskDescriptionComponent: FC<TaskDescriptionComponentProps> = ({ handleOpenForm, handleRemoveTask }) => {
  const taskListState = useContext(TaskListContext);
  const modalsShowState = useContext(ModalsShowContext);

  const { [modalsShowState?.currentTaskId.date ?? getTodayDate()]: currentTaskList } = taskListState?.taskList as TaskListType;
  const currentTask = currentTaskList.filter(({ id }: { id: number }) => (id === modalsShowState?.currentTaskId.id))[0];

  return (
    <>
      <Typography noWrap variant="h3">
        {currentTask?.title.length === 0 ? TEXT.emptyTitle : currentTask?.title}
      </Typography>
      <Typography>
        {currentTask?.description ?? ""}
      </Typography>

      <Divider sx={{ padding: "10px 0" }} />

      <Box
        sx={{
          width: "300px",
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        <IconButton onClick={handleOpenForm}>
          <Edit color="warning" />
        </IconButton>
        <IconButton onClick={handleRemoveTask}>
          <DeleteForever color="error" />
        </IconButton>
      </Box>
    </>
  );
};

export default TaskDescriptionComponent;
