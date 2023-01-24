// vendor imports
import React, { useContext } from "react";

// local imports
// provider
import { ModalsShowContext } from "../../providers/ModalsShowProvider";

const AddNewTaskModal = () => {
  const { isShowNewTaskModal } = useContext(ModalsShowContext);

  if (!(isShowNewTaskModal as boolean)) return null;

  return (
    <div></div>
  );
};

export default AddNewTaskModal;
