const filter = require("../array-utils/filter");
const map = require("../array-utils/map");
const reduce = require("../array-utils/reduce");
const forEach = require("../array-utils/forEach");

describe("Array Utils", () => {
  const arr = [1, 2, 3, 4, 5];
  test("Should properly execute filter", () => {
    Array.prototype.filter = filter;
    expect(arr.filter((item) => item > 3)).toStrictEqual([4, 5]);
  });

  test("Should properly execute forEach", () => {
    Array.prototype.forEach = forEach;
    const result = [];
    arr.forEach((item) => {
      if (item > 3) result.push(item);
    });
    expect(result).toStrictEqual([4, 5]);
  });

  test("Should properly execute Map", () => {
    Array.prototype.map = map;
    expect(arr.map((item) => item * 2)).toStrictEqual([2, 4, 6, 8, 10]);
  });

  test("Should properly execute Map", () => {
    Array.prototype.reduce = reduce;
    expect(
      arr.reduce((acc, currentValue) => acc + currentValue, 0)
    ).toStrictEqual(15);
  });
});
