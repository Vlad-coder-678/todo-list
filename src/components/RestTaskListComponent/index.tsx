// vendor imports
import React, { FC } from "react";
import { Box, useTheme } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";

// local imports
// constants
import TEXT from "../../constants/text";
// types
import { RestTaskListComponentPropTypes } from "../../types/components";
// utilities
import getPriorityColor from "../../utilities/getPriorityColor";
// components
import { StyledRestTaskListAccordion, StyledRestTaskListAccordionDetails, StyledRestTaskListAccordionSummary } from "../shared/StyledRestTaskListAccordion";
import TaskListOfDayTitleComponent from "../TaskListOfDayTitleComponent";
import TaskCardComponent from "../TaskCardComponent";

const RestTaskListComponent: FC<RestTaskListComponentPropTypes> = ({ date, taskList, index }) => {
  const theme = useTheme();

  if (taskList.length === 0) return null;

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
          title={`${(index === 0 ? TEXT.tomorrow : date.substring(0, 5))} ${TEXT.tasks}`}
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
  );
};

export default RestTaskListComponent;
