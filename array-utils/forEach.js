const forEach = function (callback) {
  for (let i = 0; i < this.length; i++) callback(this[i], i, this);
};

module.exports = forEach;
