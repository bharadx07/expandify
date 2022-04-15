const createTransform = require("../createTransform");
const embeder = require("../embeding-values/embeder");
const cherrio = require("cheerio");

module.exports = createTransform(
  "removes all html tags from a string",
  /{{@nohtml (.*)}}/g,
  (variables) => {
    return (expression) => {
      const purgeTagValue = embeder(variables)(
        expression.replace("@nohtml ", "")
      );

      return cherrio.load(purgeTagValue, { xmlMode: true }, false).text();
    };
  }
);
