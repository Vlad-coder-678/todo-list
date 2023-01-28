// vendor imports
import React, { FC, ReactNode } from "react";
import { Typography, useTheme } from "@mui/material";

const TaskDescriptionComponent: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <Typography
      component="p"
      noWrap
      sx={{
        color: theme.palette.text.secondary,
        fontSize: "13px",
        lineHeight: "15px",
        fontWeight: "700",
        letterSpacing: "0",
        maxWidth: "170px",
      }}
    >
      {children}
    </Typography>
  );
};

export default TaskDescriptionComponent;
