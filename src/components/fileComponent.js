const fs = require("fs");

function fileComponent(
  componentName,
  componentFilePath,
  componentProps,
  componentData
) {
  return {
    componentName,
    componentRawTemplate: fs.readFileSync(componentFilePath, "utf8"),
    componentProps,
    componentData,
  };
}

module.exports = fileComponent;
