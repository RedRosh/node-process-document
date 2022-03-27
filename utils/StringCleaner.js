exports.cleanString = (string) => {
  return string ? string.replace(/\n|\t/g, " ").trim() : null;
};
