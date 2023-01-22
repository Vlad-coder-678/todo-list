import { Typography, useTheme } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface TaskDescriptionComponentPropsType {
  children: ReactNode,
};

const TaskDescriptionComponent: FC<TaskDescriptionComponentPropsType> = ({ children }) => {
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
