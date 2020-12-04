const numbers = [];
let total = 0;
let input;
let message;

const findTotal = function (numbers) {
  if (numbers.length === 1) {
    message = 'Массив пустой';
  } else {
    for (const number of numbers) {
      total += number;
    }
    message = `Общая сумма чисел равна ${total}`;
  }
  return message;
};

do {
  input = prompt('Введите число:');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(Number(input));
} while (input !== null);

console.log(findTotal(numbers));
