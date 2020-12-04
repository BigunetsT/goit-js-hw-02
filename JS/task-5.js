const checkForSpam = function (message) {
  const messageArr = message.toLowerCase().split(' ');
  let result = 'false';

  for (const word of messageArr) {
    const newWord = word.match(/\p{L}/gu).join('');
    if (newWord === 'sale' || newWord === 'spam') {
      result = 'true';
      break;
    }
  }

  return result;
};

/*
 * Вызовы функции для проверки работоспособности  реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
