// vendor imports
import React, { FC, useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { SpeakerNotes, SpeakerNotesOff } from "@mui/icons-material";

// local imports
// constants
import TEXT from "../../../../constants/text";
// providers
import { ModalsShowContext } from "../../../../providers/ModalsShowProvider";

const ToggleNewsModalComponent: FC = () => {
  const { isShowNewsModal, toggleShowNewsModal } = useContext(ModalsShowContext);
  const theme = useTheme();

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
      <IconButton onClick={toggleShowNewsModal}>
        {(isShowNewsModal as boolean) ? <SpeakerNotesOff /> : <SpeakerNotes />}
      </IconButton>

      {`${(isShowNewsModal as boolean) ? TEXT.close : TEXT.show} ${TEXT.news}`.toUpperCase()}
    </Box>
  );
};

export default ToggleNewsModalComponent;
