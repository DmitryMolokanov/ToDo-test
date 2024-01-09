const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const mongoClient = new MongoClient("mongodb://localhost:27017");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use(express.json());

app.post("/save_task", (req, res) => {
  async function saveNewTask() {
    try {
      await mongoClient.connect();
      const db = mongoClient.db("todo");
      const collection = db.collection("all_task");
      const result = await collection.insertOne(req.body.newTask);
      res.send(result);
    } catch (err) {
      console.log(err);
    } finally {
      await mongoClient.close();
    }
  }
  saveNewTask();
});

app.get("/get_all_task", (req, res) => {
  async function getAllTask() {
    try {
      await mongoClient.connect();
      const db = mongoClient.db("todo");
      const collection = db.collection("all_task");
      const result = await collection.find().toArray();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  getAllTask();
});

app.put("/change_stage", (req, res) => {
  async function changeStage() {
    const task = req.body;
    try {
      await mongoClient.connect();
      const db = mongoClient.db("todo");
      const collection = db.collection("all_task");
      const result = await collection.updateOne(
        { id: task.id },
        { $set: { stage: task.stage } }
      );
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  changeStage();
});

app.put("/set_finish_date", (req, res) => {
  async function finishDate() {
    const task = req.body;
    try {
      await mongoClient.connect();
      const db = mongoClient.db("todo");
      const collection = db.collection("all_task");
      const result = await collection.updateOne(
        { id: task.id },
        { $set: { finish_date: task.date } }
      );
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  finishDate();
});

app.delete("/delete_task", (req, res) => {
  async function DeleteTask() {
    const task = req.body;
    try {
      await mongoClient.connect();
      const db = mongoClient.db("todo");
      const collection = db.collection("all_task");
      const result = await collection.deleteOne({ id: task.id });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  DeleteTask();
});

app.listen(8080, () => {
  console.log("server started");
});
