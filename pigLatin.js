const pigLatin = function(str) {
  str = str.split(' ');
  for(let i = 0;i < str.length; i++) {
    if(/[a-zA-Z]/.test(str[i])) {
      str[i] = str[i].slice(1) + str[i][0] + 'ay';
    } 
  }
  return str.join(' ');
}
console.log(pigLatin('Pig latin is cool'));