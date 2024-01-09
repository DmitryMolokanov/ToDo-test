import React, { useState } from "react";
import { colorInAllTasks } from "../../utils/ColorInAllTasks";
import DateTaskContainer from "./DateTaskContainer";

const ContainerAllTasks = ({ tasks }) => {
  const [showDelete, setShowDelete] = useState(null);
  return (
    <div className="all-task-container">
      {tasks.length > 0 ? (
        tasks.map((task) => {
          const color = colorInAllTasks(task);
          return (
            <div
              key={task.id}
              className="each-task-container"
              style={{ backgroundColor: color }}
              onMouseOver={(e) => {
                setShowDelete(task.id);
              }}
              onMouseLeave={(e) => {
                setShowDelete(null);
              }}
            >
              <div className="title-task">{task.title}</div>
              <div className="discription-task">{task.discription}</div>
              <DateTaskContainer task={task} showDelete={showDelete} />
            </div>
          );
        })
      ) : (
        <h1>Empty</h1>
      )}
    </div>
  );
};

export default ContainerAllTasks;
