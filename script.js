const dotenv = require("dotenv");
require("colors");
//* Import MongoHandler
const { connectDB } = require("./utils/MongoHandler");
const main = async () => {
  //* Load Config
  dotenv.config({ path: "./config/config.env" });
  //* Connect to the db
  await connectDB();
};

main();
