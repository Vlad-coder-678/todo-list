// vendor imports
import React, { FC, useContext, useState } from "react";
import { Box, useTheme } from "@mui/material";

// locale imports
// constants
import text from "../../constants/text";
// poviders
import { TaskListContext } from "../../providers/TaskListContextProvider";
// components
import CheckboxComponent from "../CheckboxComponent";
import TaskListOfDayTitleComponent from "../TaskListOfDayTitleComponent";
import TaskCardComponent from "../TaskCardComponent";
// utilities
import getTodayDate from "../../utilities/getTodayDate";
import getPriorityColor from "../../utilities/getPriorityColor";
// styles
import "./styles.css";

const MainComponent: FC = () => {
  const [isShowTodayTasks, setIsShowTodayTasks] = useState(true);
  const taskListContext = useContext(TaskListContext);
  const todayDate = getTodayDate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        boxSizing: "border-box",
        padding: "10px 20px",
      }}
    >
      <Box
        sx={{
          height: "22px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
          gap: "9px",
          boxSizing: "border-box",
        }}
      >
        <CheckboxComponent
          isChecked={isShowTodayTasks}
          setIsChecked={setIsShowTodayTasks}
        />

        <TaskListOfDayTitleComponent title={text.todayTasks} />
      </Box>
      <Box
        sx={{
          width: "350px",
          height: "210px",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: "22px 27px 22px 16px",
          gap: "21px",
          backgroundColor: theme.palette.primary.light,
          borderRadius: "40px",
          boxShadow: "-6px -6px 5px 5px rgba(255, 255, 0, 0.05)",
        }}
      >
        {taskListContext?.taskList[todayDate].map(({ title, description, isDone, priority, id }) => (
          <TaskCardComponent
            key={`${todayDate} ${id}`}
            date={todayDate}
            id={id}
            title={title}
            description={description}
            isDone={isDone}
            priorityColor={getPriorityColor(priority)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MainComponent;
