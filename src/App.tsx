// vendor imports
import React from "react";

// locale imports
// providers
import ThemeContextProvider from "./providers/ThemeContextProvider";
import ToDoListContextProvider from "./providers/ToDoListContextProvider";
// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// components
import Main from "./components/MainComponent";
// styles
import "./styles/App.css";

const App = () => (
  <ThemeContextProvider>
    <ToDoListContextProvider>
      <Main />
    </ToDoListContextProvider>
  </ThemeContextProvider>
);

export default App;
