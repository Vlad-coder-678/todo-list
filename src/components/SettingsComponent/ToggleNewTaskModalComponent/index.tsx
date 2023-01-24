// vendor imports
import React, { FC, useContext } from "react";
import { LibraryAdd } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

// local imports
// constants
import TEXT from "../../../constants/text";
// providers
import { ModalsShowContext } from "../../../providers/ModalsShowProvider";

const ToggleNewTaskModalComponent: FC = () => {
  const { handleOpenNewTaskModal } = useContext(ModalsShowContext);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton onClick={handleOpenNewTaskModal}>
        <LibraryAdd />
      </IconButton>

      {TEXT.addNewTask.toUpperCase()}
    </Box>
  );
};

export default ToggleNewTaskModalComponent;
