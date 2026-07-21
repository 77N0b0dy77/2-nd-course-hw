//1
let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr);

//2
function filterByStarting(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}
const stringsArray = ['APPLE', 'banAna', 'ApRiCoT', 'orange', 'AVAcaDO', 'GraPe'];

const result = filterByStarting(stringsArray, 'ap');

console.log(result);

//3
let number = 32.58884;

let roundeDown = Math.floor(number);
let roundeUp = Math.ceil(number);
let roundeNearest = Math.round(number);
console.log(`Округление числа ${number}: до меньшего целого ${roundeDown} ; до большего целого ${roundeUp}; до ближайшего целого ${roundeNearest}.` );

//4
const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log(`Минимальное значение ${minValue} и максимальное значение ${maxValue}`);

//5
function generateRandomNumber() {
    const randomNumber =  Math.floor(Math.random() * 10) + 1;

    return randomNumber;

}
const resut = generateRandomNumber();

console.log(resut);

//6
function generateRandomArray(num) {
    if (!Number.isInteger(num) || num <= 0) {
        return 'Введите любое число больше 0';
    }

    const length = Math.floor(num / 2);
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * num);
        randomArray.push(randomNumber);
    }
    return randomArray
}

const result = generateRandomArray(40);
console.log(result);


//7
function getRandomInRange(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'Введите 2 числа';
    }
    if (min > max) {
        return 'Первое число должно быть больше второго';
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber;

}

const result = getRandomInRange(5, 20);
console.log(result);

//8
const currentDate = new Date();
const options = {year: 'numeric', month: 'long', day: 'numeric'};

console.log(currentDate.toLocaleDateString('ru-RU', options));

//9
const currentDate = new Date();
const futureDate = new Date(currentDate);

futureDate.setDate(currentDate.getDate() + 73);

const options = { year: 'numeric', month: 'long', day: 'numeric'};
const formatDate = futureDate.toLocaleDateString('ru-Ru', options);

console.log(formatDate);

//10
function formatDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", 
                    "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    
    const weekdays = ["воскресенье", "понедельник", "вторник", 
                      "среда", "четверг", "пятница", "суббота"];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const dateString = `Дата: ${day} ${month} ${year} — это ${weekday}.`;
    const timeString = `Время: ${hours}:${minutes}:${seconds}`;

    return `${dateString}\n${timeString}`;
}

const currentDate = new Date();
console.log(formatDate(currentDate));