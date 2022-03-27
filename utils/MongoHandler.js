//* Import Modules
const mongoose = require("mongoose");
//* Import Model
const { bienials } = require("../models/bienials");

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

// Get All bienials
exports.getAllBienials = async () => {
  const allBienial = await bienials.find({});
  return allBienial;
};

exports.createBienials = async (bienial) => {
  const response = await bienials.create(bienial);
  return response;
};
