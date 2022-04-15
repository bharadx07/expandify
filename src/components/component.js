/**
 *
 * @param {string} componentName name of the selector for your component
 * @param {string} componentTemplate template for your component
 * @param {Array<string>} componentProps name of each prop your component takes
 * @param {Object} componentData javascript data that you need for your component
 * @param {Array} componentChildComponents array of all the child components inside this component
 * @returns an expandify component (look at docs for how to use your component)
 */
function component(
  componentName,
  componentTemplate,
  componentProps,
  componentData,
  componentChildComponents
) {
  return {
    name: componentName,
    template: componentTemplate,
    props: componentProps,
    data: componentData,
    childComponents: componentChildComponents,
  };
}

module.exports = component;
