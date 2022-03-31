const betterEval = require("better-eval");

function binding(prev, variables) {
  return prev
    .replace(/\$:(.*)="(.*)"/g, (e) => {
      const split = e.replace(/"(.*)"/g, (x) => {
        const nostr = x.substring(1, x.length - 1);

        return `"${betterEval(nostr, variables)}"`;
      });

      return split.replace("$:", "");
    })
    .replace(/\$:(.*)='(.*)'/g, (e) => {
      const split = e.replace(/'(.*)'/g, (x) => {
        const nostr = x.substring(1, x.length - 1);

        return `'${betterEval(nostr, variables)}'`;
      });
      return split.replace("$:", "");
    });
}

module.exports = binding;
