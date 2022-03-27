const converter = require("json-2-csv");

exports.generateCsv = async (fileName, data) => {
  try {
    let csv = await converter.json2csvAsync(data);
    fs.writeFileSync(`${fileName}Fill${Date.now()}.csv`, csv);
  } catch (err) {
    console.error(err.message);
    exit();
  }
};
