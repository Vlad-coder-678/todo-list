// vendor imports
import React, { useContext, useState } from "react";
import { Box, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Save } from "@mui/icons-material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

// local imports
// constants
import TEXT from "../../constants/text";
// types
import { TaskType } from "../../types/types";
// provider
import { ModalsShowContext } from "../../providers/ModalsShowProvider";
import { TaskListContext } from "../../providers/TaskListContextProvider";
// utilities
import getTodayDate from "../../utilities/getTodayDate";
// components
import StyledDialog from "../shared/StyledDialog";
import StyledInput from "../shared/StyledInput";

const AddNewTaskModal = () => {
  const [date, setDate] = useState<string>(getTodayDate());
  const [fields, setFields] = useState<TaskType>({ id: 0, title: "", description: "", priority: "low", isDone: false });
  const taskListContext = useContext(TaskListContext);
  const { isShowNewTaskModal, handleCloseNewTaskModal } = useContext(ModalsShowContext);

  if (!(isShowNewTaskModal as boolean)) return null;

  const handleChangeFields = (event: SelectChangeEvent<string> | { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    setFields((state) => ({ ...state, [name]: value }));
  };

  const submitForm = () => {
    handleCloseNewTaskModal();
    taskListContext?.addNewTask({
      date: dayjs(date).format("DD/MM/YYYY"),
      title: fields?.title,
      description: fields?.description,
      priority: fields?.priority,
    });
  };

  return (
    <StyledDialog
      open={isShowNewTaskModal}
      onClose={handleCloseNewTaskModal}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <MobileDatePicker
            label="Date"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={value => setDate(dayjs(value).format("MM/DD/YYYY"))}
            renderInput={(params) => <TextField {...params} />}
          />
          <StyledInput
            value={fields?.title ?? ""}
            name="title"
            label={"title".toUpperCase()}
            onChange={handleChangeFields}
          />
          <StyledInput
            value={fields?.description ?? ""}
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
            <span>{TEXT.priority}</span>
            <Select
              value={fields?.priority ?? ""}
              label={fields?.priority ?? ""}
              name={TEXT.priority.toLowerCase()}
              onChange={handleChangeFields}
            >
              <MenuItem value={TEXT.high.toLowerCase()}>{TEXT.high}</MenuItem>
              <MenuItem value={TEXT.normal.toLowerCase()}>{TEXT.normal}</MenuItem>
              <MenuItem value={TEXT.low.toLowerCase()}>{TEXT.low}</MenuItem>
            </Select>
          </Box>
          <IconButton onClick={submitForm}>
            <Save color="success" />
          </IconButton>
        </FormControl>
      </LocalizationProvider>
    </StyledDialog>
  );
};

export default AddNewTaskModal;
