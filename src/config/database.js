const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

export const connectDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Success to Connect MongoDB");
  } catch (error) {
    console.error("Failed to Connect MongoDB", error);
    process.exit(1);
  }
};