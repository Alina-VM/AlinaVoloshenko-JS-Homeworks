
//task 1
let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);

let res4 = 'x' - 'y';
console.log(res4);
console.log(typeof res4);

//task2
let numCheck = prompt('Put your number here:');
console.log(numCheck % 2 === 0 && numCheck >= 0? true : false);
console.log(numCheck % 7 === 0 ? true : false);

//task3
let array = [];
array[0] = 7;
array[1] = 'cat';
array[2] = true;
array[3] = null;
alert(array.length);
array[4] = prompt('please enter a value here:');
alert(array[4]);
array.shift();
alert(array);

//task4
let cities = ["Rome", "Lviv", "Warsaw"]; 
cities = cities.join('*');
console.log(cities);

//task5
let isAdult = prompt('How old are you?');
alert(isAdult >= 18 ? 'You have reached the age of majority' : 'You are still too young');

//task6
let a = Number(prompt('a'));
let b = Number(prompt('b'));
let c = Number(prompt('c'));
let p = (a+b+c)/2;
let areaTriangle = (Math.sqrt(p*(p-a)*(p-b)*(p-c))).toFixed(3);
if((a <=0 || Number.isNaN(a)) || (b <= 0 || Number.isNaN(b)) || (c <= 0 || Number.isNaN(c))) {
    alert('Incorrect data');
}  else if (a+b < c || a+c < b || b+c < a) {
    alert('It`s not a triangle');
}
    else {
    console.log(areaTriangle);
}
let arr = [a,b,c];
arr = arr.sort(function (a, b) {
    return a - b;
});
console.log(arr[2]**2 === arr[1]**2 + arr[0]**2 ? 'this is a right triangle': 'this is NOT a right triangle')
    
// task7
let actualDate = new Date();
let actualHours = (actualDate.getHours());

if(actualHours === 23 || actualHours <5) {
    alert('Доброї ночі');
} else if (actualHours >= 5 && actualHours < 11) {
    alert('Доброго ранку');
} else if (actualHours >= 11 && actualHours < 17) {
    alert('Доброго дня');
} else if (actualHours >= 17 && actualHours < 23) {
    alert('Доброго вечора');
}

switch (actualHours) {
    case 23:
    case 0:        
    case 1:
    case 2:
    case 3:
    case 4:
        alert('Доброї ночі');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert('Доброго ранку');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        alert('Доброго дня');
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        alert('Доброго вечора');
        break;
}
