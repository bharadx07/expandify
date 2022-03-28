const betterEval = require("better-eval");

function bindingShortcut(prev, variables) {
  return prev.replace(/bind:(.*):/g, (e) => {
    const withoutcolon = e
      .replace("bind:", "")
      .replace(" ", "")
      .replace(":", "");
    return `${withoutcolon}="${betterEval(withoutcolon, variables)}"`;
  });
}

module.exports = bindingShortcut;
