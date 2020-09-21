const assertEqual = require('./assertEqual');

// HEAD FUNCTION
const head = function(array) {
  return array.shift(); // method that returns the first element of an array
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;