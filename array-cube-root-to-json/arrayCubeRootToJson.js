const ERROR_MESSAGE = "Invalid Input";

const arrayCubeRootToJson = (arrayOfNumbers) => {
  if (isInputValid(convertStringNumbersToActualNumbers(arrayOfNumbers))) {
    const resultArray = getCubeRootOf(arrayOfNumbers);
    return convertArrayToCustomJson(resultArray);
  } else {
    throw ERROR_MESSAGE;
  }
};

const convertArrayToCustomJson = (arrayOfNumbers) => {
  const resultJson = Object.assign({});
  arrayOfNumbers.forEach(
    (arrayElement) =>
      (resultJson[(arrayElement ** 3).toString()] = arrayElement)
  );
  return resultJson;
};

const getCubeRootOf = (arrayOfNumbers) =>
  arrayOfNumbers.map((numberElement) => Math.cbrt(numberElement));

const isInputValid = (arrayOfNumbers) => {
  if (!Array.isArray(arrayOfNumbers)) return false;
  if (!arrayOfNumbers.every(isNumberArray)) return false;
  return true;
};

const convertStringNumbersToActualNumbers = (array) => {
  return array.map((element) =>
    typeof element === "string" && /^([0-9])+$/g.test(element)
      ? Number(element)
      : element
  );
};

const isNumberArray = (arrayElement) => typeof arrayElement === "number";

module.exports = arrayCubeRootToJson;
