function replaceArray(data, findArray, replaceArray) {
  var replaceString = data;
  var regex;
  for (var i = 0; i < findArray.length; i++) {
    regex = new RegExp(findArray[i], "g");
    replaceString = replaceString.replace(regex, replaceArray[i]);
  }
  return replaceString;
}
module.exports = replaceArray;
