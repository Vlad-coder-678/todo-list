// vendor imports
import React, { FC, useState } from "react";
import { Typography } from "@mui/material";

// local imports
// constants
import TEXT from "../../constants/text";
// types
import { TaskType } from "../../types";
// utilities
import getPriorityColor from "../../utilities/getPriorityColor";
import getTodayDate from "../../utilities/getTodayDate";
// components
import {
  StyledTodayTaskListAccordion,
  StyledTodayTaskListAccordionSummary,
  StyledTodayTaskListAccordionDetails,
} from "../shared/StyledTodayTaskListAccordion";
import StylesCheckbox from "../shared/StylesCheckbox";
import TaskCardComponent from "../TaskCardComponent";

const TodayTaskListComponent: FC<{ todayTaskList: TaskType[] }> = ({ todayTaskList }) => {
  const [isShowTodayTasks, setIsShowTodayTasks] = useState(true);
  const todayDate = getTodayDate();

  return (
    <StyledTodayTaskListAccordion
      expanded={isShowTodayTasks}
      onChange={() => setIsShowTodayTasks(!isShowTodayTasks)}
    >
      <StyledTodayTaskListAccordionSummary>
        <StylesCheckbox checked={isShowTodayTasks} />

        <Typography variant="h2" noWrap>
          {TEXT.todayTasks}
        </Typography>
      </StyledTodayTaskListAccordionSummary>

      <StyledTodayTaskListAccordionDetails>
        {todayTaskList.map(({ title, description, isDone, priority, id }) => (
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
      </StyledTodayTaskListAccordionDetails>
    </StyledTodayTaskListAccordion>
  );
};

export default TodayTaskListComponent;
