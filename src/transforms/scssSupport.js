const sass = require("sass");
const cherrio = require("cheerio");

function scssSupport(prev) {
  const $ = cherrio.load(prev);

  $("style[lang=scss]").map(function (i, el) {
    // this === el
    return $(this).text(sass.compileString($(el).html()).css);
  });

  return $.html();
}

module.exports = scssSupport;
