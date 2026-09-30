//Задача 1.1 - Конвертер температуры
function convertEMPERATURE (celsius, toFahrenheit) {
    if (toFahrenheit === true) {
    return (celsius * 9/5) + 32
    }
    else {
        return (celsius - 32) * 5/9
    }
}
console.log(convertEMPERATURE(20, true));
console.log(convertEMPERATURE(68, false));

//Задача 1.2 - Проверка пароля
function validatePassword(password) {
    if (password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
        return true;
    } else {
    return false;}
}
console.log(validatePassword("b3fynefih",));
console.log(validatePassword(10,));

