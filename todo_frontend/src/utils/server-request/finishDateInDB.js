export const finishDate = async (date, id) => {
  fetch("/set_finish_date", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, date: date }),
  });
};
