const expandify = require("../src");

console.log(expandify(__dirname + "/index.html", { name: "Bob", a: { b: 1 } }));
