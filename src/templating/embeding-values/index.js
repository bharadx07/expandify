const createTransform = require("../createTransform");
const betterEval = require("better-eval");

module.exports = createTransform("binding", /{{(.*)}}/g, (variables) => {
  return (expression) => {
    const withoutCurly = expression.substring(2, expression.length - 2);

    const raw = betterEval(withoutCurly, variables);

    /* smart checking
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
  };
});
