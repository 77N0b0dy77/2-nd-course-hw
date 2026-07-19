//1
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
 console.log(array[i]);
 if (array[i] === 10) {
 break;
}
}

//2
const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);
console.log(index); // Выведет: 2

//3
const array = [1, 3, 5, 10, 20];
console.log(array.join(' '));


let matrix = ;

// Внешний цикл: создаёт подмассивы (строки)
for (let i = 0; i < 3; i++) {
  matrix[i] = ; // Создаём новый подмассив для текущей строки
  
  // Внутренний цикл: заполняем подмассив элементами
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = 1; // Каждый элемент равен 1
    // Альтернативно можно использовать метод push:
    // matrix[i].push(1);
  }
}

console.log(matrix); // Выведет: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]


let arr = ;

for (let i = 0; i < 3; i++) {
  arr[i] = ; // Создаём подмассив для каждой строки
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 1; // Заполняем подмассив единицами
  }
} 

console.log(arr); // Выведет: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]



const array = [9, 8, 7, 6, 5];

const userInput = prompt('Угадай число из массива [9, 8, 7, 6, 5]:');

if (array.includes(parseInt(userInput))) {
 alert('Угадал');
} else {
 alert('Не угадал');
}


const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);


const arr = [[1, 2, 3], [4, 5, 6]];
const result = arr.flat(); // [1, 2, 3, 4, 5, 6]
console.log(result);

// Создаём массив с произвольными числами от 1 до 10
const array = [3, 7, 1, 9, 4, 6, 2, 8, 5, 10];

// Перебираем массив с помощью цикла for
for (let i = 0; i < array.length; i++) {
 // Проверяем, есть ли следующий элемент (чтобы не выйти за границы массива)
 if (i + 1 < array.length) {
 // Выводим в консоль сумму текущего и следующего элементов
 console.log(`Сумма элементов ${array[i]} и ${array[i + 1]}: ${array[i] + array[i + 1]}`);
}
}


function getSquares(arr) {
  return arr.map(num => num * num);
}

function getWordLengths(arr) {
  return arr.map(word => word.length);
}

// Пример использования:
const words = ['яблоко', 'банан', 'вишня'];
const lengths = getWordLengths(words);
console.log(lengths); // Output: [ 6, 6, 4 ]


function getNegativeNumbers(arr) {
  return arr.filter(number => number < 0);
}


// Создаём исходный массив из 10 значений
const originalArray = ;
for (let i = 0; i < 10; i++) {
  // Генерируем случайное число от 0 до 10 (не включая 10) и преобразуем в целое
  const randomNumber = Math.floor(Math.random() * 10);
  originalArray.push(randomNumber);
} 

// Фильтруем чётные значения и сохраняем в новый массив
const evenArray = originalArray.filter(num => num % 2 === 0);

// Выводим оба массива в консоль
console.log('Исходный массив:', originalArray);
console.log('Массив с чётными значениями:', evenArray);


// Создаём массив из 6 элементов со случайными целыми числами от 1 до 10
const arr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

// Вычисляем среднее арифметическое
const sum = arr.reduce((acc, num) => acc + num, 0);
const average = sum / arr.length;

// Выводим массив и результат в консоль
console.log('Массив:', arr);
console.log('Среднее арифметическое:', average);

