import React from "react";
import DeleteContainer from "./DeleteContainer";

const DateTaskContainer = ({ task, showDelete }) => {
  return (
    <div className="date-task-container">
      <div className="date-task">
        <span> Start: {task.start_date}</span>
        {task.finish_date ? <span> Finish: {task.finish_date}</span> : null}
      </div>
      <DeleteContainer task={task} showDelete={showDelete} />
    </div>
  );
};

export default DateTaskContainer;
