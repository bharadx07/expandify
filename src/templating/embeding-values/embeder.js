const betterEval = require("better-eval");

module.exports = (variables) => {
  return (expression) => {
    const withoutCurly = expression.substring(2, expression.length - 2);

    const raw = betterEval(withoutCurly, variables);

    /* smart checking
          - if array, join together
          - if object, stringify
          - if string, keep the same
        */
    if (raw === null || raw === undefined) {
      return "";
    } else if (Array.isArray(raw)) {
      return raw.join("");
    } else if (typeof raw === "object" && raw !== null) {
      return JSON.stringify(raw);
    }

    return raw;
  };
};
