import { Typography, useTheme } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface TaskTitleComponentPropsType {
  isDone: boolean,
  children: ReactNode,
};

const TaskTitleComponent: FC<TaskTitleComponentPropsType> = ({ isDone, children }) => {
  const theme = useTheme();

  return (
    <Typography
      component="h3"
      noWrap
      sx={{
        color: theme.palette.text.primary,
        fontSize: "20px",
        lineHeight: "20px",
        fontWeight: "700",
        letterSpacing: "1.7px",
        textDecoration: isDone ? "line-through" : "none",
      }}
    >
      {children}
    </Typography>
  );
};

export default TaskTitleComponent;
