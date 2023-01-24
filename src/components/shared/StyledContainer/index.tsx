// vendor imports
import React from "react";
import { Container, ContainerProps, styled } from "@mui/material";

const StyledContainer = styled((props: ContainerProps) => (
  <Container {...props} />
))(({ theme }) => ({
  width: "390px",
  height: "844px",
  borderRadius: "30px",
  backgroundColor: theme.palette.background.default,
  overflow: "scroll",
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  paddingBottom: "30px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "@media(min-width: 600px)": {
    minWidth: "auto",
    padding: "0",
  },
}));

export default StyledContainer;
