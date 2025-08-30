const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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

module.exports = mongoose.model("User", UserSchema);
