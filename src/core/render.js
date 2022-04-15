//tranforms
const { transformList, executeTransforms } = require("../templating");

/**
 *
 * @param {string} templateString string that acts as your expandify template
 * @param {object} variables data to be used in your templates
 * @returns {string} rendered HTML string
 */
const render = (templateString, variables, components) => {
  return executeTransforms(templateString, variables, components, transformList);
};

module.exports = render;
