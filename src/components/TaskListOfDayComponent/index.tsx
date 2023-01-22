import React, { FC } from "react";

import { TaskListType } from "../../types/types";

interface Props {
  taskListOfDay: TaskListType,
}

const TaskListOfDayComponent: FC<Props> = ({ taskListOfDay }) => {
  console.log("dailyTaskList", taskListOfDay);

  return (
    <div></div>
  );
};

export default TaskListOfDayComponent;
