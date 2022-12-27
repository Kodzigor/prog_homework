"use strict"

/* 1. Сделать собственные примеры методов применяемых для массивов. */

let arr1 = ['Odessa', 'Kyiv', 'Lviv', 'Sumy', 'Poltava'];
let arr2 = [5 , 2 , 8 , 41 , 15];

let concatenatedArray = arr1.concat(arr2);
let slicedArray = arr1.slice(2, arr1.length);
arr1.splice(2, 0);
let reversedArray = arr2.reverse();
let sortedArray = arr2.sort((a,b) => a - b);

console.log(concatenatedArray, slicedArray, arr1, reversedArray, sortedArray);


/* 2. Создать функцию для нахождения минимального и максимального элемента массива getMinAndMax(array).  Результат должен выводиться в консоль. */


function getMaxAndMin(array) {
  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length - 1; i++) {
    min = array[i] < min ? array[i] : min ;
    max = array[i] > max ? array[i] : max ;
  }

  console.log(`${min}, ${max}`);
}

let array = [5 , 2 , 8 , -41 , 15];
getMaxAndMin(array);

/**3. Определить элементы массива и вывести их значения, индексы которых лежит в указанном пределе. Предел вводит пользователь. */


function getArrayElements(array) {
  let startPoint = +prompt(`Введіть стартове значення але не більше за ${array.length}`, '');
  let endPoint = +prompt(`Введіть кінцеве значення але не більше за ${array.length}`, '');

  let result = array.slice(startPoint, endPoint);
  console.log(result);
}

let arrayOfNumbers = [10, 45, 7, 9, 65, 45, 55, 13, 11, 45, 12, 96];
// getArrayElements(arrayOfNumbers);

/** 4. Отсортировать массив на 10 чисел в порядке возростания. Значения принимаются от пользователя. Сортировка осушествляется методом sort(). */



function sortArrayOfNumbers() {
  let arrayOfTen = [];

  for (let i = 0; i < 10; i++) {
    let element = prompt("Введіть число", '');
    if (element !== null && element !== '') {
      arrayOfTen.push(+element);
    } else {
      i--;
    }
  }
  console.log(arrayOfTen);
}

// sortArrayOfNumbers();

/** 5. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь. */

function putElement(array) {
  let target = +prompt(`Введіть число`);
  let question = +prompt(`Вкажіть елемент з масиву ${array} після якого вставимо ${target}`);
  let result;
  for(let i = 0; i < array.length; i++ ) {
    if(question === array[i]) {
      let part1 = array.slice(0, i + 1);
      let part2 = array.slice(i + 1, array.length);
      result = part1.concat(target).concat(part2);
      console.log(result);
      break;
    }
  }
}

let numbers = [10, 45, 7, 9, 65, 45, 55, 13, 11, 45, 12, 96];
putElement(numbers);

/** Необходимо получить предпоследний элемент из массива month и вывести его на экран. 
    var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"] */

    let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    console.log(month[month.length - 2]);