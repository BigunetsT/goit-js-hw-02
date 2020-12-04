const calculateEngravingPrice = function (message, pricePerWord) {
  const messageArr = message.split(' ');
  let countOfWords;
  let EngravingPrice;
  for (let i = 0; i < messageArr.length; i += 1) {
    countOfWords = i + 1;
  }
  EngravingPrice = countOfWords * pricePerWord;
  return EngravingPrice;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
