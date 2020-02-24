const modifyFile = require("../node-fnc/modify-file");
const appCliPath = require("../node-fnc/get-source-path")();
const path = require("path");
const _ = require("lodash");
const escapePathName = require("../node-fnc/escape-pathname");

const createReact = async (userPath, cmd) => {
  userPath = escapePathName(userPath);
  console.log(`received requested file at ./src/${userPath}`.cyan);

  // const style = cmd.css?"css":"scss";
  const { css = false, styleModule = false, single = false, reactClass = false } = cmd;
  const styleTail = getStyleTail(styleModule, css);
  const includeStyle = !single;

  await addComponent(reactClass, userPath, includeStyle, styleTail, styleModule);

  if (!single) {
    await addStyle(userPath, styleTail);
  }

  console.log("files created!".cyan);
  console.log("your option: ".cyan, { css, styleModule, single, reactClass });
};

function addStyle(userPath, styleTail) {
  const destPath = getDestPath(userPath, `-${styleTail}`);
  const name = _.camelCase(getDestName(userPath));
  return modifyFile(reactPath.style, destPath, ["___className"], [name]);
}

function addComponent(isClass, userPath, includeStyle, styleTail, isModule) {
  const destPath = getDestPath(userPath, "-component.jsx");
  const name = getDestName(userPath);
  const nameUp = _.upperFirst(_.camelCase(name));
  const nameCamel = _.camelCase(name);
  const com = isClass ? "class" : "function";
  const iModule = isModule ? "style from" : "";
  const quoteLeft = isModule ? "{" : `"`;
  const quoteRight = isModule ? "}" : `"`;
  const style = isModule ? "style." : "";
  if (includeStyle) {
    return modifyFile(
      reactPath[com],
      destPath,
      [
        "___ClassName",
        "___classNameCamel",
        "___className",
        "___cssTail",
        "___module",
        "___quoteLeft",
        "___quoteRight",
        "___style"
      ],
      [nameUp, nameCamel, name, styleTail, iModule, quoteLeft, quoteRight, style]
    );
  } else {
    return modifyFile(
      reactPath[com],
      destPath,
      [
        `import ___module "./___className-___cssTail";`,
        `className=___quoteLeft___style___classNameCamel___quoteRight`,
        "___ClassName",
        "___classNameCamel",
        "___className",
        "___module",
        "___quoteLeft",
        "___quoteRight",
        "___style"
      ],
      ["", "", nameUp, nameCamel, name, iModule, quoteLeft, quoteRight, style]
    );
  }
}

function getStyleTail(module, css) {
  if (module) {
    if (css) {
      return "styles.module.css";
    } else {
      return "styles.module.scss";
    }
  } else {
    if (css) {
      return "styles.css";
    } else {
      return "styles.scss";
    }
  }
}
const reactPath = {
  class: `${path.join(appCliPath, "/templates/react/class")}`,
  function: `${path.join(appCliPath, "/templates/react/function")}`,
  style: `${path.join(appCliPath, "/templates/react/style")}`
};
function getDestPath(filePath, tailing) {
  const folder = filePath.split("/");
  const name = folder[folder.length - 1].toLocaleLowerCase();
  return path.join(`./src/${filePath}/${name}${tailing}`);
}
function getDestName(path) {
  const folder = path.split("/");
  return folder[folder.length - 1].toLocaleLowerCase();
}
module.exports = createReact;
