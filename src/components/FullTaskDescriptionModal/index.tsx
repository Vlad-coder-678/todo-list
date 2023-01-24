import React, { FC, useContext, useState } from "react";
import {
  Box,
  IconButton,
} from "@mui/material";
import { DeleteForever, Edit } from "@mui/icons-material";

// local imports
// providers
import { TaskListContext } from "../../providers/TaskListContextProvider";
// types
import { TaskListType } from "../../types/types";
// components
import StyledDialog from "../shared/StyledDialog";
import EditTaskFormComponen from "../EditTaskFormComponent";

interface Props {
  open: boolean,
  onClose: () => void,
  currentTaskId: { date: string; id: number },
}

const FullTaskDescriptionModal: FC<Props> = ({
  open,
  onClose,
  currentTaskId,
}) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const taskListContext = useContext(TaskListContext);

  const { [currentTaskId.date]: currentTaskList } = taskListContext?.taskList as TaskListType;
  const currentTask = currentTaskList.filter(({ id }) => (id === currentTaskId.id))[0];

  const handleRemoveTask = () => {
    onClose();
    taskListContext?.removeTask(currentTaskId);
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
    >
      {isShowForm
        ? (<EditTaskFormComponen onClose={() => setIsShowForm(false)} currentTaskId={currentTaskId} />)
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