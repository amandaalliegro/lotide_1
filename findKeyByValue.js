//ASSERT EQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else (console.log(`Assertion Failed: ${actual} !== ${expected}`));

};

// FUNCTION IMPLEMENTATION
const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const amysHouse = {
  hoomans: "Amanda e Luiz",
  queen: "amy"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(amysHouse, "Amanda e Luiz"), "hoomans");
assertEqual(findKeyByValue(amysHouse, "amy"), "queen");
assertEqual(findKeyByValue(amysHouse, "amy"), "hoomans");