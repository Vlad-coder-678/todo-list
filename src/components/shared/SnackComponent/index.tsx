import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { Alert, Snackbar } from "@mui/material";

interface SnackComponentType {
  autoHideDuration: number,
  isShow: boolean,
  snackText: string,
  handleSnackClose: Dispatch<SetStateAction<boolean>>,
  snackMessage: string,
  snackAction: ReactNode,
  snackSeverity?: "success" | "info" | "warning" | "error",
}

const SnackComponent: FC<SnackComponentType> = ({
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
