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

//EQOBJECTS

const eqObjects = function(object1, object2) {
  //first, verify if I have the same number of elements...
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (!(object1[key] === object2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual,expected)){
    console.log("Assertion Passed:", actual, "===", expected);
  } else {
    console.log(" Assertion Failed:", actual, "!==", expected);
  }
  
  return console.log(`Example label: ${inspect(actual)}`);
};


//✅✅✅ Assertion Passed: [object Object] === [object Object]
//🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // => should PASS
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // => should FAIL
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // => should PASS
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // => should FAIL
assertObjectsEqual({ a: "1" }, { a: "1" }); // => should PASS