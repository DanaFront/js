// Задача 1
let sqrAll = 10 * 100;
let sqr1 = 25 * 15;

let res1 = parseInt(sqrAll / sqr1);
let resg = sqr1 * res1;

let resSq = sqrAll - resg;
console.log(resSq + " м2 осталось незанято");

// Задача 2
let oval1;
let oval2;

oval1 = 600;
oval2 = 15 * 100;

res2 = oval2 - oval1;
console.log("Площадь овального кольца " + res2 + " см2");

// Задача 3
let a = prompt("Число 1");
let b = prompt("Число 2");
let c = prompt("Число 3");

if(a < b && a < c){
	console.log('Самое маленькое число ' + a);
} else if (b < a && b < c) {
	console.log('Самое маленькое число ' + b);
} else {
	console.log('Самое маленькое число ' + c);
}

// Задача 4
let m = prompt("Число 1");
let n = prompt("Число 2");

p = 10 - m;
s = 10 - n;

res3 = Math.abs(p);
res4 = Math.abs(s);

res5 = (res3 < res4) ? m : n;
console.log("Ближе к 10 число " + res5);