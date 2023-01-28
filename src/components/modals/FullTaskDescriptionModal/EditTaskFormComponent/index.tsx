// vendor imports
import React, { FC, useContext } from "react";
import { Box, Divider, FormControl, IconButton, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Save } from "@mui/icons-material";

// local imports
// constants
import TEXT from "../../../../constants/text";
// types
import { TaskListType } from "../../../../types";
import { EditTaskFormComponenProps } from "../../../../types/components";
// providers
import { TaskListContext } from "../../../../providers/TaskListContextProvider";
// components
import StyledInput from "../../../shared/StyledInput";
import { ModalsShowContext } from "../../../../providers/ModalsShowProvider";
import getTodayDate from "../../../../utilities/getTodayDate";

const EditTaskFormComponen: FC<EditTaskFormComponenProps> = ({ onClose }) => {
  const taskListState = useContext(TaskListContext);
  const modalsShowState = useContext(ModalsShowContext);

  const currentTaskDate = modalsShowState?.currentTaskId.date ?? getTodayDate();
  const { [currentTaskDate]: currentTaskList } = taskListState?.taskList as TaskListType;
  const currentTask = currentTaskList.filter(({ id }: { id: number }) => (id === modalsShowState?.currentTaskId.id))[0];

  const handleChangeFields = (event: SelectChangeEvent<string> | { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    taskListState?.updateTaskList({
      date: currentTaskDate,
      id: modalsShowState?.currentTaskId.id ?? 0,
      property: name,
      value,
    });
  };

  const handleCloseModal = () => onClose();

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

      <Divider sx={{ padding: "10px 0" }} />

      <IconButton onClick={handleCloseModal}>
        <Save color="success" />
      </IconButton>
    </FormControl>
  );
};

export default EditTaskFormComponen;
