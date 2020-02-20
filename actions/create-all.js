const modifyFile = require("../node-fnc/modify-file");
const appCliPath = require("../node-fnc/get-source-path")();
const path = require("path");
// const _ = require("lodash");
const titleCase = require("../node-fnc/title-case");

const createRedux = async (userPath, cmd) => {
  console.log("requested path".cyan, userPath);
  // console.log("cmd", cmd.template);

  // userPath is require no need to check;
  // const isTemplate = cmd.template ? true : false;
  await createAction(userPath);
  await createReducer(userPath);
  await createSelector(userPath);
  await createType(userPath);
  await createUtil(userPath);
  console.log("files were created!".cyan);
};

function createAction(path) {
  const desPath = getDestPath(path, "action");
  const name = getDestName(path);
  const typeName = titleCase(`${name}Type`);
  const actionName = titleCase(`${name}Toggle`);
  const source = reduxPath.action;
  return modifyFile(source, desPath, ["___typeCamel", "___typeName", "___actionName"], [typeName, name, actionName]);
}
function createReducer(path) {
  const desPath = getDestPath(path, "reducer");
  const name = getDestName(path);
  const typeCamel = titleCase(`${name}Type`);
  const typeName = name;
  const reduceName = titleCase(`${name}Reducer`);
  const source = reduxPath.reducer;
  return modifyFile(
    source,
    desPath,
    ["___typeCamel", "___TypeName", "___ReducerName"],
    [typeCamel, typeName, reduceName]
  );
}
function createSelector(path) {
  const desPath = getDestPath(path, "selector");
  const name = getDestName(path);
  const selectorName = titleCase(`${name}GetState`);
  const source = reduxPath.selector;
  return modifyFile(
    source,
    desPath,
    ["___baseState", "___fileName", "___selectorName"],
    ["baseState", name, selectorName]
  );
}
function createType(path) {
  const desPath = getDestPath(path, "type");
  const name = titleCase(`${getDestName(path)}Type`);
  const source = reduxPath.type;
  return modifyFile(source, desPath, ["___type"], [name]);
}
function createUtil(path) {
  const desPath = getDestPath(path, "util");
  const source = reduxPath.util;
  return modifyFile(source, desPath, [""], [""]);
}

const reduxPath = {
  action: `${path.join(appCliPath, "/templates/redux/action.js")}`,
  reducer: `${path.join(appCliPath, "/templates/redux/reducer.js")}`,
  selector: `${path.join(appCliPath, "/templates/redux/selector.js")}`,
  type: `${path.join(appCliPath, "/templates/redux/type.js")}`,
  util: `${path.join(appCliPath, "/templates/redux/util.js")}`
};
function getDestPath(path, tailing) {
  const folder = path.split("/");
  const name = folder[folder.length - 1].toLocaleLowerCase();
  return `./src/${path}/${name}.${tailing}.js`;
}
function getDestName(path) {
  const folder = path.split("/");
  return folder[folder.length - 1].toLocaleLowerCase();
}
module.exports = createRedux;
