const createTransform = require("../createTransform");

module.exports = createTransform(
  "evaluate props with single quotes",
  /\$:(.*)='(.*)'/g,
  (variables) => {
    return (expression) => {
      const evalAttrs = expression.replace(/'(.*)'/g, (x) => {
        const nostr = x.substring(1, x.length - 1);

        return `'${betterEval(nostr, variables)}'`;
      });
      return evalAttrs.replace("$:", "");
    };
  }
);
