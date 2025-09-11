const User = require("../../models/user.model.js");

exports.deleteUser = async (req, res) => {
  const _ID = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_ID);
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
