// vendor imports
import React, { FC, useContext } from "react";
import { Box } from "@mui/material";

// locale imports
// constants
import TEXT from "../../constants/text";
// poviders
import { TaskListContext } from "../../providers/TaskListContextProvider";
// components
import TodayTaskListComponent from "../TodayTaskListComponent";
import RestTaskListComponent from "../RestTaskListComponent";
import TaskListOfDayTitleComponent from "../TaskListOfDayTitleComponent";
// utilities
import getTodayDate from "../../utilities/getTodayDate";
// types
import { TaskListType } from "../../types";

const MainComponent: FC = () => {
  const taskListContext = useContext(TaskListContext);

  const todayDate = getTodayDate();
  const { [todayDate]: todayTaskList, ...restTaskLists } = taskListContext?.taskList as TaskListType;

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
        : (<TaskListOfDayTitleComponent title={TEXT.emptyTodayTaskList}/>)}

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
