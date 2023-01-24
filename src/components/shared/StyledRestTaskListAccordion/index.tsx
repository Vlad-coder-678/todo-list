// vendor imports
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionDetailsProps,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  styled,
} from "@mui/material";

const StyledRestTaskListAccordion = styled((props: AccordionProps) => (
  <Accordion square={false} {...props} />
))(({ theme }) => ({
  borderRadius: "40px",
  boxShadow: "-8px -8px 20px 0px rgba(255, 255, 255, 0.05)",
  overflow: "hidden",
  "&:last-of-type": {
    borderRadius: "40px",
  },
}));

const StyledRestTaskListAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  boxSizing: "border-box",
  margin: "0",
  padding: "10px 36px 7px 14px",
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    height: "40px",
  },
}));

const StyledRestTaskListAccordionDetails = styled((props: AccordionDetailsProps) => (
  <AccordionDetails {...props}>{props.children}</AccordionDetails>
))(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "21px",
  boxSizing: "border-box",
  padding: "8px 16px 16px",
  backgroundColor: theme.palette.primary.light,
}));

export {
  StyledRestTaskListAccordion,
  StyledRestTaskListAccordionSummary,
  StyledRestTaskListAccordionDetails,
};
