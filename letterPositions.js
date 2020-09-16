const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //if my string is not empty...
    if (!(sentence[i] === " ")) {
      //if I already have the element of my string, I just increment the index position by pushing it...
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        // else, I include a new element AND the index
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));