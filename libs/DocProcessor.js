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
    //* get Place Details
    const addressDetails = await getAddressGeocode(addressObject);
    return {
      name: cleanString(value.name),
      website: cleanString(value.Website),
      email: cleanString(value.Email),
      organizer: cleanString(value.Organiser),
      profile: cleanString(value.profile),
      blockQuote: cleanString(value.blockQuote),
      founded: cleanString(value.founded),
      telephone: cleanString(value.telephone),
      fax: cleanString(value.fax),
      ...addressDetails[0],
    };
  }
}

module.exports = DocProcessor;
