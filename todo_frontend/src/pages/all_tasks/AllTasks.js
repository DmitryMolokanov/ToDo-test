import React, { useEffect, useState } from "react";
import "./styles/AllTask.css";
import BtnBack from "./BtnBack";
import ContainerAllTasks from "./ContainerAllTasks";
import SelectStage from "./SelectStage";
import SelectDate from "./SelectDate";
import { HistoryTasks } from "../../context.js";

const AllTasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [selectTasks, setSelectTasks] = useState([]);

  async function getAllTask() {
    try {
      const response = await fetch("http://127.0.0.1:8080/get_all_task");
      const result = await response.json();
      setSelectTasks(result.reverse());
      setAllTasks(result);
    } catch (err) {
      console.log(err);
    }
  }
  function selectTasksByStage(e) {
    const value = e.target.value;
    const select = allTasks.filter((task) => {
      if (value === "All tasks") {
        return allTasks;
      } else return task.stage === value;
    });
    setSelectTasks(select);
  }
  function sortOfDate(e) {
    const value = e.target.value;
    const sort = [...selectTasks].sort((a, b) => {
      if (value === "older") {
        return a.date - b.date;
      } else {
        return b.date - a.date;
      }
    });
    setSelectTasks(sort);
  }

  useEffect(() => {
    getAllTask();
  }, []);
  return (
    <div>
      <HistoryTasks.Provider
        value={{
          selectTasks,
          setSelectTasks,
        }}
      >
        <BtnBack />
        <div className="all-tasks-select-container">
          <SelectStage selectTasksByStage={selectTasksByStage} />
          <SelectDate sortOfDate={sortOfDate} />
        </div>
        <ContainerAllTasks tasks={selectTasks} />
      </HistoryTasks.Provider>
    </div>
  );
};

export default AllTasks;
