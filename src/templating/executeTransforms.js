function executeTransforms(rawTemplate, variables, transformList) {
  let compiled = rawTemplate;

  transformList.forEach((transform) => {
    if (transform.regex) {
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
