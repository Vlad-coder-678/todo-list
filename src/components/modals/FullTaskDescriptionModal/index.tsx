import React, { FC, useContext, useState } from "react";

// local imports
// constants
import TEXT from "../../../constants/text";
// providers
import { TaskListContext } from "../../../providers/TaskListContextProvider";
import { ModalsShowContext } from "../../../providers/ModalsShowProvider";
// components
import { StyledDialog, StyledDialogContent, StyledDialogTitle } from "../../shared/StyledDialog";
import EditTaskFormComponen from "./EditTaskFormComponent";
import TaskDescriptionComponent from "./DescriptionTaskComponent";

const FullTaskDescriptionModal: FC = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const taskListState = useContext(TaskListContext);
  const modalsShowState = useContext(ModalsShowContext);

  const handleRemoveTask = () => {
    modalsShowState?.closeFullDescriptionModal();
    if ((modalsShowState?.currentTaskId) != null) taskListState?.removeTask(modalsShowState?.currentTaskId);
  };

  const handleOpenForm = () => setIsShowForm(true);
  const handleCloseForm = () => {
    setIsShowForm(false);
    modalsShowState?.closeFullDescriptionModal();
  };

  return (
    <StyledDialog
      open={modalsShowState?.isShowFullTaskDescriptionModal ?? false}
      onClose={handleCloseForm}
    >
      <StyledDialogTitle>
        {TEXT.taskEditingTitleModal}
      </StyledDialogTitle>
      <StyledDialogContent>
      {isShowForm
        ? (<EditTaskFormComponen onClose={handleCloseForm} />)
        : (<TaskDescriptionComponent handleOpenForm={handleOpenForm} handleRemoveTask={handleRemoveTask} />)
        }
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default FullTaskDescriptionModal;
