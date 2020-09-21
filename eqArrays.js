const assertEqual = require('./assertEqual');

// eqArrays

const eqArrays = function(array1, array2) {
  // if the number of elements inside the arrays are not the same, return false
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      // loops through the array and compares each index to the index of the other array. If they are not the same, returns false.
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;