const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else (console.log(`Assertion Failed: ${actual} !== ${expected}`));

};

const countLetters = function(sentence) {
  const output = {};
  for (let char of sentence.split(" ").join("")) {
    //if I already have this key assigned to my object, then I increment it by 1...
    if (output[char]) {
      output[char] += 1;
      //else, I include one new key, and it's value is equal 1
    } else {
      output[char] = 1;
    }
  }
  return output;

};

console.log(countLetters("LHL"));
console.log(countLetters("blueberry muffins for me, blueberry muffins for you, blueberry muffins for everybody!"));