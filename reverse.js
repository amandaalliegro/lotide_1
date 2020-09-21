// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else (console.log(`Assertion Failed: ${actual} !== ${expected}`));

};

// REVERSE STRING
const reverse = function(str) {
  const splitString = str.split("");
  const reverse = splitString.reverse();
  const join = reverse.join("");
  return join;
};

console.log(reverse("Hello!"))

module.exports = reverse;