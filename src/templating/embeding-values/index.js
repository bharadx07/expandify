const createTransform = require("../createTransform");
const embeder = require("./embeder");

module.exports = createTransform("binding", /{{(.*)}}/g, (variables) => {
  return embeder(variables);
});
