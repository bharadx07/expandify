const fs = require("fs");

// render string fn
const render = require("./render");

/**
 *
 * @param {string} fileName HTML file that contains your expandify template
 * @param {object} variables data to be used in your templates
 * @returns {string} rendered HTML string
 */
const renderFile = (fileName, variables, components) => {
  const raw = fs.readFileSync(fileName, "utf-8");

  return render(raw, variables, components);
};

module.exports = renderFile;
