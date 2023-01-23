// vendor imports
import React, { FC, useContext } from "react";
import { Box, useTheme } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";

// locale imports
// constants
import text from "../../constants/text";
// poviders
import { TaskListContext } from "../../providers/TaskListContextProvider";
// components
import TaskListOfDayTitleComponent from "../TaskListOfDayTitleComponent";
import TaskCardComponent from "../TaskCardComponent";
import TodayTaskListComponent from "../TodayTaskListComponent";
// utilities
import getTodayDate from "../../utilities/getTodayDate";
import getPriorityColor from "../../utilities/getPriorityColor";
// types
import { TaskListType } from "../../types/types";
// styles
import "./styles.css";
import { StyledRestTaskListAccordion, StyledRestTaskListAccordionDetails, StyledRestTaskListAccordionSummary } from "../shared/StyledRestTaskListAccordion";

const MainComponent: FC = () => {
  const taskListContext = useContext(TaskListContext);
  const theme = useTheme();

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
      />
      {/* rest tasks */}
      {Object.entries(restTaskLists)?.map(([date, taskList], index) => (
        <StyledRestTaskListAccordion key={date}>
          <StyledRestTaskListAccordionSummary
            expandIcon={(<ExpandCircleDown />)}
          >
            <Box sx={{
              width: "5px",
              height: "40px",
              backgroundColor: theme.palette.text.secondary,
              marginRight: "13px",
            }} />

            <TaskListOfDayTitleComponent
              title={`${(index === 0 ? text.tomorrow : date.substring(0, 5))} ${text.tasks}`}
            />
          </StyledRestTaskListAccordionSummary>
          <StyledRestTaskListAccordionDetails>
            {taskList.map(({ title, description, isDone, priority, id }) => (
              <TaskCardComponent
                key={`${date} ${id}`}
                date={date}
                id={id}
                title={title}
                description={description}
                isDone={isDone}
                priorityColor={getPriorityColor(priority)}
              />
            ))}
          </StyledRestTaskListAccordionDetails>
        </StyledRestTaskListAccordion>
      ))}
    </Box>
  );
};

export default MainComponent;
