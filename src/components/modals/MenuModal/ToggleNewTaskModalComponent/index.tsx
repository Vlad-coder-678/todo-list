// vendor imports
import React, { FC, useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { LibraryAdd } from "@mui/icons-material";

// local imports
// constants
import TEXT from "../../../../constants/text";
// providers
import { ModalsShowContext } from "../../../../providers/ModalsShowProvider";

const ToggleNewTaskModalComponent: FC = () => {
  const theme = useTheme();
  const modalsShowState = useContext(ModalsShowContext);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton onClick={modalsShowState?.handleOpenNewTaskModal}>
        <LibraryAdd />
      </IconButton>

      {TEXT.addNewTask.toUpperCase()}
    </Box>
  );
};

export default ToggleNewTaskModalComponent;
