const betterEval = require("better-eval");
const fs = require("fs");

const expandify = (fileName, variables) => {
  const raw = fs.readFileSync(fileName, "utf-8");

  const evaled = raw.replace(/{(.*)}/g, (expression) => {
    const withoutCurly = expression.substring(1, expression.length - 1);

    const raw = betterEval(withoutCurly, variables);

    /* react style checking
      - if array, join together
      - if object, stringify
      - if string, keep the same
    */
    if (Array.isArray(raw)) {
      return raw.join("");
    } else if (typeof raw === "object" && raw !== null) {
      return JSON.stringify(raw);
    }

    return raw;
  });

  return evaled;
};

module.exports = expandify;
