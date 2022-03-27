exports.cleanString = (string) => {
  return string.replace(/\n|\t/g, " ").trim();
};
