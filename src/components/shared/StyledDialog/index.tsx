import React from "react";
import { Dialog, DialogProps, styled } from "@mui/material";

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

export default StyledDialog;
