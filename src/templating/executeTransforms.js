function executeTransforms(rawTemplate, variables, components, transformList) {
  let compiled = rawTemplate;

  transformList.forEach((transform) => {
    if (transform.handlesComponents) {
      compiled = transform.transformer(components)(compiled);
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
