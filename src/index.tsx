// vendor imports
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { StyledEngineProvider } from "@mui/material";

// local imports
import reportWebVitals from "./reportWebVitals";
// providers
import ThemeContextProvider from "./providers/ThemeContextProvider";
import TaskListContextProvider from "./providers/TaskListContextProvider";
// components
import App from "./App";
// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// styles
import "./index.css";

const app = ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement,
);

const queryClient = new QueryClient();

app.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <TaskListContextProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </TaskListContextProvider>
      </ThemeContextProvider>
    </StyledEngineProvider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
