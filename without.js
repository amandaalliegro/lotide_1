const without = (source, itemsToRemove) => {
  // array to be filled up
  const output = [];
  for (let element of source) {
    let toInclude = true;
    for (let item of itemsToRemove) {
      if (element === item) {
        toInclude = false;
      }
    }
    if (toInclude) {
      output.push(element);
    }
  }
  return output;
};
// TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]