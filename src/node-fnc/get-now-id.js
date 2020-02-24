function getNowId() {
  return new Date().getTime().toString(32);
}
module.exports = getNowId;
