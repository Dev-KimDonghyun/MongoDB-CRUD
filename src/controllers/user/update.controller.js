const User = require("../../models/user.model.js");

exports.updateUser = async (req, res) => {
  const _ID = req.params.id;
  const { nickName, comment } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      _ID,
      { nickName, comment },
      { new: true }
    );
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
