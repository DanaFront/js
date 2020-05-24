// Задача 1

let a = {
    name: 'static',
    count: 0
}

function foo(obj, count, num) {
    let res = [];
    let obj1 = {...obj};
    for (let i = 0; i < num; i++) {
        obj1.count = i; // Что тут надо, я не поняла(
        res.push(obj1);
    }
    return res;
}

console.log(foo(a, 'count', 10));


// Задача 2

function counter(){
	let i = 0;
	
	return function(){
		return ++i;
	}		
}

let res1 = counter();
console.log(counter());


// Задача 3

let student = {
    SecondName: 'Маханова',
    Name: 'Дана',
    Age: 29,
    Intrests: ['верстка', 'походы', 'книги'],
    Education: 'ЮУрГУ',
}

function info() {
    return this.Name + " " + this.SecondName + ". " + this.Age + " лет. Интересы: " + this.Intrests + ". Учится в " + this.Education;
}

student.info = info;
console.log(student.info());


// Задача 4

function fact(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

console.log(fact(10));


// Задача 5

let arr = [ 
    { 'price' : 10, 'count' : 2 }, 
    { 'price' : 5, 'count' : 5},  
    { 'price' : 8, 'count' : 5 }, 
    { 'price' : 12, 'count' : 4 }, 
    { 'price' : 8, 'count' : 4},
];

arr.sort(function(item1, item2) {
    return item1.price - item2.price;
});

console.log(arr);