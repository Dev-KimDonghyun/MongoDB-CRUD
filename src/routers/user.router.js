const express = require("express");
const { createUser } = require("../controllers/user/create.contoller");

const router = express.Router();

router.post("/users", createUser);

module.exports = router;
