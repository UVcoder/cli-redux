const createAll = async (ReduxPath, cmd) => {
  console.log("path".cyan, path);
  console.log("cmd", cmd.template);

  // ReduxPath is require no need to check;
  // const path = `./src/${ReduxPath}`;
  // const appDirectory = `${process.cwd()}/`;
  // const isTemplate = cmd.template ? true : false;
  // console.log("app dir", appDirectory);
  // await copyAllFiles(`${require("path").dirname(require.main.filename)}/templates/redux`, path);
};

// function copyAllFiles(sourceFolder, desFolder) {
//   return new Promise((resolve, reject) => {
//     fs.copySync(sourceFolder, desFolder);
//     resolve();
//   });
// }

module.exports = createAll;
