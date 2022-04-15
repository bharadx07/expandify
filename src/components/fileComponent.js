const fs = require("fs");

/**
 * 
 * @param {string} componentName name of the selector for your component
 * @param {string} componentFilePath path to your file with the component template
 * @param {Array<string>} componentProps name of each prop your component takes
 * @param {Object} componentData javascript data that you need for your component
 * @returns an expandify component (look at docs for how to use your component)
 */
function fileComponent(
  componentName,
  componentFilePath,
  componentProps,
  componentData
) {
  return {
    name: componentName,
    filePath: fs.readFileSync(componentFilePath, "utf-8"),
    props: componentProps,
    data: componentData
  };
}

module.exports = fileComponent;
