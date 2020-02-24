const _ = require("lodash");
function titleCase(str) {
  return _.upperFirst(_.camelCase(str));
}
module.exports = titleCase;
