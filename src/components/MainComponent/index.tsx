// vendor imports
import React, { FC, useContext, useState } from "react";
import { Box } from "@mui/material";

// locale imports
// constants
import text from "../../constants/text";
// poviders
import { ToDoListContext } from "../../providers/ToDoListContextProvider";
// components
import CheckboxComponent from "../CheckboxComponent";
import TaskListTitleComponent from "../TaskListTitleComponent";
// styles
import "./styles.css";

const MainComponent: FC = () => {
  const [isShowTodayTasks, setIsShowTodayTasks] = useState(true);
  const toDoListContext = useContext(ToDoListContext);
  console.log("toDoList", toDoListContext?.toDoList);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "42px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "36px",
          gap: "9px",
          boxSizing: "border-box",
        }}
      >
        <CheckboxComponent
          isChecked={isShowTodayTasks}
          setIsChecked={setIsShowTodayTasks}
        />

        <TaskListTitleComponent title={text.todayTasks} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "0 25px",
          gap: "5px",
          boxSizing: "border-box",
        }}
      >
        {toDoListContext?.toDoList?.map(({ title }, index) => (<p key={`${title} ${index}`}>{title}</p>))}
      </Box>
    </div>
  );
};

export default MainComponent;
