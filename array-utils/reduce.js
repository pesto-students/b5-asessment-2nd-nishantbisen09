const reduce = function (reducerFunction, initialValue) {
  if (!this.length) return initialValue;
  let updatedAcc = initialValue;
  for (let i = 0; i < this.length; i++) {
    updatedAcc = initialValue + reducerFunction(updatedAcc, this[i]);
  }
  return updatedAcc;
};

module.exports = reduce;
