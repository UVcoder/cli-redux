// const appCliPath = require("../node-fnc/get-source-path")();
const path = require("path");
const _ = require("lodash");
const fs = require("fs-extra");

const getValidCssName = require("../node-fnc/get-valid-css-name");
const readFile = require("../node-fnc/read-file");
const writeFile = require("../node-fnc/write-file");
const renameFile = require("../node-fnc/rename-file");
// const getNowId = require("../node-fnc/get-now-id");
// const getRelativePath = require("../node-fnc/get-relative-path");

const toCamel = async (filePath, cmd) => {
  try {
    const destPath = getDestPath(filePath);
    console.log(`receive requested css file at ${destPath}`.cyan);
    checkIsScssOrCss(destPath);

    const data = await readFile(destPath);
    const cssCamelData = await getCssCamelData(data);
    const renamePath = getOutPutPath(destPath);
    await writeFile(destPath, cssCamelData);
    await renameFile(destPath, renamePath);
    console.log(`updated to camel style at ${renamePath}`.cyan);
  } catch (error) {
    throw error;
  }
};

function checkIsScssOrCss(filePath) {
  const ext = path.extname(filePath).toLocaleLowerCase();
  if (ext !== ".scss" && ext !== ".css") {
    console.log(`cant not supported "${ext}" file!`.red);
    process.exit(1);
  }
}

function getOutPutPath(oldPath) {
  const pathDir = path.dirname(oldPath);
  const ext = path.extname(oldPath);
  const name = path.basename(oldPath).replace(ext, "");
  // console.log("rename path", oldPath, pathDir, name, ext);
  return path.join(`${pathDir}/${name}.module${ext}`);
}

function getDestPath(filePath) {
  return path.join(`./src/${filePath}`);
}

function getCssCamelData(data) {
  return new Promise((resolve, reject) => {
    const reg = /(\..+\{)/g;

    const newData = data.replace(reg, (match, content) => {
      const css = getValidCssName(content);
      return css ? `.${css} {` : match;
    });
    // console.log("new data from simple class", newData);
    resolve(newData);
  });
}

module.exports = toCamel;
