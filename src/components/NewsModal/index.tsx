// vendor imports
import React, { FC } from "react";
import { useQuery } from "react-query";
import Marquee from "react-fast-marquee";
import { Box, useTheme } from "@mui/material";

const NewsModal: FC = () => {
  const theme = useTheme();

  const FULL_URL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=06ce86ba632e44f5a547738589d46c75";

  const { data, isLoading, isError, error } = useQuery("news data", async () => {
    const response = await fetch(FULL_URL);
    const results = await response.json();

    return results;
  });

  const getMarqueeBGColor = () => {
    switch (true) {
      case (isLoading): return theme.palette.warning.main;
      case (isError): return theme.palette.error.main;
      default: return theme.palette.info.main;
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "60px",
        height: "77px",
        maxWidth: "390px",
        backgroundColor: getMarqueeBGColor(),
        color: isLoading ? theme.palette.common.black : theme.palette.text.primary,
        fontSize: "24px",
        borderTop: `5px solid ${theme.palette.success.main}`,
        borderBottom: `5px solid ${theme.palette.success.main}`,
      }}
    >
      <Marquee
        gradient={false}
        speed={20}
      >
        {isError && <p>Error message: {(error as any).message}</p>}
        {isLoading && <p>Loading...</p>}
        {data?.articles?.length > 0 ? (<p>{data.articles[0].description}</p>) : (<p>No results</p>)}
      </Marquee>
    </Box>
  );
};

export default NewsModal;
