import React, { FC, useContext, useState } from "react";
import {
  Box,
  IconButton,
} from "@mui/material";
import { DeleteForever, Edit } from "@mui/icons-material";

// local imports
// providers
import { TaskListContext } from "../../../providers/TaskListContextProvider";
import { ModalsShowContext } from "../../../providers/ModalsShowProvider";
// types
import { TaskListType } from "../../../types";
// utilities
import getTodayDate from "../../../utilities/getTodayDate";
// components
import StyledDialog from "../../shared/StyledDialog";
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
      {isShowForm
        ? (<EditTaskFormComponen onClose={handleCloseForm} />)
        : (
          <>
            <h4>{currentTask?.title ?? ""}</h4>
            <p>{currentTask?.description ?? ""}</p>
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
