// vendor imports
import React, { FC, useContext } from "react";
import { useQuery } from "react-query";
import Marquee from "react-fast-marquee";
import { Box, useTheme } from "@mui/material";

// local imports
// constnats
import TEXT from "../../../constants/text";
// providers
import { ModalsShowContext } from "../../../providers/ModalsShowProvider";

const NewsModal: FC = () => {
  const theme = useTheme();
  const { isShowNewsModal } = useContext(ModalsShowContext);

  const FULL_URL_NEWS_API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=06ce86ba632e44f5a547738589d46c75";

  const { data, isLoading, isError, error } = useQuery("news data", async () => {
    const response = await fetch(FULL_URL_NEWS_API);
    const results = await response.json();

    return results;
  });

  if (!(isShowNewsModal as boolean)) return null;

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
        width: "390px",
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
        {isError && <p>{TEXT.errorMessage}{(error as any).message}</p>}
        {isLoading && <p>{TEXT.newsIsLoading}</p>}
        {data?.articles?.length > 0 ? (<p>{data.articles[0].description}</p>) : (!isLoading && <p>{TEXT.noResults}</p>)}
      </Marquee>
    </Box>
  );
};

export default NewsModal;
