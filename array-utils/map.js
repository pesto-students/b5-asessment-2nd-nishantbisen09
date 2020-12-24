const map = function (callback) {
  const modifiedItems = [];
  for (let i = 0; i < this.length; i++) {
    const modifiedItem = callback(this[i], i, this);
    modifiedItems.push(modifiedItem);
  }
  return modifiedItems;
};

module.exports = map;
