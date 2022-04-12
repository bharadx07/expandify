const createTransform = require("../createTransform");
const embeder = require("../embeding-values/embeder");

module.exports = createTransform(
  "changes html tag to pure text to prevent xss",
  /{{@text (.*)}}/g,
  (variables) => {
    return (expression) => {
      const purgeTagValue = embeder(variables)(
        expression.replace("@text ", "")
      );

      return purgeTagValue.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
    };
  }
);
