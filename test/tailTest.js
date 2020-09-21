const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//TEST CODE
console.log(assertEqual(tail([1, 2, 3, 4, 5, 6]).length,5));
console.log(assertEqual(tail([1]).length,0));