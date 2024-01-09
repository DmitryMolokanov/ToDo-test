export const changeTaskStage = async (task) => {
  try {
    await fetch("http://127.0.0.1:8080/change_stage", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  } catch (err) {
    console.log(err);
  }
};
