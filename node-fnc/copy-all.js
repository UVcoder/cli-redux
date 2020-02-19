function copyAllFiles(sourceFolder, desFolder) {
  const fs = require("fs-extra");
  return new Promise((resolve, reject) => {
    fs.copySync(sourceFolder, desFolder);
    resolve();
  });
}
module.exports = copyAllFiles;
