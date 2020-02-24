const path = require("path");
const readFile = require("../node-fnc/read-file");

const test = async (filePath, cmd) => {
  const data = await readFile(getDestPath(filePath));
  console.log("read data", data);
};

function getDestPath(filePath) {
  return path.join(`./src/${filePath}`);
}

module.exports = test;
