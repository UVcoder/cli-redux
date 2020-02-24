const fs = require("fs-extra");
function writeFile(filePath, data, message = "") {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      console.log(`file not found at ${filePath}`.red);
      process.exit(1);
      // reject(`file not found at ${filePath}`.red);
    }
    fs.outputFile(filePath, data, err => {
      if (err) {
        console.log("something went wrong with nodejs evn:".red, err);
        process.exit(1);
      }
      message ? console.log(message.cyan) : null;
      resolve();
    });
  });
}
module.exports = writeFile;
