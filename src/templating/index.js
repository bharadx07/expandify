const embeding = require("./embeding-values");
const {
  doubleQuotes,
  shortcut,
  singleQuotes,
} = require("./evaluated-attributes");
const scssSupport = require("./scss-support");
const noHTMLTag = require("./no-html-tag");

// order of exec
const transformList = [
  noHTMLTag,
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
