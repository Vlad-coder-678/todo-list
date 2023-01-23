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

interface TodayTaskListComponentType {
  todayTaskList: TaskType[],
  openFullDescriptionModal: ({ date, id }: { date: string; id: number }) => void,
}

const TodayTaskListComponent: FC<TodayTaskListComponentType> = ({ todayTaskList, openFullDescriptionModal }) => {
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
            openFullDescriptionModal={openFullDescriptionModal}
          />
        ))}
      </StyledTodayTaskListAccordionDetails>
    </StyledTodayTaskListAccordion>
  );
};

export default TodayTaskListComponent;
