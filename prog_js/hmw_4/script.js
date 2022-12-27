"use strict";

/** 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
       Функция должна расчитывать результат операции, исходя из переданного ей знака. 
       Функция должна проверять корректность введенных чисел и знака операции.
       Все аргументы для функции принять от пользователя. */

function calculate(operand1, operand2, sign) {
        operand1 = prompt('Введіть перше число', '');
        sign = prompt('Введіть знак оператора', '');
        operand2 = prompt('Введіть друге число', '');
        
        let result;

        if(operand1 !== '' && operand1 !== null && operand2 !== '' && operand2 !== null) {
          switch (sign) {
            case ('+'): 
             result = +operand1 + +operand2;
             break;
            case ('-'): 
             result = operand1 - operand2;
             break;
            case ('*'): 
             result = operand1 * operand2;
             break;
            case ('/'): 
             result = operand1 / operand2;
             break;
          }
          alert(`Результат дорівнює ${result}`);
        } else {
          alert('Ви ввели некоректне значення');
        }
       }

      //  calculate();

       /** 2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем */


function pushNumberInPower(n, pow) {
  n = prompt('Введіть число', '');
  pow = prompt('Введіть ступінь', '');
  let result;

  while (n === '' || n === null || pow === '' || pow === null) {
    n = prompt('Введіть число', '');
    pow = prompt('Введіть ступінь', '');
    
  } 
  result = n ** pow;
  alert(`Результат дорівнює ${result}`);
}       

// pushNumberInPower();


/** 3.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
        "var  = Math.random();
        alert(computerChoice);".
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера. */

const btn = document.querySelector('#button');

function game() {
  let variants = ["Камень", "Ножницы", "Бумага"];
  let userChoice = prompt(`Обери свій варіант з ${variants}`, '');
  let computerChoice = variants[Math.floor(Math.random() * variants.length)];
         
   let result = (userChoice === computerChoice) ? `Нічия` : (userChoice === "Камень" && computerChoice === "Ножницы") ? `${userChoice} б'є ${computerChoice}, Перекористувач` : (userChoice === "Ножницы" && computerChoice === "Бумага") ? `${userChoice} б'є ${computerChoice}, Переміг користувач` : (userChoice === "Бумага" && computerChoice === "Камень") ? `${userChoice} б'є ${computerChoice}, Переміг користувач` : `${computerChoice} б'є ${userChoice}, Переміг комп` ;

  console.log(computerChoice);
  alert(result);

}

btn.addEventListener('click', () => {
  game();
})

/** 4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл. */        

function fibo() {
  let n = +prompt("Введіть бажану кількість чисел Фібоначчі", "");
      let a = 0;
      let b = 1;
      let fibonacciString = "";

      for (let i = 0; i <= n; i++) {
        let c;
        c = a + b;
        fibonacciString += ` ${a}`;
        a = b;
        b = c;
      }
alert(`Ваша послідовність Фібоначчі ${fibonacciString}`);

}

fibo();