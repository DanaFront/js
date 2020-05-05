// Задача 1

let number = prompt("Введите число от 1 до 12");

if (number == 1 || number == 2 || number == 12) {
    console.log("Зима");
} else if (number == 3 || number == 4 || number == 5) {
    console.log("Весна");
} else if (number == 6 || number == 7 || number == 8) {
    console.log("Лето");
} else if (number == 9 || number == 10 || number == 11) {
    console.log("Осень"); 
} else {
    console.log("Неверное число"); 
}


// Задача 2

let length = prompt("Введите длину");
let unit = prompt("Выберите ед.измерения: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр");

if (unit == 1) {
	console.log(parseInt(length) / 10 + " м"); 
} else if (unit == 2) {
	console.log(parseInt(length) * 1000 + " м"); 
} else if (unit == 3) {
    console.log(parseInt(length) + " м"); 
} else if (unit == 4) {
    console.log(parseInt(length) / 1000 + " м"); 
} else if (unit == 5) {
	console.log(parseInt(length) / 100 + " м"); 
} else {
	console.log("Что-то пошло не так"); 
}



// Задача 3

let num = prompt("Введите число от -999 до 999");

if (num == 0) {
    console.log("Нулевое число"); 
} else if (num > 0 && num < 10) {
	console.log("Положительно однозначное число"); 
} else if (num >= 10 && num < 100) {
	console.log("Положительно двузначное число"); 
} else if (num >= 100 && num <= 999) {
    console.log("Положительно трехзначное число"); 
} else if (num < 0 && num > -10) {
	console.log("Положительно однозначное число"); 
} else if (num < -10 && num > -100) {
    console.log("Отрицательно двузначное число"); 
} else if (num <= -100 && num >= -999) {
	console.log("Отрицательное трехначное число"); 
} else {
	console.log("Введено неверное число"); 
}


// Задача 4

for (let i = 1; i <= 100; i++) {
if  (i%3 == 0 && !(i%5) == 0) {
    console.log("Tree");
    continue;
} else if (i%5 == 0 && !(i%3) == 0) {
    console.log("Five");
    continue;
} else if (i%3 == 0 && i%5 == 0) {
    console.log("TreeFive");
    continue;
}
    console.log(i);
}