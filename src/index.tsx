// vendor imports
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";

// local imports
import reportWebVitals from "./reportWebVitals";
// providers
import ThemeContextProvider from "./providers/ThemeContextProvider";
import ToDoListContextProvider from "./providers/ToDoListContextProvider";
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

app.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <ToDoListContextProvider>
          <App />
        </ToDoListContextProvider>
      </ThemeContextProvider>
    </StyledEngineProvider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
