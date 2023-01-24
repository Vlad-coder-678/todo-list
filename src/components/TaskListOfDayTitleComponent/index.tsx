// vendor imports
import React, { FC } from "react";
import { Typography, useTheme } from "@mui/material";

const TaskListOfDayTitleComponent: FC<{ title: string }> = ({ title }) => {
  const theme = useTheme();

  return (
    <Typography
      component="h2"
      noWrap
      sx={{
        height: "24px",
        color: theme.palette.text.primary,
        fontSize: "24px",
        lineHeight: "24px",
        fontWeight: "700",
        letterSpacing: "-0.7px",
      }}
    >
      {title}
    </Typography>
  );
};

export default TaskListOfDayTitleComponent;
