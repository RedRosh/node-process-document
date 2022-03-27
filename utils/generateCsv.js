const converter = require("json-2-csv");
const fs = require("fs");
const { exit } = require("process");
exports.generateCsv = async (fileName, data) => {
  try {
    let csv = await converter.json2csvAsync(data);
    fs.writeFileSync(`./data/${fileName}Fill${Date.now()}.csv`, csv);
  } catch (err) {
    console.error(err.message);
    exit();
  }
};
