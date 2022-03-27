const NodeGeocoder = require("node-geocoder");

//* This Function accept an object Address that have the following prop :  address,country,zipcode,googlePlaceId,language,region
//* All params get ignored when placeid is given
exports.getAddressGeocode = async (addressObject) => {
  let geocoder = NodeGeocoder({
    provider: "google",
    apiKey: process.env.GOOGLE_API_KEY,
  });
  const addressDetails = await geocoder.geocode(addressObject);
  return addressDetails;
};
