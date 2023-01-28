interface TaskType {
  id: number,
  title: string,
  description: string,
  priority: string,
  isDone: boolean,
}

interface TaskListType {
  [date: string]: TaskType[],
}

interface CurrentTaskIdType {
  id: number,
  date: string,
}

export type {
  TaskType,
  TaskListType,
  CurrentTaskIdType,
};
