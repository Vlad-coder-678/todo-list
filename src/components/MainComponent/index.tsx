// vendor imports
import React, { FC, useContext } from "react";
import { Box } from "@mui/material";

// locale imports
// poviders
import { TaskListContext } from "../../providers/TaskListContextProvider";
// components
import TodayTaskListComponent from "../TodayTaskListComponent";
import RestTaskListComponent from "../RestTaskListComponent";
// utilities
import getTodayDate from "../../utilities/getTodayDate";
// types
import { TaskListType } from "../../types/types";

const MainComponent: FC<{ openFullDescriptionModal: ({ date, id }: { date: string; id: number }) => void }> = ({ openFullDescriptionModal }) => {
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
      <TodayTaskListComponent
        todayTaskList={todayTaskList}
        openFullDescriptionModal={openFullDescriptionModal}
      />

      {Object.entries(restTaskLists)?.map(([date, taskList], index) => (
        <RestTaskListComponent
          key={date}
          date={date}
          taskList={taskList}
          index={index}
          openFullDescriptionModal={openFullDescriptionModal}
        />
      ))}
    </Box>
  );
};

export default MainComponent;
