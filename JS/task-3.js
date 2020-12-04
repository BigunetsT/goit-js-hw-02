const findLongestWord = function (string) {
  const stringArr = string.split(' ');
  let LongestWord = stringArr[0];

  for (let i = 1; i < stringArr.length; i += 1) {
    if (stringArr[i].length > LongestWord.length) {
      LongestWord = stringArr[i];
    }
  }
  return LongestWord;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
