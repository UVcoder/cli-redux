const fs = require("fs-extra");
function renameFile(filePath, renamePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      console.log(`file not found at ${filePath}`.red);
      process.exit(1);
      // reject(`file not found at ${filePath}`.red);
    }
    fs.rename(filePath, renamePath, err => {
      if (err) {
        console.log(`something went wrong with nodejs`.red, err);
        process.exit(1);
      }
      resolve();
    });
  });
}
module.exports = renameFile;
