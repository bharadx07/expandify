const embeding = require("./embeding-values");
const {
  doubleQuotes,
  shortcut,
  singleQuotes,
} = require("./evaluated-attributes");
const scssSupport = require("./scss-support");

const transformList = [
  embeding,
  doubleQuotes,
  singleQuotes,
  shortcut,
  scssSupport,
];

const executeTransforms = require("./executeTransforms");

module.exports = {
  transformList,
  executeTransforms,
};
