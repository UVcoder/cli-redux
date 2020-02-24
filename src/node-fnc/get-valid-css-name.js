const _ = require("lodash");

function extractCssName(name) {
  const match = name.match(/-?[_a-zA-Z]+[_a-zA-Z0-9-]*/g);
  return match ? match.join("") : null;
}

function getValidCssName(name) {
  const camel = _.camelCase(name);
  const extractCss = extractCssName(camel);
  return extractCss ? _.camelCase(extractCss) : null;
}

module.exports = getValidCssName;
