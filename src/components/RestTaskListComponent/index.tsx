// vendor imports
import React, { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";

// local imports
// constants
import TEXT from "../../constants/text";
// types
import { RestTaskListComponentProps } from "../../types/components";
// utilities
import getPriorityColor from "../../utilities/getPriorityColor";
// components
import { StyledRestTaskListAccordion, StyledRestTaskListAccordionDetails, StyledRestTaskListAccordionSummary } from "../shared/StyledRestTaskListAccordion";
import TaskCardComponent from "../TaskCardComponent";

const RestTaskListComponent: FC<RestTaskListComponentProps> = ({ date, taskList, index }) => {
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

        <Typography noWrap variant="h2">
          {`${(index === 0 ? TEXT.tomorrow : date.substring(0, 5))} ${TEXT.tasks}`}
        </Typography>
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
            priorityColor={getPriorityColor({
              priority,
              highPriorityColor: theme.palette.error.main,
              normalPriorityColor: theme.palette.info.main,
              lowPriorityColor: theme.palette.warning.main,
              defaultPriorityColor: theme.palette.success.main,
            })}
          />
        ))}
      </StyledRestTaskListAccordionDetails>
    </StyledRestTaskListAccordion>
  );
};

export default RestTaskListComponent;
