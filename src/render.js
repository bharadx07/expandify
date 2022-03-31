//tranforms
const embeds = require("./transforms/embeds");
const binding = require("./transforms/binding");
const bindingShortcut = require("./transforms/bindingShortcut");
const scssSupport = require("./transforms/scssSupport");

/**
 *
 * @param {string} templateString string that acts as your expandify template
 * @param {object} variables data to be used in your templates
 * @returns {string} rendered HTML string
 */
const render = (templateString, variables) => {
  let evaled = embeds(templateString, variables);

  // bind props with bind:propname="propvalue"
  evaled = binding(evaled, variables);

  // special shortcut to bind props with :propname:
  evaled = bindingShortcut(evaled, variables);

  // scss support with <style lang="scss">
  evaled = scssSupport(evaled);

  return evaled;
};

module.exports = render;
