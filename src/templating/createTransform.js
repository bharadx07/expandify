function createTransform(name, regex, transformFn) {
  return {
    name,
    regex,
    transformer: transformFn,
  };
}

module.exports = createTransform;
