console.log('Привет');
console.log('Привет');


let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}


for (let i = 7; i <= 22; i++) {
    console.log(i);
}


const obj = {
 "Коля": '200',
 "Вася": '300',
 "Петя": '400'
};

for (let key in obj) {
 console.Log(`${key} — зарплата ${obj[key]} долларов`);
}

let n = 1000;
let num = 0;

while (n >= 50) {
 n = n / 2;
 num++;
}

console.Log(`Итоговое число: ${n}`);
console.Log(`Количество итераций: ${num}`);



const firstFriday = 3;
let currentDate = firstFriday;

while (currentDate <= 31) {
 console.Log(`Сегодня пятница, ${currentDate}-е число. Необходимо подготовить отчет.`);
 currentDate += 7;
}

