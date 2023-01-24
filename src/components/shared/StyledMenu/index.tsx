import React from "react";
import { Menu, MenuProps, styled } from "@mui/material";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 200,
    "& .MuiMenu-list": {
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
      },
      "&:active": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

export default StyledMenu;
