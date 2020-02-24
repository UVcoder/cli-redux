const path = require("path");
function getRelativePath(filePath, relativePath) {
  const dest = path.join(filePath);
  return path.join(path.dirname(dest), relativePath);
}

module.exports = getRelativePath;
