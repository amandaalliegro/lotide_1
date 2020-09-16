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

// ACTUAL FUNCTION
const middle = function(array) {
  // array to be filled up
  const output = [];
  // if the length of the array is bigger than 3 elements AND it is an odd number...
  if (array.length >= 3 && array.length % 2 !== 0) {
    // the array 'output' will receive the middle element
    console.log("odd" + output.push(array[(array.length - 1) / 2]));
    // if the length of the array is bigger than 3 elements...
  } else if (array.length >= 3) {
    // the array 'output' will receive the middle two elements
    console.log("even" + output.push(array[array.length / 2 - 1], array[array.length / 2]));
  }
  return output;
};


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]