import React, { FC } from "react";
import { Box, useTheme } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";
import { StyledRestTaskListAccordion, StyledRestTaskListAccordionDetails, StyledRestTaskListAccordionSummary } from "../shared/StyledRestTaskListAccordion";
import TaskListOfDayTitleComponent from "../TaskListOfDayTitleComponent";
import text from "../../constants/text";
import TaskCardComponent from "../TaskCardComponent";
import getPriorityColor from "../../utilities/getPriorityColor";
import { TaskType } from "../../types/types";

interface RestTaskListComponentPropTypes {
  date: string,
  taskList: TaskType[],
  index: number,
  openFullDescriptionModal: ({ date, id }: { date: string; id: number }) => void,
}

const RestTaskListComponent: FC<RestTaskListComponentPropTypes> = ({ date, taskList, index, openFullDescriptionModal }) => {
  const theme = useTheme();

  return (
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
        {taskList?.map(({ title, description, isDone, priority, id }) => (
          <TaskCardComponent
            key={`${date} ${id}`}
            date={date}
            id={id}
            title={title}
            description={description}
            isDone={isDone}
            priorityColor={getPriorityColor(priority)}
            openFullDescriptionModal={openFullDescriptionModal}
          />
        ))}
      </StyledRestTaskListAccordionDetails>
    </StyledRestTaskListAccordion>
  );
};

export default RestTaskListComponent;
