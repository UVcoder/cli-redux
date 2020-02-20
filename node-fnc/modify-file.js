const fs = require("fs-extra");
// const replace = require("replace");
const replaceArray = require("./replace-array");

function modifyFile(sourcePath, outPath, find, replace) {
  if (!fs.existsSync(sourcePath)) {
    console.log(`can't find ${sourcePath}`.red);
    process.exit(1);
  }
  if (fs.existsSync(outPath)) {
    console.log(`file is already existed at "${outPath}"`.red);
    process.exit(1);
  }
  return new Promise((resolve, reject) => {
    fs.readFile(sourcePath, "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }
      var result = replaceArray(data, find, replace);
      fs.outputFile(outPath, result, err => {
        if (err) throw err;
      });
      resolve();
    });
  });
}

module.exports = modifyFile;
