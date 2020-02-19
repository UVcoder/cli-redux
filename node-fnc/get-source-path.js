function getSourcePath() {
  // D:\code projects\cli\cli-redux\templates\
  return `${require("path").dirname(require.main.filename)}`;
}

module.exports = getSourcePath();
