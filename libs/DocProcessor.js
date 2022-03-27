const { getAddressGeocode } = require("../utils/GeocoderHandler");
const { cleanString } = require("../utils/StringCleaner");

class DocProcessor {
  // Accept as a param an Array of Objects
  DocProcessor(data) {
    //* Get The data
    this.data = data;
  }

  //* Formatter
  addressObjectFormatter(value) {
    //* Destruction value Object
    let {
      Address,
      name,
      Email,
      Country,
      Website,
      Organiser,
      profile,
      blockQuote,
      founded,
      telephone,
      fax,
    } = value;

    return {
      address:
        cleanString(Address) || cleanString(name) || cleanString(Organiser),
      country: cleanString(Country),
    };
  }

  async getAddressDetails(value) {
    let addressObject = this.addressObjectFormatter(value);
    console.log(addressObject);
    //* get Place Details
    const addressDetails = await getAddressGeocode(addressObject);
    return addressDetails;
  }
}

module.exports = DocProcessor;
