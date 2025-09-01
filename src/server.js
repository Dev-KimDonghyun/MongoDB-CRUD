const express = require("express");

const connectDatabase = require("./config/database");

const createControl = require("./controllers/control.create");
const readControl = require("./controllers/control.read");
const updateControl = require("./controllers/control.update");
const deleteControl = require("./controllers/control.delete");

const app = express();
const port = 3000;

app.use(express.json());

connectDatabase();

app.use("/api", createControl);
app.use("/api", readControl);
app.use("/api", updateControl);
app.use("/api", deleteControl);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Run on Port ${port}`);
});
