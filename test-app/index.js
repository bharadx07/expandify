const expandify = require("../src");

console.log(
  expandify(__dirname + "/index.html", {
    todos: ["a", "b", "c"],
    name: "tom",
    boolean: true,
    src: "fsd",
  })
);
