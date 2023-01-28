// vendor imports
import React, { FC, useContext } from "react";
import { Box, Typography } from "@mui/material";

// locale imports
// constants
import TEXT from "../../constants/text";
// types
import { TaskListType } from "../../types";
// poviders
import { TaskListContext } from "../../providers/TaskListContextProvider";
// utilities
import getTodayDate from "../../utilities/getTodayDate";
// components
import TodayTaskListComponent from "../TodayTaskListComponent";
import RestTaskListComponent from "../RestTaskListComponent";

const MainComponent: FC = () => {
  const taskListState = useContext(TaskListContext);

  const todayDate = getTodayDate();
  const { [todayDate]: todayTaskList, ...restTaskLists } = taskListState?.taskList as TaskListType;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "31px",
        boxSizing: "border-box",
        padding: "0 20px",
      }}
    >
      {todayTaskList.length > 0
        ? (<TodayTaskListComponent todayTaskList={todayTaskList} />)
        : (<Typography noWrap variant="h2">{TEXT.emptyTodayTaskList}</Typography>)}

      {Object.entries(restTaskLists)?.map(([date, taskList], index) => (
        <RestTaskListComponent
          key={date}
          date={date}
          taskList={taskList}
          index={index}
        />
      ))}
    </Box>
  );
};

export default MainComponent;
