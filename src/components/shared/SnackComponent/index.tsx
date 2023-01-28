// vendor imports
import React, { FC } from "react";
import { Alert, Snackbar } from "@mui/material";

// local imports
// types
import { SnackComponentProps } from "../../../types/components";

const SnackComponent: FC<SnackComponentProps> = ({
  autoHideDuration,
  isShow,
  snackText,
  handleSnackClose,
  snackMessage,
  snackAction,
  snackSeverity,
}) => {
  return (
    <Snackbar
      open={isShow}
      autoHideDuration={autoHideDuration}
      onClose={() => handleSnackClose}
      message={snackMessage}
      action={snackAction}
    >
      <Alert
          severity={snackSeverity}
          onClose={() => handleSnackClose}
          sx={{ width: "100px" }}
      >
        {snackText}
      </Alert>
    </Snackbar>
  );
};

export default SnackComponent;
