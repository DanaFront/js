// Задача 1

let a = {
    name: 'static',
    count: 0
}

function foo(obj, count, num) {
    let res = []; 
    for (let i = 0; i < num; i++) {
        let obj1 = {...obj};
        obj1.count = i;
        res.push(obj1);
    }
    return res;
}

console.log(foo(a, 'count', 10));


// Задача 2

function counter(max, min) {
    let arr1 = [];
    let b = [];

    for (let i = min; i < max; i++) {
        arr1.push(i);
    }
        function random() {
            let rand = Math.floor(min + Math.random() * (max - min));
            b.push(arr1[rand]);
            return arr1.splice(rand);
        }
 	
}

let res1 = counter(1, 100);
console.log(res1);


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