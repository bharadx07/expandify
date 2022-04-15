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
          let data = {};
          if (typeof component.data === 'object') data = { ...component.data };
          data.$props = {};
          if (component.props) {
            component.props.forEach((prop) => {
              data.$props[prop] = getEl.attr(prop);
            });
          }

          loadTemplate(el).replaceWith($render(component.template, data, component.childComponents ?? []));
        });
      });

      return loadTemplate.html();
    };
  },
  true
);
