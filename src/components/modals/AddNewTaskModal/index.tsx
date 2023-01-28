// vendor imports
import React, { useContext, useState } from "react";
import { Box, Divider, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Save } from "@mui/icons-material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

// local imports
// constants
import TEXT from "../../../constants/text";
// types
import { TaskType } from "../../../types";
// provider
import { ModalsShowContext } from "../../../providers/ModalsShowProvider";
import { TaskListContext } from "../../../providers/TaskListContextProvider";
// utilities
import getTodayDate from "../../../utilities/getTodayDate";
// components
import { StyledDialog, StyledDialogContent, StyledDialogTitle } from "../../shared/StyledDialog";
import StyledInput from "../../shared/StyledInput";

const DEFAULT_FIELDS = { id: 0, title: "", description: "", priority: "low", isDone: false };

const AddNewTaskModal = () => {
  const [date, setDate] = useState<string>(getTodayDate());
  const [fields, setFields] = useState<TaskType>(DEFAULT_FIELDS);
  const taskListState = useContext(TaskListContext);
  const modalsShowState = useContext(ModalsShowContext);

  const handleChangeFields = (event: SelectChangeEvent<string> | { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    setFields((state) => ({ ...state, [name]: value }));
  };

  const handleChangeDate = (value: string | null) => setDate(dayjs(value).format("MM/DD/YYYY"));

  const submitForm = () => {
    taskListState?.addNewTask({
      date: dayjs(date).format("DD/MM/YYYY"),
      title: fields?.title,
      description: fields?.description,
      priority: fields?.priority,
    });
    modalsShowState?.handleCloseNewTaskModal();
    setFields(DEFAULT_FIELDS);
  };

  return (
    <StyledDialog
      open={modalsShowState?.isShowNewTaskModal ?? false}
      onClose={modalsShowState?.handleCloseNewTaskModal}
    >
      <StyledDialogTitle>
        {TEXT.createTaskTitleModal}
      </StyledDialogTitle>

      <StyledDialogContent>
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
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <StyledInput
              value={fields?.title ?? ""}
              name="title"
              label="TITLE"
              onChange={handleChangeFields}
            />
            <StyledInput
              value={fields?.description ?? ""}
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
                value={fields?.priority ?? ""}
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

            <Box>
              <IconButton onClick={submitForm}>
                <Save color="success" />
              </IconButton>
            </Box>
          </FormControl>
        </LocalizationProvider>
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default AddNewTaskModal;
