import React, { useContext } from "react";
import { HistoryTasks } from "../../context.js";

const DeleteContainer = ({ task, showDelete }) => {
  const { selectTasks, setSelectTasks } = useContext(HistoryTasks);

  function deleteTask() {
    console.log(task.id);
    fetch("http://127.0.0.1:8080/delete_task", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: task.id }),
    });
    const delPointTask = selectTasks.filter((el) => {
      return el.id !== task.id;
    });
    setSelectTasks(delPointTask);
  }
  return (
    <div className="delete-container">
      <div
        className="delete"
        style={
          showDelete === task.id ? { display: "block" } : { display: "none" }
        }
      >
        <button onClick={deleteTask}>
          <img src="/trash.png" alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default DeleteContainer;
