const createTransform = require("../createTransform");
const sass = require("sass");
const cherrio = require("cheerio");

module.exports = createTransform("scss styling support", null, (variables) => {
  return (prev) => {
    const $ = cherrio.load(prev, null, false);

    $("style[lang=scss]").map(function (i, el) {
      // this === el
      return $(this).text(sass.compileString($(el).html()).css);
    });

    $("style[lang=scss]").removeAttr("lang");

    return $.html();
  };
});