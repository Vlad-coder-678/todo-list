import React, { FC, useContext, useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DeleteForever, Edit, Save } from "@mui/icons-material";

// local imports
// providers
import { TaskListContext } from "../../providers/TaskListContextProvider";
// types
import { TaskListType } from "../../types/types";
// components
import StyledDialog from "../shared/StyledDialog";
import StyledInput from "../shared/StyledInput";
import text from "../../constants/text";

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
  const handleSelectPriorotyChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    taskListContext?.updateTaskList({
      date: currentTaskId.date,
      id: currentTaskId.id,
      property: name,
      value,
    });
  };

  const handleChangeFields = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    taskListContext?.updateTaskList({
      date: currentTaskId.date,
      id: currentTaskId.id,
      property: name,
      value,
    });
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
    >
      {isShowForm
        ? (
          <FormControl
            variant="standard"
            color="primary"
            fullWidth
            sx={{
              width: "350px",
              boxSizing: "border-box",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <StyledInput
              value={currentTask.title}
              name="title"
              label={"title".toUpperCase()}
              onChange={handleChangeFields}
            />
            <StyledInput
              value={currentTask.description}
              name="description"
              label={"description".toUpperCase()}
              onChange={handleChangeFields}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{text.priority}</span>
              <Select
                value={currentTask.priority}
                label={currentTask.priority}
                name={text.priority.toLowerCase()}
                onChange={handleSelectPriorotyChange}
              >
                <MenuItem value={text.high.toLowerCase()}>{text.high}</MenuItem>
                <MenuItem value={text.normal.toLowerCase()}>{text.normal}</MenuItem>
                <MenuItem value={text.low.toLowerCase()}>{text.low}</MenuItem>
              </Select>
            </Box>
            <IconButton onClick={() => setIsShowForm(false)}>
              <Save color="success" />
            </IconButton>
          </FormControl>
          )
        : (
          <>
            <h4>{currentTask.title}</h4>
            <p>{currentTask.description}</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                margin: "10px",
              }}
            >
              <IconButton onClick={() => setIsShowForm(!isShowForm)}>
                <Edit color="warning" />
              </IconButton>
              <IconButton>
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
