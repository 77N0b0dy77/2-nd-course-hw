const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
 console.log(array[i]);
 if (array[i] === 10) {
 break;
}
}

const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);
console.log(index); // Выведет: 2


const array = [1, 3, 5, 10, 20];
console.log(array.join(''));


let matrix =;

// Внешний цикл: создаёт подмассивы (строки)
for (let i = 0; i < 3; i++) {
  matrix[i] =; // Создаём новый подмассив для текущей строки
  
  // Внутренний цикл: заполняем подмассив элементами
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = 1; // Каждый элемент равен 1
    // Альтернативно можно использовать метод push:
    // matrix[i].push(1);
  }
}

console.log(matrix); // Выведет: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]


let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr); // [1, 1, 1, 2, 2, 2]


const arr = [9, 8, 7, 'a', 6, 5];

// Фильтруем массив, оставляя только числа, затем сортируем по возрастанию
const sortedArr = arr.filter(item => typeof item === 'number').sort((a, b) => a – b);

console.Log(sortedArr);


const array = [9, 8, 7, 6, 5];

const userInput = prompt('Угадай число из массива [9, 8, 7, 6, 5]:');

if (array.Includes(parseInt(userInput))) {
 alert('Угадал');
} else {
 alert('Не угадал');
}


const str = 'abcdef';
const reversedStr = str.Split('').Reverse().Join('');
console.Log(reversedStr);


const arr = [[1, 2, 3], [4, 5, 6]];
const result = arr.flat(); // [1, 2, 3, 4, 5, 6]
console.log(result);

// Создаём массив с произвольными числами от 1 до 10
const array = [3, 7, 1, 9, 4, 6, 2, 8, 5, 10];

// Перебираем массив с помощью цикла for
for (let i = 0; i < array.Length; i++) {
 // Проверяем, есть ли следующий элемент (чтобы не выйти за границы массива)
 if (i + 1 < array.Length) {
 // Выводим в консоль сумму текущего и следующего элементов
 console.Log(`Сумма элементов ${array[i]} и ${array[i + 1]}: ${array[i] + array[i + 1]}`);
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
const originalArray =;
for (let i = 0; i < 10; i++) {
  // Генерируем случайное число от 0 до 10 (не включая 10) и преобразуем в целое
  const randomNumber = Math.floor(Math.random() * 10);
  originalArray.push(randomNumber);
} 

// Создаём массив для чётных значений
const evenArray =; 

// Проходим по исходному массиву и добавляем чётные числа в новый
for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 === 0) {
    evenArray.push(originalArray[i]);
  }
}

// Выводим оба массива в консоль
console.log('Исходный массив:', originalArray);
console.log('Массив с чётными значениями:', evenArray);


// Создаём массив из 6 элементов
const arr =;

// Заполняем массив случайными целыми числами от 1 до 10
for (let i = 0; i < 6; i++) {
  // Формула: Math.random() * (max - min + 1) + min
  // Чтобы получить целое число:
  const randomInt = Math.floor(Math.random() * 10) + 1;
  arr.push(randomInt);
}

// Выводим массив в консоль
console.log(arr);

// Находим среднее арифметическое
const sum = arr.reduce((acc, num) => acc + num, 0);
const average = sum / arr.length;

// Выводим результат в консоль
console.log('Среднее арифметическое:', average);

