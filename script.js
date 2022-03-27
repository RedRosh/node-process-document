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
const { generateCsv } = require("./utils/generateCsv");

const main = async () => {
  let data = [];
  //* Load Config
  dotenv.config({ path: "./config/config.env" });
  //* Connect to the db
  await connectDB();
  //* Get All Doc From Db
  const allBienials = await getAllBienials();
  const docProcessor = new DocProcessor();
  for (let doc of allBienials) {
    const placeDetails = await docProcessor.getAddressDetails(doc);
    data.push(placeDetails);
    console.log(`${data.length} / ${allBienials}`);
  }
  //* Generate the Csv
  await generateCsv("Data", data);
  //* Close Connection
  await closeConnection();
};

main();
