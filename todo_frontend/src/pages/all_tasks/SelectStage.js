import React from "react";

const SelectStage = ({ selectTasksByStage }) => {
  return (
    <div>
      <select
        className="all-tasks-select"
        onChange={(e) => selectTasksByStage(e)}
      >
        <option value="All tasks">All tasks</option>
        <option value="queue">Queue</option>
        <option value="development">Development</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default SelectStage;
