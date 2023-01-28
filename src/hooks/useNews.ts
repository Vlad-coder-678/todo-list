// vendor imports
import { useQuery } from "react-query";

// local imports
// constants
import API from "../constants/api";
import cutString from "../utilities/cutString";
// utilities
import getUrl from "../utilities/getUrl";

const useNews = () => {
  // для локального тестирования берём news_api там количество запросов в сутки большое, но оно не работает в проде
  // для прода переключаем на mediaStack. Api работает в проде, но ограничена по количеству запросов в месяц.
  const isNewsApi = false;

  return useQuery("news data", async () => {
    const url = isNewsApi
      ? getUrl({
        protocol: API.newsApi.protocol,
        host: API.newsApi.host,
        path: API.newsApi.path,
        options: API.newsApi.options,
      })
      : getUrl({
        protocol: API.mediaStack.protocol,
        host: API.mediaStack.host,
        path: API.mediaStack.path,
        options: API.mediaStack.options,
      });

    const response = await fetch(url);
    const results = await response.json();

    const [{ description }] = isNewsApi ? results.articles : results.data;

    return description?.length > 0 ? cutString({ string: description, length: 100 }) : "";
  });
};

export default useNews;
