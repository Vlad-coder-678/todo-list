// vendor imports
import React, { FC, useState } from "react";

// local imports
// constants
import text from "../../constants/text";
// types
import { TaskType } from "../../types/types";
// components
import StylesCheckbox from "../shared/StylesCheckbox";
import TaskListOfDayTitleComponent from "../TaskListOfDayTitleComponent";
import TaskCardComponent from "../TaskCardComponent";
import {
  StyledTodayTaskListAccordion,
  StyledTodayTaskListAccordionSummary,
  StyledTodayTaskListAccordionDetails,
} from "../shared/StyledTodayTaskListAccordion";
// utilities
import getPriorityColor from "../../utilities/getPriorityColor";
import getTodayDate from "../../utilities/getTodayDate";

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

        <TaskListOfDayTitleComponent title={text.todayTasks} />
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
