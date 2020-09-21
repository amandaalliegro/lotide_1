const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(array) {
  // array to be filled up
  const output = [];
  // if the length of the array is bigger than 3 elements AND it is an odd number...
  if (array.length >= 3 && array.length % 2 !== 0) {
    // the array 'output' will receive the middle element
    output.push(array[(array.length - 1) / 2]);
    // if the length of the array is bigger than 3 elements...
  } else if (array.length >= 3) {
    // the array 'output' will receive the middle two elements
    output.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return output;
};

module.exports = middle;
