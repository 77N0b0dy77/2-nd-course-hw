//1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);

//2

function isPositive(number) {

    return number > 0;
}

function isMale(person) {

    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {

        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));

//3

function printDate() {
    const currentDate = new Date();
    console.log(currentDate.toString());
}

let secondsPassed = 0;
const interval = setInterval(() => {
    printDate();
    secondsPassed += 3;

    if (secondsPassed >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }
}, 3000);

//4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


//5


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi(`Глеб`));