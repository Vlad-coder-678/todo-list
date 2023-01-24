// vendor imports
import React, { FC, useState } from "react";

// local imports
// constants
import TEXT from "../../constants/text";
// types
import { TaskType } from "../../types/types";
// utilities
import getPriorityColor from "../../utilities/getPriorityColor";
import getTodayDate from "../../utilities/getTodayDate";
// components
import StylesCheckbox from "../shared/StylesCheckbox";
import {
  StyledTodayTaskListAccordion,
  StyledTodayTaskListAccordionSummary,
  StyledTodayTaskListAccordionDetails,
} from "../shared/StyledTodayTaskListAccordion";
import TaskListOfDayTitleComponent from "../TaskListOfDayTitleComponent";
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

        <TaskListOfDayTitleComponent title={TEXT.todayTasks} />
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
