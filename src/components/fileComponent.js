const fs = require("fs");

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
    componentData,
    componentData,
  };
}

module.exports = fileComponent;
