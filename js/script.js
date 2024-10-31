// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
console.log('Variables')

let firstName = 'Jesus Ivan'
let lastName = 'Tamay Balam'
let Country = 'Mexico'
let City = 'Playa del carmen'
let isMarried = false
let year = 2024

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof Country);
console.log(typeof City);
console.log(typeof isMarried);
console.log(typeof year);

console.log('comprobar datos')
// Check if type of '10' is equal to 10 
console.log('10' === 10);

// Check if parseInt('9.8') is equal to 10 
console.log(parseInt('9.8') === 10);

console.log('3 datos que retornen verdadero')
// Boolean value is either true or false. 
// Write three JavaScript statements which provide truthy value. 

console.log(10 === 10);
console.log(10 < 11);
console.log('A' == 'A');

console.log('3 datos que retornen falso')
// Write three JavaScript statements which provide falsy value. 
console.log(firstName == lastName);
console.log(10 > 20);
console.log(2 === '2');


// 4 > 3 true
// 4 >= 3 true
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' false
// 4 == '4’ true
// 4 === '4’ false
console.log('comprobar cual es falso y cual es verdadero')

console.log(4 > 3 ); 
console.log(4 >= 3 ); 
console.log(4 < 3 ); 
console.log(4 <= 3 ); 
console.log(4 == 4 ); 
console.log(4 === 4 ); 
console.log(4 != 4 ); 
console.log(4 !== 4 ); 
console.log(4 != '4' ); 
console.log(4 == '4' ); 
console.log(4 === '4' ); 

console.log('funciones para el tiempo')
// Use the Date object to do the following activities 
// What is the year today? 
const a = new Date();
console.log(a.getFullYear());

// What is the month today as a number? 
const v = new Date();
console.log(v.getMonth());

// What is the date today? 
const c = new Date();
console.log(c.getDate());

// What day is today as a number? 
const d = new Date();
console.log(d.getDay());

// What are the hours now? 
const e = new Date();
console.log(e.getHours());

// What are the minutes now? 
const f = new Date();
console.log(f.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970, to now. 
const g = new Date();
console.log(g.getTime());

// Write a script that prompts the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 
console.log('calcular area de triangulo');

let b = prompt('inserte numero de la base');
let h = prompt('inserte numero de la altura');

console.log(0.5 * b * h);

// Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c) 

console.log('calcular perimetro de triangulo');

let a1 = parseInt(prompt('lado a'));
let b1 = parseInt(prompt('lado b'));
let c1 = parseInt(prompt('lado c'));
let perimetro = a1 + b1 + c1;
console.log(perimetro);