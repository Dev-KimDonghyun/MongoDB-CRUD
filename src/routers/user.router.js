const express = require("express");
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers/user/index");

const router = express.Router();

router.post("/users", createUser);
router.get("/users", readUser);
router.get("/users/:id", readUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
