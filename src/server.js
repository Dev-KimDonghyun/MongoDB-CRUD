const express = require("express");
const connectDatabase = require("./config/database");

const userRouter = require("./routers/user.router");

const app = express();
const port = 3000;

app.use(express.json());

connectDatabase();

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Run on Port ${port}`);
});
