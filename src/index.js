const fs = require("fs");

//tranforms
const embeds = require("./transforms/embeds");
const binding = require("./transforms/binding");
const bindingShortcut = require("./transforms/bindingShortcut");
const scssSupport = require("./transforms/scssSupport");

const expandify = (fileName, variables) => {
  const raw = fs.readFileSync(fileName, "utf-8");

  let evaled = embeds(raw, variables);

  // bind props with bind:propname="propvalue"
  evaled = binding(evaled, variables);

  // special shortcut to bind props with :propname:
  evaled = bindingShortcut(evaled, variables);

  // scss support with <style lang="scss">
  evaled = scssSupport(evaled);

  return evaled;
};

module.exports = expandify;
