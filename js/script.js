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

//Задача 1.3 - Калькулятор с операциями
function calculate(a,b, operation) {
    if (operation === "+") {
        return a + b;
    }
    else if (operation === "-") {
        return a - b;
    }
    else if (operation === "*") {
        return a * b;
    }
    else if (operation === "/") {
        return a / b;
    }
}
console.log(calculate(50, 5, "+"));
console.log(calculate(50, 5, "-"));
console.log(calculate(50, 5, "*"));
console.log(calculate(50, 5, "/"));


//DOM
// Задача 2 - Интерактивный калькулятор
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const buttons = document.querySelectorAll(".operation-btn");
const result = document.querySelector("#result");

let count = 0;

buttons.addEventListener("click", function(num1, num2, operationBtn) {
    if (operationBtn === "+") {
        return num1 + num2;
    }
    else if (operationBtn === "-") {
        return num1 - num2;
    }
    else if (operationBtn === "*") {
        return num1 * num2;
    }
    else if (operationBtn === "/") {
        return num1 / num2;
    }
})
console.log(result);




