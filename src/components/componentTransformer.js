const createTransform = require("../templating/createTransform");
const cheerio = require("cheerio");

module.exports = createTransform(
  "parses components",
  null,
  (components, $render) => {
    return (mainTemplate) => {
      const loadTemplate = cheerio.load(mainTemplate, {
        xmlMode: true,
        selfClosingTags: false,
      });

      components.forEach((component) => {
        loadTemplate(component.name).map((_, el) => {
          // createData
          const getEl = loadTemplate(el);
          const data = component.data;
          data.$props = {};
          component.props.forEach((prop) => {
            data.$props[prop] = getEl.attr(prop);
          });

          loadTemplate(el).replaceWith($render(component.template, data, []));
        });
      });

      return loadTemplate.html();
    };
  },
  true
);
