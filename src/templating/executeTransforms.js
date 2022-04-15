function executeTransforms(rawTemplate, variables, components, transformList, $render) {
  let compiled = rawTemplate;

  transformList.forEach((transform) => {
    if (transform.handlesComponents) {
      compiled = transform.transformer(components, $render)(compiled);
    } else if (transform.regex) {
      compiled = compiled.replace(
        transform.regex,
        transform.transformer(variables)
      );
    } else {
      compiled = transform.transformer(variables)(compiled);
    }
  });

  return compiled;
}

module.exports = executeTransforms;
