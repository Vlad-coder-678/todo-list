const API = {
  mediaStack: {
    protocol: "https",
    host: "api.mediastack.com",
    path: "/v1/news",
    options: [{
      key: "access_key",
      value: "342f36ba9b4b9682750ad40475c41e3e",
    }],
  },
  newsApi: {
    protocol: "https",
    host: "newsapi.org",
    path: "/v2/top-headlines",
    options: [
      {
        key: "country",
        value: "us",
      },
      {
        key: "category",
        value: "business",
      },
      {
        key: "apiKey",
        value: "06ce86ba632e44f5a547738589d46c75",
      },
    ],
  },
};

export default API;
