//task1
// function getPromise(message, delay) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve(message)
//         }, delay)
//     })
// }
// getPromise("test promise", 2000).then(function(data) {
//     console.log(data);	
// });

//task2
// function calcArrProduct(arr) {
//     return new Promise((resolve, reject)=> {
//         let arr2 = []
//         for(elem of arr) {
//             if(Number.isInteger(elem)) {
//                 arr2.push(elem)
//             } else if(isNaN(elem)){
//                 reject("Error! Incorrect array!")
//             }
//         }
//         if (arr2.length>0) {
//             let res = arr2.reduce((a,b)=> a*b)
//             resolve(res)  
//         }
//     })
// }
// calcArrProduct([3,4,5]).then(result => console.log(result));
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

//task3
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// function showNumbers() {
// 	let newPromise = Promise.resolve();	
// 	for (let i = 0; i < 10; i++) { 
// 		newPromise = newPromise.then(() => delay(i, Math.random() * 3000)) 
// 			 .then(() => console.log(i)); 			 
// 	}
// }
// showNumbers()

//task4
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
	for(let i=0; i<10; i++) {
		let time = Math.random()*(3000-0)+0;
		let res = await delay(i, time);
		console.log(res)
	}
}
showNumbers()