const User = require("../../models/user.model.js");

exports.readUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.readUser = async (req, res) => {
  const _ID = req.params.id;
  try {
    const user = await User.findById(_ID);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
