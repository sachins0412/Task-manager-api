const express = require("express");
require("./db/mongoose"); //required to run the connection file

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const User = require("./models/user");
const Task = require("./models/task");

app.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post("/task", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).json(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.json(task);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});