import React, { FC, useContext, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteForever, Edit } from "@mui/icons-material";

// local imports
// constants
import TEXT from "../../../constants/text";
// providers
import { TaskListContext } from "../../../providers/TaskListContextProvider";
import { ModalsShowContext } from "../../../providers/ModalsShowProvider";
// types
import { TaskListType } from "../../../types";
// utilities
import getTodayDate from "../../../utilities/getTodayDate";
// components
import { StyledDialog, StyledDialogTitle } from "../../shared/StyledDialog";
import EditTaskFormComponen from "./EditTaskFormComponent";

const FullTaskDescriptionModal: FC = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const taskListState = useContext(TaskListContext);
  const modalsShowState = useContext(ModalsShowContext);

  const { [modalsShowState?.currentTaskId.date ?? getTodayDate()]: currentTaskList } = taskListState?.taskList as TaskListType;
  const currentTask = currentTaskList.filter(({ id }: { id: number }) => (id === modalsShowState?.currentTaskId.id))[0];

  const handleRemoveTask = () => {
    modalsShowState?.closeFullDescriptionModal();
    if ((modalsShowState?.currentTaskId) != null) taskListState?.removeTask(modalsShowState?.currentTaskId);
  };

  const handleOpenForm = () => setIsShowForm(true);
  const handleCloseForm = () => setIsShowForm(false);

  return (
    <StyledDialog
      open={modalsShowState?.isShowFullTaskDescriptionModal ?? false}
      onClose={modalsShowState?.closeFullDescriptionModal}
    >
      <StyledDialogTitle>
        {TEXT.taskEditingTitleModal}
      </StyledDialogTitle>
      {isShowForm
        ? (<EditTaskFormComponen onClose={handleCloseForm} />)
        : (
          <>
            <StyledDialogTitle>
              {currentTask?.title.length === 0 ? TEXT.emptyTitle : currentTask?.title}
            </StyledDialogTitle>
            <Typography>
              {currentTask?.description ?? ""}
            </Typography>
            <Box
              sx={{
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
          )
        }
    </StyledDialog>
  );
};

export default FullTaskDescriptionModal;
