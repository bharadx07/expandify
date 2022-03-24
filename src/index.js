const betterEval = require("better-eval");
const fs = require("fs");

const expandify = (fileName, variables) => {
  const raw = fs.readFileSync(fileName, "utf-8");

  let evaled = raw.replace(/{(.*)}/g, (expression) => {
    const withoutCurly = expression.substring(1, expression.length - 1);

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
  });

  // bind props with :propname="propvalue"
  evaled = evaled
    .replace(/:(.*)="(.*)"/g, (e) => {
      const split = e.replace(/"(.*)"/g, (x) => {
        const nostr = x.substring(1, x.length - 1);

        return `"${betterEval(nostr, variables)}"`;
      });

      return split.replace(":", "");
    })
    .replace(/:(.*)='(.*)'/g, (e) => {
      const split = e.replace(/'(.*)'/g, (x) => {
        const nostr = x.substring(1, x.length - 1);

        return `'${betterEval(nostr, variables)}'`;
      });
      return split.replace(":", "");
    });

  // special shortcut to bind props
  evaled = evaled.replace(/:(.*) /g, (e) => {
    const withoutcolon = e.replace(":", "").replace(" ", "");

    return `${withoutcolon}="${betterEval(withoutcolon, variables)}"`;
  });

  return evaled;
};

module.exports = expandify;
