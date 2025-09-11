const express = require("express");
const { createUser } = require("../controllers/user/create.controller");
const { readUser } = require("../controllers/user/read.controller");

const router = express.Router();

router.post("/users", createUser);
router.get("/users", readUser);

module.exports = router;
