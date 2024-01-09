export const colorInAllTasks = (curTack) => {
  let color;
  const stage = curTack.stage;
  if (stage === "queue") color = "white";
  if (stage === "development") color = "lightskyblue";
  if (stage === "done") color = "lightgreen";
  return color;
};
