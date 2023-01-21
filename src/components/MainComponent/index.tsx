// vendor imports
import React, { FC, useState } from "react";
import { Box } from "@mui/material";

// locale imports
// constants
import text from "../../constants/text";
// components
import CheckboxComponent from "../CheckboxComponent";
import TaskListTitleComponent from "../TaskListTitleComponent";
// styles
import "./styles.css";

const MainComponent: FC = () => {
  const [isShowTodayTasks, setIsShowTodayTasks] = useState(true);

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
    </div>
  );
};

export default MainComponent;
