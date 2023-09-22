
// 1

function twoNumbers(a, b) {
    let result = 0;
    if (a => b) {
        return a;
    }
    else {
        return b;
    }
}
let a = (prompt('Введите первое число'));
let b = (prompt('Введите второе число'));
alert(`Меньшее число: ${twoNumbers(a, b)}`);

// 2

function parity(c) {
    if (c % 2 == 0) {
        return alert(`Число четное`);
    }
    else {
        return alert('Число нечетное');
    }
}
let c = (prompt('Введите число'));
parity(c);

// 3.1

function square(h) {
    h = h ** 2;
}
let h = (prompt(`Введите число, которое нужно возвести в квадрат`));
alert(`${h} в квадрате = ${square(h)}`);

// 3.2

function square(k) {
    let numberSquare = k ** 2;
    return numberSquare;
}
let k = (prompt(`Введите число, которое нужно возвести в квадрат`));
alert(`${k} в квадрате = ${square(k)}`);

// 4 

function young() {
    return alert('Привет, друг!');
}
function old() {
    return alert('Добро пожаловать!');
}
function erorr() {
    return alert('Вы ввели неправильное значение')
}
let age = prompt('Сколько Вам лет?');
if (age < 13 & age > 0) {
    young();
}
else if (age > 12) {
    old();
}
else if (age < 0) {
    erorr();
}

// 5 

function correct(p, y) {
    if (isNaN(p) || isNaN(y)) { 
        return alert('Одно или оба значения не являются числом');
    }
    else {
    return alert(`Произведение = ${p * y}`);
    }
}

let p = (prompt('Введите число')); 
let y = (prompt('Введите число')); 
correct(p, y);

// 6

function cube(v) {
    if (isNaN(v)) {
        return alert('Переданный параметр не является числом');
    }
    else {
        return alert(`${v} в кубе равняется ${v ** 3}`);
    }
}
let v = (prompt('Введите число, которое нужно возвести в куб'));
cube(v);

// 7

function getCircArea() {
    return Math.PI * this.radius * this.radius;
}
function getCircPerimeter() {
    return 2 * Math.PI * this.radius;
}
const circle1 = {
    radius: 3,
    getArea: getCircArea,
    getPerimeter: getCircPerimeter
};
const circle2 = {
    radius: 5,
    getArea: getCircArea,
    getPerimeter: getCircPerimeter
};
alert(`Площадь первого круга: ${circle1.getArea()}, периметр: ${circle1.getPerimeter()}`);
alert(`Площадь второго круга: ${circle2.getArea()}, периметр: ${circle2.getPerimeter()}`);




