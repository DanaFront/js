// Ничего не работает( я не знаю почему

// Задача 1

function compare(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght) {
        return false;
    }

    for (let i = 0; i < arr1.lenght; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

let ar1 = [ 1, 2, 3 ];
let ar2 = [ 1, 2, 3, 4 ];

console.log(compare(ar1, ar2));


// Задача 2

let arr3 = [1, 6, 2];

function range(el1, el2, el3) {
    let arr4 = [];
    for (let j = el1; j < el2; j += el3) {
        arr4.push(i);
    }
    return arr4;
}

console.log(range(arr3));


// Задача 3

let student = {
    SecondName: 'Маханова',
    Name: 'Дана',
    Age: 29,
    Intrests: ['верстка', 'походы', 'книги'],
    Education: 'ЮУрГУ',
}

function stud(obj) {
    for (let name in obj) {
        console.log(name + ': ' + obj[name]);
    }
    return;
}

console.log(stud(student));