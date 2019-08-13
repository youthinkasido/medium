const validText = str => {
    // checks to see if text is a string, excludes white space
  return typeof str === "string" && str.trim().length > 0;
};

module.exports = validText;
