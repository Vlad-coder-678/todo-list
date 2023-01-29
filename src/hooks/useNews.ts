// vendor imports
import { useQuery } from "react-query";

// local imports
// constants
import API from "../constants/api";
import CONSTANTS from "../constants";
// utilities
import getUrl from "../utilities/getUrl";
import cutString from "../utilities/cutString";

const useNews = () => {
  // работает только локально news_api или mediaStack api
  const isNewsApi = true;

  return useQuery("news data", async () => {
    const url = getUrl(isNewsApi ? API.newsApi : API.mediaStack);

    const response = await fetch(url);
    const results = await response.json();

    const [{ description }] = isNewsApi ? results.articles : results.data;

    return cutString({ string: ((description?.length > 0) ? description : ""), length: CONSTANTS.maxLengthNewDescription });
  });
};

export default useNews;
