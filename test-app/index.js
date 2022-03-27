const expandify = require("../src");
const fs = require("fs");

const raw = expandify(__dirname + "/index.html", {
  todos: ["a", "b", "c"],
  name: "tom",
  boolean: true,
  src: "fsd",
});

fs.writeFileSync("raw.html", raw);
