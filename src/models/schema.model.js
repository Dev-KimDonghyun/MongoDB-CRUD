const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: Date.now(),
  },
  nickName: {
    type: String,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Number,
    default: new Date(),
  },
});

module.exports = mongoose.model("Users", UsersSchema);
