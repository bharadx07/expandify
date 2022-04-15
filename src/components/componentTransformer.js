const createTransform = require("../templating/createTransform");
const cheerio = require("cheerio");

module.exports = createTransform(
  "parses components",
  null,
  (components) => {
    return (mainTemplate) => {
      const loadTemplate = cheerio.load(mainTemplate, {
        xmlMode: true,
        selfClosingTags: false,
      });

      return loadTemplate.html();
    };
  },
  true
);
