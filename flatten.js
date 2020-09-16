// eqArrays

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};
// assertArraysEqual

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    
  }
};
const flatten = function (array){
  const output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        output.push(item);
      }
    } else {
      output.push(element);
    }
  }
  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]