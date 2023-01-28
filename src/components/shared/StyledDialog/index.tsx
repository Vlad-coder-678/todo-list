// vendor imports
import React from "react";
import { Dialog, DialogActions, DialogActionsProps, DialogContent, DialogContentProps, DialogProps, DialogTitle, DialogTitleProps, styled } from "@mui/material";

const StyledDialog = styled((props: DialogProps) => (
  <Dialog {...props} />
))(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& .MuiDialog-container .MuiDialog-paper": {
    maxWidth: "350px",
    borderRadius: "30px",
    textAlign: "center",
  },
}));

const StyledDialogTitle = styled((props: DialogTitleProps) => (
  <DialogTitle noWrap {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

const StyledDialogContent = styled((props: DialogContentProps) => (
  <DialogContent {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxSizing: "border-box",
  padding: "0",
}));

const StyledDialogActions = styled((props: DialogActionsProps) => (
  <DialogActions {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

export {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
};
