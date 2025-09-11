const express = require("express");
const { createUser } = require("../controllers/user/create.controller");
const { readUser } = require("../controllers/user/read.controller");
const { updateUser } = require("../controllers/user/update.controller");

const router = express.Router();

router.post("/users", createUser);
router.get("/users", readUser);
router.get("/users/:id", readUser);
router.patch("/users/:id", updateUser);

module.exports = router;
