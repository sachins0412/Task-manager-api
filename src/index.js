const express = require("express");
require("./db/mongoose"); //required to run the connection file

const PORT = process.env.PORT;

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
