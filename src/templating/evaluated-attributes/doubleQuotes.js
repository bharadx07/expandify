const createTransform = require("../createTransform");
const betterEval = require("better-eval");

module.exports = createTransform(
  "eval props with double quotes",
  /\$:(.*)="(.*)"/g,
  (variables) => {
    return (expression) => {
      const evalAttrs = expression.replace(/"(.*)"/g, (x) => {
        const nostr = x.substring(1, x.length - 1);

        return `'${betterEval(nostr, variables)}'`;
      });
      return evalAttrs.replace("$:", "");
    };
  }
);
