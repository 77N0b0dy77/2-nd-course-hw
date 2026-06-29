function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b) {
    return a < b ? a : b;
}



function checkEvenOdd(n) {
 if (n% 2 === 0) {
 return 'Число четное';
} else {
 return 'Число нечетное';
}
}


 function printSquare(num) {
  console.log(num ** 2);
}


function getSquare(num) {
  return num ** 2;
}


function correctAge(age) {
  const numAge = Number(age);

  if (numAge < 0) {
    return 'Вы ввели неправильное значение';
  } else if (numAge >= 13) {
    return 'Добро пожаловать!';
  } else {
    return 'Привет, друг!';
  }
}

alert(correctAge(prompt("Сколько вам лет?")));


function multiplyOrError(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Одно или оба значения не является числом';
  }

  return num1 * num2;
}

function cubeOfNumber() {
    const input = prompt('Введите число:');

    if (isNaN(input)) {
        return 'Переданный параметр не является числом';
    } else {
        const number = parseFloat(input);
        if (isNaN(number) || !Number.isFinite(number)) {
            return 'Переданный параметр не является числом';
        }
        const result = number ** 3;
        return `n в кубе равняется ${result}`;
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`n = ${i}:`, cubeOfNumber());
}




const circle1 = {
 radius: 5,
 
 getArea: function() {
 return Math.PI * this.radius ** 2;
},
 
 getPerimeter: function() {
 return 2 * Math.PI * this.radius;
}
};


const circle2 = {
 radius: 10,
 
 getArea: function() {
 return Math.PI * this.radius ** 2;
},
 
 getPerimeter: function() {
 return 2 * Math.PI * this.radius;
}
};
