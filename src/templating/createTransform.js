function createTransform(name, regex, transformFn, handlesComponents = false) {
  return {
    name,
    regex,
    transformer: transformFn,
    handlesComponents
  };
}

module.exports = createTransform;
