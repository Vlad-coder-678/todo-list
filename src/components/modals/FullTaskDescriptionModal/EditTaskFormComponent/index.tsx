// vendor imports
import React, { FC, useContext } from "react";
import { Box, FormControl, IconButton, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Save } from "@mui/icons-material";

// local imports
// constants
import TEXT from "../../../../constants/text";
// types
import { EditTaskFormComponenPropsType, TaskListType } from "../../../../types/types";
// providers
import { TaskListContext } from "../../../../providers/TaskListContextProvider";
// components
import StyledInput from "../../../shared/StyledInput";
import { ModalsShowContext } from "../../../../providers/ModalsShowProvider";

const EditTaskFormComponen: FC<EditTaskFormComponenPropsType> = ({ onClose }) => {
  const taskListContext = useContext(TaskListContext);
  const { currentTaskId, closeFullDescriptionModal } = useContext(ModalsShowContext);
  const { [currentTaskId.date]: currentTaskList } = taskListContext?.taskList as TaskListType;
  const currentTask = currentTaskList.filter(({ id }) => (id === currentTaskId.id))[0];

  const handleChangeFields = (event: SelectChangeEvent<string> | { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    taskListContext?.updateTaskList({
      date: currentTaskId.date,
      id: currentTaskId.id,
      property: name,
      value,
    });
  };

  const handleCloseModal = () => {
    closeFullDescriptionModal();
    onClose();
  };

  return (
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
        value={currentTask?.title ?? ""}
        name="title"
        label="TITLE"
        onChange={handleChangeFields}
      />
      <StyledInput
        value={currentTask?.description ?? ""}
        name="description"
        label="DESCRIPTION"
        onChange={handleChangeFields}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{TEXT.priority}</span>
        <Select
          value={currentTask?.priority ?? ""}
          label="PRIORITY"
          name={TEXT.priority.toLowerCase()}
          onChange={handleChangeFields}
        >
          <MenuItem value={TEXT.high.toLowerCase()}>{TEXT.high}</MenuItem>
          <MenuItem value={TEXT.normal.toLowerCase()}>{TEXT.normal}</MenuItem>
          <MenuItem value={TEXT.low.toLowerCase()}>{TEXT.low}</MenuItem>
        </Select>
      </Box>
      <IconButton onClick={handleCloseModal}>
        <Save color="success" />
      </IconButton>
    </FormControl>
  );
};

export default EditTaskFormComponen;