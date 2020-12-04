const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  return login.length <= 16 && login.length >= 4 ? true : false;
};

const isLoginUnique = function (allLogins, login) {
  let message;
  for (let i = 0; i < allLogins.length; i++) {
    if (allLogins[i] === login) {
      message = false;
      break;
    } else {
      message = true;
    }
  }
  return message;
};

const addLogin = function (allLogins, login) {
  let message;
  if (isLoginValid(login) === false) {
    message = 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else {
    if (isLoginUnique(allLogins, login) === false) {
      message = 'Такой логин уже используется!';
    } else {
      logins.push(login);
      message = 'Логин успешно добавлен!';
    }
  }
  return message;
};

/*
 * Вызовы функции для проверки работоспособности  реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
