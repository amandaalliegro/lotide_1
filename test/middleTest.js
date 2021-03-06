
const assertArraysEqual = require('../assertArraysEqual');
/*
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
*/
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.strictEqual(middle([1]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(middle(["Hello", "Lighthouse", "Labs"]), ['Lighthouse']); 
  });
});