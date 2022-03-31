const betterEval = require("better-eval");

function bindingShortcut(prev, variables) {
  return prev.replace(/\$:(.*):/g, (e) => {
    const withoutcolon = e
      .replace("$:", "")
      .replace(" ", "")
      .replace(":", "");

    return `${withoutcolon}="${betterEval(withoutcolon, variables)}"`;
  });
}

module.exports = bindingShortcut;
