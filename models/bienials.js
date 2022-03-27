const mongoose = require("mongoose");

//*  SCHEMA
const bienialsSchema = mongoose.Schema({
  name: {
    type: "String",
  },
  Address: {
    type: "String",
  },
  Email: {
    type: "String",
  },
  Country: {
    type: "String",
  },
  Website: {
    type: "String",
  },
  Organiser: {
    type: "String",
  },
  profile: {
    type: "String",
  },
  blockQuote: {
    type: "String",
  },
  founded: {
    type: "String",
  },
  telephone: {
    type: "String",
  },
  fax: {
    type: "String",
  },
});

//* CREATE THE MODEL
exports.bienials = mongoose.model(
  "bienialsupdated",
  bienialsSchema,
  "bienialsupdated"
);
