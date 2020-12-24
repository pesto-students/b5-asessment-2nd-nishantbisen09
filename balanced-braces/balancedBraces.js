const balancedBraces = (inputString) => {
  const stack = [];
  const inputStringArray = inputString.split("");
  const openBrackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closedBrackets = {
    "}": 1,
    "]": 1,
    ")": 1,
  };
  let flag = 0;
  inputStringArray.forEach((character) => {
    openBrackets[character]
      ? stack.push(character)
      : closedBrackets[character] && openBrackets[stack.pop()] !== character
      ? (flag = 1)
      : null;
  });

  return stack.length === 0 && !flag;
};

module.exports = balancedBraces;
