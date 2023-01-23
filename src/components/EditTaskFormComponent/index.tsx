// vendor imports
import React, { FC, useContext } from "react";
import { Box, FormControl, IconButton, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Save } from "@mui/icons-material";

// local imports
// constants
import text from "../../constants/text";
// types
import { TaskListType } from "../../types/types";
// providers
import { TaskListContext } from "../../providers/TaskListContextProvider";
// components
import StyledInput from "../shared/StyledInput";

interface Props {
  currentTaskId: { date: string; id: number },
  onClose: () => void,
}

const EditTaskFormComponen: FC<Props> = ({ currentTaskId, onClose }) => {
  const taskListContext = useContext(TaskListContext);

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
        label={"title".toUpperCase()}
        onChange={handleChangeFields}
      />
      <StyledInput
        value={currentTask?.description ?? ""}
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
          value={currentTask?.priority ?? ""}
          label={currentTask?.priority ?? ""}
          name={text.priority.toLowerCase()}
          onChange={handleChangeFields}
        >
          <MenuItem value={text.high.toLowerCase()}>{text.high}</MenuItem>
          <MenuItem value={text.normal.toLowerCase()}>{text.normal}</MenuItem>
          <MenuItem value={text.low.toLowerCase()}>{text.low}</MenuItem>
        </Select>
      </Box>
      <IconButton onClick={onClose}>
        <Save color="success" />
      </IconButton>
    </FormControl>
  );
};

export default EditTaskFormComponen;
