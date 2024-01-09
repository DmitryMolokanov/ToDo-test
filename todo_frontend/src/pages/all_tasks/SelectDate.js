import React from "react";

const SelectDate = ({ sortOfDate }) => {
  return (
    <div>
      <select className="all-tasks-select" onChange={(e) => sortOfDate(e)}>
        <option value="newer">Newer</option>
        <option value="older">Older</option>
      </select>
    </div>
  );
};

export default SelectDate;
