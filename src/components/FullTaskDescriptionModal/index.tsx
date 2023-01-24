import React, { FC, useContext, useState } from "react";
import {
  Box,
  IconButton,
} from "@mui/material";
import { DeleteForever, Edit } from "@mui/icons-material";

// local imports
// providers
import { TaskListContext } from "../../providers/TaskListContextProvider";
import { ModalsShowContext } from "../../providers/ModalsShowProvider";
// types
import { TaskListType } from "../../types/types";
// components
import StyledDialog from "../shared/StyledDialog";
import EditTaskFormComponen from "../EditTaskFormComponent";

const FullTaskDescriptionModal: FC = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const taskListContext = useContext(TaskListContext);
  const { currentTaskId, isShowFullTaskDescriptionModal, closeFullDescriptionModal } = useContext(ModalsShowContext);

  const { [currentTaskId.date]: currentTaskList } = taskListContext?.taskList as TaskListType;
  const currentTask = currentTaskList.filter(({ id }) => (id === currentTaskId.id))[0];

  const handleRemoveTask = () => {
    closeFullDescriptionModal();
    taskListContext?.removeTask(currentTaskId);
  };

  return (
    <StyledDialog
      open={isShowFullTaskDescriptionModal}
      onClose={closeFullDescriptionModal}
    >
      {isShowForm
        ? (<EditTaskFormComponen onClose={() => setIsShowForm(false)} />)
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
              <IconButton onClick={() => setIsShowForm(true)}>
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
