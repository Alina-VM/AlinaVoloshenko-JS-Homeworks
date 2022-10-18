//task2
console.log('Voloshenko');

//task3
let x = 33;
let y = 'cat';
alert(`${x}, ${y}`)
x = 'cat';
alert(`${x}, ${y}`)

//task4
let profile = {
   firstName: 'Alina',
   age: 35,
   customer: true,
   ltv: undefined,
   discount: null
}

//task5
let isAdult;
isAdult = confirm('are you 18?');

//task6
const firstName = 'Alina';
const lastName = 'Voloshenko';
const Group = 'Lv-722.JS CORE';
const birthYear = 1987;
let maritalStatus = true;
console.log(birthYear, maritalStatus, firstName, lastName, Group)
let _first = null;
let _second = undefined;
console.log(typeof(_first))
console.log(typeof(_second))

//task7
const login = prompt(`Enter your name, please`);
const email = prompt(`Enter your e-mail, please`);
const password = prompt(`Enter your password, please`);
alert(`Dear ${login}, your email is ${email}, your password is ${password}`)

//task8
let hour = 3600;
let day = hour * 24;
let mounth = day * 30;
document.write(`There are ${hour} seconds per hour, ${day} seconds per day, ${mounth} seconds per mounth`)
