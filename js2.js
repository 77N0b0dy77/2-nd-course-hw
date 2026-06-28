let password = 'пароль123';
let userPassword = prompt('Введите пароль');

if (password === userPassword) {
	alert ('Пароль введен верно');
} else {
	alert ('Пароль введен неправильно');
} 

let c = 2;
if (c > 0 && c < 10) {
	alert("Верно");
} else {
	alert("Неверно");
}

let d = 11;
let e = 203;

if (d > 100 || e > 100) {
	alert("Верно");
} else {
	alert("Неверно");
}

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(parseInt(a) + parseInt(b));


let monthNumber = 13;
if (monthNumber > 13) {
 alert("Ошибка: номер месяца не может быть больше 13.");
} else {
 switch (monthNumber) {
 case 12:
 case 1:
 case 2:
 alert("Сезон: зима");
 break;
 case 3:
 case 4:
 case 5:
 alert("Сезон: весна");
 break;
 case 6:
 case 7:
 case 8:
 alert("Сезон: лето");
 break;
 case 9:
 case 10:
 case 11:
 alert("Сезон: осень");
 break;
 default:
 alert("Некорректный номер месяца.");
}
}