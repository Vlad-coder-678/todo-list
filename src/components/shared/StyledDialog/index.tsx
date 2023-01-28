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
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

const StyledDialogTitle = styled((props: DialogTitleProps) => (
  <DialogTitle noWrap {...props} />
))(({ theme }) => ({
  border: "2px solid red",
}));

const StyledDialogContent = styled((props: DialogContentProps) => (
  <DialogContent {...props} />
))(({ theme }) => ({
  border: "2px solid red",
}));

const StyledDialogActions = styled((props: DialogActionsProps) => (
  <DialogActions {...props} />
))(({ theme }) => ({
  border: "2px solid red",
}));

export {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
};
