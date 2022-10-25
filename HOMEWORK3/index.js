//task1
const arr = [2, 3, 4, 5];
let res = 1;
for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
}
console.log(res);

let i = 0;
while (i < arr.length) {
    res *= arr[i];
    i++;
}
console.log(res);

// task2
// for (let i = 0; i <= 15; i++) {
//     alert(i % 2 !== 0 ? i +' is odd' : i +' is even');
// }

//task 3
// let arr = [];
// function randArray(k) {
//     min = 1;
//     max = 500;
//     for (let i = 1; i <= k; i++) {
//         arr.push(Math.floor(Math.random() * (max - min +1) + min));
//  }
//  return arr;
// }
// randArray(4);
// console.log(arr);

//task 4
// function raiseToDegree(a,b) {
//     if(Number.isInteger(a) && Number.isInteger(b)) {   
//         return a**b 
//     } else {
//         alert('put a correct number')
//     }
// }
// let res = raiseToDegree(+prompt('put a'), +prompt('put b'))
// console.log(res);

//task 5
// let res = 0;
// function findMin() {
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < res) {
//             res = arguments[i];
//         }
//     }
//     return res;
// }
// findMin(12, 14, 4, -4, 0.2);
// console.log(res);

//task 6
// function findUnique(arr) {
//     arr.sort();
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === arr[i+1]) {
//             return false;
//         }
//     }
//     return true;        
// }   
// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

//task 6 (variant2)
// function findUnique(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr.includes(arr[i], i+1)){
//             return false;
//         } 
//     }
//     return true;
// }
//console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

//task 7
// newArr = [];
// function lastElem(arr,x) {
//     if(x === undefined) {
//         newArr = arr.slice(-1);
//     } else {
//         newArr = arr.slice(-x);
//     }    
//     return newArr;
// }
// console.log(lastElem([3, 4, 10, -5])); 
// console.log(lastElem([3, 4, 10, -5],2));
// console.log(lastElem([3, 4, 10, -5],8));

//task 8
// function toUppercase(str) {
//     let newStr = '';
//     for(let i = 1; i < str.length; i++) {
//         if (str[i] === ' ' && str[i+1] !== ' ') {
//             newStr = newStr + str[i] + str[i+1].toUpperCase();
//             i++;
//         }  else {
//             newStr += str[i];
//         }
//     }
//     return str[0].toUpperCase() + newStr;
// }
// console.log(toUppercase('i love java script'));