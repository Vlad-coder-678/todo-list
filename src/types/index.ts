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

interface getUrlProps {
  protocol: string,
  host: string,
  path: string,
  options: Array<{
    key: string,
    value: string,
  }>,
};

interface cutStringProps {
  string: string,
  length: number,
  suffix?: string,
}

export type {
  TaskType,
  TaskListType,
  CurrentTaskIdType,
  getUrlProps,
  cutStringProps,
};
