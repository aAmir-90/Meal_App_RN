const mongoose = require("mongoose");
const dotenv = require("dotenv"); // Load environment variables
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL_LOCAL);
    console.log(`MongoDB connected... ${mongoose.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
