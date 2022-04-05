const createTransform = require("../createTransform");
const betterEval = require("better-eval");

module.exports = createTransform(
  "shortcut for binding",
  /\$:(.*):/g,
  (variables) => {
    return (expression) => {
      const withoutcolon = expression
        .replace("$:", "")
        .replace(" ", "")
        .replace(":", "");

      return `${withoutcolon}="${betterEval(withoutcolon, variables)}"`;
    };
  }
);
