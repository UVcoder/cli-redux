const createAll = async (ReduxPath, cmd) => {
  console.log("path".cyan, ReduxPath);
  console.log("cmd", cmd.template);
  const path = require("path");
  // ReduxPath is require no need to check;
  const isTemplate = cmd.template ? true : false;
  const appCliPath = getCliPath();
  await modifyFile(`${path.join(appCliPath, "/templates/selector.js")}`, "components/redux.selector", "", "");
};
function getCliPath() {
  //c://user/aer
  return `${require("path").dirname(require.main.filename)}`;
}
function copyAllFiles(sourceFolder, desFolder) {
  const fs = require("fs-extra");
  return new Promise((resolve, reject) => {
    fs.copySync(sourceFolder, desFolder);
    resolve();
  });
}

function modifyFile(sourcePath, outPath, fromString, toString) {
  const fs = require("fs-extra");
  const replace = require("replace");
  if (!fs.existsSync(sourcePath)) {
    console.log(`can't find ${sourcePath}`.red);
    process.exit(1);
  }
  return new Promise((resolve, reject) => {
    fs.readFile(sourcePath, "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }
      fs.outputFile(sourcePath, data, err => {
        if (err) throw err;

        // replace filename
        replace({
          regex: fromString,
          replacement: toString,
          paths: [`${outPath}`],
          recursive: false,
          silent: true
        });
        resolve();
      });
    });
  });
}

module.exports = createAll;
