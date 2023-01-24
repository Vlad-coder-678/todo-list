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

const StyledTodayTaskListAccordion = styled((props: AccordionProps) => (
  <Accordion square={false} {...props} />
))(({ theme }) => ({
  width: "100%",
  background: "none",
  backgroundColor: theme.palette.background.default,
  borderRadius: "40px",
  boxShadow: "none",
  "&.Mui-expanded": {
    margin: "0",
  },
}));

const StyledTodayTaskListAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary {...props} />
))(({ theme }) => ({
  minHeight: "auto",
  height: "42px",
  "&.Mui-expanded": {
    minHeight: "auto",
    height: "42px",
  },
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    boxSizing: "border-box",
    margin: "0",
  },
}));

const StyledTodayTaskListAccordionDetails = styled((props: AccordionDetailsProps) => (
  <AccordionDetails {...props}>{props.children}</AccordionDetails>
))(({ theme }) => ({
  width: "350px",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: "25px 27px 23px 16px",
  gap: "21px",
  borderRadius: "40px",
  // boxShadow: "-6px -6px 15px 0px rgba(255, 255, 255, 0.05)",
  backgroundColor: theme.palette.background.paper,
}));

export {
  StyledTodayTaskListAccordion,
  StyledTodayTaskListAccordionSummary,
  StyledTodayTaskListAccordionDetails,
};
