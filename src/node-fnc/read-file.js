const fs = require("fs-extra");
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      console.log(`file not found at ${filePath}`.red);
      process.exit(1);
      // reject(`file not found at ${filePath}`.red);
    }
    fs.readFile(filePath, "utf8", function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
module.exports = readFile;
