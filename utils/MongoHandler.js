const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB ${conn.connection.host} connected successfully `.cyan.bold
    );
  } catch (error) {
    console.log(`[${error.name}] ${error.message}`.red.bold);
  }
};
