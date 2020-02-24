function escapePathName(path) {
  const regex = /[<>:"\\|\?\*;'\.\`\+\$ ]/gi;
  return path.replace(regex, "-");
}
module.exports = escapePathName;
