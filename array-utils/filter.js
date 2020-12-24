const filter = function (callback) {
  const filteredItems = [];
  for (let i = 0; i < this.length; i++)
    if (callback(this[i], i, this)) filteredItems.push(this[i]);
  return filteredItems;
};

module.exports = filter;
