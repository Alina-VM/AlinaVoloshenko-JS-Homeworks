// task 1
// function calcRectangleArea(width, height) {
//     let rectangleArea = width*height;
//     if (isNaN(width) || isNaN(height)) {
//         throw new Error('Oops! Enter the correct value!');
//     } else if (width < 1 || height < 1) {
//         throw new Error('Oops! It can`t be a value!');
//     }
//     console.log(rectangleArea);
//     return rectangleArea;
// }
// try {
//     console.log(calcRectangleArea(prompt('Enter the width of the rectangle'), prompt('Enter the height of the rectangle')));
// } catch (e) {
//     console.log(e.stack);
// }

// task2
// function checkAge() {
//     let age = prompt('Enter your age, please');
//     if (age === '') {
//         throw new Error('Please, enter your age!');
//     } else if (isNaN(age)) {
//         throw new Error('Please, use correct numbers!');
//     } else if (age < 14) {
//         throw new Error('Sorry, You are not allowed to watch the movie!')
//     } 
//     alert('We wish you a pleasant viewing of the film');
//     return('We wish you a pleasant viewing of the film')
// }
// try {
//     checkAge();
// } catch (e) {
//     alert(e.name + ': ' + e.message);
// }

// task3
// class MonthException {
//     constructor(message) {
//         this.name = 'MonthException';
//         this.message = message;
//     }
// }
// function showMonthName(month) {
//     let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     try {
//         if (month < 1 || month > 12) {
//             throw new MonthException('Incorrect month number');
//         }
//     } catch(e) {
//         return e.name + ': ' + e.message;
//     }
    
//     return monthList[month-1];
// }
// console.log(showMonthName(18));

//task 4
function showUser(id) {    
    if (id < 0) {
        throw new Error('ID can`t be negative');
    }
    return {id: id};
}


function showUsers(ids) {
    let arrIDs = [];
    for (let i = 0; i < ids.length; i++) {        
        try { 
            arrIDs.push(showUser(ids[i]));    
        } catch (e) {
            alert(`${e.name}: ${e.message}: ${ids[i]} `);
        }
    }
    return arrIDs;
}
console.log(showUsers([7, -12, 44, 22]));
