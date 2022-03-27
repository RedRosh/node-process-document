const dotenv = require("dotenv");
require("colors");

//* Import MongoHandler
const {
  connectDB,
  getAllBienials,
  createBienials,
  closeConnection,
} = require("./utils/MongoHandler");
//* Import DocProcessor
const DocProcessor = require("./libs/DocProcessor");

const main = async () => {
  //* Load Config
  dotenv.config({ path: "./config/config.env" });
  //* Connect to the db
  await connectDB();
  //* Get All Doc From Db
  const allBienials = await getAllBienials();
  const docProcessor = new DocProcessor();
  const placeDetails = await docProcessor.getAddressDetails(allBienials[0]);
  console.log(placeDetails);
  //* Close Connection
  await closeConnection();
};

main();
