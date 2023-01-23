import { Typography, useTheme } from "@mui/material";
import React, { FC } from "react";

interface TaskListTitleComponentPropsType {
  title: string,
};

const TaskListOfDayTitleComponent: FC<TaskListTitleComponentPropsType> = ({ title }) => {
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
