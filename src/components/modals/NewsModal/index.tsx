// vendor imports
import React, { FC, useContext } from "react";
import Marquee from "react-fast-marquee";
import { Box, useTheme } from "@mui/material";

// local imports
// constnats
import TEXT from "../../../constants/text";
// providers
import { ModalsShowContext } from "../../../providers/ModalsShowProvider";
// hooks
import useNews from "../../../hooks/useNews";

const NewsModal: FC = () => {
  const theme = useTheme();
  const modalsShowState = useContext(ModalsShowContext);
  const { data, isLoading, isError, error } = useNews();

  if (!(modalsShowState?.isShowNewsModal as boolean)) return null;

  const getText = () => {
    switch (true) {
      case isError: return `${TEXT.errorMessage}${(error as { message: string }).message}`;
      case isLoading: return TEXT.newsIsLoading;
      default: return (data !== undefined && data?.length > 0) ? data : TEXT.noResults;
    }
  };

  const getMarqueeBGColor = () => {
    switch (true) {
      case isLoading: return theme.palette.warning.main;
      case isError: return theme.palette.error.main;
      default: return theme.palette.info.main;
    }
  };

  return (
    <Box
      sx={{
        width: "390px",
        position: "absolute",
        bottom: "50px",
        backgroundColor: getMarqueeBGColor(),
        color: isLoading ? theme.palette.common.black : theme.palette.common.white,
        fontSize: "24px",
        lineHeight: "40px",
        borderTop: `5px solid ${theme.palette.success.main}`,
        borderBottom: `5px solid ${theme.palette.success.main}`,
      }}
    >
      <Marquee gradient={false} speed={20}>
        {getText()}
      </Marquee>
    </Box>
  );
};

export default NewsModal;
