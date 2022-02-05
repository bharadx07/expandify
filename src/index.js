const betterEval = require("better-eval");
const fs = require("fs");

const expandify = (fileName, variables) => {
  const raw = fs.readFileSync(fileName, "utf-8");

  const evaled = raw.replace(/{(.*)}/g, (expression) => {
    const withoutCurly = expression.substring(1, expression.length - 1);

    return betterEval(withoutCurly, variables);
  });

  return evaled;
};

module.exports = expandify;
