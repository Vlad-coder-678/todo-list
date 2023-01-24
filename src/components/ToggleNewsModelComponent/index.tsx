import { SpeakerNotes, SpeakerNotesOff } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { FC } from "react";

interface Props {
  isShowNewsModal: boolean,
  toggleShowNewsModal: () => void,
}

const ToggleNewsModelComponent: FC<Props> = ({
  isShowNewsModal,
  toggleShowNewsModal,
}) => {
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
      <IconButton
        onClick={toggleShowNewsModal}
      >
        {isShowNewsModal ? <SpeakerNotesOff /> : <SpeakerNotes />}
      </IconButton>
      {`${isShowNewsModal ? "Close" : "Show"} news`.toUpperCase()}
    </Box>
  );
};

export default ToggleNewsModelComponent;
